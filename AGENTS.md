## Stack

Sitio estático con **Eleventy 3 + Nunjucks**. Sin frameworks CSS/JS: un único
`src/styles.css` y un único `src/main.js`. Contenido de una sola página en cuatro
idiomas (ES/EN/PT/FR).

## Development

```
npm run dev      # servidor local con recarga en localhost:8080
npm run build    # genera _site/
```

## i18n

- Diccionario en `src/_data/t.yml` (claves por idioma, `t[lang]`). Edita valores,
  no nombres de campo.
- Una carpeta por idioma (`en/`, `es/`, `pt/`, `fr/`) con un `index.njk` que fija
  `lang` en el front matter y hace `{% include "pages/home.njk" %}`.
- La raíz `/` (`src/index.njk`) es un redirect JS al idioma del navegador.

## Datos

- `editions.yml` y `sponsors.yml`: listas editables a mano.
- `gallery.js`: auto-lista las fotos de `assets/photos/2026` y `2022` (las
  variantes de tamaño `-NNNxNNN` de 2022 se ignoran).
- `buildId.js`: id de cache-busting para `styles.css`.

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) construye y publica `_site/` en la
rama `deploy` en cada push a `main`.

## Documentación

Eleventy: https://www.11ty.dev/docs/
