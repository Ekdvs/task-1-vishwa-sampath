/* ==========================================================================
   Student Learning Dashboard — Application Logic
   Vanilla JavaScript — Modular structure using IIFE pattern
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Data Store
     ------------------------------------------------------------------------ */
  const courses = [
    {
      id: 'c1',
      name: 'Introduction to JavaScript',
      instructor: 'Dr. Maya Chen',
      progress: 85,
      tag: 'CS101'
    },
    {
      id: 'c2',
      name: 'Modern CSS & Layout Systems',
      instructor: 'Prof. Daniel Reeves',
      progress: 60,
      tag: 'CS204'
    },
    {
      id: 'c3',
      name: 'React Fundamentals',
      instructor: 'Dr. Aisha Patel',
      progress: 40,
      tag: 'CS305'
    },
    {
      id: 'c4',
      name: 'Web Accessibility Principles',
      instructor: 'Prof. Sam Okafor',
      progress: 95,
      tag: 'CS210'
    }
  ];

  const assignments = [
    {
      id: 'a1',
      title: 'Array Methods Practice Set',
      course: 'Introduction to JavaScript',
      dueDate: '2025-06-15',
      status: 'completed'
    },
    {
      id: 'a2',
      title: 'CSS Grid Layout Challenge',
      course: 'Modern CSS & Layout Systems',
      dueDate: '2025-06-18',
      status: 'in-progress'
    },
    {
      id: 'a3',
      title: 'React Portfolio Project',
      course: 'React Fundamentals',
      dueDate: '2025-06-20',
      status: 'pending'
    },
    {
      id: 'a4',
      title: 'Accessibility Audit Report',
      course: 'Web Accessibility Principles',
      dueDate: '2025-06-22',
      status: 'pending'
    },
    {
      id: 'a5',
      title: 'DOM Manipulation Quiz',
      course: 'Introduction to JavaScript',
      dueDate: '2025-06-10',
      status: 'completed'
    },
    {
      id: 'a6',
      title: 'Responsive Navbar Build',
      course: 'Modern CSS & Layout Systems',
      dueDate: '2025-06-25',
      status: 'in-progress'
    }
  ];

  const deadlines = [
    {
      id: 'd1',
      title: 'React Portfolio Project',
      course: 'React Fundamentals',
      dueDate: '2025-06-20',
      priority: 'high',
      icon: '🚨'
    },
    {
      id: 'd2',
      title: 'Accessibility Audit Report',
      course: 'Web Accessibility Principles',
      dueDate: '2025-06-22',
      priority: 'medium',
      icon: '📋'
    },
    {
      id: 'd3',
      title: 'Responsive Navbar Build',
      course: 'Modern CSS & Layout Systems',
      dueDate: '2025-06-25',
      priority: 'low',
      icon: '🧩'
    }
  ];

  /* ------------------------------------------------------------------------
     2. Utility Functions
     ------------------------------------------------------------------------ */
  function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  function statusLabel(status) {
    const map = {
      pending: 'Pending',
      'in-progress': 'In Progress',
      completed: 'Completed'
    };
    return map[status] || status;
  }

  function statusClass(status) {
    return `status-pill--${status}`;
  }

  function priorityClass(priority) {
    return `priority-label--${priority}`;
  }

  /* ------------------------------------------------------------------------
     3. Theme (Dark Mode) Module
     ------------------------------------------------------------------------ */
  const ThemeModule = (function () {
    const STORAGE_KEY = 'dashboard-theme';
    const root = document.documentElement;
    const toggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    function applyTheme(theme) {
      if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        toggleBtn.setAttribute('aria-pressed', 'true');
      } else {
        root.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        toggleBtn.setAttribute('aria-pressed', 'false');
      }
    }

    function getStoredTheme() {
      return localStorage.getItem(STORAGE_KEY);
    }

    function setStoredTheme(theme) {
      localStorage.setItem(STORAGE_KEY, theme);
    }

    function toggle() {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      setStoredTheme(next);
    }

    function init() {
      const stored = getStoredTheme();
      if (stored) {
        applyTheme(stored);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
      }
      toggleBtn.addEventListener('click', toggle);
    }

    return { init };
  })();

  /* ------------------------------------------------------------------------
     4. Mobile Navigation Module
     ------------------------------------------------------------------------ */
  const NavModule = (function () {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const sidebarLinks = document.querySelectorAll('.sidebar__link');

    function openSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('visible');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
    }

    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }

    function toggleSidebar() {
      const isOpen = sidebar.classList.contains('open');
      if (isOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    }

    function setActiveLink(targetLink) {
      sidebarLinks.forEach((link) => link.classList.remove('active'));
      targetLink.classList.add('active');
    }

    function init() {
      hamburgerBtn.addEventListener('click', toggleSidebar);
      overlay.addEventListener('click', closeSidebar);

      sidebarLinks.forEach((link) => {
        link.addEventListener('click', () => {
          setActiveLink(link);
          if (window.innerWidth < 1024) {
            closeSidebar();
          }
        });
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
          closeSidebar();
          hamburgerBtn.focus();
        }
      });
    }

    return { init };
  })();

  /* ------------------------------------------------------------------------
     5. Notifications Module
     ------------------------------------------------------------------------ */
  const NotificationsModule = (function () {
    const notifBtn = document.getElementById('notifBtn');
    const notifPanel = document.getElementById('notifPanel');
    const closeBtn = document.getElementById('closeNotif');

    function open() {
      notifPanel.hidden = false;
      notifBtn.setAttribute('aria-expanded', 'true');
      closeBtn.focus();
    }

    function close() {
      notifPanel.hidden = true;
      notifBtn.setAttribute('aria-expanded', 'false');
    }

    function toggle() {
      if (notifPanel.hidden) {
        open();
      } else {
        close();
      }
    }

    function init() {
      notifBtn.addEventListener('click', toggle);
      closeBtn.addEventListener('click', () => {
        close();
        notifBtn.focus();
      });

      document.addEventListener('click', (e) => {
        if (
          !notifPanel.hidden &&
          !notifPanel.contains(e.target) &&
          !notifBtn.contains(e.target)
        ) {
          close();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !notifPanel.hidden) {
          close();
          notifBtn.focus();
        }
      });
    }

    return { init };
  })();

  /* ------------------------------------------------------------------------
     6. Render Module — builds dynamic DOM content
     ------------------------------------------------------------------------ */
  const RenderModule = (function () {
    const coursesGrid = document.getElementById('coursesGrid');
    const coursesEmpty = document.getElementById('coursesEmpty');
    const assignmentsBody = document.getElementById('assignmentsBody');
    const assignmentsEmpty = document.getElementById('assignmentsEmpty');
    const deadlinesList = document.getElementById('deadlinesList');

    function renderCourses(filterText = '') {
      const term = filterText.trim().toLowerCase();
      const filtered = courses.filter((course) =>
        course.name.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term)
      );

      coursesGrid.innerHTML = '';

      if (filtered.length === 0) {
        coursesEmpty.hidden = false;
      } else {
        coursesEmpty.hidden = true;
        filtered.forEach((course) => {
          const card = document.createElement('article');
          card.className = 'course-card';
          card.innerHTML = `
            <div class="course-card__header">
              <h3 class="course-card__name">${course.name}</h3>
              <span class="course-card__tag">${course.tag}</span>
            </div>
            <p class="course-card__instructor">Instructor: ${course.instructor}</p>
            <div>
              <div class="course-card__progress-label">
                <span>Progress</span>
                <span>${course.progress}%</span>
              </div>
              <div class="progress-bar" role="progressbar" aria-valuenow="${course.progress}" aria-valuemin="0" aria-valuemax="100" aria-label="${course.name} progress ${course.progress} percent">
                <div class="progress-bar__fill" style="width: ${course.progress}%;"></div>
              </div>
            </div>
          `;
          coursesGrid.appendChild(card);
        });
      }
    }

    function renderAssignments(filterStatus = 'all', searchTerm = '') {
      const term = searchTerm.trim().toLowerCase();

      const filtered = assignments.filter((item) => {
        const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
        const matchesSearch =
          item.title.toLowerCase().includes(term) ||
          item.course.toLowerCase().includes(term);
        return matchesStatus && matchesSearch;
      });

      assignmentsBody.innerHTML = '';

      if (filtered.length === 0) {
        assignmentsEmpty.hidden = false;
      } else {
        assignmentsEmpty.hidden = true;

        filtered.forEach((item) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${item.title}</td>
            <td>${item.course}</td>
            <td>${formatDate(item.dueDate)}</td>
            <td>
              <span class="status-pill ${statusClass(item.status)}">${statusLabel(item.status)}</span>
            </td>
            <td>
              <label class="visually-hidden" for="status-${item.id}">Change status for ${item.title}</label>
              <select class="status-select" id="status-${item.id}" data-id="${item.id}">
                <option value="pending" ${item.status === 'pending' ? 'selected' : ''}>Pending</option>
                <option value="in-progress" ${item.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
                <option value="completed" ${item.status === 'completed' ? 'selected' : ''}>Completed</option>
              </select>
            </td>
          `;
          assignmentsBody.appendChild(row);
        });

        // Attach change listeners for status updates
        assignmentsBody.querySelectorAll('.status-select').forEach((select) => {
          select.addEventListener('change', (e) => {
            const id = e.target.dataset.id;
            const newStatus = e.target.value;
            const assignment = assignments.find((a) => a.id === id);
            if (assignment) {
              assignment.status = newStatus;
              updateStats();
              const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
              const search = document.getElementById('globalSearch').value;
              renderAssignments(activeFilter, search);
            }
          });
        });
      }
    }

    function renderDeadlines() {
      deadlinesList.innerHTML = '';

      const sorted = [...deadlines].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

      sorted.forEach((item) => {
        const li = document.createElement('li');
        li.className = `deadline-item deadline-item--${item.priority}`;
        li.innerHTML = `
          <span class="deadline-item__icon" aria-hidden="true">${item.icon}</span>
          <div class="deadline-item__content">
            <p class="deadline-item__title">${item.title}</p>
            <p class="deadline-item__meta">${item.course} &middot; Due ${formatDate(item.dueDate)}</p>
          </div>
          <span class="priority-label ${priorityClass(item.priority)}">${item.priority}</span>
        `;
        deadlinesList.appendChild(li);
      });
    }

    function updateStats() {
      const totalCourses = courses.length;
      const pending = assignments.filter((a) => a.status === 'pending').length;
      const completed = assignments.filter((a) => a.status === 'completed').length;
      const upcomingDeadlines = deadlines.length;

      document.getElementById('statCourses').textContent = totalCourses;
      document.getElementById('statPending').textContent = pending;
      document.getElementById('statCompleted').textContent = completed;
      document.getElementById('statDeadlines').textContent = upcomingDeadlines;
    }

    function renderAll() {
      renderCourses();
      renderAssignments();
      renderDeadlines();
      updateStats();
    }

    return {
      renderAll,
      renderCourses,
      renderAssignments,
      updateStats
    };
  })();

  /* ------------------------------------------------------------------------
     7. Search Module
     ------------------------------------------------------------------------ */
  const SearchModule = (function () {
    const searchInput = document.getElementById('globalSearch');

    function handleInput(e) {
      const term = e.target.value;
      const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
      RenderModule.renderCourses(term);
      RenderModule.renderAssignments(activeFilter, term);
    }

    function init() {
      searchInput.addEventListener('input', handleInput);
    }

    return { init };
  })();

  /* ------------------------------------------------------------------------
     8. Filter Module (Assignment status filters)
     ------------------------------------------------------------------------ */
  const FilterModule = (function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('globalSearch');

    function setActive(button) {
      filterButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
    }

    function init() {
      filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
          setActive(button);
          const filter = button.dataset.filter;
          const term = searchInput.value;
          RenderModule.renderAssignments(filter, term);
        });
      });
    }

    return { init };
  })();

  /* ------------------------------------------------------------------------
     9. Profile Form Module
     ------------------------------------------------------------------------ */
  const ProfileModule = (function () {
    const form = document.querySelector('.profile-form');
    const nameInput = document.getElementById('displayName');
    const profileNameDisplay = document.querySelector('.profile-card__name');
    const profileAvatar = document.querySelector('.profile-card__avatar');

    function getInitials(name) {
      return name
        .trim()
        .split(/\s+/)
        .map((part) => part[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();
    }

    function handleSubmit(e) {
      e.preventDefault();
      const newName = nameInput.value.trim();
      if (newName) {
        profileNameDisplay.textContent = newName;
        profileAvatar.textContent = getInitials(newName);
      }

      const confirmation = document.createElement('p');
      confirmation.textContent = 'Preferences saved successfully.';
      confirmation.style.color = 'var(--color-success)';
      confirmation.style.marginTop = '0.5rem';
      confirmation.setAttribute('role', 'status');

      const existing = form.querySelector('.save-confirmation');
      if (existing) existing.remove();

      confirmation.classList.add('save-confirmation');
      form.appendChild(confirmation);

      setTimeout(() => confirmation.remove(), 3000);
    }

    function init() {
      form.addEventListener('submit', handleSubmit);
    }

    return { init };
  })();

  /* ------------------------------------------------------------------------
     10. Smooth Scroll for Sidebar Links
     ------------------------------------------------------------------------ */
  const ScrollModule = (function () {
    function init() {
      document.querySelectorAll('.sidebar__link').forEach((link) => {
        link.addEventListener('click', (e) => {
          const targetId = link.getAttribute('href');
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
          }
        });
      });
    }
    return { init };
  })();

  /* ------------------------------------------------------------------------
     11. Initialize Application
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    ThemeModule.init();
    NavModule.init();
    NotificationsModule.init();
    SearchModule.init();
    FilterModule.init();
    ProfileModule.init();
    ScrollModule.init();
    RenderModule.renderAll();
  });
})();
