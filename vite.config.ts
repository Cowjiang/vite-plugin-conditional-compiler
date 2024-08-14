import { defineConfig } from 'vite'

export default defineConfig(async () => ({
  plugins: [],
  test: {
    root: './src',
    globals: true,
  }
}))
