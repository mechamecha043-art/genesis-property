# Luxury Real Estate Landing Page - Tangerang Serpong

A premium, SEO-optimized landing page for a modern housing project in Tangerang, Indonesia (near Serpong). Built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

### Design & Aesthetics
- **Premium Gold Aesthetic**: Elegant modern design with black, dark charcoal, and gold accents
- **Glassmorphism**: Sophisticated glass-like UI elements with backdrop blur
- **Smooth Animations**: Fade, slide, and parallax effects throughout
- **Typography**: Playfair Display (elegant headings) + Inter (clean body text)
- **Subtle Glowing Gold Gradients**: Beautiful ambient lighting effects
- **Custom Scrollbar**: Gold-themed scrollbar for enhanced aesthetics

### Sections
1. **Hero Section**
   - Fullscreen luxury house background (night view with golden lighting)
   - H1: "Affordable Modern Homes in Tangerang & Serpong"
   - Animated price badges and statistics
   - WhatsApp CTA button
   - Floating badges for pricing information

2. **Property Highlights**
   - 6 key features with icons
   - Strategic location highlight
   - Interactive cards with hover effects

3. **Property Types** (6 types)
   - Type Bronze: 1BR/1BA, 400M, 2M/month
   - Type Quartz/Q Series: 2BR/2BA, 500-600M, 2.5-2.9M/month
   - Type Gold/Gold Living: 3BR/3BA, 900M+, 3-4M/month
   - Type Treetops: 3BR/3BA, 3 floors, ~3.6M/month
   - Type Cendana: 4BR + maid room, 1.2B+
   - Type Blackstar: 4BR + maid room, 112m² land, ~1.9B

4. **Image Gallery**
   - Carousel slider with 8 high-quality images
   - Smooth transitions and hover effects
   - Responsive layout

5. **Commercial Section**
   - The Hive series shop houses (ruko)
   - 3 floors modern concept
   - Alfresco + rooftop terrace
   - Starting from 1.4B

6. **Location Section**
   - Embedded Google Maps (Serpong Tangerang area)
   - 6 nearby facilities with distances
   - Quick access information to Jakarta

7. **Testimonials**
   - 3 realistic customer reviews
   - Star ratings
   - Auto-rotating display

8. **Final CTA**
   - Urgency messaging ("Limited Units Available")
   - WhatsApp and location CTAs
   - Professional design

9. **Footer**
   - Quick links
   - Contact information
   - Copyright information

### Technical Features

#### SEO Optimization
- **Target Keywords**:
  - "rumah murah Tangerang"
  - "perumahan Tangerang"
  - "rumah Serpong"
  - "rumah murah Serpong"
  - "rumah cicilan 2 jutaan"
  - "rumah dekat Jakarta"

- **Meta Title**: "Rumah Murah Tangerang & Serpong Mulai 400 Jutaan | Cicilan 2 Jutaan"
- **Meta Description**: "Perumahan modern di Tangerang dekat Serpong dengan harga mulai 400 jutaan. Cicilan ringan mulai 2 jutaan. Lokasi strategis dekat Jakarta dengan desain premium."
- **Proper Heading Structure**: H1, H2, H3 hierarchy
- **Structured Data**: Schema.org RealEstate/Residence markup
- **Open Graph & Twitter Card** metadata
- **Alt Text**: All images have descriptive alt text
- **Next.js Image Optimization**: Optimized images with lazy loading
- **Mobile-First Responsive**: Works perfectly on all devices

#### Interactive Elements
- **Floating WhatsApp Button**: Always visible, bottom-right corner
- **Animated Numbers**: Smooth counter animations for statistics
- **Image Gallery**: Interactive carousel with navigation
- **Auto-rotating Testimonials**: 5-second interval transitions
- **Scroll Animations**: Fade-in effects using Intersection Observer
- **Hover Effects**: Interactive cards and buttons

#### Performance
- Next.js 16 with App Router
- TypeScript for type safety
- Optimized images with Next.js Image component
- Lazy loading for non-critical images
- Smooth 60fps animations
- Lighthouse-optimized

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Fonts**: Playfair Display + Inter (Google Fonts)

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # SEO metadata, fonts
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles + custom CSS
│   ├── components/
│   │   └── ui/                 # shadcn/ui components
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/
│   └── images/                 # Optimized property images
└── tailwind.config.ts          # Tailwind configuration
```

## Getting Started

### Prerequisites
- Node.js 18+
- Bun (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

### Development

Run the development server:
```bash
bun run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Build

Create a production build:
```bash
bun run build
```

### Lint

Check code quality:
```bash
bun run lint
```

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to a Git repository
2. Import the repository into Vercel
3. Deploy

## Customization

### Updating WhatsApp Number

Search for `6281280660439` and replace with your WhatsApp number.

### Changing Property Information

Edit the `propertyTypes` array in `src/app/page.tsx`:

```typescript
const propertyTypes = [
  {
    id: 'bronze',
    name: 'Type Bronze',
    bedrooms: 1,
    bathrooms: 1,
    price: '400M',
    installment: '2M',
    image: '/images/townhouse-exterior.jpg',
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  // ... more properties
]
```

### Updating Testimonials

Edit the `testimonials` array in `src/app/page.tsx`:

```typescript
const testimonials = [
  {
    id: 1,
    name: 'Customer Name',
    role: 'Homeowner',
    content: 'Testimonial text...',
    rating: 5
  },
  // ... more testimonials
]
```

### Changing Colors

The gold accent colors are defined using Tailwind's amber color palette:
- Primary gold: `text-amber-400`
- Hover gold: `hover:text-amber-400`
- Background gold: `bg-amber-500/20`

### Updating SEO

Modify the metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Title Here",
  description: "Your description here",
  keywords: ["keyword1", "keyword2"],
  // ... other metadata
}
```

## Images

All images are AI-generated and located in `/public/images/`:
- `hero-luxury-house.jpg` - Hero background
- `property-showcase-1.jpg` - Property exterior
- `bedroom-interior.jpg` - Bedroom interior
- `living-room.jpg` - Living room
- `bathroom-luxury.jpg` - Bathroom
- `kitchen-modern.jpg` - Kitchen
- `townhouse-exterior.jpg` - Townhouse exterior
- `shop-house.jpg` - Commercial shop house
- `location-aerial.jpg` - Aerial location view

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Metrics

Target Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

## License

This project is created for Premium Homes Tangerang Serpong.

## Contact

For inquiries, contact via WhatsApp: +62 812 8066 0439

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
