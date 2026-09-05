# DesarrollAMO · Branding

Fuente de verdad pública para la identidad visual de **DesarrollAMO**.

Este repositorio centraliza logos, colores, tokens y componentes de marca para que los sitios y productos de DesarrollAMO no repliquen valores a mano.

## Identidad actual

- Nombre: **DesarrollAMO**
- Wordmark: **DesarrollAMO.**
- Claim usado: **Tecnología con alma.**
- Sitio: https://desarrollamo.com.ar/
- Email empresarial: desarrollamoficial@gmail.com

## Paleta oficial

| Token | Hex | Uso |
|---|---|---|
| Sky | `#7DD3FC` | Desarroll / links / información |
| Pink | `#FF5AA5` | AMO / CTA principal |
| Pink Soft | `#FF77B4` | gradientes / hover |
| Coral | `#FF9F6E` | acento secundario |
| Yellow | `#FFD166` | destaque / energía |
| Ink | `#111827` | texto oscuro |
| Mist | `#E5E7EB` | texto claro |

## Estructura

- `assets/logo/` — logotipo y símbolo oficiales en SVG.
- `tokens/brand.css` — variables CSS listas para importar.
- `tokens/brand.json` — tokens para apps, scripts y generadores.
- `components/footer.html` — footer oficial reutilizable.
- `docs/usage.md` — reglas mínimas de aplicación.

## Fuente

La versión inicial fue consolidada el 2026-09-05 a partir del footer público existente y de los estilos actualmente publicados en desarrollamo.com.ar.

Los proyectos nuevos deben consumir estos tokens en lugar de copiar colores o reconstruir el logo manualmente.

## Propiedad

© DesarrollAMO. Los elementos de identidad y marca permanecen bajo control de DesarrollAMO aunque este repositorio sea público.

## Gobernanza y validación

- ssets/manifest.json declara los assets canónicos y sus rutas.
- docs/governance.md define cómo evoluciona la marca sin romper consumidores.
-
ode scripts/validate.mjs valida manifiesto, SVG y consistencia JSON/CSS.
- `node scripts/validate.mjs` es el control obligatorio antes de publicar una versión.
