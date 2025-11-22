# Bolt.new Inspired App

A modern web application with supporting sections built with React, TypeScript, and Vite.

## Features

- **Hero Section**: Eye-catching landing section with gradient text and CTA buttons
- **Features Grid**: Showcases 6 key features in a responsive grid layout
- **Metrics & Testimonials**: Displays important metrics and user testimonials
- **Workflow Steps**: 4-step workflow guide with interactive cards
- **Footer**: Comprehensive footer with navigation links and social media placeholders

## Tech Stack

- React 18
- TypeScript
- Vite 5
- ESLint
- Vitest

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

### Lint

```bash
npm run lint
```

## Component Features

All sections include:
- ✅ Semantic HTML markup (section, article, h2 elements)
- ✅ Hover interactions with elevation effects
- ✅ Responsive design (mobile to desktop)
- ✅ Consistent spacing and layout
- ✅ Bolt.new inspired visual design with gradients
- ✅ Interactive link buttons

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx/css          # Landing hero section
│   ├── FeaturesGrid.tsx/css  # Features showcase
│   ├── MetricsTestimonials.tsx/css  # Stats and testimonials
│   ├── WorkflowSteps.tsx/css # Step-by-step workflow
│   └── Footer.tsx/css        # Footer with navigation
├── App.tsx                   # Main app component
├── main.tsx                  # Entry point
└── index.css                 # Global styles & CSS variables
```

## Design System

The app uses CSS custom properties for consistent theming:
- Dark color scheme with gradient accents
- Purple/pink gradient theme inspired by bolt.new
- Hover effects with elevation and glow
- Responsive spacing system
