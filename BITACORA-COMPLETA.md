# Bitácora completa — Pokédex personal

**Actualizada:** 1 de noviembre de 2026
**Propósito:** reunir en un solo documento todo lo pedido, decidido y hecho desde la primera versión hasta hoy, con su estado real. Sustituye como resumen a las bitácoras sueltas (que pueden archivarse).

---

## 1. Estado actual del proyecto (resumen)

| Área | Estado |
|---|---|
| Catálogo de 825 entradas (807 especies + 18 formas de Alola) | Hecho y probado con pruebas automáticas |
| Progreso, búsqueda, filtros, deshacer, respaldo JSON v2 | Hecho; probado con simulador, **no en navegador real** |
| «Dónde obtenerlo» con datos locales (sin Internet) | Hecho: 825 de 825 entradas procesadas; 18 fichas revisadas a mano + capa importada por verificar |
| Diseño del panel «Dónde obtenerlo» (ancho completo, color por juego) | Hecho; el usuario ya lo vio en pantalla y lo aprobó en lo general |
| Traducción al español de los datos importados | **Parcial** (solo términos seguros) |
| «Ya conseguidos» (antes «Últimos conseguidos») con ver todos | Hecho; pendiente de ver en navegador |
| Reproductor de música | Hecho y probado con simulador; **pendiente de primera prueba real** |
| Pruebas manuales PR-01 a PR-14 | **Ninguna ejecutada** |
| Publicación en GitHub Pages | **No se ha publicado nada** de estas fases |

## 2. Línea de tiempo

### v1.0 / v1.1 — Documento base (30-oct-2026)
Alcance pedido: app web personal, gratuita, sin servidor ni cuentas; 825 entradas de las generaciones I–VII (807 especies + 18 formas de Alola; sin Meltan ni Melmetal); siete generaciones en la pantalla inicial; tarjeta con sprite, nombre, número y etiqueta de forma regional; conseguido/pendiente con color y símbolo; deshacer, marcar generación, reinicio con confirmación; búsqueda sin distinguir acentos; filtros todos/conseguidos/pendientes; estadísticas; guardado local; respaldo JSON con Reemplazar/Combinar; ayuda; diseño adaptable PC/Android con controles táctiles de 44 px.

### Ampliaciones pedidas el 31-oct-2026 (documento de requisitos v2.0)
1. Pendientes primero y conseguidos al final dentro de cada generación.
2. Pantalla inicial con los conseguidos más recientes (máximo 12), con fecha cuando exista.
3. Información de **dónde y cómo obtener** cada Pokémon, dentro de cada tarjeta (no como buscador aparte).
4. Prioridad de juegos: Ultrasol/Ultraluna, Sol/Luna, X/Y, Rubí Omega/Zafiro Alfa.
5. Distinguir captura, evolución, cría, regalo, intercambio, transferencia y evento; los eventos finalizados no se presentan como disponibles.
6. Cuenta regresiva del cierre de Pokémon Bank (fecha fija local `2027-02-25 21:00`, hora de Nicaragua), con aviso de Pokémon HOME Premium y enlace oficial. Se corrigió la fecha errónea inicial (25-feb-2026).
7. Entregar ZIP completo para probar en local; no publicar ni fusionar en GitHub sin aprobación expresa.

Entregas técnicas del 31-oct: botón «Dónde obtenerlo» por tarjeta; `obtencion.js` como base local fija; retiro del buscador remoto experimental y del generador por PokéAPI del flujo principal; bloques de datos manuales 01 (Bulbasaur, Ivysaur, Venusaur), 02 (Charmander, Charmeleon, Charizard) y 03 (Squirtle, Wartortle, Blastoise); bloque verificado 02 contra archivos reales de Pelagix (Bulbasaur, Charmander, Squirtle, Chikorita, Cyndaquil).
Nota: en `BITACORA-GENERAL-MEJORAS.md` el bloque 03 menciona «Cueva del Oleaje» para Squirtle; la base actual (`obtencion.js`) ya dice **Cueva Unemar** (corrección posterior).

