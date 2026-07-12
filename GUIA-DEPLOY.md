# Despliegue

La web se publica sola. Flujo:

```
push a main  →  GitHub Actions compila (npm run build)  →  publica _site/ en la rama deploy
             →  webhook avisa a Hostalia (Plesk)  →  Plesk hace pull de deploy a la raíz web
```

La rama **`deploy`** contiene el sitio ya **compilado** (HTML/CSS/JS plano). En el
servidor **no se compila nada**: Plesk solo copia esos ficheros.

## Configuración en Hostalia / Plesk (una sola vez)

1. Panel Plesk → **Sitios web y dominios** → el dominio (`f5jmasters.com` o el
   subdominio de pruebas, p. ej. `test.f5jmasters.com`).
2. Herramienta **Git** → **Añadir repositorio**.
3. **URL remota**:
   - Repo público: `https://github.com/smlara/f5jmasters-web.git`
   - Repo privado: `git@github.com:smlara/f5jmasters-web.git` y pega la **clave SSH
     pública** de Plesk en GitHub → repo **Settings → Deploy keys** (solo lectura).
4. **Rama**: `deploy`  ← no `main` (este es el paso que se olvida).
5. **Ruta de despliegue**: la raíz web del dominio (`httpdocs` o el docroot del
   subdominio). Sin subcarpeta.
6. **Acciones de despliegue adicionales**: vacías (no hay build en el servidor).
7. **Modo de despliegue**: **Automático**. Plesk da una **URL de webhook**.

## Enganchar el webhook

8. Copia la URL de webhook de Plesk.
9. GitHub → repo **Settings → Webhooks → Add webhook** → pega la URL,
   **Content type: application/json**, evento **Just the push event**.
10. En Plesk, **Pull / Deploy ahora** una vez para el primer despliegue.

## Comprobar

- **GitHub → Actions**: ✅ verde = build ok.
- Confirma que la rama **`deploy`** existe (GitHub → Branches). La crea la Action
  en su primer run.
- Plesk → Git muestra la fecha del último pull. Recarga la web con **Ctrl+F5**.

## Notas

- Elige el docroot correcto: para probar en `test.f5jmasters.com` configura la Git
  de **ese** subdominio, no la del dominio principal.
- El workflow está en `.github/workflows/deploy.yml` (dispara en push a `main` y
  manualmente desde *Actions → Run workflow*).
