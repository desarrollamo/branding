# Gobernanza de marca

`desarrollamo/branding` es la fuente de verdad de identidad visual de DesarrollAMO.

## Reglas

1. Los logos canónicos viven únicamente en `assets/logo/`.
2. Los colores canónicos viven únicamente en `tokens/brand.json` y `tokens/brand.css`.
3. Un cambio visual incompatible requiere una nueva versión etiquetada.
4. Los sitios deben preferir una versión estable antes que depender de `main`.
5. `design-system` consume Branding; no redefine la identidad.
6. Los repos de producto pueden extender tokens semánticos, pero no alterar los tokens de marca.
7. No se publican secretos, datos de clientes ni credenciales en este repositorio.

## Evolución

Cambios compatibles incrementan versión menor. Cambios que sustituyen logo, nombre o semántica principal requieren revisión explícita y versión mayor.

## Evidencia

Cada cambio debe pasar validación de JSON, SVG, rutas del manifiesto y consistencia entre tokens antes de publicarse.