### Fase 1 (1-nov-2026, copia de trabajo; referencia: requisitos v3.0)
| Cambio | Archivo |
|---|---|
| Respaldo formato v2 (`formato`, `catalogo`, `modificado`, `entradas`), nombre `pokedex-respaldo-AAAA-MM-DD.json` | app.js |
| Importación acepta v1 y v2 (migra v1→v2) y rechaza formatos futuros | app.js |
| Progreso en clave `.v2`; lee `.v1` si no existe `.v2` (no se borra) | app.js |
| Cada registro lleva `conseguidoEn` y `enHome` | app.js |
| Combinar: une marcas, `enHome` si lo está en cualquiera, conserva la fecha más reciente | app.js |
| Deshacer de hasta 10 pasos | app.js |
| Consulta online apagada tras `CONSULTA_ONLINE_ACTIVA = false` | app.js |
| Búsqueda ignora apóstrofes, puntos, guiones y espacios | app.js |
| Aviso de respaldo si pasaron más de 14 días | app.js |
| «Type: Null» → «Código Cero» | catalog.js |
| Pruebas automáticas reparadas y ampliadas | tests/test_app.js |

Actualización: «Dónde obtenerlo» salía vacío en 807 de 825 entradas (la ficha manual solo cubría 18 Pokémon). Se añadió temporalmente un enlace externo a Serebii. **Esa solución quedó superada** por la capa de datos locales (sección siguiente).

### Fase 2 (hoy, 1-nov-2026) — Datos locales completos de obtención
1. **Petición del usuario:** ver la información de obtención de todos los Pokémon sin Internet.
2. **Diagnóstico:** el generador anterior consultaba PokéAPI y dejó `datos_obtencion_encuentros.json` con 0 registros y 807 errores. Se descartó.
3. **Fuente elegida:** dataset de Pelagix (GPL-3.0, derivado de PKHeX), por cubrir X, Y, Rubí Omega, Zafiro Alfa, Sol, Luna, Ultrasol y Ultraluna.
4. **Corrección de supuestos:** se leyó la definición real del formato (`dex-types.ts`). Las filas de encuentro están **dentro de cada forma**, no sueltas; evolución y cría **sí vienen** en la fuente (dije antes que no).
5. **Descargador:** `DESCARGAR_DATOS_IMPORTADOS.ps1` + `PROBAR_5_CASOS.cmd` + `GENERAR_DATOS_IMPORTADOS.cmd`. Verifica que los índices 26–33 sean los 8 juegos, se detiene si el formato cambia, no inventa datos.
6. **Prueba de 5 casos (Bulbasaur, Pikachu, Mewtwo, Rowlet, Raichu de Alola):** resultados coherentes (p. ej. Escáner Insular viernes/Ruta 2 de Bulbasaur en Ultrasol/Ultraluna).
7. **Descarga completa:** 825 de 825 entradas, 0 fallos. Entradas con al menos una fila: X 430, Y 429, Rubí Omega 340, Zafiro Alfa 337, Sol 289, Luna 289, Ultrasol 403, Ultraluna 402. **136 entradas sin ninguna fila de encuentro/regalo/evento** (algunas muestran igualmente evolución o huevo).
8. **Adaptación al formato existente:** el `app.js` actual ya leía `window.POKEDEX_OBTENCION_IMPORTADA`; se ajustó el descargador para generar ese formato (`registros` con `numero`, `forma`, `tipoFila`, `metodo`, `lugar`, `nivel`, `condiciones`, `nota`, `incompleto`, `eventoAntecedente`). Las 18 formas de Alola usan `forma = 1`.
9. **Reglas de honestidad aplicadas:** sección «Datos importados, por verificar»; eventos como antecedente; «sin filas» no significa imposible de conseguir; faltantes marcados «dato incompleto».

