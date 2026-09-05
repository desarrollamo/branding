# Uso de marca

## Logos

Usar `assets/logo/mark.svg` cuando el espacio es reducido y `assets/logo/horizontal.svg` cuando debe leerse el nombre completo.

No recolorear el símbolo arbitrariamente. La combinación oficial parte de Sky + Pink + Yellow.

## Wordmark

La escritura preferida es **DesarrollAMO.** con `Desarroll` en Sky, `AMO` en Pink y el punto en Sky.

## Tokens

Los proyectos pueden consumir una versión estable de los tokens:

```css
@import url("https://cdn.jsdelivr.net/gh/desarrollamo/branding@v1.3.0/tokens/brand.css");
```

Para componentes, estados, layout, radios, superficies y patrones de interacción usar `desarrollamo/design-system`; no extender Branding con decisiones de UI.

## Atribución

Para trabajos públicos de clientes, aplicar la firma de autoría definida en docs/attribution.md. Branding define la identidad; el footer reutilizable vive en desarrollamo/design-system.

## Mantenimiento

Cambiar primero este repositorio, validar, publicar una nueva versión y después actualizar consumidores. No mantener copias divergentes de los assets canónicos.
