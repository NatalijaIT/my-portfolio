# Personal Portfolio

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 16** — App Router
- **TypeScript**
- **Tailwind CSS v4**
- **next-themes** — dark/light mode

## Features

- Hero section with animated connecting dots (HTML5 Canvas)
- About Me section
- Skills grid with icon cards
- Projects showcase with stacked image effect
- Contact section
- Dark / light mode toggle

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/             # Next.js App Router pages
components/
  layout/        # ThemeProvider, Navbar
  sections/      # Hero, About, Skills, Projects, Contact
  ui/            # Reusable components (Button, ProjectCard, SkillCard, etc.)
lib/
  data.ts        # Projects and skills data
  types.ts       # TypeScript interfaces
public/
  images/        # Project screenshots
  icons/         # Skill icons
```