### Fase 3 (hoy) — Diseño y uso
- Se ocultó el bloque «fichas manuales» cuando solo tenía líneas «pendiente».
- **Panel ancho:** al abrir «Dónde obtenerlo», la tarjeta ocupa toda la fila y empuja a las demás.
- **Un bloque por juego**, con franja de color y símbolo (X azul, Y rojo, Ω carmesí, α azul oscuro, ☀ Sol, ☾ Luna, Ultrasol/Ultraluna en degradado).
- **Fusión manual + importado:** dentro de cada juego, primero las filas «Revisado a mano» y después las importadas; se eliminó la sección separada de fichas manuales (los datos manuales se conservan).
- **Aviso de origen al final** del panel, en un recuadro amarillo; texto más grande y de mayor contraste; se quitó «Forma 0».
- **Traducción segura al español:** métodos comunes, «Route N» → «Ruta N», días de la semana, mañana/día/noche, y tipos «Cría», «Evolución», «Evento / distribución». Los nombres de lugares siguen en inglés salvo que se conozcan con certeza.
- **«Ya conseguidos»:** el panel de inicio cambia de «Últimos conseguidos» a «Ya conseguidos» y sigue mostrando los 12 más recientes.
- **Vista completa de conseguidos (nueva pantalla, 1-nov-2026):** botón «Ver todos y administrar». Lista todos los conseguidos en lotes de 60 («Cargar más»), con búsqueda, filtro por generación y orden (recientes o número). Cada tarjeta tiene casilla; botones: seleccionar todos los de la lista, quitar selección, **desmarcar seleccionados**, **desmarcar todos los conseguidos** (doble confirmación) y deshacer. Tocar una tarjeta solo la selecciona; nada cambia hasta confirmar. Probado con un simulador (180 conseguidos: lotes, selección, filtro, desmarcado por generación, deshacer, desmarcar todos).
- **Reproductor de música** (ver sección 4).

## 3. Requerimientos del usuario y su estado

| # | Requerimiento | Estado |
|---|---|---|
| 1 | Catálogo 825 entradas, progreso local, respaldo/importación | Hecho |
| 2 | Pendientes primero; opción de desactivar (RF-05) | Orden hecho; **opción de desactivar pendiente** |
| 3 | Inicio: ver todos / recientes (RF-03) | Hecho con «Ya conseguidos» |
| 4 | Dónde obtenerlo dentro de cada tarjeta, offline | Hecho (capa importada + fichas manuales) |
| 5 | Panel legible, sin texto apretado | Hecho (ancho completo) |
| 6 | Identificar cada juego por color/distintivo | Hecho |
| 7 | Aviso «por verificar» al final | Hecho |
| 8 | Información en español | **Parcial**; ampliable con la lista de lugares |
| 8b | Desmarcar muchos conseguidos sin hacerlo uno por uno; ver todos los conseguidos en otra pantalla | Hecho (vista completa con casillas); falta verlo en navegador real |
| 9 | Cuenta regresiva Bank | Hecho (fecha fija local) |
| 10 | Reproductor con la música del usuario, sin tener que nombrar pista por pista | Hecho (lista automática) |
| 11 | Reproductor con anterior, siguiente, pausa y lo necesario | Hecho (ver sección 4) |
| 12 | Descargar el soundtrack completo de gen I–VII | **No realizado** (material con derechos de autor; ver sección 5) |
| 13 | Ayuda completa (RF-19) | Ampliada con puntos 6 y 7; revisión completa pendiente |
| 14 | Pruebas manuales PR-01 a PR-14 | **Pendiente** (ninguna ejecutada) |
| 15 | Dejar solo README y registro de cambios (v3.0) | **Pendiente** (11 `.md` históricos aún en la carpeta) |
| 16 | Publicar en GitHub solo tras aprobación | Sin publicar |

## 4. Reproductor de música

**Funciones:** reproducir/pausar, pista anterior (si la pista lleva más de 3 s, reinicia), siguiente, ±10 segundos, barra de posición con tiempos, volumen y silencio, orden aleatorio (con historial para volver), repetir (no / toda la lista / una pista), lista con búsqueda (sin distinguir acentos), filtro por carpeta y por disco, resalta la pista actual. Recuerda volumen, aleatorio, repetir y última pista. Compatible con las teclas multimedia del sistema. No suena solo: el navegador exige pulsar ▶.

**Cómo se arma la lista sin escribir nombres:** `ACTUALIZAR_MUSICA.cmd` recorre la carpeta `musica` (y subcarpetas), limpia los nombres (quita «1-19.», marcas invisibles, guiones bajos), detecta el disco por el prefijo `D-NN` y genera `playlist.js`. Se vuelve a ejecutar cuando se agrega música.

