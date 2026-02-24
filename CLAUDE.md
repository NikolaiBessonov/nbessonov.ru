# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A static single-page resume/portfolio website. No build system, no package manager, no framework — pure HTML/CSS/JS served as-is.

**Preview locally:** open `index.html` in a browser, or run a local server:
```bash
python3 -m http.server 8080
```

## Architecture

Three files, each with a distinct role:

- **`index.html`** — static shell with section anchors (`#about`, `#skills`, `#experience`, `#projects`, `#certs`, `#contact`). Most sections are empty containers filled by JS on load.
- **`styles.css`** — design tokens via CSS custom properties on `:root` and `[data-theme="dark"]`. All colours, spacing, and radii reference `var(--*)` tokens.
- **`script.js`** — all logic runs inside a single `DOMContentLoaded` listener:
  - `CONTACTS` object at the top — edit here to change links/email/phone/location.
  - `copy.ru` / `copy.en` objects — all user-visible text in both languages.
  - `render(lang)` — rebuilds all dynamic DOM nodes; called on load and on language toggle.
  - Theme and language preference persisted to `localStorage`.
  - Self-tests run in browser console on every page load (see `runTests()`).

## Key Editing Patterns

**To update resume content** (text, skills, experience, projects, certs): edit the `copy.ru` and `copy.en` objects in `script.js`. Both must be kept in sync.

**To update contact links**: edit the `CONTACTS` object at the top of `script.js`.

**To add a new icon**: add an entry to the `ICONS` object (Flaticon CDN URLs) and reference it in `render()`.

**To change colours/spacing**: update CSS custom properties in `:root` (light) and `[data-theme="dark"]` (dark) in `styles.css`.

**To add a new section**: add the HTML anchor in `index.html`, a nav link with `data-i18n="nav.*"`, add the translation key to both `copy.ru.nav` and `copy.en.nav`, and render the section inside `render()`.
