# Sprint360

Sprint360 is a modern web application built with Next.js, designed for a software development company specializing in full-stack development, data intelligence, and AI solutions. It features a responsive landing page with sections for services, portfolio, about, contact, and blog. The app includes form handling, email notifications, reCAPTCHA integration, and Docker-based deployment. The project focuses on scalable, modular components and server-first rendering, following clean architecture and separation of concerns.

## Tech Stack

- **Frontend**: Next.js 16+ (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4, PostCSS
- **Backend**: Next.js API Routes
- **Database/Integrations**: Airtable (for calculators and forms)
- **Email**: Resend API
- **Security**: reCAPTCHA v3
- **Deployment**: Docker, nginx (reverse proxy with SSL)
- **Development**: ESLint, Docker Compose
- **Animations**: Framer Motion, Lottie
- **Other**: Client-side cookies, Nookies

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── about/             # About section
│   │   ├── page.jsx       # About page
│   │   ├── AboutHero.jsx  # Hero component
│   │   └── ...            # Other components
│   ├── contact/           # Contact page with forms
│   │   ├── page.jsx       # Contact page
│   │   ├── thank-you/     # Thank you page
│   │   └── components/    # Contact components
│   ├── services/          # Services pages
│   │   ├── page.jsx       # Services overview
│   │   ├── [slug]/        # Dynamic service pages
│   │   ├── data/          # Service data
│   │   └── components/    # Service components
│   ├── portfolio/         # Portfolio page
│   ├── blog/              # Blog page
│   ├── InternalEstimate/  # Internal cost estimator
│   ├── project-cost-calculator/  # Public cost calculator
│   └── api/               # API routes
├── components/            # Reusable React components
│   ├── ui/               # UI components (Button, Footer, etc.)
│   └── layout/           # Layout components
├── lib/                   # Utility functions and integrations
│   ├── airtable.ts       # Airtable integration
│   ├── resend.ts         # Email sending
│   ├── recaptcha.ts      # reCAPTCHA verification
│   └── validate.ts       # Form validation
├── public/                # Static assets
│   ├── animations/       # Lottie animations
│   ├── logos/            # Logo images
│   └── sitemap.xml       # Sitemap
├── types/                 # TypeScript type definitions
├── templates/             # Email templates
├── docker-compose.yml     # Production Docker setup
├── docker-compose.dev.yml # Development Docker setup
├── nginx.conf             # Production nginx config
├── nginx.dev.conf         # Development nginx config
└── Dockerfile             # App containerization
```

## Key Pages and Components

### Home Page ([`app/page.tsx`](app/page.tsx "app/page.tsx"))

Main landing page with hero section, features, services overview, partners, and CTA.

- Components: HeroSection, FeaturesSection, ServicesSection, PartnersSection, CTASection

### About Page ([`app/about/page.jsx`](app/about/page.jsx "app/about/page.jsx"))

Company information including hero, journey, team, values, vision/mission.

- Components: AboutHero, AboutJourney, AboutTeam, AboutValues, AboutVisionMission

### Contact Page ([`app/contact/page.jsx`](app/contact/page.jsx "app/contact/page.jsx"))

Contact form with Calendly integration, consent checkbox, and alternative contact methods.

- Components: ContactForm, ContactHero, CalendlyBlock, ConsentCheckbox
- API: `/api/contact` (POST) - Handles form submissions

### Services Pages ([`app/services`](app/services "app/services"))

Dynamic routing for different services.

- Layout: services/layout.tsx
- Components: ServicesGrid, ServiceCard, CalendlyModal
- Data: [`app/services/data/services.tsx`](app/services/data/services.tsx "app/services/data/services.tsx") (service definitions)

### Portfolio ([`app/portfolio/page-temp.jsx`](app/portfolio/page-temp.jsx "app/portfolio/page-temp.jsx"))

Portfolio showcase (temporary implementation).

### Blog ([`app/blog/page.tsx`](app/blog/page.tsx "app/blog/page.tsx"))

Blog listing page.

### Internal Estimate ([`app/InternalEstimate/page-temp.tsx`](app/InternalEstimate/page-temp.tsx "app/InternalEstimate/page-temp.tsx"))

Cost estimation tool using Airtable integration.

### Project Cost Calculator ([`app/project-cost-calculator`](app/project-cost-calculator "app/project-cost-calculator"))

Advanced calculator with lead form.

- API: `/api/lead` (likely for form handling)

## API Endpoints

- `/api/health` (GET) - Health check
- `/api/contact` (POST) - Contact form submission
- `/api/lead` (POST) - Lead form submission (project calculator)

## Key Integrations

- **Airtable**: Used for data storage (calculators, forms) - [`lib/airtable-calculator.ts`](lib/airtable-calculator.ts "lib/airtable-calculator.ts")
- **Resend**: Email notifications for form submissions
- **reCAPTCHA**: Spam protection on forms
- **Calendly**: Scheduling integration

## Configuration Files

- [`package.json`](package.json "package.json") - Dependencies and scripts
- [`tsconfig.json`](tsconfig.json "tsconfig.json") - TypeScript configuration
- [`next.config.ts`](next.config.ts "next.config.ts") - Next.js configuration
- tailwind.config.js - Tailwind CSS setup
- [`eslint.config.mjs`](eslint.config.mjs "eslint.config.mjs") - ESLint configuration
- [`postcss.config.mjs`](postcss.config.mjs "postcss.config.mjs") - PostCSS configuration

## Quick Start

1. `pnpm install` - Install dependencies
2. `docker-compose -f [`docker-compose.dev.yml`](docker-compose.dev.yml ) up` - Start development environment
3. Access at http://localhost or http://sprint360 (after adding to hosts)

## Deployment

- Build production image: `docker-compose build`
- Deploy: [`docker-compose up -d`](node_modules/@types/react/index.d.ts)
- Ensure SSL certificates are in [`certs`](certs) for HTTPS

## Development Notes

- Content is primarily in JSX/TSX components, not separate markdown files
- For SEO and content analysis, examine the page components and their rendered output
- Use the internal cost estimator for company-centric pricing
- Public calculator requires lead form submission for access

## License

This project is private and proprietary. All rights reserved.
