# Yuanda Li - Personal Website

Personal portfolio website built with React + Vite + Tailwind CSS.

## GitHub Pages Setup (Meinianda-L/liyuanda)

This project is configured for a GitHub Pages **project site** at:

- `https://meinianda-l.github.io/liyuanda/`

The repo already includes:

- Vite base path set to `/liyuanda/`
- Static page links updated for `/liyuanda/`
- GitHub Actions workflow: `.github/workflows/deploy-pages.yml`

## Deploy Steps

1. Push this folder to the repository `Meinianda-L/liyuanda` on branch `main`.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push again (or manually run the workflow) to deploy.

After the action completes, your site is live at:

- `https://meinianda-l.github.io/liyuanda/`

## Local Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Because this project uses a GitHub Pages base path, open:

- `http://localhost:5173/liyuanda/`

## Build

```bash
npm run build
```

Build output is in `dist/`.

## Notes

- Main React homepage: `index.html`
- Additional static pages are in `public/` (for example `about-detail.html`, `projects.html`, `blog.html`).
- Content list data files:
  - `public/data/projects.js`
  - `public/data/blogs.js`
  - `public/data/homepage.js`
