# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Landing pages repository for Overbytelabs. Each idea/project gets its own directory with HTML + CSS. GitHub Actions deploys to GitHub Pages on push to `master`.

## Structure

```
ideas/
├── example/           # Template for new landing pages
│   ├── index.html
│   └── style.css
└── CLAUDE.md
```

## Commands

No build tools — pure static HTML/CSS. To preview locally:
```bash
# Python
python -m http.server 8000

# Node
npx serve
```

## Deploy

GitHub Actions workflow deploys on push to `master`. Each directory becomes a sub-path on the deployed site (e.g., `example/` → `/ideas/example/`).

## Adding a New Landing Page

1. Create new directory under `ideas/`
2. Add `index.html` and `style.css`
3. Push — GitHub Actions handles deployment automatically
