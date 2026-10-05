# Han Nguyen's research website

Personal academic website for Han Nguyen, a Ph.D. student in Human-Centered Computing at Clemson University.

Built from [tovacinni/research-website-template](https://github.com/tovacinni/research-website-template), using Next.js, React, and Tailwind CSS. The upstream MIT license is retained in `LICENSE`.

## Update content

| File | Content |
| --- | --- |
| `src/data/aboutme.ts` | Biography, photo, email, CV, and social links |
| `src/data/publication.ts` | Published work |
| `src/data/manuscripts.ts` | In-press and under-review manuscripts |
| `src/data/education.ts` | Education |
| `src/data/experience.ts` | Research experience |
| `src/data/service.ts` | Service |
| `src/data/awards.ts` | Awards and honors |
| `src/data/news.ts` | Optional news items |
| `src/data/portfolio.ts` | Optional projects |
| `src/data/section-order.ts` | Section order |
| `src/data/title-description.ts` | Page title and search description |

News and portfolio sections stay hidden while their data arrays are empty. Publication links can be added using optional `paperUrl`, `codeUrl`, and `bibtex` fields. Do not add a sample link for a paper whose URL has not been verified.

The initial migration uses the existing website biography and the CV shared on October 5, 2026. Publication statuses, titles, author order, education, research experience, service, and awards follow that CV. Manuscripts are listed separately so their statuses remain clear.

## Run locally

Use Node.js 24, matching the GitHub Actions workflow.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Validate

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The build exports a static website to `out/`. Serve that directory using a static HTTP server to preview the production build. `npm start` is not used for a static export.

## Publish

In repository **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. The included workflow builds pull requests for review and only deploys changes on `main`.

After a pull request is merged, wait for both the build and deployment to succeed in the Actions tab. The site address remains https://hanbaonguyen.github.io/.

## Update the CV and photo

The profile photo is `public/images/han.jpg`. The current CV is `public/Han-Nguyen-CV.pdf`. When replacing the CV, also replace `public/assets/Han-Nguyen-CV.pdf` and `public/assets/files/Han-Nguyen-CV.pdf`; these copies preserve the old site's download URLs.

The previous site is preserved on `old-website-backup-2026-10-05` and in the repository history. To restore it, restore that branch's files through a new commit and change the Pages source back to its previous branch-based setting.
