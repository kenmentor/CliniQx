# CliniQx

ClinIQx by HealthIQue — one secure health record across every clinic and hospital. Your visits, results, bills and referrals, shared only with your permission.

Public landing page built with React + TypeScript + Tailwind CSS (Vite).

## Run it

```bash
npm install
npm run dev      # local preview
npm run build    # production build (tsc + vite)
npm run deploy   # publish dist/ to GitHub Pages
```

## Structure

- `src/Components/Landing/` — public scroll only (patient-safe copy, zero builder jargon)
- `src/Components/PartnerRoom/` — INTERNAL: architecture, domains, roadmap, partnership (not rendered publicly; reserved for the gated partner page)
- `src/Components/UI/` — shadcn-style primitives (Button, Badge, Card, SectionHeading, Reveal)
- `src/data/cliniqx.ts` — public copy · `src/data/partner-brief.ts` — INTERNAL builder copy
- `ref/` — source executive brief (internal, not for publication)

## Design rules

Apple spacing (one idea per section, `py-24 → py-40`), almost-angular geometry (`rounded-lg/md`), Heroicons throughout, numbered enterprise sections, real clinical photography.
