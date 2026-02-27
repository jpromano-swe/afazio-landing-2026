# Afazio Landing

Landing page para una Traductora Pública de Inglés, construida con Next.js (App Router) y un enfoque editorial limpio.

## Stack

- Next.js 15
- React 19
- TypeScript
- CSS global (`/app/globals.css`)
- pnpm

## Scripts

```bash
pnpm dev
pnpm lint
pnpm build
pnpm start
```

## Estructura Principal

- `/Users/juanpabloromano/Documents/Projects/afazio-landing/app/page.tsx`
  - Secciones: Hero, Perfil (manifiesto), Servicios, Contacto, Footer.
- `/Users/juanpabloromano/Documents/Projects/afazio-landing/app/globals.css`
  - Sistema visual, responsive y animaciones.
- `/Users/juanpabloromano/Documents/Projects/afazio-landing/components/site-header.tsx`
  - Header fijo con estado compacto al hacer scroll.
- `/Users/juanpabloromano/Documents/Projects/afazio-landing/components/service-detail-switcher.tsx`
  - Selector interactivo de servicios.
- `/Users/juanpabloromano/Documents/Projects/afazio-landing/components/logo-cloud.tsx`
  - Carrusel de marcas con animación continua.
- `/Users/juanpabloromano/Documents/Projects/afazio-landing/components/contact-composer.tsx`
  - Formulario de contacto con links automáticos de WhatsApp y Mail.
- `/Users/juanpabloromano/Documents/Projects/afazio-landing/components/animated-quote.tsx`
  - Animación letra por letra del manifiesto.

## Contenido Editable Rápido

### Hero

Editar claim principal y roles en:
- `/Users/juanpabloromano/Documents/Projects/afazio-landing/app/page.tsx`

### Servicios

Editar items y descripciones en:
- `/Users/juanpabloromano/Documents/Projects/afazio-landing/app/page.tsx`
  - `classServices`
  - `translationServices`

### Marcas

Editar lista de marcas (texto/logo) en:
- `/Users/juanpabloromano/Documents/Projects/afazio-landing/app/page.tsx`
  - `logos`

### Contacto

Editar teléfono/email/LinkedIn en:
- `/Users/juanpabloromano/Documents/Projects/afazio-landing/app/page.tsx`
  - `CONTACT_PHONE`
  - `CONTACT_EMAIL`
  - `CONTACT_LINKEDIN`

El mensaje automático de WhatsApp/Mail se genera en:
- `/Users/juanpabloromano/Documents/Projects/afazio-landing/components/contact-composer.tsx`

## Responsive

Breakpoints base configurados:

- `<= 1280px`
- `<= 1024px`
- `<= 768px`
- `<= 480px`

Anchor offset para navegación interna con header fijo:
- variable `--anchor-offset` en `/Users/juanpabloromano/Documents/Projects/afazio-landing/app/globals.css`

## Assets

Logos en:
- `/Users/juanpabloromano/Documents/Projects/afazio-landing/public/logo-placeholder.png`
- `/Users/juanpabloromano/Documents/Projects/afazio-landing/public/logo-placeholder-removebg-preview.png`

## Notas

- El endpoint `/.well-known/appspecific/com.chrome.devtools.json` está incluido para evitar logs 404 de DevTools.
- Archivo:
  - `/Users/juanpabloromano/Documents/Projects/afazio-landing/public/.well-known/appspecific/com.chrome.devtools.json`
