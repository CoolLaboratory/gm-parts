/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GMAIL_USERNAME: string
  readonly VITE_GMAIL_PASSWORD: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}