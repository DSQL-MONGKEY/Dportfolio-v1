/// <reference types="vite/client" />

interface ImportMetaEnv {
   readonly VITE_APP_SANITY_PROJECT_ID: string
   readonly VITE_APP_SANITY_TOKEN: string
}

interface ImportMeta {
   readonly env: ImportMetaEnv
}
