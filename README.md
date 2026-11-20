# Virang Dalwadi — MERN Stack Developer

Personal portfolio for **Virang Dalwadi**, based in Ahmedabad, Gujarat, India. It highlights his MERN Stack development profile, experience, education, technical skills, selected projects, and contact information.

Live site: [virang.vercel.app](https://virang.vercel.app/)

## Run locally

Requirements: Node.js 22.12 or newer and npm.

```powershell
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Optional contact form configuration

The site displays a direct email link if the EmailJS form is not configured. To enable form submissions, add these values to a local `.env` file and to the Vercel project environment:

```text
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

These are public client-side identifiers; do not put private credentials in `VITE_*` variables.

## Quality checks

```powershell
npm test -- --run
npm run lint
npm run build
```

The production build pre-renders the main routes and needs Chrome or Chromium available. Set `CHROME_PATH` if it is not installed at a detected location. Vercel can deploy the project from its Git integration using the standard Vite build output.

The résumé page can be printed or saved as PDF from the browser; this repository does not include an existing résumé PDF.
