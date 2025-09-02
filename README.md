<p align="center">
   <img src="public/vite.svg" alt="Design System" width="120" />
</p>

# Design System Example

<p align="center">
   <b>A modern, reusable, and customizable design system built with React, TypeScript, and Vite.</b>
</p>

---

<p align="center">
   <a href="#tech-stack"><img src="https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Vite%20%7C%20Storybook%20%7C%20Bun%20%7C%20Tailwind%20CSS%20%7C%20shadcn--ui%20%7C%20Vitest-blue" alt="Tech Stack"/></a>
</p>

---

## 🛠️ Tech Stack

- **React** – UI library for building components
- **TypeScript** – Type-safe JavaScript
- **Vite** – Lightning-fast build tool
- **Storybook** – Component explorer and documentation
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development
- **shadcn/ui** – Beautifully designed, accessible React components built on top of Radix UI and Tailwind CSS
- **Vitest** – Blazing fast unit testing framework
- **Bun** – Modern JavaScript runtime (alternative to Node.js)
- **ESLint & Prettier** – Code quality and formatting

<p align="center">
  <img src="public/vite.svg" alt="Design System" width="120" />
</p>

<h1 align="center">Design System Example</h1>

<p align="center">
  <b>A modern, reusable, and customizable design system built with React, TypeScript, and Vite.</b>
</p>

---

## ✨ Overview

This repository is an example project for building a scalable and maintainable design system. It provides a set of UI components, utilities, and configuration files to help you create consistent user interfaces across your applications.

It leverages **Tailwind CSS** for styling, **shadcn/ui** for ready-to-use, accessible React components, and **Vitest** for fast and easy unit testing, making it easy to build, test, and maintain beautiful and consistent UIs.

> **Note:** This project is open source and intended for learning, experimentation, and as a starting point for your own design system.

## 📦 Features

- **Reusable UI Components**: Button, Spinner, and more, built with accessibility and customization in mind.
- **TypeScript Support**: Type-safe components and utilities.
- **Storybook Integration**: Develop and preview components in isolation.
- **Vite-Powered**: Fast development and build process.
- **Prettier & ESLint**: Code formatting and linting for consistent code quality.
- **Vitest Support**: Write and run fast unit tests with Vitest.

## 🗂️ Project Structure

```text
design-system-package/
├── .storybook/           # Storybook configuration
├── public/               # Static assets
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button/   # Button component
│   │       └── spinner/  # Spinner component
│   ├── lib/              # Shared utilities
│   ├── index.css         # Global styles
│   └── main.tsx          # App entry point
├── package.json          # Project metadata and scripts
├── vite.config.ts        # Vite configuration
└── ...                   # Other config files
```

## 🚀 Getting Started

1. **Install dependencies**

   ```sh
   bun install
   # or
   npm install
   ```

2. **Run Storybook**

   ```sh
   bun run storybook
   # or
   npm run storybook
   ```

## 🧩 Components

- **Button**: Customizable button with variants and accessibility support
- **Spinner**: Loading spinner for async states

Explore all components and their variants in Storybook!

## 🛠️ Scripts

| Script      | Description                |
| ----------- | -------------------------- |
| `dev`       | Start Vite dev server      |
| `build`     | Build for production       |
| `storybook` | Run Storybook              |
| `test`      | Run unit tests with Vitest |
| `lint`      | Run ESLint                 |
| `format`    | Run Prettier               |

## 📚 Storybook

Storybook is configured in the `.storybook/` directory. Run it locally to develop and preview components in isolation.

## 📝 License

MIT — free to use, modify, and share.
