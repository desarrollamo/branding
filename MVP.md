# MVP · Branding

Branding es infraestructura pública. Su MVP termina cuando cualquier producto puede consumir identidad oficial sin copiar valores a mano.

## Aceptación
- wordmark y assets SVG canónicos;
- tokens versionados para color/tipografía relevante;
- validación automatizada antes de release;
- guía de uso y gobierno;
- consumidores fijan una release, no `main`;
- un cambio incompatible incrementa versión adecuadamente;
- no contiene lógica de producto, secretos ni datos de clientes.

## Evidencia
`node scripts/validate.mjs` debe pasar y una release estable debe contener los mismos assets/tokens documentados.
