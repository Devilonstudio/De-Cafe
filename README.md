# De Café – Bean Corner (React + Vite)

## Run
```bash
npm install
npm run dev      # local dev (placeholders show the expected image filename)
npm run build    # production build in /dist
npm run preview
```

## Add your item photos
Put them in `public/images/items/` named exactly as in **IMAGE-LIST.txt**
(e.g. `burgers-bash_zinger-burger.jpg`). `.jpg .jpeg .png .webp` all work. No code changes needed.

## Edit
- Menu / prices: `src/data/menu.js`
- WhatsApp number, addresses, phones: `src/config.js` (orders go to +92 348 2292256)
- Colors: CSS variables at the top of `src/styles.css`
- Logo: `public/images/logo.jpg` (your original file, unchanged)

## Deploy
Upload the `dist/` folder to Netlify / Vercel / GitHub Pages (`base: './'` is already set).

## Banner image
Save your banner as `public/images/banner.jpg` (wide, about 1600x700). A dark overlay is added so the text stays readable. If the file is missing, a brown gradient is shown. To use .png/.webp, change the extension in `src/components/Hero.jsx`.
