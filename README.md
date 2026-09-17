# WayHouse

A responsive product landing page for a fictional church-management platform. The project is intentionally self-contained: every call to action, navigation item, product tab, and form interaction stays inside the demo.

## Highlights

- Responsive marketing layout with a fixed, adaptive mobile navigation
- Interactive product-module showcase powered by typed shared data
- Mobile member-portal prototype with switchable views
- Local-only lead form with an accessible success state
- Reusable visual primitives and consistent design tokens
- Zero third-party images, tracking scripts, API calls, or outbound links
- Metadata, keyboard focus states, reduced-motion support, and a custom 404 page

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint with the Next.js configuration

## Run locally

```bash
npm install
npm run dev
```

Then open `localhost:3000`.

## Quality checks

```bash
npm run check
npm run build
```

## Project structure

```text
app/
  globals.css       Global design tokens and accessibility styles
  layout.tsx        Metadata and document shell
  page.tsx          Landing-page composition
components/
  *Section.tsx      Focused page sections
  BrandMark.tsx     Reusable identity component
  DashboardPreview.tsx
  SectionHeading.tsx
  site-data.ts      Typed content shared by interactive sections
```

## Portfolio note

WayHouse is a front-end concept, not a live service. Pricing and product metrics are illustrative. The contact form demonstrates local React state and does not transmit entered data.
"# wayhouse" 
