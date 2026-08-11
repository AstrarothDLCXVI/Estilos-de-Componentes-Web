/**
 * Contenido de ejemplo compartido por los diseños.
 * Mantenerlo fuera de los `.astro` permite que cada variante se centre en
 * la maquetación y que dos diseños distintos se comparen con el mismo texto.
 */

export interface NavItem {
  label: string;
  href: string;
  current?: boolean;
}

export const navItems: NavItem[] = [
  { label: 'Producto', href: '#', current: true },
  { label: 'Precios', href: '#' },
  { label: 'Documentación', href: '#' },
  { label: 'Blog', href: '#' },
];

export interface ArticleCard {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  initials: string;
  readingTime: string;
  /** Tono del degradado del media: 0 = frío, 1 = cálido. */
  tone: number;
}

export const articles: ArticleCard[] = [
  {
    category: 'Ingeniería',
    title: 'Migrar un panel de control a islas de Astro',
    excerpt:
      'Qué partes de la interfaz merecen hidratarse y cuáles pueden quedarse en HTML puro sin perder interactividad.',
    author: 'Nerea Salas',
    initials: 'NS',
    readingTime: '6 min',
    tone: 0,
  },
  {
    category: 'Diseño',
    title: 'Un sistema de color que aguanta el modo oscuro',
    excerpt:
      'Derivar tonos con color-mix() en lugar de mantener dos paletas a mano y duplicar cada decisión.',
    author: 'Iván Bermúdez',
    initials: 'IB',
    readingTime: '4 min',
    tone: 0.5,
  },
  {
    category: 'Producto',
    title: 'Medir la primera semana de uso, no el registro',
    excerpt:
      'La métrica de activación que usamos internamente y por qué dejamos de mirar el número de altas.',
    author: 'Clara Ferrer',
    initials: 'CF',
    readingTime: '8 min',
    tone: 1,
  },
];

export interface ShowcaseCard {
  badge: string;
  title: string;
  meta: string;
  excerpt: string;
  tone: number;
}

export const showcase: ShowcaseCard[] = [
  {
    badge: 'Caso de estudio',
    title: 'Rediseño del portal de reservas',
    meta: 'Hostelería · 2026',
    excerpt: 'Tres pasos menos en el flujo de pago y un 18 % más de reservas completadas.',
    tone: 0,
  },
  {
    badge: 'En curso',
    title: 'Plataforma interna de turnos',
    meta: 'Salud · 2026',
    excerpt: 'Fichaje con geolocalización y cuadrantes que cruzan la medianoche sin romperse.',
    tone: 0.6,
  },
  {
    badge: 'Archivado',
    title: 'Catálogo mayorista headless',
    meta: 'Retail · 2025',
    excerpt: 'Doce mil referencias servidas como estático con búsqueda en cliente.',
    tone: 1,
  },
];

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
  /** Tono del degradado del avatar: 0 = frío, 1 = cálido. */
  tone: number;
}

export const team: TeamMember[] = [
  {
    name: 'Marta Iglesias',
    role: 'Diseño de producto',
    initials: 'MI',
    bio: 'Sistemas de diseño y prototipado. Antes en un estudio de identidad de marca.',
    tone: 0,
  },
  {
    name: 'Diego Correa',
    role: 'Ingeniería frontend',
    initials: 'DC',
    bio: 'Rendimiento y accesibilidad. Mantiene la mitad de los componentes compartidos.',
    tone: 0.5,
  },
  {
    name: 'Sara Peña',
    role: 'Investigación de usuarios',
    initials: 'SP',
    bio: 'Entrevistas y pruebas de usabilidad cada dos semanas con clientes reales.',
    tone: 1,
  },
];

export interface FooterColumn {
  title: string;
  links: string[];
}

export const footerColumns: FooterColumn[] = [
  { title: 'Producto', links: ['Funciones', 'Integraciones', 'Precios', 'Novedades'] },
  { title: 'Compañía', links: ['Sobre nosotros', 'Blog', 'Empleo', 'Contacto'] },
  { title: 'Recursos', links: ['Documentación', 'Guías', 'Comunidad', 'Estado del servicio'] },
];
