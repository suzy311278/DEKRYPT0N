# DEKRIPT0N Conference Website

The official website for **DEKRIPT0N** — Asia's premier cybersecurity conference.

## Tech Stack

- **Vite** — fast dev server & build tool
- **React 18** + **TypeScript**
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — component library
- **React Router** — client-side routing

## Local Development

Requires **Node.js ≥ 18** and **npm**.

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/           # shadcn/ui primitives
│   ├── Hero.tsx       # Terminal-style hero with countdown
│   ├── Navigation.tsx # Top nav with theme toggle
│   ├── Services.tsx   # Featured speakers section
│   ├── Solutions.tsx  # Conference tracks
│   ├── WhyUs.tsx      # Why attend + stats
│   ├── Testimonials.tsx
│   ├── Contact.tsx    # Registration form + pricing
│   └── Footer.tsx
├── pages/            # Route pages
├── hooks/            # Custom React hooks
├── assets/           # Static assets
├── index.css         # Design system (color tokens, themes)
└── App.tsx           # Router + providers
```

## Theming

Two themes controlled via a toggle in the navbar:

| Mode  | Background     | Accent        |
|-------|---------------|---------------|
| Light | White (`#fafafa`) | Red (`hsl(0, 85%, 50%)`) |
| Dark  | Black (`#0a0a0a`) | Red (`hsl(0, 85%, 55%)`) |

Theme tokens are defined in `src/index.css` using CSS custom properties.

## Deployment

Build the production bundle and deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, etc.):

```bash
npm run build
```
