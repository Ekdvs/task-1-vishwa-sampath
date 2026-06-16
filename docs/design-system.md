# Design System

This document defines the visual language of the Student Learning Dashboard: colors, typography, spacing, radii, shadows, and component rules. All values are implemented as CSS custom properties (variables) in `css/style.css` for consistency and easy theming.

---

## 1. Color Palette

### Theme: Warm, Grounded, Professional

| Token | Hex | Usage |
|---|---|---|
| `--color-mocha` | `#A47864` | Primary accent — active nav links, course tags, progress bars, avatar background |
| `--color-mocha-dark` | `#8a6450` | Hover state for mocha elements |
| `--color-blue` | `#5A8DEE` | Secondary accent — links, focus states, primary buttons, "in progress" status |
| `--color-blue-dark` | `#4674cf` | Hover state for blue buttons |
| `--color-moonlit` | `#F2F0EA` | Light mode background |
| `--color-text` | `#2D2D2D` | Primary text color (light mode) |
| `--color-white` | `#FFFFFF` | Card backgrounds (light mode), text on colored backgrounds |
| `--color-success` | `#22C55E` | Completed status, success progress bars |
| `--color-warning` | `#F59E0B` | Pending status, medium priority |
| `--color-danger` | `#EF4444` | High priority deadlines, notification badge |

### Dark Mode Surface Tokens

| Token | Value | Usage |
|---|---|---|
| `--surface-bg` | `#1E1C1A` | Page background |
| `--surface-card` | `#2A2724` | Card/table backgrounds |
| `--surface-border` | `#3D3935` | Borders and dividers |
| `--surface-text` | `#F2F0EA` | Primary text |
| `--surface-text-muted` | `#B3AFA8` | Secondary/muted text |
| `--surface-hover` | `#34302C` | Hover backgrounds |

### Contrast Compliance

- Body text (`#2D2D2D` on `#F2F0EA`) achieves a contrast ratio of approximately **11.6:1** (AAA).
- Dark mode text (`#F2F0EA` on `#1E1C1A`) achieves approximately **13.8:1** (AAA).
- All status pills and priority labels use color + text label together (never color alone) to convey meaning, satisfying WCAG 1.4.1 (Use of Color).
- Interactive elements maintain a minimum 3:1 contrast against adjacent colors for non-text contrast (WCAG 1.4.11).

---

## 2. Typography

| Role | Font Family | Weights Used |
|---|---|---|
| Headings (`h1`–`h6`) | **Inter** | 700 |
| Body text, UI labels | **Open Sans** | 400, 500, 700 |

### Responsive Type Scale (using `clamp()`)

| Element | clamp() value | Behavior |
|---|---|---|
| Page/Section heading (`.section__title`) | `clamp(1.25rem, 1.1rem + 0.8vw, 1.75rem)` | Scales between 20px and 28px |
| Header title | `clamp(1rem, 0.85rem + 0.6vw, 1.4rem)` | Scales between 16px and ~22px |
| Stat card value | `clamp(1.5rem, 1.3rem + 1vw, 2rem)` | Scales between 24px and 32px |
| Base body font | `clamp(0.95rem, 0.9rem + 0.2vw, 1rem)` | Scales between ~15px and 16px |

### Typographic Rules

- Maximum of **two font families** (Inter for headings, Open Sans for body), loaded via Google Fonts with `display=swap` for performance.
- Line height of `1.6` for body text ensures readability.
- Heading line height of `1.25` for tighter visual hierarchy.

---

## 3. Spacing System

A consistent 4px-based spacing scale is used throughout:

| Token | Value | Pixels |
|---|---|---|
| `--space-1` | `0.25rem` | 4px |
| `--space-2` | `0.5rem` | 8px |
| `--space-3` | `0.75rem` | 12px |
| `--space-4` | `1rem` | 16px |
| `--space-5` | `1.5rem` | 24px |
| `--space-6` | `2rem` | 32px |
| `--space-7` | `3rem` | 48px |

**Usage guidance:**
- `--space-1`–`--space-2`: tight gaps (icon-to-text, badge padding)
- `--space-3`–`--space-4`: standard padding within components, form field gaps
- `--space-5`–`--space-6`: padding for cards and section spacing
- `--space-7`: major section margins, page-level vertical rhythm

---

## 4. Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `6px` | Small elements — inputs, buttons, badges |
| `--radius-md` | `10px` | Medium elements — icon buttons, sidebar links, stat icons |
| `--radius-lg` | `16px` | Cards, panels, tables |
| `--radius-full` | `999px` | Pills, avatars, progress bars, search input |

---

## 5. Shadows

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(45,45,45,0.06)` | Default resting state for cards |
| `--shadow-md` | `0 4px 12px rgba(45,45,45,0.08)` | Hover state for cards |
| `--shadow-lg` | `0 10px 30px rgba(45,45,45,0.12)` | Overlays — open sidebar drawer, notifications panel |

---

## 6. Component Rules

### Cards (Stat, Course, Progress, Profile)
- Background: `--surface-card`
- Border: `1px solid var(--surface-border)`
- Border radius: `--radius-lg`
- Padding: `--space-5`
- Shadow: `--shadow-sm` at rest, `--shadow-md` on hover with a subtle `translateY(-2px)` lift
- All transitions respect `prefers-reduced-motion`

### Buttons
- Primary (`.btn--primary`): blue background, white text, used for form submissions
- Small (`.btn--small`): mocha background, used for compact actions
- Filter buttons (`.filter-btn`): pill-shaped, neutral by default, blue when active, with `aria-pressed` state

### Status Pills & Priority Labels
- Always paired with text (never icon/color alone)
- Background uses a 15% opacity tint of the status color; text uses the full-strength color for contrast
- Rounded fully (`--radius-full`)

### Progress Bars
- Track: `--surface-border` background, `--radius-full`
- Fill: `--color-mocha` (default), `--color-success` or `--color-blue` for variants
- Always include `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-label`

### Forms
- Inputs use `--surface-bg` background, `1px solid var(--surface-border)`, `--radius-sm`
- Focus state changes border color to `--color-blue` and adds a visible outline via `:focus-visible`
- All inputs have associated `<label>` elements (visible or visually-hidden)

### Navigation (Sidebar)
- Active link: mocha background, white text
- Inactive link: transparent background, hover state uses `--surface-hover`
- Icons marked `aria-hidden="true"` since link text provides the accessible label

### Notifications Panel
- Positioned absolutely below the header, right-aligned
- `role="region"` with `aria-label="Notifications"`
- Dismissible via close button, outside click, or Escape key
