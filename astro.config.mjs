// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Sitio 100% estático: no hace falta ni SSR ni integraciones de framework.
  output: 'static',
  devToolbar: { enabled: false },
  build: {
    // Un único CSS por página en lugar de decenas de <style> inline.
    inlineStylesheets: 'never',
  },
});
