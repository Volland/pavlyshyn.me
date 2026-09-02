import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pavlyshyn.me',
  base: '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
