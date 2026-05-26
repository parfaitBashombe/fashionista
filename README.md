# Fashionista

A fashion e-commerce showcase built with React 19, TypeScript, Vite, and Tailwind CSS v4. Deployed on Vercel.

## Features

- Browse curated collections (summer, winter, formal, streetwear)
- Add and remove items from a persistent shopping cart
- Cart state preserved via localStorage across sessions
- Toast notifications with auto-dismiss
- Scroll-to-top on every route change
- Custom 404 page

## Pages

| Route | Description |
|---|---|
| `/` | Home / landing page |
| `/collections` | All collections grid |
| `/collections/:id` | Individual collection with products |
| `/about` | About page |
| `/contact` | Contact page |

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router v7
- Google Fonts (Playfair Display + Inter)

## Project Structure

```
src/
  components/    # Navbar, Footer, CartDrawer, ProductCard, Toast, etc.
  context/       # CartContext and ToastContext
  data/          # Hardcoded collections and product data
  pages/         # One file per route
  types/         # Shared TypeScript types (type.d.ts)
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
