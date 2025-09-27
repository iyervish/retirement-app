# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 retirement planning application called "RetireWise" that provides personalized financial planning services. The app features a marketing landing page with interactive components for lead generation and retirement calculation forms.

## Key Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Inter (body text) and Fugaz One (display text)

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

The development server runs on http://localhost:3000.

## Architecture

### File Structure

- `src/app/` - Next.js App Router structure
  - `page.tsx` - Main homepage with all sections
  - `layout.tsx` - Root layout with fonts and metadata
  - `globals.css` - Global styles and design system
  - `components/` - Reusable React components
    - `TypewriterText.tsx` - Animated text transition component
    - `HeroCarousel.tsx` - Background image carousel

### Design System

The app uses a custom design system defined in `globals.css`:

- **Colors**: Forest green primary palette (#1B4332, etc.) with gold accents (#FFB627, etc.)
- **Typography**: CSS custom properties for consistent font sizes (--font-hero: 56px, etc.)
- **Spacing**: 8px grid system (--space-1: 4px through --space-32: 128px)

### Key Components

- **TypewriterText**: Client component that animates text transitions with delete/type effects
- **HeroCarousel**: Auto-cycling background image carousel with indicators
- **Form handling**: Currency formatting utility functions and controlled inputs

### Styling Patterns

- Uses CSS custom properties extensively for design tokens
- Tailwind CSS classes combined with custom utility classes like `.btn-primary`, `.hero-text`
- Responsive design with mobile-first approach
- Custom animations and transitions for interactive elements

## Important Notes

- All interactive components use `'use client'` directive
- Form submission currently shows alert dialog (placeholder for backend integration)
- Images referenced in components should be placed in `/public/` directory
- The app uses Next.js font optimization with Google Fonts