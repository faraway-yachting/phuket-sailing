# Phuket Sailing - Professional Charter Website 🚢

A stunning, conversion-optimized website for Phuket sailing and catamaran charters, built with Next.js 13, TypeScript, and a beautiful ocean-inspired color palette.

![Phuket Sailing](./public/assets/images/home/sail-away-charter-2.png)

## 🌟 Features

### Design & UX
- **Beautiful Ocean-Inspired Color Scheme**
  - Ocean blues: Sky-500, Sky-700, Sky-900
  - Light ocean tones: Sky-50, Cyan-50, Blue-50
  - Sunset CTAs: Amber-500, Orange-500 gradients
  - Professional grays and whites
- **Fully Responsive**: Perfect on mobile, tablet, and desktop
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Modern UI**: Clean, professional, and vacation-friendly

### Content Sections
1. **Hero Section** - Logo, main heading, 4 contact methods (Phone, WhatsApp, Email, Line)
2. **Jump Links Navigation** - Sticky navbar with smooth scrolling
3. **Charter Styles** - 5 charter types with detailed descriptions
4. **Sailing Phuket** - Overview with trip types
5. **Overnight Sailing** - Benefits and recommendations
6. **Catamaran vs Sailing** - Side-by-side comparison
7. **Popular Routes** - 4 featured destinations
8. **Who It's For** - 6 target audiences
9. **What's Included** - Inclusions and packing list
10. **Pricing** - Transparent pricing structure
11. **Booking Process** - 4-step booking flow
12. **FAQs** - 9 common questions with schema markup
13. **Footer** - Links, contact info, and branding

### Technical Features
- **SEO Optimized**
  - Proper meta tags and descriptions
  - FAQ schema markup for rich snippets
  - Semantic HTML5 structure
  - 2,200+ words of quality content
  - Mobile-first indexing ready
- **Performance**
  - Static site generation (SSG)
  - Optimized images with Next.js Image
  - Code splitting and lazy loading
  - Fast Core Web Vitals scores
- **Conversion Focused**
  - Multiple CTAs throughout
  - 4 contact methods prominently displayed
  - Clear value propositions
  - Trust signals and social proof ready

## 📁 Project Structure

```
phuket-sailing/
├── 📁 app/                      # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with SEO metadata
│   └── page.tsx                 # Homepage with all sections
│
├── 📁 components/
│   ├── 📁 features/             # Page-specific components
│   │   └── 📁 home/             # Home page components
│   │       ├── Hero.tsx
│   │       ├── JumpLinks.tsx
│   │       ├── CTASection.tsx
│   │       ├── CharterStyles.tsx
│   │       ├── SailingPhuket.tsx
│   │       ├── OvernightSailing.tsx
│   │       ├── CatamaranVsSailing.tsx
│   │       ├── PopularRoutes.tsx
│   │       ├── WhoItsFor.tsx
│   │       ├── WhatsIncluded.tsx
│   │       ├── Pricing.tsx
│   │       ├── Booking.tsx
│   │       ├── FAQs.tsx
│   │       ├── FAQSchema.tsx
│   │       └── index.ts         # Component exports
│   │
│   ├── 📁 layout/               # Layout components
│   │   └── 📁 footer/           # Footer component
│   │       ├── Footer.tsx
│   │       └── index.ts
│   │
│   └── 📁 shared/               # Reusable components
│       └── 📁 ui/               # shadcn/ui components (28 components)
│           ├── button.tsx
│           ├── card.tsx
│           ├── accordion.tsx
│           └── ... (other UI components)
│
├── 📁 lib/                      # Utilities & helpers
│   ├── 📁 hooks/                # Custom React hooks
│   │   ├── use-toast.ts
│   │   └── index.ts
│   ├── 📁 types/                # TypeScript type definitions
│   │   ├── 📁 home/             # Home page types
│   │   │   └── home.ts
│   │   └── index.ts             # Type exports
│   ├── 📁 validation/           # Form validation schemas
│   │   └── schema.ts             # Yup validation schemas
│   └── utils.ts                 # Utility functions
│
├── 📁 data/                     # Static data & content
│   └── 📁 home/                 # Home page data
│       └── index.ts             # Data exports
│
├── 📁 public/
│   └── 📁 assets/
│       └── 📁 images/
│           └── 📁 home/         # Home page images
│               ├── sail-away-charter-2.png
│               └── *.jpg        # Other images
│
└── 📄 Configuration Files
    ├── next.config.js           # Next.js configuration
    ├── tsconfig.json            # TypeScript configuration
    ├── tailwind.config.ts       # Tailwind CSS config
    └── package.json             # Dependencies
```

