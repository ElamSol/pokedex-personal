# Modelo de datos para la guía de obtención

Este documento define cómo registrar métodos de obtención. Es una especificación; no constituye por sí mismo una lista de localizaciones ya verificadas.

## Registro recomendado

Cada método debe tener:

- pokemonId: identificador exacto del catálogo (incluye sufijos regionales).
- game: juego y versión exacta (USUM, US, UM, XY, ORAS, etc.).
- method: captura salvaje, evolución, crianza, regalo, intercambio, transferencia, evento u otro método concreto.
- location: ruta, isla, edificio, NPC, zona o indicación explícita de que no aplica.
- requirements: historia, objeto, versión, forma previa, condición horaria, habilidad, etc.
- availability: uno de los estados definidos en REQUISITOS.md.
- event: nombre, fecha inicial/final, distribución y estado histórico cuando sea evento.
- requiresOtherPlayer: booleano para intercambio local.
- transferPath: juego de origen, aplicación y destino, si corresponde.
- sourceUrl, sourceName, checkedAt: procedencia y fecha de revisión.
- notes: aclaraciones y restricciones.

## Reglas de calidad

1. Una fila por combinación distinta de juego, método y ubicación.
2. Diferenciar encuentro directo de evolución y transferencia.
3. Registrar versiones exclusivas (por ejemplo, Pokémon exclusivo de Ultrasol o Ultraluna).
4. Un evento temporal expirado se conserva en el historial, con estado evento-finalizado.
5. Una distribución por internet de 3DS no puede ofrecerse como activa después del cierre de servicios en línea del 8-04-2024.
6. Los intercambios locales no deben confundirse con el intercambio en línea: el primero puede seguir funcionando sin servidores.
7. Las rutas que requieren Pokémon Bank deben incluir la fecha oficial de cierre (25-02-2027), y advertir que Bank ya no está disponible para descarga nueva.
8. Si no hay fuente fiable o la fuente no confirma el método, usar datos-por-verificar.
9. No marcar sin-ruta-actual-confirmada solo porque un agregador no liste un encuentro; revisar regalos, evoluciones, crianza, intercambios y transferencias.

## Fuente de apoyo

PokéAPI documenta datos de ubicaciones y encuentros por versión, pero no cubre necesariamente todos los regalos, eventos históricos, transferencias o requisitos especiales. Debe combinarse con fuentes adicionales y revisión manual: https://pokeapi.co/docs/v2#pokemon-encounters.

## Estado inicial

La base de rutas completas para las 825 entradas queda pendiente de investigación y validación. No mostrar una localización inventada ni una disponibilidad supuesta como dato confirmado.
