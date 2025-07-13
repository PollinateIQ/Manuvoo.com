# Architecture

The project is a **Next.js 15 App Router** application styled with **Tailwind CSS 4**.

## Project Structure (high-level)

```
src/
  app/                → Route segments (Next.js App Router)
  components/         → Shared UI components and landing page widgets
  lib/                → Reusable util functions (TBD)
  styles/             → Global styles & Tailwind config
project-docs/         → Documentation (this folder)
```

### Pages & Routes
- `src/app/(root)/page.tsx` – Home/landing
- `src/app/services/page.tsx` – Services page
- `src/app/how-it-works/page.tsx` – How-It-Works page
- `src/app/about/page.tsx` – About page

### Key Components
- `dual-hero.tsx` – Two-state hero section with auto-rotation
- `header.tsx` – Responsive navigation bar
- `footer.tsx` – Site footer

### Styling Conventions
- Tailwind utility-first classes
- Gradients & glassmorphism for modern feel
- Custom animations via Tailwind `@layer utilities`
