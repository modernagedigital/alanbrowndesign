# Alan Brown Design Portfolio - Project Documentation

## Project Goal

Recreate the alanbrown.design portfolio website from Framer to a modern Next.js 15 application. The Framer hosting is expiring, and this project aims to build a pixel-perfect recreation with improved performance and full control over the codebase.

## Original Site

- **URL**: https://alanbrown.design/
- **Platform**: Framer (expiring)
- **Target**: Next.js 15 with TypeScript

## Design System

### Typography

- **Display Font**: Manrope (weights: 500-800)
  - Used for: Headings, hero text, section titles
- **Handwritten Font**: Gloria Hallelujah
  - Used for: Decorative "Hello" accent
- **Body Font**: Inter (weights: 400-700)
  - Used for: Body copy, descriptions, smaller text

### Color Palette

- **Primary Blue**: ~#00A0FF (accent color for links, headings, CTAs)
- **Background Gray (Light)**: ~#F5F5F5 or #EEEEEE
- **Background White**: #FFFFFF
- **Text Dark**: ~#000000 or #1A1A1A
- **Text Gray**: ~#666666 or similar for secondary text

### Layout Structure

- Clean, minimal design with generous whitespace
- Alternating gray/white background sections
- Centered content with max-width constraint
- Responsive grid layouts for logos and projects

## Homepage Sections (Phase 1 - Current Focus)

### 1. Navigation Header

- Left: "Alan Brown" + "UI/UX Designer" subtitle
- Right: "About" link + "Hire me" button (blue CTA)
- Fixed or sticky positioning
- Clean, minimal styling

### 2. Hero Section

- Light gray background
- Circular profile photo (centered)
- Handwritten "Hello" text (blue, Gloria Hallelujah, with arrow)
- Main headline (Manrope, large):
  - "I'm Alan. UI-Leaning Digital Product Designer with a focus on Design Systems"
  - "Design Systems" emphasized in blue
- Subheadline (Inter):
  - "Highly experienced in driving the creation of enterprise-scale Design Systems and leading design teams to success."

### 3. Experience Section

- White background
- "Two decades of experience" heading (blue)
- Subtext: "I've worked on various projects with some of the biggest companies in the world."
- 4x3 grid of company logos:
  - Row 1: Sky, BBC, Woolworths Group, Money
  - Row 2: C8, Pru, RBS, Blackhorse
  - Row 3: JP Morgan, Snowbrook, Northwestern, This Place
  - Row 4: Food Standards, Channel 4
- Logos in grayscale/black, responsive grid

### 4. Skills/Tools Section

- Light gray background
- Left side (60%): Text content
  - Heading: "Design, code and everything else" ("everything" in blue)
  - Description about design philosophy and approach
- Right side (40%): Floating tool icons
  - Figma, Framer, Principle (top row)
  - Tailwind CSS, React JS, Next.js (bottom row)
  - Cards with subtle shadows, appear to float

### 5. Projects Showcase

- Bottom of homepage
- Horizontal scroll or grid of project cards
- Shows mobile app and tablet mockups
- High-quality project images

## Tech Stack

- **Framework**: Next.js 15.5.6 (App Router, Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (ready for use)
- **Fonts**: next/font/google for optimization
- **Package Manager**: pnpm
- **Deployment**: Vercel (recommended)

## Development Phases

### Phase 1: Homepage (Current) ✓

- Set up fonts and theme
- Build all homepage sections
- Ensure pixel-perfect recreation
- Responsive design for mobile/tablet/desktop

### Phase 2: Additional Pages (Future)

- About page (if needed)
- Individual project pages
- Contact/hire page

### Phase 3: Deployment

- Deploy to Vercel
- Configure custom domain (alanbrown.design)
- DNS transfer from Framer
- SSL/HTTPS setup

## Assets Needed

### Images

- [ ] Profile photo (high-res, circular crop)
- [ ] Company logos (14 total) - SVG or high-res PNG
- [ ] Tool/software icons (Figma, Framer, Principle, Tailwind, React, Next.js)
- [ ] Project mockup images (3+ projects shown in screenshot)

### Content

- [x] Hero headline text
- [x] Hero subheadline text
- [ ] Skills section description (full text)
- [ ] Project details and descriptions

## Performance Goals

- Lighthouse score: 95+ across all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Optimized images (WebP/AVIF)
- Font optimization with next/font

## Notes

- Keep design clean and minimal
- Focus on typography hierarchy
- Maintain generous whitespace
- Ensure smooth animations/transitions
- Mobile-first responsive approach

## Always

- run pnpm dev and test the build for errors before marking a task as complete
