# CLAUDE.md

This file documents the structure, conventions, and development workflow for this repository. It is intended for AI assistants (Claude Code and others) working on this codebase.

## Repository Overview

**`gshu710.github.io`** is a personal GitHub Pages site. GitHub automatically serves the `main` branch from `https://gshu710.github.io/`.

## Current State

The site is in its earliest form — a single static HTML file:

| File | Purpose |
|------|---------|
| `index.html` | Homepage; currently renders a plain `<h1>Hello</h1>` |

No build tools, frameworks, package managers, or CI pipelines are configured yet.

## Development Workflow

### Branches

| Branch | Purpose |
|--------|---------|
| `main` | Production branch — GitHub Pages serves from here |
| `claude/*` | AI-driven feature branches; open a PR into `main` |

### Making Changes

Because there is no build step, changes to `index.html` (or any future static assets) are immediately reflected once merged to `main` and GitHub Pages rebuilds (usually within 30–60 seconds).

```bash
# Work on the designated feature branch
git checkout -b claude/<short-description>

# Edit files, then commit
git add <files>
git commit -m "concise description of change"

# Push and open a PR into main
git push -u origin claude/<short-description>
```

### Deployment

Deployment is automatic: every push to `main` triggers a GitHub Pages rebuild. No manual deploy step is needed.

## Conventions

- **No build toolchain** — keep assets as plain HTML/CSS/JS unless a framework is explicitly introduced.
- **Commit messages** — use lowercase imperative mood, e.g. `add navigation bar`, `fix broken link`.
- **File names** — lowercase with hyphens (`about-me.html`, `styles/main.css`).
- **No generated files committed** — if a build tool is added later, add its output directory to `.gitignore` and document it here.

## Adding New Pages or Assets

Suggested layout when the site grows:

```
index.html
about.html
assets/
  css/
    main.css
  js/
    main.js
  images/
```

Update this file whenever new directories, tooling, or conventions are introduced.
