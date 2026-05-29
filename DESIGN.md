---
name: Verdant Occasions
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#424844'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#496455'
  primary: '#173124'
  on-primary: '#ffffff'
  primary-container: '#2d4739'
  on-primary-container: '#98b5a3'
  inverse-primary: '#b0cdbb'
  secondary: '#4a6549'
  on-secondary: '#ffffff'
  secondary-container: '#ccebc7'
  on-secondary-container: '#506b4f'
  tertiary: '#590e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#79230f'
  on-tertiary-container: '#ff8e73'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ccead6'
  primary-fixed-dim: '#b0cdbb'
  on-primary-fixed: '#062014'
  on-primary-fixed-variant: '#324c3e'
  secondary-fixed: '#ccebc7'
  secondary-fixed-dim: '#b0cfad'
  on-secondary-fixed: '#07200b'
  on-secondary-fixed-variant: '#334d33'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#ffb4a3'
  on-tertiary-fixed: '#3d0700'
  on-tertiary-fixed-variant: '#812914'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max-width: 1280px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 20px
---

## Brand & Style

The design system is centered around the concept of "Natural Sophistication." It targets a high-end audience looking for outdoor event spaces that feel both organic and curated. The UI should evoke a sense of tranquility, luxury, and warmth.

The chosen style is **Modern Minimalism with Tonal Layering**. It prioritizes high-quality photography of lush landscapes, framed by a generous amount of whitespace (in this case, "cream-space"). The interaction design should feel light and airy, utilizing subtle transitions and soft depth to guide the user toward booking an experience rather than just a venue.

## Colors

The color palette is inspired by the transition from forest canopies to the sun-drenched earth. 

- **Primary (Forest Green):** Used for primary headings and brand-heavy elements. It provides the grounding "sophistication."
- **Secondary (Moss/Sage):** Used for accent backgrounds, icons, and secondary buttons. These tones bridge the gap between the dark greens and light neutrals.
- **Neutral (Cream/Beige):** The stage for all content. Pure white is avoided to keep the interface feeling "warm" and "organic."
- **CTA (Terracotta):** A high-contrast earthy tone designed to pop against the green backgrounds, drawing immediate attention to "Book Now" or "Check Availability" actions.

## Typography

This design system employs a classic typographic pairing to achieve its "Modern/Friendly" goal.

- **Headlines (Noto Serif):** Brings a literary, authoritative, and premium feel. It should be used for all major section headers and hero titles.
- **Body (Plus Jakarta Sans):** A modern sans-serif with soft terminals that maintain the "friendly" aspect of the brand. Its high x-height ensures excellent legibility even in dense descriptions of venue amenities.
- **Labels:** Use uppercase with slight letter spacing for category labels or small metadata to create a distinct visual hierarchy without adding weight.

## Layout & Spacing

The layout philosophy follows a **Fixed-Grid with Fluid Gutters** approach for desktop, ensuring that the premium content is always beautifully framed.

- **Generous Breathing Room:** Sections are separated by large vertical gaps (120px) to prevent the user from feeling overwhelmed and to emphasize the "wide-open" nature of the venues.
- **Grid:** A 12-column system is used for desktop. For mobile, a single-column layout with 20px side margins is standard.
- **Alignment:** Content should be primarily center-aligned for hero sections and left-aligned for informational blocks to maintain a balanced, editorial flow.

## Elevation & Depth

To maintain a "light" appearance while suggesting premium quality, the design system uses **Tonal Layers and Ambient Shadows**.

- **Surfaces:** Most content sits on the `Cream` background. Cards and floating elements use the `Beige` or pure white with a very low-opacity shadow.
- **Shadows:** Use large blur radii (20px+) with very low opacity (5-8%) and a slight tint of the `Forest Green` color to make the shadows feel natural rather than grey/synthetic.
- **Glassmorphism:** Navigation bars and image overlays should use a subtle backdrop blur (12px) with a semi-transparent `Cream` fill to maintain context of the lush background imagery.

## Shapes

The shape language is **Softly Structured**. 

- **Radius:** A standard 0.5rem (8px) radius is applied to cards and input fields.
- **Buttons:** Large CTA buttons use a more pronounced 1rem (16px) radius to feel more inviting and "squishy" compared to the structural elements.
- **Images:** High-quality photography should feature slightly rounded corners (matching `rounded-lg` or 1rem) to soften the overall visual impact of the grid.

## Components

### Buttons
- **Primary CTA:** High-contrast `Terracotta` background with white text. Bold weight. This is reserved for the final conversion goal.
- **Secondary Button:** `Forest Green` outline with `Forest Green` text. Used for "Learn More" or "View Gallery."
- **Ghost Button:** No background, underlined text. Used for navigation or less critical actions.

### Cards
Venue cards should feature a large image at the top with a 1:1 or 4:5 aspect ratio. The content area below should use a subtle `Beige` background to separate it from the main `Cream` page color.

### Input Fields
Inputs for the booking form should have a `Cream` fill and a very thin `Sage` border. On focus, the border thickens and transitions to `Forest Green`.

### Chips/Tags
Used for venue features (e.g., "Pet Friendly," "Waterfront"). These should use a light `Sage` background with `Forest Green` text, using the `label-md` typographic style.

### Interactive Gallery
Include a component for a full-width, soft-transition image slider that highlights the natural beauty of the spaces, utilizing the ambient shadow style for the navigation arrows.