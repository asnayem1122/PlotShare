---
name: Golden Harvest
colors:
  surface: '#fdf9f4'
  surface-dim: '#ddd9d5'
  surface-bright: '#fdf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ee'
  surface-container: '#f1ede8'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e6e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#5a4138'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0eb'
  outline: '#8f7066'
  outline-variant: '#e3bfb2'
  surface-tint: '#a83900'
  primary: '#a43700'
  on-primary: '#ffffff'
  primary-container: '#cd4700'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59a'
  secondary: '#7e5700'
  on-secondary: '#ffffff'
  secondary-container: '#feb300'
  on-secondary-container: '#6a4800'
  tertiary: '#914723'
  on-tertiary: '#ffffff'
  tertiary-container: '#b05e38'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59a'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#802a00'
  secondary-fixed: '#ffdeac'
  secondary-fixed-dim: '#ffba38'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#604100'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#76320f'
  background: '#fdf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e6e2dd'
  harvest-orange: '#E65100'
  golden-amber: '#FFB300'
  terracotta: '#A0522D'
  rice-cream: '#F9F5F0'
  success-leaf: '#2D5A27'
  deep-earth: '#2C1B12'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system embodies the "Golden Harvest" narrative—a premium, sun-drenched aesthetic inspired by the ripening agricultural landscapes of Bangladesh. The brand personality is rustic yet sophisticated, evoking the warmth of the golden hour over fertile fields. It balances the trustworthiness of a high-end marketplace with a deep, soulful connection to the land.

The design style is a blend of **Modern Minimalism** and **Warm Tactility**. It prioritizes high-quality whitespace and organic warmth over stark, clinical digital interfaces. By utilizing soft, layered surfaces and a palette that mimics the transition from soil to sun, the system feels grounded, reliable, and optimistic. It is designed to feel like a premium tool for modern stewards of the earth, optimized for readability in both bright outdoor sun and cozy indoor environments.

## Colors

The palette is a celebration of the Bangladeshi harvest cycle, moving from the rich earth to the vibrant ripening crops.

- **Primary (Harvest Orange):** A sophisticated, deep orange representing ripening crops and the golden hour. This is used for primary actions, critical branding, and key interactive states.
- **Secondary (Golden Amber):** A warm, energetic amber used for highlights, specialized status indicators, and secondary visual interest.
- **Tertiary (Terracotta):** A grounded, earthy tone used for structural accents and deep-contrast elements that require more weight than a standard neutral.
- **Neutral (Rice Cream):** A warm, very light beige that serves as the foundation for all surfaces. This avoids the harshness of pure white and enhances the "sun-drenched" feel.
- **Success (Success Leaf):** A deep forest green reserved strictly for success states, growth icons, and specific agricultural symbols to maintain a connection to nature without overpowering the golden theme.

## Typography

**Hanken Grotesk** is the sole typeface, chosen for its sharp, contemporary geometry which provides a professional "tech" contrast to the warm, rustic color palette.

- **High Contrast:** To ensure readability in the high-glare environments typical of agricultural outdoor use, the system utilizes heavier weights (700 and 800) for headlines and a deep charcoal (Deep Earth) for body text.
- **Rhythm:** Headlines use tight tracking to appear more "editorial" and premium. Body text maintains a generous line-height to facilitate effortless scanning of marketplace listings and data.
- **Labels:** Small caps and increased letter spacing are applied to labels to distinguish metadata and technical specs from narrative content.

## Layout & Spacing

The system follows a **fluid grid** model that emphasizes breathing room and structural clarity.

- **Mobile First:** A 4-column grid with 20px side margins ensures content is safely inset from screen edges.
- **Desktop:** Scales to a 12-column grid with a max-width container of 1200px to maintain a premium, centered feel.
- **Vertical Rhythm:** Built on an 8px base unit. Component spacing (gutters) is fixed at 16px, while section-level spacing (stack-lg) uses 48px to create clear, "zen-like" separation between different content types.
- **Density:** Information-heavy cards utilize internal padding of 24px (stack-md) to ensure the UI never feels cluttered or "cheap."

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Ambient Shadows** that feel warm and natural.

- **Base Layer:** The Rice Cream (#F9F5F0) background acts as the foundation.
- **Elevated Surfaces:** Cards and containers use a brighter cream or pure white to "lift" off the page. Shadows are extra-diffused and tinted with a hint of Terracotta (e.g., Blur: 24px, Y: 6, Opacity: 6% of #A0522D) rather than neutral gray, making them feel like shadows cast by warm sunlight.
- **Depth Levels:**
    - Level 0: Background.
    - Level 1: Standard marketplace cards (Low lift).
    - Level 2: Navigation bars and floating action buttons (High lift).
- **Interactive Depth:** Buttons utilize a subtle inner-shadow on active states to simulate a tactile "press" into the earth.

## Shapes

The shape language is organic and approachable, utilizing generous rounding to offset the precision of the typography.

- **Standard Radius:** 16px (rounded-lg) for buttons and standard inputs to feel soft and inviting.
- **Container Radius:** 24px (rounded-xl) for marketplace cards and primary containers, echoing the soft edges of grain sacks or organic field boundaries.
- **Max Radius:** 32px is reserved for bottom sheets and top-level navigation wrappers to emphasize their role as distinct, tactile surfaces.

## Components

- **Buttons:** Primary buttons are Harvest Orange with white text. They are high-contrast and utilize a fully rounded (pill-shaped) style for maximum approachability.
- **Input Fields:** Use a subtle Terracotta border (1px). On focus, the border transitions to Harvest Orange (2px) with a soft, amber-tinted outer glow.
- **Marketplace Cards:** Feature 24px padding and 16px internal corner radii for images. The background is white to distinguish the item from the warm cream background.
- **Chips:** Utilizes Golden Amber at 15% opacity for backgrounds with Deep Earth text, creating a sophisticated "tag" look that is easy to read outdoors.
- **Progress Bars:** Representing growth or "Time to Harvest," these use a gradient from Golden Amber to Success Leaf, visually connecting the sun's energy to the health of the crop.
- **Navigation:** The bottom bar uses a frosted glass effect with a warm tint. Active states are indicated by a Harvest Orange underline with a subtle glow, mimicking sunlight hitting a surface.