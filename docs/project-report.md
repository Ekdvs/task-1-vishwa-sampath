# Project Report

## Student Learning Dashboard

---

## 1. Introduction

The Student Learning Dashboard is a fully responsive, accessible, single-page web application built to help students organize and track their academic workload. It provides a centralized view of courses, assignments, deadlines, and study progress, presented through a warm, modern, card-based interface. The project was built using only HTML5, CSS3, and vanilla JavaScript, with no external frameworks or libraries, demonstrating that production-quality, accessible interfaces can be achieved with foundational web technologies alone.

---

## 2. Objectives

- Design and build a mobile-first, fully responsive dashboard interface.
- Implement a warm, professional visual design system using a defined color palette and typography scale.
- Provide core academic management features: course tracking, assignment management, progress visualization, and deadline reminders.
- Implement client-side search and filtering without any backend or frameworks.
- Achieve WCAG-aligned accessibility through semantic HTML, ARIA attributes, keyboard support, and strong color contrast.
- Implement a persistent dark mode using `localStorage`.
- Produce complete supporting documentation (research, wireframes, design system, accessibility, and project reporting).

---

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic document structure, forms, tables |
| **CSS3** | Styling, responsive layout (Grid/Flexbox), custom properties, animations |
| **Vanilla JavaScript (ES6+)** | DOM manipulation, search/filter logic, theme persistence, dynamic rendering |
| **Google Fonts (Inter, Open Sans)** | Typography |
| **localStorage Web API** | Persisting dark mode preference |

No build tools, package managers, or frameworks were used — the project runs directly by opening `index.html` in a browser.

---

## 4. Development Process

The project followed a structured UX-driven workflow:

1. **Research & Discovery** — Defined the target user (a student managing multiple courses), identified pain points around fragmented tools and lack of visual progress feedback, and produced an empathy map and "How Might We" statements (see `research.md`).
2. **Wireframing** — Sketched ASCII wireframes for mobile, tablet, and desktop layouts to plan the responsive grid structure and navigation pattern (see `wireframe.md`).
3. **Design System Definition** — Established the color palette, typography scale (using `clamp()` for fluid sizing), spacing system, border radii, and shadow tokens as CSS custom properties (see `design-system.md`).
4. **Markup & Structure** — Built semantic HTML5 structure first, ensuring a logical heading hierarchy and landmark regions before any styling was applied.
5. **Styling** — Implemented mobile-first CSS using Grid for page-level layout and Flexbox for component-level alignment, with CSS variables enabling both light and dark themes from a single set of component styles.
6. **Interactivity** — Implemented modular vanilla JavaScript (IIFE pattern) for theme toggling, mobile navigation, notifications, search, filtering, and dynamic rendering of courses/assignments/deadlines from in-memory data.
7. **Accessibility Review** — Audited semantic structure, ARIA usage, focus management, and color contrast, documenting findings in `accessibility-report.md`.
8. **Documentation** — Authored the README and supporting docs for GitHub readiness.

---

## 5. Features Implemented

- **Dashboard Overview**: Live-updating stat cards for total courses, pending assignments, completed assignments, and upcoming deadlines.
- **Course Section**: Card-based display of enrolled courses with instructor name, progress percentage, and visual progress bar.
- **Assignment Manager**: Sortable table of assignments with title, course, due date, and status; status can be changed inline via dropdown, which updates overview stats in real time.
- **Status Filtering**: Filter assignments by All / Pending / In Progress / Completed using accessible toggle buttons.
- **Progress Tracking**: Visual progress bars for weekly study hours, learning goal completion, and overall course completion, plus an interactive weekly goals checklist.
- **Deadline Reminders**: Sorted list of upcoming deadlines with priority labels (High/Medium/Low) and color-coded left borders.
- **Global Search**: Single search input filters both courses and assignments simultaneously by name/title/instructor/course.
- **Dark Mode Toggle**: Persists user preference via `localStorage` and respects system preference (`prefers-color-scheme`) on first load.
- **Mobile Navigation**: Off-canvas sidebar with hamburger toggle, overlay backdrop, and full keyboard support (Escape to close).
- **Notifications Panel**: Dismissible dropdown panel showing sample notifications, with proper focus management.
- **Profile Section**: Displays user info, learning streak, and an editable preferences form with save confirmation.

