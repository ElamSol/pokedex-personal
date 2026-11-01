# Bloque verificado 02 — iniciales de Kanto y Johto

Fecha de integración: 31-10-2026

## Alcance
Se contrastaron cinco especies (Bulbasaur, Charmander, Squirtle, Chikorita y Cyndaquil) consultando directamente sus archivos JSON individuales de Pelagix. Se incorporaron únicamente filas que corresponden a los ocho juegos objetivo. El bloque no cubre todas las rutas posibles de cada especie ni sus formas regionales.

## Datos integrados
- **Bulbasaur (#001):** Escáner Insular en Ultrasol/Ultraluna, viernes, Ruta 2, nivel 10. Regalo inicial en X/Y. Fila de Mystery Gift/evento registrada para Rubí Omega/Zafiro Alfa.
- **Charmander (#004):** Escáner Insular en Ultrasol/Ultraluna, domingo, Ruta 3, nivel 12. Regalo inicial en X/Y. Fila de Mystery Gift/evento registrada para Rubí Omega/Zafiro Alfa.
- **Squirtle (#007):** Escáner Insular en Ultrasol/Ultraluna, lunes, Cueva Unemar, nivel 12. Regalo inicial en X/Y. Fila de Mystery Gift/evento registrada para Rubí Omega/Zafiro Alfa.
- **Chikorita (#152):** Escáner Insular en Sol/Luna, viernes, Ruta 2, nivel 10. Regalo inicial en Rubí Omega/Zafiro Alfa. Fila de Mystery Gift/evento registrada para X/Y.
- **Cyndaquil (#155):** Escáner Insular en Sol/Luna, domingo, Ruta 3, nivel 12. Regalo inicial en Rubí Omega/Zafiro Alfa. Fila de Mystery Gift/evento registrada para X/Y.

## Cómo interpretar los estados
La fuente Pelagix clasifica las filas de Mystery Gift como `event`. La base no demuestra que la distribución siga activa en 2026, por lo que el proyecto las muestra como evento y no como ruta actual confirmada. La fila no siempre incluye lugar, fecha de distribución ni condiciones completas; no se inventan esos datos.

## Fuentes
- Archivos por especie (datos de encuentros y regalos derivados de PKHeX):
  - https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/1.json
  - https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/4.json
  - https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/7.json
  - https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/152.json
  - https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/155.json
- Metodología, versión de PKHeX y limitaciones: https://github.com/HydrosPlays/Pelagix/blob/main/docs/DATA.md
- Confirmación del nombre latinoamericano Cueva Unemar para Seaward Cave: https://bulbapedia.bulbagarden.net/wiki/Seaward_Cave
- Consulta secundaria de ubicación y datos de Gruta/Cueva Unemar: https://www.wikidex.net/wiki/Cueva_Unemar/Gruta_Unemar

## Licencia y atribución
Pelagix declara GPL-3.0 y que sus datos de encuentros, ubicaciones, formas y evolución derivan de PKHeX, también GPL-3.0. Este proyecto conserva los enlaces de procedencia por ficha. Antes de distribuir una base derivada más amplia, se debe incluir el aviso de licencia y la atribución correspondientes, y revisar la compatibilidad de distribución.
