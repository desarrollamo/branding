# Gobernanza de marca

`desarrollamo/branding` es la fuente pública de verdad para la identidad visual de DesarrollAMO.

## Reglas

1. Los logos canónicos viven únicamente en `assets/logo/`.
2. Los colores y tipografía canónicos viven en `tokens/brand.json` y `tokens/brand.css`.
3. `design-system` consume Branding y define la capa de interfaz; Branding no contiene componentes UI.
4. Los consumidores deben fijar versiones estables en producción.
5. Un cambio incompatible de logo, nombre o semántica principal requiere versión mayor.
6. No se publican secretos, datos de clientes, infraestructura ni procesos internos.

## Validación

Cada cambio debe pasar validación de JSON, SVG, rutas del manifiesto y consistencia entre tokens antes de publicarse.

## Alcance público

Sólo se versiona aquí aquello cuya publicación ayuda a reconocer y aplicar correctamente la marca DesarrollAMO.
