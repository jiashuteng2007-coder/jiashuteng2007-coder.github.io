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

## Deployment

Pushing to `main` triggers the GitHub Pages workflow in `.github/workflows/deploy.yml`. The production build uses `https://jiashuteng.com` as its canonical site URL and includes the custom-domain declaration from `public/CNAME`.
