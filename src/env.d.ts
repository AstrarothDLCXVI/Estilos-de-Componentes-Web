/// <reference types="astro/client" />

/** API mínima expuesta por el script inline del Layout (ver Layout.astro). */
interface GalleryClient {
  applyPrimary(hex: string, persist?: boolean): void;
  applyTheme(theme: 'light' | 'dark', persist?: boolean): void;
  applyViewport(viewport: 'desktop' | 'tablet' | 'mobile', persist?: boolean): void;
  applyStyle(
    style: 'default' | 'modern' | 'corporate' | 'editorial' | 'luxury' | 'elegant' | 'aurora' | 'glass' | 'arcade',
    persist?: boolean,
  ): void;
  read(key: 'color' | 'theme' | 'viewport' | 'style'): string | null;
}

interface Window {
  __gallery: GalleryClient;
}
