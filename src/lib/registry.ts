import { categories, designMeta } from '@/data/catalog';
import type { AstroComponent, CategoryEntry, DesignEntry } from '@/lib/types';

/**
 * Auto-descubrimiento de diseños.
 *
 * `import.meta.glob` (Vite, eager) resuelve en build todos los `.astro` de
 * `components/designs/`. Añadir una variante = soltar un fichero en su carpeta;
 * no hay que registrar nada en la página ni encadenar condicionales.
 *
 * Se hacen dos globs sobre el mismo patrón: uno devuelve el componente
 * renderizable y otro el código fuente (`?raw`) para el panel "Ver código".
 */
const componentModules = import.meta.glob<{ default: AstroComponent }>(
  '../components/designs/**/*.astro',
  { eager: true },
);

const sourceModules = import.meta.glob<string>('../components/designs/**/*.astro', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const PATH_PATTERN = /designs\/([^/]+)\/([^/]+)\.astro$/;

/** `Header01` -> `Header 01`; si no hay dígitos, se usa el índice. */
function buildCode(prefix: string, fileName: string, index: number): string {
  const digits = fileName.match(/(\d+)$/)?.[1];
  return `${prefix} ${digits ?? String(index + 1).padStart(2, '0')}`;
}

/** `Header01` -> `Header 01` (fallback de nombre legible). */
function humanize(fileName: string): string {
  return fileName.replace(/([a-z])(\d)/gi, '$1 $2').replace(/([a-z])([A-Z])/g, '$1 $2');
}

function collectDesigns(categorySlug: string, codePrefix: string): DesignEntry[] {
  return Object.keys(componentModules)
    .map((path) => ({ path, match: path.match(PATH_PATTERN) }))
    .filter((item) => item.match?.[1] === categorySlug)
    .sort((a, b) => a.path.localeCompare(b.path, 'en', { numeric: true }))
    .map((item, index) => {
      const fileName = item.match![2];
      const id = `${categorySlug}/${fileName}`;
      const meta = designMeta[id];

      return {
        id,
        categorySlug,
        fileName,
        code: buildCode(codePrefix, fileName, index),
        name: meta?.name ?? humanize(fileName),
        description: meta?.description ?? 'Sin descripción todavía.',
        tags: meta?.tags ?? [],
        component: componentModules[item.path].default,
        source: sourceModules[item.path] ?? '',
      } satisfies DesignEntry;
    });
}

/** Catálogo completo: categorías declaradas + variantes encontradas en disco. */
export const catalog: CategoryEntry[] = categories
  .slice()
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
  .map((category) => ({ ...category, designs: collectDesigns(category.slug, category.code) }))
  .filter((category) => category.designs.length > 0);

export function getCategory(slug: string): CategoryEntry | undefined {
  return catalog.find((category) => category.slug === slug);
}

export const defaultCategory: CategoryEntry | undefined = catalog[0];

export const totalDesigns: number = catalog.reduce((sum, c) => sum + c.designs.length, 0);

/**
 * La primera categoría vive en `/` y el resto en `/<slug>/`, así no se genera
 * la misma página dos veces ni hace falta una redirección.
 */
export function hrefFor(slug: string): string {
  return slug === defaultCategory?.slug ? '/' : `/${slug}/`;
}
