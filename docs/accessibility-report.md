# Accessibility Report

This document outlines the accessibility decisions made throughout the Student Learning Dashboard, with reference to WCAG 2.1 success criteria (targeting AA, with several AAA-level enhancements).

---

## 1. Semantic HTML Structure

The page uses meaningful HTML5 elements rather than generic `<div>` soup:

- `<header>` — site header containing branding, search, and global actions
- `<nav>` — sidebar navigation, wrapped in `<aside>` with `aria-label="Main navigation"`
- `<main id="main-content">` — primary content region, target of the skip link
- `<section>` — each major dashboard area (Overview, Courses, Assignments, Progress, Deadlines, Profile), each with `aria-labelledby` pointing to its heading
- `<article>` — individual self-contained items: stat cards, course cards, progress cards
- `<table>` with `<caption>`, `<thead>`, `<tbody>`, and `<th scope="col">` — the assignments table
- `<footer>` — site footer

### Heading Hierarchy

- `<h1>` — "Learning Dashboard" (site title, in header)
- `<h2>` — one per major section (Dashboard Overview, My Courses, Assignment Manager, Progress Tracking, Upcoming Deadlines, Profile)
- `<h3>` — sub-components within sections (individual course names, progress card titles, profile form title)
- `<h4>` — nested sub-headings (e.g., "Preferences" within the profile form)

This creates a single, logical, non-skipping hierarchy that screen reader users can navigate via heading shortcuts (WCAG 1.3.1, 2.4.6).

---

## 2. Skip-to-Content Link

A `.skip-link` is the first focusable element in the document:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

It is visually hidden off-screen by default and becomes visible when focused (via keyboard Tab), allowing keyboard and screen reader users to bypass the header and sidebar navigation and jump directly to the main content (WCAG 2.4.1 — Bypass Blocks).

---

## 3. Keyboard Navigation

- All interactive elements (links, buttons, inputs, checkboxes, selects) are natively focusable HTML elements — no custom widgets built from non-interactive elements like `<div>` or `<span>`.
- **Hamburger menu**: toggles `aria-expanded` and can be operated with Enter/Space (native `<button>` behavior). Pressing `Escape` while the sidebar is open closes it and returns focus to the hamburger button.
- **Notifications panel**: opens on click/Enter/Space, can be closed via a dedicated close button, clicking outside, or pressing `Escape` — in all cases focus returns to the notification bell button.
- **Filter buttons**: implemented as `<button>` elements with `aria-pressed` reflecting selection state, fully operable via keyboard.
- **Assignment status dropdowns**: native `<select>` elements, fully keyboard-operable with arrow keys and Enter.
- **Sidebar links**: standard anchor links with `href="#section-id"`, navigable via Tab and activatable via Enter. JavaScript enhances them with smooth scrolling but does not remove native link behavior.

---

## 4. Focus Management

- A global `:focus-visible` style applies a clear `3px solid` blue outline with `2px` offset to all interactive elements (`a`, `button`, `input`, `[tabindex]`), ensuring focus is always visible (WCAG 2.4.7).
- When the notifications panel opens, focus moves to its close button; when closed, focus returns to the notification bell — preventing keyboard users from losing their place (WCAG 2.4.3 — Focus Order).
- When the mobile sidebar is closed via Escape, focus returns to the hamburger button.
- Section headings receive `tabindex="-1"` and programmatic focus when navigated to via sidebar links, so screen reader users land at the correct content after a smooth scroll.

---

## 5. ARIA Usage

| Element | ARIA Attributes | Purpose |
|---|---|---|
| Hamburger button | `aria-label="Toggle navigation menu"`, `aria-expanded`, `aria-controls="sidebar"` | Describes purpose and current state of the mobile menu |
| Notification bell | `aria-label="Open notifications"`, `aria-haspopup="true"`, `aria-expanded`, `aria-controls="notifPanel"` | Identifies the button as a popup trigger and exposes state |
| Theme toggle | `aria-label="Toggle dark mode"`, `aria-pressed` | Communicates the current theme state as a toggle |
| Notifications panel | `role="region"`, `aria-label="Notifications"` | Identifies the panel as a distinct landmark region |
| Progress bars | `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-label` | Exposes progress value and meaning to assistive technology |
| Filter buttons | `aria-pressed` (true/false) | Indicates which filter is currently active |
| Sections | `aria-labelledby` referencing their heading `id` | Associates each landmark region with its visible heading |
| Decorative icons/emojis | `aria-hidden="true"` | Hides redundant decorative glyphs from assistive technology |
| Visually hidden labels | `.visually-hidden` class | Provides accessible names for inputs without visible labels (e.g., search input, table caption, per-row status selects) |

---

## 6. Forms & Labels

- Every form input has an associated `<label>`, either visible (Profile form) or visually hidden but present in the DOM (global search, per-assignment status select).
- The search input uses `type="search"` for correct semantics and mobile keyboard optimization.
- The profile form uses appropriate input types (`email`, `number`) to trigger correct virtual keyboards and built-in browser validation.
- Form submission provides a visible confirmation message with `role="status"`, so screen readers announce the result without requiring focus to move (WCAG 4.1.3 — Status Messages).

---

## 7. Color Contrast Compliance

- Primary text color (`#2D2D2D`) on the light background (`#F2F0EA`) and dark background (`#1E1C1A` with `#F2F0EA` text) both exceed **7:1**, meeting AAA for normal text (WCAG 1.4.6).
- Status pills and priority labels combine a tinted background with full-strength text color, maintaining at least **4.5:1** contrast for the text itself.
- Color is never the sole means of conveying information: status and priority are always paired with text labels (WCAG 1.4.1).
- Focus indicators (`--color-blue` outline) maintain strong contrast against both light and dark surfaces.

---

## 8. Responsive Accessibility

- **Touch targets**: All buttons and interactive icons are at least `2.5rem` (40px) in height/width, meeting minimum touch target recommendations.
- **Text resizing**: Typography uses `rem` units and `clamp()`, allowing text to scale with user font-size preferences and browser zoom without breaking layout.
- **Reflow**: At all breakpoints, content reflows into a single column on narrow viewports — no horizontal scrolling is required for the page itself (only the assignments table scrolls horizontally within its own container, which is announced via its `<caption>`).
- **Reduced motion**: A `prefers-reduced-motion: reduce` media query disables all transitions and animations for users who have indicated this preference at the OS level (WCAG 2.3.3).
- **Dark mode**: Provided as a user-controlled, persisted preference (via `localStorage`) to support users with light sensitivity, in addition to respecting `prefers-color-scheme` on first visit.

---

## 9. Testing Notes

- Verified logical tab order through header → sidebar → main content sections → footer.
- Verified all interactive elements are reachable and operable using only the keyboard (Tab, Shift+Tab, Enter, Space, Escape, arrow keys for selects/checkboxes).
- Verified heading structure using browser accessibility tree inspection (no skipped levels).
- Verified color contrast ratios using standard contrast calculation against the defined design tokens.
- Verified that dynamic content updates (search filtering, status changes, stat counts) update the DOM in place without requiring a page reload, preserving user context.

---

## 10. Future Accessibility Enhancements

- Add live region (`aria-live="polite"`) announcements when search filtering changes the number of visible results.
- Add a user-facing "reduced motion" toggle independent of OS settings.
- Conduct testing with real screen reader software (NVDA, VoiceOver, JAWS) across browsers.
- Add high-contrast theme option beyond the current light/dark modes.
