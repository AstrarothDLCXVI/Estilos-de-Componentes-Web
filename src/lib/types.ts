/**
 * Tipos del catálogo de diseños.
 *
 * `AstroComponent` se declara de forma laxa a propósito: importar el tipo
 * interno `AstroComponentFactory` acopla el proyecto a una ruta privada de
 * Astro que cambia entre versiones menores.
 */
export type AstroComponent = (...args: any[]) => any;

/** Categoría de la galería (Headers, Cards, Hero, Buttons...). */
export interface Category {
  /** Nombre de la carpeta dentro de `src/components/designs/`. */
  slug: string;
  /** Etiqueta visible en el sidebar. */
  label: string;
  /** Frase corta que describe la categoría. */
  description: string;
  /** Prefijo del identificador de cada variante: `HEADER 01`. */
  code: string;
  /** Orden en el sidebar (menor = antes). */
  order?: number;
  /**
   * Grupo de la taxonomía de "Páginas" al que pertenece (`'Landing page'`,
   * `'E-commerce'`...). Las categorías sin `group` son componentes sueltos y
   * se listan aparte, en "Componentes".
   */
  group?: string;
}

/** Metadatos opcionales de una variante concreta. */
export interface DesignMeta {
  name: string;
  description: string;
  tags?: string[];
}

/** Una variante ya resuelta: metadatos + componente + código fuente. */
export interface DesignEntry extends DesignMeta {
  /** Clave única: `headers/Header01`. */
  id: string;
  /** Identificador visible: `HEADER 01`. */
  code: string;
  categorySlug: string;
  fileName: string;
  component: AstroComponent;
  source: string;
}

/** Categoría con sus variantes resueltas. */
export interface CategoryEntry extends Category {
  designs: DesignEntry[];
}
