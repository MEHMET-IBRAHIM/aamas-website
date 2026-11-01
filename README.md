# AamaS Housing & Developers — Frontend

This is a React + Vite + Tailwind CSS frontend for AamaS Housing & Developers (premium real-estate & construction website).

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

 - Single-page site with sections for Hero, About, Services, Projects, Showcase, CTA, Contact and Footer.
 -- The project now uses the actual logo from `src/assests/aamas-logo.png`. If you prefer the logo in `public/assets`, copy `src/assests/aamas-logo.png` to `public/assets/logo.png`.
 -- Replace other placeholder images in `public/assets` with your high-quality images. Keep filenames or update component paths.

Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repo in Vercel and select the root project.
3. Vercel will detect Vite — set the build command to `npm run build` and output directory to `dist`.
