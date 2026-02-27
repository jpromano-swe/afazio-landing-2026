# Afazio Landing

Landing web para Traductora Pública de Inglés, desarrollada con Next.js (App Router), TypeScript y una estética editorial.

## Tecnologías

- Next.js 15
- React 19
- TypeScript
- pnpm 10

## Requisitos

- Node.js `>=18.18`
- pnpm `10.x`

> El proyecto fija versión de package manager en `package.json`:
> `packageManager: pnpm@10.12.1`

## Comandos

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
pnpm start
```

## Estructura

- `app/page.tsx`: composición de secciones (Hero, Perfil, Servicios, Contacto, Footer)
- `app/globals.css`: estilos globales, breakpoints y animaciones
- `components/site-header.tsx`: header fijo + modo compacto en scroll
- `components/service-detail-switcher.tsx`: selector de servicios
- `components/logo-cloud.tsx`: carrusel de marcas
- `components/contact-composer.tsx`: formulario + mensajes automáticos de WhatsApp/Mail
- `components/animated-quote.tsx`: animación letra a letra del manifiesto

## Contenido editable

- Servicios:
  - `classServices` en `app/page.tsx`
  - `translationServices` en `app/page.tsx`
- Marcas:
  - `logos` en `app/page.tsx`
- Contacto:
  - `CONTACT_PHONE`, `CONTACT_EMAIL`, `CONTACT_LINKEDIN` en `app/page.tsx`
- Mensajes automáticos:
  - `components/contact-composer.tsx`

## Responsive

Breakpoints implementados:

- `<= 1280px`
- `<= 1024px`
- `<= 768px`
- `<= 480px`

Offset de navegación por anchors (header fijo):

- variable `--anchor-offset` en `app/globals.css`

## Deploy en Vercel

1. Push a `main`
2. Importar repo en Vercel
3. Framework: Next.js (auto)
4. Build command: `pnpm build` (auto)
5. Install command: `pnpm install --frozen-lockfile` (auto)

Si Vercel detecta pnpm incorrecto, verificar:

- `packageManager` en `package.json`
- lockfile presente (`pnpm-lock.yaml`)

## Assets

- `public/logo-placeholder.png`
- `public/logo-placeholder-removebg-preview.png`
- `public/.well-known/appspecific/com.chrome.devtools.json`
