# Investigación de métodos de obtención


## Lote verificado — Isla Melemele / Escáner Insular

Se añadieron encuentros del Escáner Insular para las versiones Sol/Luna y Ultrasol/Ultraluna. La lista de Sol/Luna no se confundió con la de Ultrasol/Ultraluna: ambas tienen rotaciones distintas.

- **Ultrasol/Ultraluna:** Bulbasaur (viernes, Ruta 2, Nv. 10), Charmander (domingo, Ruta 3, Nv. 12), Squirtle (lunes, Gruta Unemar, Nv. 12), Onix (martes, Colina Diez Caras, Nv. 14), Horsea (miércoles, Bahía Kala'e, Nv. 18), Scatterbug (jueves, Ciudad Hau'oli, Nv. 9) y Litwick (sábado, Cementerio de Hau'oli, Nv. 9).
- **Sol/Luna:** Totodile (lunes, Gruta Unemar, Nv. 12), Deino (martes, Colina Diez Caras, Nv. 13), Horsea (miércoles, Bahía Kala'e, Nv. 18), Klink (jueves, Ciudad Hau'oli, Nv. 8), Chikorita (viernes, Ruta 2, Nv. 10), Litwick (sábado, Cementerio de Hau'oli, Nv. 10) y Cyndaquil (domingo, Ruta 3, Nv. 12).
- Para activar el Escáner Insular se requieren 100 puntos QR. El juego indica el área del encuentro y se dispone de una hora para encontrarlo.
- No se extrapolaron estos encuentros a X/Y ni Rubí Omega/Zafiro Alfa.
- Se añadieron referencias web por método. Los movimientos especiales se conservaron como información adicional, no como requisito de captura.

### Fuentes consultadas
- Bulbapedia, Island Scan: https://bulbapedia.bulbagarden.net/wiki/Island_Scan
- Serebii, Island Scan USUM: https://www.serebii.net/ultrasunultramoon/islandscan.shtml
- Thonky, localizaciones USUM (contraste de especies y ubicaciones): https://www.thonky.com/pokemon-ultra-sun-ultra-moon/list-of-pokemon-locations

**Alcance de este lote:** solo encuentros por Escáner Insular en Melemele. No significa que la investigación completa de la isla ni de los ocho juegos esté terminada.


## 31-10-2026 — Bloque verificado 02
Se consultaron directamente los JSON individuales de Pelagix para Bulbasaur (#1), Charmander (#4), Squirtle (#7), Chikorita (#152) y Cyndaquil (#155). Se contrastaron las filas de los juegos objetivo X/Y, Rubí Omega/Zafiro Alfa, Sol/Luna y Ultrasol/Ultraluna. Se actualizaron métodos y procedencia en `obtencion.js`; el detalle está en `BLOQUE-VERIFICADO-02-INICIALES.md`. La validación estructural reporta 825 registros, 6,600 cruces y 0 errores estructurales. Quedan advertencias de trazabilidad en otros registros y métodos anteriores; no se consideran resueltas.

## Bloque 3 — 31 de octubre de 2026

- Revisados los JSON individuales de Ivysaur (#2), Venusaur (#3), Charmeleon (#5), Charizard (#6) y Wartortle (#8) en Pelagix.
- X/Y: Ivysaur, Charmeleon y Wartortle muestran encuentros Friend Safari a nivel 30. Se documenta como Safari Amistad de Ciudad Batik; la condición concreta del Safari debe comprobarse en juego.
- Venusaur y Charizard muestran filas Mystery Gift/evento en los juegos indicados por sus archivos individuales. Se clasifican como `pendiente_revision`, no como eventos definitivamente finalizados.
- Corregida la integración anterior de Chikorita (#152) y Cyndaquil (#155): las filas consultadas muestran eventos en X/Y y regalos de Ruta 101, nivel 5, en Rubí Omega/Zafiro Alfa. Se conserva el Escáner Insular en Sol/Luna.
- Bulbasaur, Charmander y Squirtle conservan el regalo inicial X/Y; sus filas de evento ORAS quedan pendientes de confirmar. Squirtle: Cueva Unemar en Ultrasol/Ultraluna.
- Resultado de validación local: 825 registros, 6.600 cruces, 0 errores estructurales y 32 advertencias de trazabilidad. Las advertencias indican métodos sin fuente individual, no necesariamente errores de juego.
