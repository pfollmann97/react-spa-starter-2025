import {clearOnLogout} from '@features/auth';
import axios, {isAxiosError} from 'axios';

export const axi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axi.interceptors.request.use(function (config) {
  config.headers['x-api-key'] = 'reqres-free-v1';
  return config;
});

axi.interceptors.response.use(
  response => response,
  (error: unknown) => {
    if (!isAxiosError(error)) {
      throw error;
    }

    const resp = error.response;

    if (resp?.status === 401) {
      // TODO shared uses code from feature. That conflicts with FSD.
      clearOnLogout();
      window.location.reload();
    }

    throw error;
  },
);
