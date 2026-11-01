# Investigación de fuente de datos de obtención — 31 oct 2026

## Resultado verificado: Pelagix / PKHeX

Repositorio consultado: https://github.com/HydrosPlays/Pelagix
Documentación de datos: https://github.com/HydrosPlays/Pelagix/blob/main/docs/DATA.md
Archivo de ejemplo: https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/1.json

Pelagix documenta que su dataset se construye principalmente a partir de PKHeX (encuentros, formas, evoluciones, huevos/crianza, regalos y eventos) y PokeAPI (nombres y datos descriptivos). El dataset publicado indica versión PKHeX 26.08.26 y advierte limitaciones: fuentes antiguas pueden inferir ubicaciones, algunas fuentes carecen de ubicación, y las distribuciones temporales pueden estar finalizadas. Por ello no debe tratarse cada fila como una ruta disponible actualmente.

## Correspondencia exacta de los juegos solicitados

El orden canónico de `GAMES` en `src/shared/games.ts` y los índices `g` de las filas de encuentro en los archivos `species/<id>.json` permiten esta correspondencia:

| Índice de dataset | Juego | ID en `obtencion.js` |
|---:|---|---|
| 26 | Pokémon X | `x` |
| 27 | Pokémon Y | `y` |
| 28 | Pokémon Omega Ruby | `omega-ruby` |
| 29 | Pokémon Alpha Sapphire | `alpha-sapphire` |
| 30 | Pokémon Sun | `sun` |
| 31 | Pokémon Moon | `moon` |
| 32 | Pokémon Ultra Sun | `ultra-sun` |
| 33 | Pokémon Ultra Moon | `ultra-moon` |

La muestra de Bulbasaur consultada contiene una fila `g:[32,33]`, `k:"static"`, `m:"Island Scan"`, lugar indexado 16 y condición Friday. Esto confirma que los índices 32 y 33 corresponden a Ultrasol/Ultraluna y que la fuente codifica el día de Escáner Insular como condición. No valida por sí sola otros Pokémon/días.

## Tipos de filas documentados

- `wild`: encuentro salvaje.
- `static`: encuentro fijo/scriptado, incluye Escáner Insular.
- `gift`: regalo, inicial, fósil o premio.
- `egg`: huevo regalo.
- `trade`: intercambio dentro del juego.
- `event`: distribución/evento.
- `dream`: Dream World / Dream Radar / promociones Global Link.
- Otros tipos existen para juegos fuera del alcance de esta Pokédex.

Cada fila puede incluir juegos (`g`), tipo (`k`), nivel (`lv`), método (`m`), índice de lugar (`l`), condiciones (`c`), nota (`n`), y metadatos extra (`x`). El índice `l` debe resolverse contra `strings` del mismo archivo de especie; no se debe asumir que es una ubicación global.

## Licencia y atribución

Pelagix declara GPL-3.0 y afirma que los datos de encuentros, lugares, formas, evolución y disponibilidad derivan de PKHeX, también GPL-3.0. PokeAPI proporciona parte de los datos descriptivos. Antes de copiar o redistribuir archivos derivados completos en este proyecto hay que incluir atribución y revisar las obligaciones de licencia aplicables. Este proyecto no debe incorporar código de Pelagix sin revisar la licencia.

## Reglas para integrar sin falsear disponibilidad

1. Filtrar exclusivamente índices 26–33 para los ocho juegos acordados.
2. Resolver lugares usando el array `strings` del archivo de la especie.
3. Traducir los tipos de fila a las categorías visibles, conservando el texto original y los metadatos.
4. Separar encuentro ordinario, regalo/intercambio y evento temporal.
5. No etiquetar como disponible actualmente un evento temporal cuyo periodo ya terminó.
6. Cuando falte ubicación o condición, indicarlo como dato incompleto; no inventar detalles.
7. No interpretar ausencia de filas como prueba suficiente de imposibilidad de obtención sin revisar la disponibilidad/formas y la lógica de transferencia.
8. Las formas Alola deben tratarse desde las entradas de formas, no inferirse únicamente desde el número de especie base.

## Estado de la base local existente

`obtencion.js` contiene 825 fichas y ocho claves de juego. Es una estructura útil para la interfaz, pero los registros manuales existentes no deben considerarse verificados solo por estar presentes. En particular, el bloque anterior de Escáner Insular se considera borrador: la única fila corroborada directamente en la muestra consultada es Bulbasaur en Ultrasol/Ultraluna, viernes, Ruta 2. Los demás días/especies de ese bloque necesitan cotejo antes de elevarlos a verificados.

## Fuentes consultadas

- Pelagix README y descripción del dataset: https://github.com/HydrosPlays/Pelagix
- Pelagix DATA.md: https://github.com/HydrosPlays/Pelagix/blob/main/docs/DATA.md
- Pelagix `games.ts`: https://github.com/HydrosPlays/Pelagix/blob/main/src/shared/games.ts
- Pelagix muestra Bulbasaur: https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/1.json
- PKHeX: https://github.com/kwsch/PKHeX
