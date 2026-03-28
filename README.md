# Site

This is my site.

```sh
# recreate project
npx sv@0.12.7 create --template minimal --types jsdoc --add prettier vitest="usages:unit,component" eslint sveltekit-adapter="adapter:static" playwright tailwindcss="plugins:none" --install npm sveltekit-site
```

```sh
# development
npm run dev
```

```sh
# build and deploy
npm run build
npm run preview
```
