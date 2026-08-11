# Component Gallery

Galería visual de componentes de interfaz construida con **Astro + TypeScript**, sin frameworks de UI ni dependencias de runtime. Muestra variantes de diseño (headers, cards…) y permite cambiar el **color principal** en vivo desde la propia web.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:4321
```

Otros comandos:

```bash
npm run build    # build estático en dist/
npm run preview  # sirve dist/
npm run check    # comprobación de tipos (astro check)
```

## Cómo funciona

### 1. Catálogo auto-descubierto

`src/lib/registry.ts` resuelve en build todos los `.astro` de `src/components/designs/**` con `import.meta.glob` (dos pasadas: componente + `?raw` para el panel de código). Las páginas nunca importan un diseño concreto ni encadenan condicionales: reciben la lista y renderizan.

```
src/components/designs/<categoria>/<Nombre><NN>.astro
```

`src/data/catalog.ts` es el único fichero de configuración: declara las categorías y, opcionalmente, el nombre/descripción/etiquetas de cada variante. Si una variante no tiene metadatos, se generan a partir del nombre del fichero.

### 2. Añadir una categoría nueva

```bash
mkdir src/components/designs/hero
# crea Hero01.astro, Hero02.astro…
```

Y en `src/data/catalog.ts`:

```ts
{ slug: 'hero', label: 'Hero', description: '…', code: 'HERO', order: 3 }
```

Nada más. Aparece en el sidebar, se genera su ruta `/hero/` y se listan sus variantes en orden natural (`Hero01`, `Hero02`, `Hero10`).

### 3. Color en vivo

El script inline del `Layout` (bloqueante, antes del primer pintado, para que no haya parpadeo) expone `window.__gallery` y **escribe una sola custom property**:

```js
document.documentElement.style.setProperty('--primary-color', hex);
```

El resto de tonos los deriva el CSS con `color-mix()`:

```css
--primary-hover: color-mix(in srgb, var(--primary-color) 82%, #000);
--primary-light: color-mix(in srgb, var(--primary-color) 12%, #fff);
--primary-soft:  color-mix(in srgb, var(--primary-color) 16%, transparent);
```

Se eligió esta estrategia frente a calcular las variantes en JavaScript porque:

- una sola fuente de verdad: no hay lógica de color duplicada en cada componente;
- `--primary-light` puede redefinirse por contexto (en tema oscuro se mezcla con la superficie oscura, no con blanco) sin tocar el JS;
- funciona igual si el color se fija por CSS, sin JavaScript.

La única excepción es `--primary-contrast` (el texto sobre el color elegido), que sí se calcula en JS por luminancia relativa WCAG: CSS todavía no tiene una función de contraste estable.

Preferencias de color, tema y ancho se guardan en `localStorage`.

### 4. Contrato de variables de los diseños

Ningún componente de `designs/` escribe un color literal fuera de este contrato, definido en `.preview-canvas` (`src/styles/global.css`) con valores para claro y oscuro:

```
--primary-color   --primary-hover   --primary-light   --primary-soft
--primary-contrast --primary-line
--background-color --surface-color  --surface-alt
--text-color      --text-muted      --border-color
--shadow-sm       --shadow-md       --shadow-lg
```

### 5. Previsualización responsive real

El lienzo es un **contenedor de consulta** (`container: preview / inline-size`) y los diseños usan `@container preview (max-width: …)` en lugar de `@media`. Así, al pulsar *Tablet* o *Móvil* en la barra superior, el componente se reordena de verdad aunque la ventana siga siendo ancha. Si copias un diseño a otro proyecto y no lo envuelves en un contenedor, cambia `@container preview` por `@media`.

## Estructura

```
src/
├── components/
│   ├── gallery/                 # la aplicación
│   │   ├── Sidebar.astro
│   │   ├── Topbar.astro
│   │   ├── ColorPicker.astro
│   │   ├── ThemeToggle.astro
│   │   ├── ViewportSwitcher.astro
│   │   ├── CategoryView.astro
│   │   └── ComponentPreview.astro
│   └── designs/                 # lo que se expone (nunca importa nada de gallery/)
│       ├── headers/Header01.astro · Header02.astro
│       └── cards/Card01.astro · Card02.astro
├── data/
│   ├── catalog.ts               # categorías + metadatos
│   └── sample.ts                # contenido de ejemplo
├── layouts/Layout.astro
├── lib/
│   ├── registry.ts              # auto-descubrimiento
│   └── types.ts
├── pages/
│   ├── index.astro              # primera categoría
│   └── [category].astro         # el resto
└── styles/global.css
```

## Detalles

- Sin imágenes remotas: los placeholders son degradados CSS teñidos con el color principal, así que no se rompen y reaccionan al selector.
- Tema claro/oscuro aplicado también al lienzo, para verificar que un diseño aguanta en ambos.
- Menú móvil del Header 02 con `<details>`: sin JavaScript.
- Accesibilidad: HTML semántico, `aria-current`, `aria-pressed`, `aria-expanded`, foco visible, enlace de salto y `prefers-reduced-motion`.
- Tipografía IBM Plex Sans/Mono desde Google Fonts con fallback al stack del sistema.
