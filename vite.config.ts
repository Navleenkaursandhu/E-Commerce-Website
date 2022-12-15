import { defineConfig } from 'vite'
import {checker} from 'vite-plugin-checker'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: "eslint --config .eslintrc.cjs --max-warnings=0 \"src/**/*.{js,jsx,ts,tsx}\""
      }
    })
  ]
})