---

## 6. Challenges

- **Achieving theme consistency without a framework**: Solved by defining all colors as CSS custom properties and overriding a small "surface" token set under `[data-theme="dark"]`, rather than duplicating component styles.
- **Keeping JavaScript modular without a module bundler**: Solved using the IIFE (Immediately Invoked Function Expression) module pattern to encapsulate each feature (theme, navigation, search, filters, rendering) while sharing data through a single scope.
- **Synchronizing search and filter state**: The global search affects both the courses grid and the assignments table simultaneously, while the assignments table also has its own status filter. This required both modules to read each other's current state when re-rendering.
- **Responsive table handling**: Tables don't reflow naturally on small screens. Solved by wrapping the table in a horizontally scrollable container while keeping column structure intact, with a `<caption>` for screen reader context.
- **Maintaining accessibility while adding interactivity**: Every interactive enhancement (sidebar drawer, notifications panel, dark mode) required corresponding ARIA state attributes and focus management to remain usable without a mouse.

---

## 7. Testing

- **Cross-breakpoint testing**: Verified layout integrity at common breakpoints (375px, 768px, 1024px, 1440px) using browser responsive design tools.
- **Keyboard-only navigation**: Tabbed through the entire interface to confirm all interactive elements are reachable and operable, with visible focus indicators throughout.
- **Dark mode persistence**: Verified theme preference persists across page reloads via `localStorage`, and that toggling updates `aria-pressed` and icon state correctly.
- **Search & filter logic**: Tested search terms against course names/instructors and assignment titles/courses, confirming empty-state messages display correctly when no results match.
- **Status updates**: Verified changing an assignment's status via the dropdown updates both the status pill and the overview stat counts immediately.
- **Reduced motion**: Verified that enabling "reduce motion" at the OS level disables transitions across the interface.

---

## 8. Accessibility

A full accessibility audit is documented in `accessibility-report.md`. Key highlights:

- Semantic landmark structure (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`) with a correct, non-skipping heading hierarchy.
- Skip-to-content link for bypassing repetitive navigation.
- Full keyboard operability for all interactive components, including custom widgets like the mobile sidebar and notifications panel.
- ARIA attributes (`aria-expanded`, `aria-pressed`, `aria-controls`, `aria-label`, `role="progressbar"`, `role="region"`) used appropriately to expose state and purpose to assistive technology.
- Color contrast ratios meeting or exceeding WCAG AA (and largely AAA) across both light and dark themes.
- Status and priority information conveyed through text labels in addition to color.

---

## 9. Future Improvements

- Connect to a backend API or database to persist courses, assignments, and progress beyond `localStorage`/in-memory state.
- Add the ability for users to add, edit, and delete their own courses and assignments through forms.
- Implement `aria-live` regions for dynamic search/filter result announcements.
- Add calendar/timeline visualization for deadlines.
- Add user authentication and multi-user support.
- Introduce automated testing (unit tests for JS modules, accessibility testing with axe-core).
- Add internationalization (i18n) support for multiple languages.
- Provide data export (e.g., CSV/PDF) of assignments and progress reports.

---

## 10. Conclusion

The Student Learning Dashboard successfully demonstrates that a polished, accessible, and fully responsive academic productivity tool can be built using only HTML5, CSS3, and vanilla JavaScript. By following a structured UX process — research, wireframing, design systemization, semantic markup, and accessibility auditing — the project delivers a cohesive experience across mobile, tablet, and desktop devices, with persistent theming and real-time interactivity, all while maintaining strict adherence to accessibility best practices.
