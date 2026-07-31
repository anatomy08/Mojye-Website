# Mojye promotional website

The public landing page for **Mojye: Budget Tracker**.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The site is statically exported to `out/`.

## Deploy to Vercel

Import this repository in Vercel and keep the detected **Next.js** preset. The
default `npm run build` command is sufficient. Set `NEXT_PUBLIC_SITE_URL` to the
production address so social sharing metadata points to the final domain.

The Google Play buttons use Mojye's Android package ID:
`com.jyestudios.mojye`.
