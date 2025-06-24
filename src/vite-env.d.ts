/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL: string | undefined;
  readonly VITE_PUBLIC_PATH: string | undefined;
  readonly VITE_APP_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
