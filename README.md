# Sistema Solar

Explorador interactivo del sistema solar. Navega entre planetas con animaciones de transición y consulta datos como radio, distancia orbital, satélites y más.

**Stack:** Astro 6 · React 19 · Tailwind CSS v4 · TypeScript · Vercel

## Instalación

Copia el archivo de variables de entorno y completa los valores:

```bash
cp .env.example .env
```

| Variable | Descripción |
|---|---|
| `API_URL` | URL base de la API (server-side) |
| `PUBLIC_API_URL` | URL base de la API (client-side) |
| `IMAGES_URL` | URL base del CDN de imágenes (server-side) |
| `PUBLIC_IMAGES_URL` | URL base del CDN de imágenes (client-side) |

## Desarrollo

```bash
docker compose up
```

El servidor arranca en `http://localhost:4321`.
