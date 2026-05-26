# Fashionista

Fashionista is a fashion e-commerce single-page application built as a portfolio project. It showcases a modern brand experience with curated seasonal and lifestyle collections, a fully functional shopping cart, and a polished UI — all without a backend.

Live site: deployed on Vercel.

---

## Overview

The site presents six collections of clothing and accessories, each containing six to eight individual products. Visitors can browse collections, add items to a persistent cart, and read about the brand. The cart survives page refreshes and browser sessions through localStorage.

---

## Collections

| Collection | Description |
|---|---|
| Summer | Breezy, bold, and vibrant fashion for sunny days |
| Winter | Warm, cozy, and stylish essentials for the cold season |
| Formal | Elegant designs for a bold, professional look |
| Streetwear | Casual, trendy, and urban-inspired outfits |
| Athletic | Performance-driven sportswear for an active lifestyle |
| Accessories | The perfect finishing touch for every outfit |

---

## Pages

**Home (`/`)**
Full-screen video hero with animated headline, CTA buttons, and a live stats bar. Below the fold: a collections preview grid, a "Why Us" feature grid (quality, shipping, returns, support), a handpicked featured products row, an about teaser with a collection image mosaic, and a newsletter sign-up section.

**Collections (`/collections`)**
A grid of all six collection cards. Each card links through to the individual collection page.

**Collection detail (`/collections/:id`)**
Displays the collection's products as a responsive card grid. Each product card shows the image, name, price, and an "Add to Cart" button that triggers a toast confirmation.

**About (`/about`)**
Brand story section, three core values (Sustainability, Creativity, Inclusivity), a mission statement banner, a team section with three profiles, a clickable collection image mosaic, and a newsletter section.

**Contact (`/contact`)**
Contact form and brand information.

---

## Features

**Shopping cart**
- Managed via React Context with a `useReducer` pattern
- Supports add, remove, update quantity, and clear actions
- Item count and total are derived and exposed via context
- State is persisted to localStorage on every change and rehydrated on load
- Accessible from anywhere via the `useCart()` hook
- Sliding cart drawer opened from the navbar

**Toast notifications**
- Managed via a separate React Context
- Auto-dismiss after 3.5 seconds
- Accessible via `useToast()` hook

**Routing**
- Client-side routing with React Router v7
- `ScrollToTop` component resets scroll position on every route change
- Dedicated 404 page on the `*` route
- Vercel configured with a filesystem-first route fallback so hard refreshes on any route work correctly

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 |
| Language | TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| Fonts | Google Fonts — Playfair Display (serif headings) + Inter (body) |
| Deployment | Vercel |

---

## Project Structure

```
src/
  components/
    navbar.tsx          # Top nav with cart icon and item count badge
    cart-drawer.tsx     # Sliding cart panel
    collection-card.tsx # Single collection thumbnail card
    collection-grid.tsx # Grid of all collection cards
    product-card.tsx    # Product image, name, price, add-to-cart button
    footer.tsx
    toast.tsx           # Toast notification renderer
    scroll-to-top.tsx   # Resets scroll on route change

  context/
    cart-context.tsx    # CartProvider, cartReducer, useCart hook
    toast-context.tsx   # ToastProvider, useToast hook

  data/
    db.ts               # All collection and product data (source of truth)
    collections.ts      # Re-exports from db.ts for backwards compatibility

  pages/
    home.tsx
    colletions.tsx      # Collections listing page
    collection.tsx      # Single collection detail page
    about.tsx
    contact.tsx
    not-found.tsx

  types/
    type.d.ts           # Shared TypeScript types (Collection, Product, etc.)
```

All product and collection data lives in `src/data/db.ts`. Types are consolidated in `src/types/type.d.ts`. To add a product, update `db.ts` and add the image to `public/`. No other files need to change.

---

## Getting Started

```bash
pnpm install
pnpm dev
```

The dev server starts at `http://localhost:5173`.

```bash
pnpm build    # production build → dist/
pnpm preview  # preview the production build locally
```
