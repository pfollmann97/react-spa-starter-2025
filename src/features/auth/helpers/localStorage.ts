//===================================================================
// Auth Token

const KEY__AUTH_TOKEN = 'authToken';

export const getAuthTokenFromLocalStorage = (): string | null =>
  localStorage.getItem(KEY__AUTH_TOKEN);

export const setAuthTokenInLocalStorage = (token: string): void =>
  localStorage.setItem(KEY__AUTH_TOKEN, token);

export const remAuthTokenFromLocalStorage = (): void =>
  localStorage.removeItem(KEY__AUTH_TOKEN);

// Auth Token
//===================================================================

//*******************************************************************
// Url to go after login

const KEY__URL_TO_GO_AFTER_LOGIN = 'urlToGoAfterLogin';

export const getUrlToGoAfterLoginFromLocalStorage = (): string | null =>
  localStorage.getItem(KEY__URL_TO_GO_AFTER_LOGIN);

export const setUrlToGoAfterLoginInLocalStorage = (url: string): void =>
  localStorage.setItem(KEY__URL_TO_GO_AFTER_LOGIN, url);

export const remUrlToGoAfterLoginFromLocalStorage = (): void =>
  localStorage.removeItem(KEY__URL_TO_GO_AFTER_LOGIN);

// Url to go after login
//*******************************************************************
