import type { Category, DesignMeta } from '@/lib/types';

/**
 * ÚNICO fichero que hay que tocar para ampliar la galería.
 *
 * 1. Crea la carpeta `src/components/designs/<slug>/`.
 * 2. Añade dentro tus `.astro` (Hero01.astro, Hero02.astro...).
 * 3. Declara la categoría aquí. Los metadatos de cada variante son opcionales:
 *    si no existen se generan a partir del nombre del fichero.
 */
export const categories: Category[] = [
  {
    slug: 'headers',
    label: 'Headers',
    description: 'Barras de navegación superiores, del clásico minimalista al flotante.',
    code: 'HEADER',
    order: 1,
  },
  {
    slug: 'cards',
    label: 'Cards',
    description: 'Tarjetas de contenido: rejillas editoriales y composiciones con overlay.',
    code: 'CARD',
    order: 2,
  },
  {
    slug: 'hero',
    label: 'Hero',
    description: 'Primeras pantallas: la promesa del producto en una sola vista.',
    code: 'HERO',
    order: 3,
  },
  {
    slug: 'buttons',
    label: 'Buttons',
    description: 'Escala de acciones completa y variantes con micro-interacción.',
    code: 'BUTTON',
    order: 4,
  },
  {
    slug: 'forms',
    label: 'Forms',
    description: 'Formularios de acceso y hoja de estados de campo: reposo, error, válido.',
    code: 'FORM',
    order: 5,
  },
  {
    slug: 'footers',
    label: 'Footers',
    description: 'Pies de página: rejilla de enlaces completa y barra minimalista con newsletter.',
    code: 'FOOTER',
    order: 6,
  },
];

/**
 * Metadatos por variante, indexados por `<slug>/<NombreFichero>`.
 * Todo lo que no esté aquí usa valores por defecto derivados del nombre.
 */
export const designMeta: Record<string, DesignMeta> = {
  'headers/Header01': {
    name: 'Navegación centrada',
    description:
      'Logo a la izquierda, menú centrado y par de acciones a la derecha. Fondo plano y una única línea divisoria: encaja en casi cualquier producto.',
    tags: ['Minimalista', 'Sticky', 'SaaS'],
  },
  'headers/Header02': {
    name: 'Barra flotante',
    description:
      'Pill redondeada suspendida sobre una banda teñida con el color principal. Menú con estado activo relleno, acceso secundario y CTA con flecha.',
    tags: ['Flotante', 'Con menú móvil', 'Marketing'],
  },
  'cards/Card01': {
    name: 'Tarjeta editorial',
    description:
      'Composición vertical clásica: media arriba, categoría, título, resumen y pie con autor. Pensada para listados de blog o recursos.',
    tags: ['Vertical', 'Blog', 'Rejilla de 3'],
  },
  'cards/Card02': {
    name: 'Tarjeta con overlay',
    description:
      'Media a sangre completa con el contenido superpuesto sobre un degradado. Badge de estado y botón circular; el texto se revela al pasar el cursor.',
    tags: ['Overlay', 'Hover', 'Portfolio'],
  },
  'hero/Hero01': {
    name: 'Hero dividido con panel',
    description:
      'Texto a la izquierda y panel de métricas a la derecha, construido íntegramente con CSS. Doble CTA y prueba social bajo los botones.',
    tags: ['Dos columnas', 'Con datos', 'SaaS'],
  },
  'hero/Hero02': {
    name: 'Hero centrado con captura',
    description:
      'Composición centrada sobre rejilla desvanecida y halo del color principal. Anuncio superior, titular con trazo de acento y formulario de alta en línea.',
    tags: ['Centrado', 'Formulario', 'Landing'],
  },
  'buttons/Button01': {
    name: 'Escala de botones',
    description:
      'La misma acción en sus cuatro jerarquías, tres tamaños y estados con icono, carga y deshabilitado. Es la hoja que se consulta al implementar.',
    tags: ['Sistema', 'Estados', 'Accesible'],
  },
  'buttons/Button02': {
    name: 'Botones expresivos',
    description:
      'Cuatro micro-interacciones sobre el mismo color: relleno que barre, borde degradado, relieve con sombra sólida y flecha que sale y vuelve a entrar.',
    tags: ['Hover', 'Animación', 'Marketing'],
  },
  'headers/Header03': {
    name: 'Barra oscura con buscador',
    description:
      'Navegación siempre en modo oscuro con campo de búsqueda con atajo de teclado, notificaciones y avatar. Pensada para el interior de una aplicación.',
    tags: ['Oscuro', 'Buscador', 'App'],
  },
  'cards/Card03': {
    name: 'Tarjeta de equipo',
    description:
      'Retrato con iniciales teñido por degradado, rol destacado en el color principal y enlaces sociales bajo una línea divisoria.',
    tags: ['Perfil', 'Rejilla de 3', 'Equipo'],
  },
  'hero/Hero03': {
    name: 'Hero oscuro con mockup de producto',
    description:
      'Titular centrado sobre halo de color y una ventana de navegador construida en CSS con pestañas y filas de métricas. Sin capturas de pantalla reales.',
    tags: ['Oscuro', 'Producto', 'Centrado'],
  },
  'buttons/Button03': {
    name: 'Icono, flotante y segmentado',
    description:
      'Formatos que no caben en la escala de jerarquías: botones de sólo icono, un FAB con sombra elevada, un grupo segmentado interactivo y contadores.',
    tags: ['Icono', 'FAB', 'Segmentado'],
  },
  'forms/Form01': {
    name: 'Formulario de acceso',
    description:
      'Tarjeta de login con acceso social, divisor y campos de correo y contraseña con foco realzado. Composición lista para pegar en una página de auth.',
    tags: ['Login', 'Social', 'Tarjeta'],
  },
  'forms/Form02': {
    name: 'Hoja de estados de campo',
    description:
      'Los seis estados que necesita cualquier formulario: reposo, foco, error con mensaje, válido, deshabilitado y textarea. Se consulta al implementar.',
    tags: ['Sistema', 'Validación', 'Accesible'],
  },
  'footers/Footer01': {
    name: 'Footer con rejilla de enlaces',
    description:
      'Marca y redes sociales a la izquierda, tres columnas de enlaces a la derecha y barra inferior con copyright y avisos legales.',
    tags: ['Rejilla', 'Marketing', 'Completo'],
  },
  'footers/Footer02': {
    name: 'Footer minimalista con newsletter',
    description:
      'Una sola barra con marca, navegación y alta a la newsletter; línea inferior compacta con copyright y redes. Para páginas de producto sobrias.',
    tags: ['Minimalista', 'Newsletter', 'Compacto'],
  },
};
