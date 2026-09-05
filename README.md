# DesarrollAMO · Branding

Fuente pública y versionada de la identidad visual oficial de **DesarrollAMO**.

Este repositorio contiene únicamente la parte de la marca que queremos que terceros puedan reutilizar y reconocer. Los componentes de interfaz viven en `desarrollamo/design-system`; la implementación de productos y la operación interna no pertenecen aquí.

## Identidad

- Nombre: **DesarrollAMO**
- Wordmark: **DesarrollAMO.**
- Claim: **Tecnología con alma.**
- Sitio: https://desarrollamo.com.ar/

## Paleta oficial

| Token | Hex | Uso de marca |
|---|---|---|
| Sky | `#7DD3FC` | Desarroll / información |
| Pink | `#FF5AA5` | AMO / acento principal |
| Pink Soft | `#FF77B4` | variación rosa |
| Coral | `#FF9F6E` | acento cálido |
| Yellow | `#FFD166` | energía / destaque |
| Ink | `#111827` | neutro oscuro |
| Mist | `#E5E7EB` | neutro claro |
## Contenido

`assets/logo/` contiene los SVG canónicos. `tokens/brand.json` y `tokens/brand.css` exponen los valores de marca para consumo humano y automático. `docs/usage.md` explica aplicación básica y `docs/governance.md` define cómo versionar cambios sin romper consumidores.

## Versionado

Los consumidores deben fijar una release estable, no depender de `main`. La versión actual es **1.2.0**.

```css
@import url("https://cdn.jsdelivr.net/gh/desarrollamo/branding@v1.2.0/tokens/brand.css");
```

Antes de publicar una versión se ejecuta:

```bash
node scripts/validate.mjs
```

## Límites

Branding no contiene componentes de producto, lógica de negocio, infraestructura, secretos, datos de clientes ni procesos internos.

© DesarrollAMO. La publicación de estos assets no transfiere la titularidad de la marca.
