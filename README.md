# LandSeed TinyHome

A bilingual website for LandSeed, a non-profit organization dedicated to helping homeowners build backyard suites and accessory dwelling units (ADUs) in Ontario, Canada.

**Built by a volunteer developer** - This website was designed and developed entirely by myself as a volunteer contribution to LandSeed's mission. As the sole developer on this project, I've focused on creating an accessible, performant, and culturally-appropriate web experience that serves both English and Chinese-speaking communities.

## About LandSeed

LandSeed is a community-first non-profit organization that connects property owners, builders, lenders, and city officials to make backyard housing solutions accessible to everyday homeowners. We believe in addressing Ontario's housing crisis through sustainable, local development that makes better use of existing land resources.

Our mission is to guide homeowners through the entire process of building backyard suites - from initial feasibility assessments to final construction - without the typical jargon or stress. Whether you're looking to create rental income, provide housing for family members, or add flexible living space, we provide tailored solutions that serve your specific goals.

## Development Story

This project represents my volunteer contribution to addressing Ontario's housing crisis through technology. Working closely with the LandSeed team, I've built this website from the ground up to ensure it serves the diverse communities that LandSeed supports.

As the sole developer, I've made architectural decisions focused on:

- **Accessibility First**: Ensuring the site works for users regardless of language, device, or ability
- **Performance**: Fast loading times even on slower connections
- **Maintainability**: Clean, well-documented code that can be easily updated as LandSeed grows
- **Cultural Sensitivity**: Proper internationalization that goes beyond simple translation

The technical choices reflect both modern web development best practices and the specific needs of a community-focused non-profit organization.

## What Makes Us Different

- **Community-First Approach**: We're a non-profit focused on community benefit rather than profit maximization
- **Hands-On Expertise**: Our team has practical experience with zoning regulations and legal requirements
- **Cultural Diversity**: We work across cultures and understand different family needs and preferences
- **End-to-End Support**: From early planning through project completion, we're with you every step
- **Collaborative Mindset**: Patient, client-first approach that prioritizes your needs and timeline

## Technical Overview

This website is built with modern web technologies to provide a seamless, accessible experience in both English and Chinese.

### Tech Stack

- **Framework**: Next.js 15.3.1 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Internationalization**: next-intl 4.1.0
- **Icons**: Heroicons 2.2.0
- **Runtime**: React 19

### Key Features

- **Bilingual Support**: Full English and Chinese localization with proper font handling
- **Responsive Design**: Mobile-first approach with custom breakpoints for optimal viewing
- **Performance Optimized**: Modern image formats (AVIF, WebP) and optimized loading
- **Security Headers**: Comprehensive security configuration including CSP and XSS protection
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### Project Structure

```
src/
├── app/
│   ├── [locale]/           # Internationalized routes
│   ├── components/         # Reusable React components
│   └── globals.css        # Global styles and design tokens
├── i18n/                  # Internationalization configuration
├── middleware.ts          # Next.js middleware for locale handling
messages/
├── en.json               # English translations
└── zh.json               # Chinese translations
```

### Design System

The project uses a custom design system with:

- **Color Palette**: Green primary colors (#647b64, #66ac66) and orange secondary colors (#d16035, #f3b562)
- **Typography**: Suez One for headings, Nunito Sans for body text, with proper Chinese font fallbacks
- **Responsive Breakpoints**: Mobile (402px), Tablet (834px), Desktop (1440px)
- **Component Library**: Modular, reusable components with consistent styling

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd landseed-tinyhome
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Internationalization

The website supports English and Chinese with:

- Automatic locale detection based on browser preferences
- Manual language switching via the header toggle
- Proper font loading for Chinese characters (Noto Sans SC, Noto Serif SC)

### Adding Translations

1. Add new keys to both `messages/en.json` and `messages/zh.json`
2. Use the `useTranslations` hook in components:

```typescript
const t = useTranslations("sectionName");
return <p>{t("keyName")}</p>;
```

## Deployment

The application is configured for deployment with:

- Static export capability
- Optimized image handling
- Security headers for production
- CSP configuration for external integrations

## Contributing

This is my personal repository where I maintain the LandSeed website as a volunteer developer. While I welcome feedback and suggestions, please note that I'm the primary maintainer of this codebase.

If you're interested in contributing:

- **Bug Reports**: Please open an issue with detailed reproduction steps
- **Feature Suggestions**: I'm always open to ideas that improve accessibility or user experience
- **Code Contributions**: Feel free to submit pull requests, though I'll review them carefully to maintain code quality and consistency with the existing architecture

For questions about LandSeed's services, please contact them directly. For technical questions about this website, feel free to reach out through GitHub issues.

---
