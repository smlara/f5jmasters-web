# F5J Masters — sitio web

Sitio estático de una sola página en cuatro idiomas (ES / EN / PT / FR),
construido con [Eleventy](https://www.11ty.dev/) + Nunjucks. Sin frameworks CSS
ni JS: un único `styles.css` y un único `main.js`.

## Comandos

Desde la raíz del proyecto:

| Comando           | Acción                                             |
| :---------------- | :------------------------------------------------- |
| `npm install`     | Instala dependencias                               |
| `npm run dev`     | Servidor local con recarga en `localhost:8080`     |
| `npm run build`   | Genera el sitio de producción en `./_site/`        |

## Estructura

```text
src/
├── _data/            Datos globales
│   ├── t.yml         Diccionario i18n (ES/EN/PT/FR)
│   ├── editions.yml  Ediciones del campeonato
│   ├── sponsors.yml  Patrocinadores
│   ├── gallery.js    Auto-listado de fotos (2026 y 2022)
│   ├── site.json     Metadatos del sitio
│   └── buildId.js    Cache-busting del CSS
├── _includes/
│   ├── layouts/base.njk   Cabecera, nav, footer, <head>
│   └── pages/home.njk     Contenido de la home
├── assets/           Imágenes, logos, fotos y PDFs (copiado tal cual)
├── index.njk         Raíz: redirige al idioma del navegador
├── en|es|pt|fr/index.njk  Una home por idioma (fija `lang`)
├── styles.css
└── main.js
```

## Internacionalización

Patrón manual: el diccionario `_data/t.yml` tiene los textos por idioma
(`t[lang]`). Cada carpeta de idioma (`en/`, `es/`, `pt/`, `fr/`) tiene un
`index.njk` que fija `lang` en su front matter y renderiza `pages/home.njk`. La
raíz (`/`) es una página con un redirect JS al idioma del navegador (o al último
elegido, guardado en `localStorage`).

Para editar textos, cambia los **valores** de `t.yml`, no los nombres de campo.
Para añadir fotos, deja los archivos en `src/assets/photos/2026/` o `2022/` y
reconstruye: aparecen solas.

## Despliegue

GitHub Actions (`.github/workflows/deploy.yml`) hace `npm run build` en cada push
a `main` y publica `_site/` en la rama `deploy`, de donde el hosting la sirve.
