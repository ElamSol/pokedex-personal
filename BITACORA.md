# Bitácora: Pokédex personal (copia de trabajo, Fase 1)

Fecha: 1 de noviembre de 2026. Base: ZIP `pokedex-personal-mejoras-pokedex-octubre-2026`. Referencia: requerimientos v3.0.
Esta carpeta es una copia; el original no se modificó. No hay git (el ZIP original no tenía historial).

## Hecho (cambios en esta copia)
| Cambio | Archivo | Requisito |
|---|---|---|
| Formato de respaldo v2 (`formato`, `catalogo`, `modificado`, `entradas`) y nombre `pokedex-respaldo-AAAA-MM-DD.json` | app.js | RF-16 |
| Importación acepta v1 y v2 (migra v1 a v2) y rechaza formatos futuros con mensaje claro | app.js | RF-17 |
| Progreso guardado en clave `.v2`; si no existe, se lee la `.v1` (la `.v1` no se borra) | app.js | RF-22 |
| Cada registro lleva `conseguidoEn` y `enHome` (sin interfaz todavía) | app.js | Sección 8 |
| Combinar: une marcas, `enHome` si lo está en cualquiera, conserva la fecha más reciente | app.js | RF-17 |
| Deshacer de hasta 10 pasos (incluye acciones por generación, reinicio e importación) | app.js | RF-12 |
| Consulta online apagada tras la bandera `CONSULTA_ONLINE_ACTIVA = false` (código intacto) | app.js | D-07 |
| Búsqueda ignora apóstrofes, puntos, guiones y espacios (ej. "farfetchd", "mr mime") | app.js | RF-10 |
| Aviso de respaldo si hay marcas y pasaron más de 14 días (o nunca se exportó) | app.js | RF-18 |
| "Type: Null" pasa a "Código Cero" | catalog.js | RF-01 |
| Pruebas reparadas (faltaba `setInterval`; clics en el botón interior) y nuevas AT-03/AT-04 | tests/test_app.js | AT-03, AT-04 |

## Validado automáticamente (resultado real)
- `node tests/test_app.js`: OK (incluye migración v1 a v2, combinar con `enHome`, formato futuro rechazado).
- `python3 tests/test_catalog.py`: 6 pruebas OK.
- `node --check` en app.js y catalog.js: sin errores.
- Aún no se volvió a ejecutar el validador de obtención tras estos cambios (no se tocó obtencion.js).

## No hecho todavía (Fase 1)
- RF-03: selector "todos / recientes" en el inicio (hoy el panel de recientes muestra 12 y está siempre visible).
- RF-05: opción para desactivar "Pendientes primero".
- RF-19: revisar que la ayuda cubra todo lo exigido.
- Prueba de deshacer a 10 pasos y de aviso de respaldo (no hay prueba automática).
- Pruebas manuales PR-01 a PR-14 (ver PRUEBAS-MANUALES.md). Ninguna se ha ejecutado.

## Pendiente de decisión
- Qué hacer con el botón "Dónde obtenerlo" actual (hoy ficha local; el v3.0 plantea enlace externo en la Fase 2).
- Los 11 `.md` históricos siguen en la carpeta; el v3.0 pide dejar solo README y registro de cambios.
- Fecha del Bank sigue dentro del código (RF-33, Fase 2); no reverificada.

## Riesgos conocidos
- Cualquier progreso ya guardado en la clave `.v1` se lee al abrir, pero solo se copia a `.v2` en el siguiente cambio.
- Todo lo anterior es lectura de código y pruebas simuladas; nada se probó en un navegador real.

## Actualización 2: "Dónde obtenerlo" sin información
Causa: la ficha local solo tiene métodos para 18 Pokémon; en los otros 807 cada juego decía "pendiente de verificación", y la consulta online quedó apagada en la Fase 1. No era un error de código.
Cambio: la ficha de cada Pokémon ahora incluye un enlace a la página de ubicaciones de Serebii (`serebii.net/pokedex-sm/location/NNN.shtml`), con aviso de que es una fuente externa y requiere Internet.
Verificado: el patrón de enlace aparece en resultados de búsqueda reales para los números 025, 039, 125, 172, 238, 239, 702 y 771. No se probó con las formas de Alola (el enlace usa la especie base) ni en un navegador.
Limitación: esa página cubre Sol, Luna, Ultrasol y Ultraluna; no cubre X, Y, Rubí Omega ni Zafiro Alfa.
