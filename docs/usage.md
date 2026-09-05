# Uso de marca

## Logos

Usar `assets/logo/mark.svg` cuando el espacio es reducido y `assets/logo/horizontal.svg` cuando debe leerse el nombre completo.

No recolorear el símbolo arbitrariamente. La combinación oficial es Sky + Pink + Yellow.

## Wordmark

La escritura preferida es **DesarrollAMO.** con `Desarroll` en Sky, `AMO` en Pink y el punto en Sky.

## Tokens web

Después de publicar una versión, los proyectos pueden fijarla mediante CDN:

```css
@import url("https://cdn.jsdelivr.net/gh/desarrollamo/branding@v1.0.0/tokens/brand.css");
```

Usar versiones etiquetadas en producción evita cambios inesperados.

## Footer

`components/footer.html` conserva el footer oficial actualmente utilizado, pero enlaza al dominio canónico `desarrollamo.com.ar`.

## Regla de mantenimiento

Cambiar primero este repositorio, publicar una nueva versión y luego actualizar los proyectos consumidores. No mantener copias divergentes de la marca.
