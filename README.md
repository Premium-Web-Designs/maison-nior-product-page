# Maison Noir — Black Polo Product Experience

A luxury fashion e-commerce concept built around a black polo shirt. Maison Noir pairs cinematic product imagery with editorial typography, scroll-driven motion, and a restrained shopping interface to present an everyday essential with a premium point of view.

This repository contains a **design and interaction demo** created for portfolio and experimentation purposes.

## Highlights

- Cinematic, scroll-driven product film built from a WebP frame sequence
- Editorial product storytelling and minimalist layouts
- Motion-led transitions and reveal effects
- Product details and purchase-focused interface
- Responsive presentation for different screen sizes
- Reduced-motion-aware animation patterns

## Tech Stack

- **TanStack Start**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vite**
- **Motion / CSS-based animation**
- **Bun** lockfile included

## Run Locally

### Requirements

Install a recent version of [Node.js](https://nodejs.org/) and npm, or install [Bun](https://bun.sh/).

### 1. Clone the repository

```bash
git clone https://github.com/Premium-Web-Designs/maison-nior-product-page.git
cd maison-nior-product-page
```

### 2. Install dependencies

With npm:

```bash
npm install
```

Or with Bun:

```bash
bun install
```

### 3. Start the development server

With npm:

```bash
npm run dev
```

Or with Bun:

```bash
bun run dev
```

Open the local URL printed in your terminal (Vite commonly uses `http://localhost:5173`).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Build using development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
├── components/
│   ├── BrandStatement.tsx
│   ├── MotionScene.tsx
│   ├── Preloader.tsx
│   ├── Purchase.tsx
│   ├── Reveal.tsx
│   ├── ScrollSequence.tsx
│   ├── SiteFooter.tsx
│   └── Story.tsx
├── hooks/
└── lib/
public/
└── frames/   # WebP frames used by the product film
```

## Concept

The goal is to show how visual storytelling, thoughtful motion, and clear product presentation can make a simple apparel product feel considered and distinctive—without overwhelming the shopping experience.

## Disclaimer

Maison Noir is an independent concept project for design and development demonstration. It is not an official website or an endorsement by any real-world fashion brand. Product visuals and interface elements are presented as part of the concept.

## Created by

**FORK.ai Lab**  
AI Automation · SaaS · Premium Websites

GitHub: [Premium-Web-Designs](https://github.com/Premium-Web-Designs)
