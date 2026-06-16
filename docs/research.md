# Research & UX Discovery

## Project Overview

The **Student Learning Dashboard** is a single-page web application designed to help students centralize and manage their academic life. It consolidates course information, assignment tracking, study progress, and deadline management into one cohesive, visually organized interface.

The application is built entirely with HTML5, CSS3, and vanilla JavaScript, following modern 2025 UI/UX standards including mobile-first responsive design, dark mode support, and strict accessibility compliance (WCAG).

---

## Problem Statement

Students juggling multiple courses often rely on a fragmented set of tools — paper planners, course portals, spreadsheets, sticky notes, and phone reminders — to track assignments, deadlines, and progress. This fragmentation leads to:

- Missed deadlines due to scattered information
- Difficulty visualizing overall academic progress
- No single place to check "what's due soon" at a glance
- Cognitive overload from switching between multiple platforms

**How might we create a single, accessible, visually clear space where students can see their entire academic workload and progress at a glance?**

---

## Target Users

### Primary Persona: "The Balancing Student"

- Full-time or part-time student enrolled in 3–6 courses
- Uses a mix of desktop and mobile devices throughout the day
- Juggles coursework with part-time work, extracurriculars, or family responsibilities
- Wants quick visual confirmation of what's due and how they're progressing
- May have visual, motor, or cognitive considerations that require accessible interfaces (keyboard navigation, screen readers, high contrast)

### Secondary Persona: "The Goal-Oriented Learner"

- Self-directed learner (bootcamp, online courses, or self-study)
- Sets personal weekly/monthly learning goals
- Values streaks, progress percentages, and visual feedback as motivation

---

## Empathy Map

### Says
- "I forgot that assignment was due today!"
- "I don't know how close I am to finishing this course."
- "I wish I could see everything in one place."
- "This site is hard to use on my phone."

### Thinks
- "Am I falling behind compared to where I should be?"
- "I hope I didn't miss anything important."
- "I need something simple — not another complicated app."

### Does
- Checks multiple tabs/apps to track assignments
- Writes deadlines on sticky notes or phone reminders
- Manually calculates how much of a course is left
- Switches between light and dark environments (day vs. night study sessions)

### Feels
- Overwhelmed by the number of tasks and deadlines
- Anxious about missing something important
- Motivated when progress is visible and tangible
- Frustrated by cluttered, inaccessible interfaces

---

## User Pain Points

1. **Fragmentation** — Course info, assignments, and deadlines live in different places.
2. **Lack of visual progress feedback** — Hard to tell "how far along" they are.
3. **Poor mobile experience** — Many academic tools are not mobile-friendly.
4. **Accessibility gaps** — Students using screen readers or keyboard navigation often face poorly labeled, non-semantic interfaces.
5. **No quick search** — Finding a specific course or assignment requires scrolling through long lists.
6. **Eye strain during long study sessions** — No dark mode option in many existing tools.

---

## How Might We (HMW) Statements

- **HMW** give students a single dashboard view of all their academic commitments?
- **HMW** make progress visually motivating without being overwhelming?
- **HMW** ensure the dashboard is fully usable via keyboard and screen reader?
- **HMW** help students quickly find a specific course or assignment?
- **HMW** reduce eye strain for students studying at night?
- **HMW** make the interface feel calm, warm, and encouraging rather than clinical?

---

## Design Goals

1. **Clarity** — Present academic information in a clean, scannable layout using cards, tables, and progress bars.
2. **Accessibility-First** — Meet WCAG standards with semantic HTML, ARIA labeling, keyboard support, and strong color contrast.
3. **Responsiveness** — Mobile-first design that scales gracefully from phone to desktop using CSS Grid and Flexbox.
4. **Warmth & Approachability** — Use a grounded, warm color palette (Mocha Mousse, Moonlit Grey, Ethereal Blue) to create a calm, encouraging atmosphere rather than a cold, corporate feel.
5. **Persistence** — Remember user preferences (dark mode) across sessions using `localStorage`.
6. **Performance & Simplicity** — No frameworks or external dependencies; fast load times and easy maintainability.
