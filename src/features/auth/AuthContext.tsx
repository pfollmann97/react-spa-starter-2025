import React, {createContext, FC, useCallback, useMemo, useState} from 'react';
import useMount from 'ahooks/es/useMount';

import {User} from '@entities/user';
import {
  getAuthTokenFromLocalStorage,
  setAuthTokenInLocalStorage,
} from './helpers/localStorage';
import {getCurrentUser, login as loginApiMethod} from './api';
import {clearOnLogout} from './cleanupOnLogout';

const isAuthed = (): boolean => !!getAuthTokenFromLocalStorage();

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  currentUser: null,
};

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  ...initialAuthState,
  login: () => Promise.resolve(),
  logout: () => {},
});

export const AuthProvider: FC<React.PropsWithChildren> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  const getLoggedInUser = useCallback(async () => {
    let user: User | null = null;
    try {
      user = await getCurrentUser();
    } catch (err) {
      console.error('could not get the current user');
      return;
    }

    setCurrentUser(user);
    setIsAuthenticated(true);
  }, []);

  const login = useCallback(
    async (email: string, password: string) => {
      const authToken = await loginApiMethod(email, password);
      setAuthTokenInLocalStorage(authToken);
      return getLoggedInUser();
    },
    [getLoggedInUser],
  );

  const logout = useCallback(() => {
    clearOnLogout();
    setIsAuthenticated(false);
    setCurrentUser(null);
  }, []);

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      currentUser,
      login,
      logout,
    }),
    [isAuthenticated, login, logout, currentUser],
  );

  useMount(() => {
    if (isAuthed()) {
      void getLoggedInUser().then(() => {
        setInitializing(false);
        return;
      });
    } else {
      setInitializing(false);
    }
  });

  if (initializing) {
    return null;
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
