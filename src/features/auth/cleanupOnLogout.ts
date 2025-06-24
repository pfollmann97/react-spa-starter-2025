import {queryClient} from '@shared/setup';
import {remAuthTokenFromLocalStorage} from './helpers/localStorage';

export const clearOnLogout = (): void => {
  queryClient.clear();
  remAuthTokenFromLocalStorage();
};
