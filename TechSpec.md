# Manuvoo Website - Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Installation |
|-----------|---------|--------------|
| Button | CTAs, actions | `npx shadcn add button` |
| Card | Feature cards, pricing | `npx shadcn add card` |
| Badge | Tags, labels | `npx shadcn add badge` |
| Dialog | Modal windows | `npx shadcn add dialog` |
| Sheet | Mobile navigation drawer | `npx shadcn add sheet` |
| Separator | Visual dividers | `npx shadcn add separator` |
| Switch | Theme toggle | `npx shadcn add switch` |
| Accordion | FAQ section | `npx shadcn add accordion` |
| Carousel | Testimonials | `npx shadcn add carousel` |

### Third-Party Registry Components
| Component | Registry | Purpose | Installation |
|-----------|----------|---------|--------------|
| @magicui/particles | MagicUI | Background particle effect | `npx shadcn add @magicui/particles` |
| @aceternity/timeline | Aceternity | Roadmap timeline | `npx shadcn add @aceternity/timeline` |

### Custom Components to Build
| Component | Purpose | Location |
|-----------|---------|----------|
| Navbar | Navigation with scroll effect | `src/components/Navbar.tsx` |
| ThemeToggle | Dark/light mode switch | `src/components/ThemeToggle.tsx` |
| HeroSection | Main hero with animations | `src/sections/Hero.tsx` |
| PlatformPreview | Interactive screen previews | `src/sections/PlatformPreview.tsx` |
| BenefitsSection | Outcome cards | `src/sections/Benefits.tsx` |
| ProductSuite | Feature showcase | `src/sections/ProductSuite.tsx` |
| HowItWorks | Step process | `src/sections/HowItWorks.tsx` |
| Industries | Target markets | `src/sections/Industries.tsx` |
| Testimonials | Customer quotes | `src/sections/Testimonials.tsx` |
| Pricing | Pricing cards | `src/sections/Pricing.tsx` |
| Roadmap | Feature timeline | `src/sections/Roadmap.tsx` |
| CTASection | Call to action | `src/sections/CTA.tsx` |
| Footer | Site footer | `src/sections/Footer.tsx` |
| AnimatedSection | Scroll reveal wrapper | `src/components/AnimatedSection.tsx` |
| GradientText | Text with gradient | `src/components/GradientText.tsx` |
| GlowButton | Button with glow effect | `src/components/GlowButton.tsx` |

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load sequence | Framer Motion | AnimatePresence + stagger | Medium |
| Navbar scroll effect | React hooks | useScroll + useTransform | Low |
| Hero text reveal | Framer Motion | motion.div with stagger | Medium |
| Hero dashboard float | Framer Motion | animate with repeat | Low |
| Scroll reveal (fade up) | Framer Motion | whileInView + viewport | Low |
| Card hover lift | Framer Motion | whileHover | Low |
| Button hover glow | CSS + Framer | box-shadow transition | Low |
| Timeline draw | Framer Motion | pathLength animation | High |
| Step number pulse | CSS | keyframes animation | Low |
| Background particles | @magicui | Component integration | Low |
| Carousel auto-scroll | Embla Carousel | shadcn carousel | Medium |
| Theme transition | CSS | transition on color props | Low |
| Link underline | CSS | width transition | Low |
| Icon scale on hover | Framer Motion | whileHover scale | Low |
| Parallax scroll | Framer Motion | useScroll + useTransform | Medium |

## Animation Library Choices

### Primary: Framer Motion
**Rationale**: 
- Best React integration
- Declarative API
- Built-in scroll animations
- Gesture support
- AnimatePresence for mount/unmount

**Use for**:
- All scroll-triggered reveals
- Hover animations
- Page transitions
- Complex sequences

### Secondary: CSS Animations
**Rationale**:
- Performance for simple effects
- No JS overhead
- Theme transitions

**Use for**:
- Simple hover effects
- Theme color transitions
- Infinite loops (pulses, floats)
- Underline animations

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── dashboard-mockup.jpg
│   │   ├── oms-interface.jpg
│   │   ├── customer-app.jpg
│   │   └── admin-portal.jpg
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   ├── Navbar.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── AnimatedSection.tsx
│   │   ├── GradientText.tsx
│   │   └── GlowButton.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── PlatformPreview.tsx
│   │   ├── Benefits.tsx
│   │   ├── ProductSuite.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Industries.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── Roadmap.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useTheme.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── components.json
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Dependencies to Install

### Core (via init script)
- React 18+
- TypeScript
- Vite
- Tailwind CSS 3.4
- shadcn/ui base

### Animation
```bash
npm install framer-motion
```

### Icons
```bash
npm install lucide-react
```

### Fonts (Google Fonts via CDN)
- Inter (400, 500, 600, 700)

## Color Configuration (Tailwind)

```javascript
// tailwind.config.js extend colors
colors: {
  background: '#0a0a0a',
  foreground: '#ffffff',
  card: '#141414',
  'card-hover': '#1a1a1a',
  border: '#27272a',
  'border-accent': 'rgba(249, 115, 22, 0.5)',
  accent: {
    DEFAULT: '#f97316',
    hover: '#ea580c',
    glow: 'rgba(249, 115, 22, 0.3)',
  },
  muted: {
    DEFAULT: '#71717a',
    foreground: '#a1a1aa',
  },
}
```

## Theme Implementation

### CSS Variables Approach
```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #141414;
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --accent: #f97316;
}

[data-theme="light"] {
  --bg-primary: #fafafa;
  --bg-secondary: #ffffff;
  --text-primary: #18181b;
  --text-secondary: #52525b;
  --accent: #f97316;
}
```

### React Context for Theme
- ThemeProvider wrapper
- useTheme hook
- localStorage persistence
- System preference detection

## Performance Considerations

### Animation Performance
- Use `transform` and `opacity` only
- Apply `will-change` sparingly
- Use `useReducedMotion` hook
- Lazy load below-fold sections

### Image Optimization
- Use WebP format where possible
- Implement lazy loading
- Provide appropriate sizes
- Use blur placeholder

### Code Splitting
- Lazy load sections
- Dynamic imports for heavy components
- Preload critical assets

## Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation
- Focus indicators
- Color contrast 4.5:1 minimum
- Reduced motion support
- Screen reader labels
- Semantic HTML

## Responsive Strategy

### Mobile-First Approach
- Base styles for mobile
- Breakpoint overrides:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1400px

### Touch Targets
- Minimum 44x44px for buttons
- Adequate spacing between elements
- Swipe gestures for carousel

## Build Configuration

### Vite Config
- Optimize imports
- CSS splitting
- Asset handling

### Output
- Static site generation
- Deploy to `/dist` folder
