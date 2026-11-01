# Notas de entrega y límites de validación

- La aplicación no usa red para catálogo, búsqueda, filtros, guardado ni respaldo.
- Los sprites no se pudieron descargar en el entorno de construcción porque no permite conexiones salientes. Se incluye `Descargar-sprites.bat` para descargar los PNG locales desde PokéAPI en Windows. Debe ejecutarse una vez con conexión a Internet. Hasta ejecutarlo, se usa la tarjeta de reserva con número y nombre.
- No se pudo completar una prueba visual automatizada con Chromium en este entorno: el proceso headless se bloqueó al iniciar. Se ejecutó `node --check app.js` y una prueba de integración con DOM simulado que cubre navegación inicial, cuadrícula de Kanto, marcado, contadores, deshacer y búsqueda numérica.
- Para una validación visual final en Chrome PC y Chrome Android, abrir `index.html` en ambos dispositivos después de descargar sprites.


### Actualización: bloque 01 de la base de obtención
Se incorporaron datos para Bulbasaur, Ivysaur y Venusaur en los ocho juegos configurados (24 combinaciones). El resto del catálogo permanece pendiente de investigación. Revisar `obtencion.js` y `BITACORA-GENERAL-MEJORAS.md`.

Bloque 02: Charmander, Charmeleon y Charizard añadidos en las ocho versiones (24 combinaciones). Total acumulado: 48 combinaciones con métodos.

Bloque 03: Squirtle, Wartortle y Blastoise añadidos en las ocho versiones (24 combinaciones). Total acumulado: 72 combinaciones con métodos.
