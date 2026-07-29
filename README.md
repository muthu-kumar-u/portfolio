# Muthukumar Portfolio

Personal portfolio built with React, TypeScript, Vite and Tailwind CSS.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Three Fiber
- EmailJS

## Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

## Build

```bash
npm run build
```

## Environment Variables

Create a `.env` file from `.env.example` and configure:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Deployment

This project is deployed automatically using **GitHub Actions** and **GitHub Pages**.

Every push to the `main` branch triggers:

- Install dependencies
- Build the project
- Deploy to GitHub Pages

## License

This project is for personal portfolio use.
