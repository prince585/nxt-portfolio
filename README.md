# Portfolio — Prince Verma

Personal portfolio website built with **React** and **Vite**. Features a warm editorial-inspired design with sections for about, projects, education, certificates, and contact.

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — build tool
- **CSS Custom Properties** — theming (warm cream / crail orange)

## Sections

| Section   | Description |
|-----------|-------------|
| About     | Profile pic, intro, summary, GitHub contribution graph, tech stack table |
| Projects  | 4 project cards with GitHub & Visit links |
| Education | Timeline with college, 12th, 10th grade details |
| Certs     | Certificate images with descriptions |
| Contact   | Bio with internship callout + social link buttons |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Customize

All content lives at the top of `src/App.jsx` in plain JS objects (`PROFILE`, `PROJECTS`, `EDUCATION`, `CERTIFICATES`, `CONTACT`, `TECH_STACK`). Edit those to update the site without touching JSX or CSS.
