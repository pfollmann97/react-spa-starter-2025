// Yup setup has to be imported before the App
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {createRoot} from 'react-dom/client';

import '@shared/setup/yupV8nMessages';
import '../i18n';
import App from './App';

/* eslint-disable-next-line unicorn/prefer-query-selector */
const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
