# Jiashu Teng — Academic Homepage

Bilingual academic homepage for Jiashu Teng, built with Astro and deployed to GitHub Pages at [jiashuteng.com](https://jiashuteng.com).

## Local development

```sh
npm install
npm run dev
```

The English homepage is available at `/` and the Chinese homepage at `/zh/`.

## Validation

```sh
npm run build
```

## Adding writing

Published essays live in `src/content/writing/<locale>/` as Markdown files. Keep the short summary in the frontmatter `excerpt` for the Writing index, and repeat the same sentence as the first paragraph after the frontmatter. Markdown article pages intentionally hide the header excerpt so this opening sentence appears only once, aligned and styled with the rest of the body.

Use `locale: both` when the same untranslated article should appear under both the English and Chinese UI, or `locale: en` / `locale: zh` for a single-language route. Use a quoted ISO date (`date: "YYYY-MM-DD"`), a unique lowercase `slug`, and place cover images in `public/images/writing/`.

## Deployment

Pushing to `main` triggers the GitHub Pages workflow in `.github/workflows/deploy.yml`. The production build uses `https://jiashuteng.com` as its canonical site URL and includes the custom-domain declaration from `public/CNAME`.