### Folder Structure Rules

**Components:**
- ✅ Folders: **lowercase** (`home`, `footer`, `ui`)
- ✅ Component files: **PascalCase** (`Hero.tsx`, `Footer.tsx`)
- ✅ Component exports: **PascalCase** (`HeroSection`, `Footer`)

**Organization:**
- `components/features/` - Page-specific components (home, about, services)
- `components/layout/` - Layout components (navbar, footer, topnav)
- `components/shared/` - Reusable UI components (button, cards, slider)
- `lib/hooks/` - Custom React hooks
- `lib/types/` - TypeScript type definitions (organized by page/feature)
- `lib/validation/` - Form validation schemas (Yup schemas)
- `data/` - Static data & content (organized by page/feature)
- `public/assets/images/` - Organized image assets

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Type Checking

```bash
# Run TypeScript type checker
npm run typecheck
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Sky-50 | #f0f9ff | Light backgrounds |
| Sky-100 | #e0f2fe | Subtle backgrounds |
| Sky-500 | #0ea5e9 | Primary blue |
| Sky-600 | #0284c7 | Primary hover |
| Sky-700 | #0369a1 | Dark blue |
| Sky-900 | #0c4a6e | Headers, dark text |
| Amber-500 | #f59e0b | CTA buttons |
| Orange-500 | #f97316 | CTA gradients |
| Cyan-50 | #ecfeff | Alternate backgrounds |
| Teal-600 | #0d9488 | Accent colors |

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All sections are fully responsive with appropriate breakpoints and fluid typography.

## 🔍 SEO Details

### Meta Tags
- Title: "Phuket Sailing – Sailing Phuket & Catamaran Charters (Day + Overnight)"
- Description: Full meta description optimized for "Sailing Phuket" keywords
- Keywords: Phuket sailing, catamaran charters, overnight trips, yacht charter

### Schema Markup
- FAQ Schema (9 questions)
- Optimized for Google Rich Snippets
- Proper semantic HTML throughout

### Content Strategy
- 2,200+ words on homepage
- Holiday-friendly tone
- Clear value propositions
- Internal linking structure ready

## 🎯 Conversion Optimization

### CTAs
- Primary: "Get Your Individual Quote"
- Secondary: "WhatsApp Us", "Get Fast Quote"
- Tertiary: Email, Phone, Line App

### Contact Methods
1. **Phone**: +66 61 234 5623
2. **WhatsApp**: Direct link to chat
3. **Email**: bookings@faraway-yachting.com
4. **Line App**: Connect Now link

### Trust Signals
- Professional design
- Detailed information
- Clear pricing
- Multiple contact options
- FAQ section

## 📦 Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 🚢 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions to Vercel.

### Quick Deploy
1. Visit [vercel.com/new](https://vercel.com/new)
2. Import this repository
3. Click "Deploy"
4. Done! Get your live URL

## 📄 License

All rights reserved - Phuket Sailing

## 🤝 Credits

Built with Next.js, TypeScript, and Tailwind CSS
Design follows Phuket Sailing briefing requirements
Color scheme optimized for sailing/ocean theme

---

**Ready to launch your sailing charter business!** 🌊⛵