**Música entregada por el usuario:** `pokemonost.zip`, 136 pistas MP3 (349 MB), 4 discos (54 + 52 + 17 + 13). Por los títulos (Hoenn, Battle Frontier, Team Aqua/Magma) parece ser la banda sonora de la tercera generación; el disco 4 son pistas «Unused». **No cubre las generaciones I–VII completas.**

**Probado:** lógica de reproducción con un simulador (anterior/siguiente, repetir, aleatorio, filtros, errores, persistencia); limpieza de nombres con los 136 nombres reales. **No probado:** reproducción real en un navegador, el script de PowerShell, el rendimiento con 349 MB.

## 5. Límites, licencias y riesgos

- **Datos de obtención (GPL-3.0, derivados de PKHeX/Pelagix):** uso personal sin problema. No subir `obtencion_importada.js` ni `datos_pelagix_crudo/` a GitHub público sin revisar la atribución. Texto sugerido: «Datos de obtención importados del dataset de Pelagix (HydrosPlays/Pelagix, GPL-3.0), derivados de PKHeX (kwsch, GPL-3.0). Sin verificar fila por fila.»
- **Música:** pertenece a Game Freak, Nintendo y The Pokémon Company. Se usa solo desde archivos que el usuario ya posee y en su equipo. **No subir la carpeta `musica` ni `playlist.js` a GitHub Pages**: sería redistribuirla, y además 349 MB superan lo razonable para ese servicio. Añadir `musica/` y `playlist.js` al `.gitignore`.
- **Los datos importados no están verificados fila por fila.** Las 18 fichas manuales sí.
- **«Sin filas» ≠ imposible de conseguir.** Ej.: Mewtwo en Sol/Luna llega por transferencia, que la fuente no registra como fila.
- **Nada se ha visto en un navegador real por Claude.** Todo lo anterior es lectura de código y pruebas simuladas; el usuario confirmó visualmente el diseño del panel en una captura.
- Si se cambia de navegador o equipo, el progreso no viaja solo: usar el respaldo JSON.
- El script de PowerShell del reproductor es nuevo y no se ejecutó antes de entregarlo.

## 6. Archivos del proyecto (lo nuevo)

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Página principal (scripts y estilos ordenados, panel «Ya conseguidos», ayuda con puntos 6 y 7) |
| `app.js` | Lógica de la app (panel de obtención nuevo, traducción segura, «Ya conseguidos» y su vista completa) |
| `obtencion-panel.css` | Diseño del panel «Dónde obtenerlo» |
| `conseguidos.css` | Diseño de la vista completa «Ya conseguidos» |
| `obtencion_importada.js` | Datos importados (generado; **no publicar**) |
| `datos_pelagix_crudo/` | Copia original de los archivos descargados (**no publicar**) |
| `DESCARGAR_DATOS_IMPORTADOS.ps1`, `PROBAR_5_CASOS.cmd`, `GENERAR_DATOS_IMPORTADOS.cmd` | Descarga única de datos |
| `reproductor.js`, `reproductor.css` | Reproductor |
| `ACTUALIZAR_MUSICA.ps1`, `ACTUALIZAR_MUSICA.cmd` | Genera `playlist.js` |
| `playlist.js`, carpeta `musica/` | Lista y pistas del usuario (**no publicar**) |

## 7. Pendientes y próximos pasos sugeridos

1. Probar en navegador real: panel de obtención, «Ya conseguidos» y reproductor; anotar fallos.
2. Ejecutar las pruebas manuales PR-01 a PR-14 en PC y Android.
3. Ampliar la traducción: subir `obtencion_importada.js` para listar los lugares más frecuentes y traducir los que se conozcan con certeza.
4. RF-05: opción para desactivar «Pendientes primero».
5. Revisar la ayuda completa (RF-19) y archivar los `.md` históricos (dejar README y esta bitácora).
6. Antes de publicar: actualizar `.gitignore`, revisar atribución y pedir aprobación explícita.
7. Decidir si se quieren más fichas manuales para los Pokémon que más importan al usuario.
