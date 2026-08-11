/// <reference types="astro/client" />

/** API mínima expuesta por el script inline del Layout (ver Layout.astro). */
interface GalleryClient {
  applyPrimary(hex: string, persist?: boolean): void;
  applyTheme(theme: 'light' | 'dark', persist?: boolean): void;
  applyViewport(viewport: 'desktop' | 'tablet' | 'mobile', persist?: boolean): void;
  read(key: 'color' | 'theme' | 'viewport'): string | null;
}

interface Window {
  __gallery: GalleryClient;
}
