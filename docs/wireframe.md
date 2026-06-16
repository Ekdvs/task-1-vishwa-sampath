# Wireframes

This document presents ASCII wireframes for the Student Learning Dashboard across three breakpoints: **Mobile (0px+)**, **Tablet (768px+)**, and **Desktop (1024px+)**.

---

## Mobile Wireframe (0px – 767px)

At mobile widths, the sidebar is hidden by default and accessible via a hamburger menu. The header collapses the search bar into an icon (or hides it), and content stacks vertically in a single column.

```
┌─────────────────────────────────┐
│ [☰]  📚 Learning Dashboard  [🔔][🌙] │  <- Header
├─────────────────────────────────┤
│  Dashboard Overview               │
│ ┌───────────────────────────────┐ │
│ │ 📘  Total Courses          4   │ │
│ └───────────────────────────────┘ │
│ ┌───────────────────────────────┐ │
│ │ 📝  Pending Assignments     2  │ │
│ └───────────────────────────────┘ │
│ ┌───────────────────────────────┐ │
│ │ ✅  Completed                2  │ │
│ └───────────────────────────────┘ │
│ ┌───────────────────────────────┐ │
│ │ ⏰  Upcoming Deadlines       3  │ │
│ └───────────────────────────────┘ │
├─────────────────────────────────┤
│  My Courses                       │
│ ┌───────────────────────────────┐ │
│ │ Intro to JavaScript    [CS101] │ │
│ │ Instructor: Dr. Maya Chen      │ │
│ │ Progress  85%                  │ │
│ │ [██████████████░░░]            │ │
│ └───────────────────────────────┘ │
│ ┌───────────────────────────────┐ │
│ │ Modern CSS & Layout   [CS204]  │ │
│ │ ...                            │ │
│ └───────────────────────────────┘ │
├─────────────────────────────────┤
│  Assignment Manager                │
│ [All][Pending][In Progress][Done] │
│ ┌───────────────────────────────┐ │
│ │ Title | Course | Due | Status │ │
│ │ (scrollable table)             │ │
│ └───────────────────────────────┘ │
├─────────────────────────────────┤
│  Footer                           │
└─────────────────────────────────┘

  SIDEBAR (slides in from left when ☰ tapped)
  ┌───────────────────┐
  │ 🏠 Overview        │
  │ 📘 Courses         │
  │ 📝 Assignments     │
  │ 📊 Progress        │
  │ ⏰ Deadlines        │
  │ 👤 Profile         │
  └───────────────────┘
```

---

## Tablet Wireframe (768px – 1023px)

At tablet widths, the header search bar becomes visible. The sidebar remains an off-canvas drawer (toggled via hamburger), but card grids begin to display two columns.

```
┌──────────────────────────────────────────────────┐
│ [☰] 📚 Learning Dashboard  [🔍 Search...] [🔔][🌙] │
├──────────────────────────────────────────────────┤
│  Dashboard Overview                                │
│ ┌─────────────────┐ ┌─────────────────┐           │
│ │ 📘 Courses   4   │ │ 📝 Pending   2   │           │
│ └─────────────────┘ └─────────────────┘           │
│ ┌─────────────────┐ ┌─────────────────┐           │
│ │ ✅ Completed 2   │ │ ⏰ Deadlines 3   │           │
│ └─────────────────┘ └─────────────────┘           │
├──────────────────────────────────────────────────┤
│  My Courses                                        │
│ ┌─────────────────┐ ┌─────────────────┐           │
│ │ Course Card 1    │ │ Course Card 2    │           │
│ └─────────────────┘ └─────────────────┘           │
│ ┌─────────────────┐ ┌─────────────────┐           │
│ │ Course Card 3    │ │ Course Card 4    │           │
│ └─────────────────┘ └─────────────────┘           │
├──────────────────────────────────────────────────┤
│  Assignment Manager                                 │
│ [All] [Pending] [In Progress] [Completed]          │
│ ┌────────────────────────────────────────────────┐ │
│ │ Title       Course       Due Date   Status      │ │
│ │ -------------------------------------------     │ │
│ │ row...                                          │ │
│ └────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────┤
│  Progress Tracking                                  │
│ ┌─────────────────┐ ┌─────────────────┐           │
│ │ Weekly Progress  │ │ Goal Completion  │           │
│ └─────────────────┘ └─────────────────┘           │
├──────────────────────────────────────────────────┤
│  Footer                                            │
└──────────────────────────────────────────────────┘
```

---

## Desktop Wireframe (1024px+)

At desktop widths, the sidebar becomes a permanent, sticky left-hand navigation column (hamburger hidden). Content area uses multi-column grids (3–4 columns for stat cards and course cards).

```
┌────┬───────────────────────────────────────────────────────────┐
│    │ 📚 Learning Dashboard      [🔍 Search courses...]  [🔔][🌙] │
│ S  ├───────────────────────────────────────────────────────────┤
│ I  │  Dashboard Overview                                         │
│ D  │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│ E  │ │📘Courses4│ │📝Pending2│ │✅Done   2│ │⏰Deadln 3│         │
│ B  │ └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│ A  ├───────────────────────────────────────────────────────────┤
│ R  │  My Courses                                                  │
│    │ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                 │
│ 🏠 │ │Course 1│ │Course 2│ │Course 3│ │Course 4│                 │
│ 📘 │ └────────┘ └────────┘ └────────┘ └────────┘                 │
│ 📝 ├───────────────────────────────────────────────────────────┤
│ 📊 │  Assignment Manager        [All][Pending][In Progress][Done] │
│ ⏰ │ ┌───────────────────────────────────────────────────────┐   │
│ 👤 │ │ Title         Course        Due Date    Status   Edit │   │
│    │ │ ------------------------------------------------------ │   │
│    │ │ row...                                                  │   │
│    │ └───────────────────────────────────────────────────────┘   │
│    ├───────────────────────────────────────────────────────────┤
│    │  Progress Tracking                                          │
│    │ ┌──────────┐ ┌──────────┐ ┌──────────┐                      │
│    │ │ Weekly   │ │ Goals    │ │ Overall  │                      │
│    │ └──────────┘ └──────────┘ └──────────┘                      │
│    ├───────────────────────────────────────────────────────────┤
│    │  Upcoming Deadlines        |  Profile                       │
│    │ ┌─────────────────────┐   |  ┌────────────────────────┐    │
│    │ │ Deadline item 1      │   |  │ Avatar / Name / Email   │    │
│    │ │ Deadline item 2      │   |  │ Streak / Preferences    │    │
│    │ │ Deadline item 3      │   |  └────────────────────────┘    │
│    │ └─────────────────────┘   |                                 │
│    ├───────────────────────────────────────────────────────────┤
│    │  Footer                                                      │
└────┴───────────────────────────────────────────────────────────┘
```

---

## Layout Notes

- **Header**: Sticky at top across all breakpoints. Contains hamburger (mobile/tablet only), brand/logo, search bar (hidden on mobile, visible from 768px+), notification bell, and dark mode toggle.
- **Sidebar**: Off-canvas drawer on mobile/tablet (slides in from left, overlay behind it), permanent sticky column on desktop (1024px+).
- **Stat Cards**: 1 column on mobile, 2 columns on tablet, 4 columns on desktop (CSS Grid with `auto-fit`/`minmax`).
- **Course Cards**: 1 column on mobile, 2 columns on tablet, 3–4 columns on desktop.
- **Assignments Table**: Horizontally scrollable on small screens to preserve column structure without breaking layout.
- **Progress & Deadlines**: Stack vertically on mobile, arrange in grid/columns on larger screens.
