# Phase 3 Core Build System

## 1. Full Frontend Architecture Explanation

The implementation is a small React + TypeScript app built with Vite because the project needs clarity, not framework theater.

The architecture is intentionally simple:

- semantic shell
- sticky identity rail
- scrollable editorial content
- reusable section primitives
- content separated from presentation
- a lightweight spotlight interaction
- scroll spy for orientation

Psychological reason:

A small, coherent architecture communicates the same discipline the site is trying to express. If the codebase feels calm, the experience is more likely to feel calm too.

## 2. Semantic HTML Structure Plan

The page uses a proper document structure:

- `header` for the left identity rail
- `nav` for section navigation
- `main` for the content rail
- `section` for each major chapter
- `article` for work cards and timeline rows
- `footer` for supporting rail notes

Why:

Semantic structure helps screen readers, improves machine readability, and makes the page easier to maintain. It also reinforces the editorial feel by giving the content a clear grammar.

## 3. Component Hierarchy Map

Top level:

- `App`
  - identity rail
  - navigation
  - hero section
  - about section
  - work section
  - timeline section
  - now section
  - contact section

Reusable components:

- `Section`
- `WorkCard`
- `TimelineRow`

Why:

This is enough abstraction to stay maintainable without turning the app into a component maze. The boundaries match the content logic.

## 4. Responsive Layout Strategy

Desktop:

- two-panel grid
- sticky left rail
- scrollable right narrative column

Tablet:

- keep the same information order
- collapse the grid into a single reading column when space gets tight

Mobile:

- one-column editorial flow
- compact identity block at the top
- preserved section order
- no loss of hierarchy

Why:

Responsive design should preserve meaning. The reader should not have to relearn the site on a smaller screen.

## 5. Desktop Implementation Logic

The desktop layout is a CSS grid with a fixed-feeling left rail and flexible content area.

The left rail is `position: sticky` so orientation remains available while the narrative scrolls.

Why:

Persistent orientation reduces cognitive load. The reader always knows where they are, which matters in a dense but restrained layout.

## 6. Mobile Adaptation Logic

Mobile collapses the rail into a top block and preserves the same narrative order.

Rules in the implementation:

- reduce grid complexity
- preserve spacing rhythm
- keep type readable
- avoid hover-only meaning

Why:

Mobile is a sequential reading environment. The content must remain legible and calm rather than trying to mimic desktop geometry.

## 7. Interaction Implementation Strategy

Only four interactions are implemented:

- soft mouse spotlight
- hover elevation
- scroll spy
- smooth scrolling

Implementation details:

- pointer movement updates CSS custom properties for spotlight position
- `IntersectionObserver` tracks the active section
- hover states are limited to simple elevation and border shifts
- smooth scrolling is handled by CSS

Why:

These interactions improve orientation and tactility without becoming entertainment.

## 8. Motion Implementation Rules

Motion rules:

- transitions are 200ms ease
- hover lift is `translateY(-2px)`
- no animated entrances
- no parallax
- no page transitions
- reduced-motion support is respected

Why:

Motion should confirm state, not compete for attention. Quiet motion makes the interface feel maintained and controlled.

## 9. Accessibility Implementation Strategy

Implemented accessibility features:

- skip link
- semantic landmarks
- visible focus states
- readable contrast
- keyboard-compatible links and buttons
- `aria-labelledby` on sections
- `prefers-reduced-motion` handling

Why:

Accessibility is part of the trust signal. If the site is careful, it should be careful for everyone.

## 10. Performance Optimization Strategy

Performance choices:

- minimal dependency set
- no animation library
- no heavy asset pipeline
- CSS-driven visuals
- single spotlight effect using CSS variables
- no unnecessary rerender loops

Why:

Speed reinforces competence. A lean interface feels more serious than a visually busy one.

## 11. CSS Architecture Recommendations

The CSS is centralized in one file for now because the system is small and the design language is tightly controlled.

It uses:

- CSS custom properties for design tokens
- component-level classes
- responsive media queries
- motion and color controls in one place

Why:

This keeps the visual language consistent and avoids premature abstraction.

## 12. State Management Recommendations

Only minimal state is used:

- active section state for scroll spy

No broader client state is needed.

Why:

Extra state would add complexity without improving the user experience.

## 13. File/Folder Structure Recommendations

Current structure:

```text
src/
  components/
    Section.tsx
    TimelineRow.tsx
    WorkCard.tsx
  content.ts
  App.tsx
  main.tsx
  styles.css
```

Why:

The content, reusable view pieces, and shell are separated cleanly enough to stay maintainable without overengineering.

## 14. Reusable Component System

Reusable primitives:

- `Section` for labeled editorial sections
- `WorkCard` for repeated system notes
- `TimelineRow` for compact progression records

Why:

The site needs repetition with consistency. A small set of primitives ensures that repeated content feels like one system.

## 15. Typography Implementation Strategy

Typography is implemented with CSS tokens for:

- Inter as the body and display family
- JetBrains Mono for labels, tags, timeline years, and metadata

The scale is explicit rather than fluid beyond responsive limits.

Why:

Predictable typography produces a calmer reading experience and preserves the editorial tone.

## 16. Spacing Implementation Strategy

Spacing is tokenized through root variables:

- section spacing
- tighter section spacing
- card padding

Why:

Spacing is part of pacing. Hardcoded randomness would weaken the editorial rhythm.

## 17. Visual Consistency Enforcement Rules

Consistency is enforced through:

- one palette
- one spacing system
- one hover language
- one border language
- one type scale
- one card style

Why:

Consistency makes the site feel authored rather than assembled.

## 18. Error Prevention Strategy

The implementation avoids common issues by:

- using semantic HTML
- keeping layout simple
- avoiding deep nesting
- using `IntersectionObserver` instead of scroll listeners
- respecting reduced motion
- avoiding layout-shifting animations

Why:

Stability is part of trust. The site should feel solid, not fragile.

## 19. Maintainability Principles

Maintainability comes from:

- readable naming
- content in one file
- reusable section primitives
- minimal state
- minimal dependencies

Why:

The codebase should be easy to revise as the identity and project archive mature.

## 20. Explicit Implementation Anti-Pattern Blacklist

Do not add:

- dashboards
- analytics widgets
- floating assistants
- AI chat popups
- glowing particles
- matrix effects
- cyberpunk aesthetics
- visual clutter
- gamification
- skill bars
- rotating carousels
- auto-playing effects
- excessive gradients
- fake metrics
- fake testimonials
- fake activity feeds
- heavy animation systems
- unnecessary prop abstractions
- giant monolithic components

Why:

These patterns would move the site away from careful identity and toward spectacle.

## Implementation Note

The work section is intentionally framed as working notes rather than inflated project claims, because no detailed project inventory was provided. That choice is deliberate: it keeps the page truthful while still demonstrating technical judgment.
