# BITÁCORA GENERAL DE MEJORAS — POKÉDEX PERSONAL
**Actualizada:** 31 de octubre de 2026  
**Documento base:** *Pokédex personal: documento de requerimientos v1.1* (30 de octubre de 2026).  
**Repositorio previsto:** `ElamSol/pokedex-personal`  
**Rama de trabajo prevista:** `mejoras-pokedex-octubre-2026`  
**Estado:** especificación consolidada y primer generador de encuentros preparado; integración visual y validación real pendientes.

## 1. Alcance original del documento entregado
- Aplicación web personal, gratuita, sin servidor ni cuentas.
- Catálogo precargado de **825 entradas**: 807 especies de generaciones I–VII y 18 formas de Alola. Meltan y Melmetal excluidos.
- Siete generaciones en la pantalla inicial; cuadrícula por generación, orden nacional y navegación de regreso.
- Tarjeta con sprite/imagen, nombre español, número nacional y etiqueta de forma regional.
- Conseguido/pendiente, diferencia visual por color y símbolo, deshacer, marcar/desmarcar generación y reinicio con confirmación.
- Búsqueda por nombre/número sin distinguir acentos ni mayúsculas; filtros todos/conseguidos/pendientes.
- Estadísticas generales y por generación.
- Guardado automático local; respaldo JSON; importar en modos Reemplazar y Combinar con validaciones y advertencias.
- Ayuda, diseño adaptable PC/Android, controles táctiles de al menos 44 px, accesibilidad básica y rendimiento.
- Sin sincronización automática ni conexión directa a juegos, HOME o Bank.
- Imágenes locales preferidas; alternativa remota explicada; proyecto personal sin fines de lucro.
- Mejoras futuras contempladas en el documento: ubicaciones/métodos por juego, líneas evolutivas, duplicados, filtros por juego/método/transferencia y planificador.

## 2. Decisiones y ampliaciones solicitadas durante la conversación
1. Ordenar dentro de cada generación: pendientes primero y conseguidos al final.
2. En la pantalla inicial, permitir ver todos o los conseguidos más recientemente.
3. Incorporar información de dónde y cómo obtener cada Pokémon.
4. Prioridad de consulta: Ultrasol/Ultraluna; después Sol/Luna; después X/Y; finalmente Rubí Omega/Zafiro Alfa.
5. Incluir métodos accesibles actualmente y marcar eventos temporales finalizados como no disponibles.
6. Diferenciar captura directa, evolución, crianza/huevo, regalo, fósil, intercambio, transferencia y evento.
7. Diferenciar juego local/offline de métodos online, intercambio con otra persona/consola y transferencias.
8. Estados de obtención: Disponible actualmente; Disponible con intercambio local; Transferencia condicionada; Evento finalizado; Sin ruta actual confirmada; Datos por verificar.
9. La guía debe estar dentro de cada tarjeta, no como buscador separado.
10. La guía se abrirá con un botón discreto (pin/lupa/llave) dentro de la tarjeta; consultar no modifica el estado conseguido.
11. Diseño elegido: panel desplegable debajo de la tarjeta (mejor adaptación móvil). Hover solo como vista previa opcional en escritorio; nunca depender de hover.
12. Agrupar la información por juego: Ultrasol/Ultraluna, Sol/Luna, X/Y y Rubí Omega/Alfa Zafiro.
13. Crear un generador Windows `.CMD` que recopile automáticamente datos disponibles, cree archivos estructurados y señale datos pendientes; no inventar información.
14. Añadir en inicio una ventana/recuadro con cuenta regresiva fija para el cierre de Pokémon Bank.
15. Añadir recordatorio para transferir a Pokémon HOME antes del cierre y enlace a fuentes oficiales.
16. Entrega final: archivos completos en ZIP para descargar, ejecutar y probar localmente; el usuario confirmará que funciona antes de recibir instrucciones/comandos Git para actualizar el repositorio.
17. No fusionar el PR ni publicar cambios en `main`/GitHub Pages sin aprobación explícita del usuario.

## 3. Corrección importante de la fecha de Pokémon Bank
La fecha **25 de febrero de 2026** ya pasó y no es la fecha oficial de cierre. La información oficial publicada en 2026 fija el cierre para el **26 de febrero de 2027 a las 03:00 UTC**. En Nicaragua (UTC−6), corresponde al **25 de febrero de 2027 a las 21:00**. La cuenta regresiva debe apuntar a esa fecha local equivalente, con fecha estática y sin consultar servicios externos.
Fuentes oficiales:
- Pokémon Support: https://support.pokemon.com/hc/es/articles/52629477077012-Banco-de-Pok%C3%A9mon-y-Pok%C3%A9mon-HOME
- Nintendo América: https://es-americas-support.nintendo.com/app/answers/detail/p/172/a_id/61583
- Pokémon HOME requiere plan Premium para mover Pokémon desde Bank, según asistencia oficial: https://support.pokemon.com/hc/es/articles/360039206112-Ya-no-tengo-suscripci%C3%B3n-al-Banco-de-Pok%C3%A9mon-Todav%C3%ADa-puedo-tener-acceso-a-mis-Pok%C3%A9mon-y-trasladarlos-a-Pok%C3%A9mon-HOME

## 4. Estado real de implementación (no confundir con lo solicitado)
- Según el historial de trabajo, en la rama de mejoras se habían preparado cambios de orden/progreso, últimos conseguidos, catálogo de 825 entradas, sprites y documentación.
- También se había agregado un `obtener.js` experimental que consultaba encuentros salvajes para un subconjunto de juegos; no cubría toda la información de obtención ni Sol/Luna.
- No se pudo verificar el contenido actual de la rama remota en esta sesión (la consulta de GitHub devolvió 404). Por lo tanto, no se afirma que la interfaz de guía por tarjeta o el reloj estén integrados.
- El script de este paquete es un **generador inicial de encuentros registrados por PokéAPI**, no una base de datos completa de todos los métodos. Requiere Internet y PowerShell 5.1 o posterior.
- El generador deja identificados los casos sin encuentros; no deduce que un Pokémon sea imposible de conseguir.
- Los nombres de áreas de PokéAPI salen como identificadores en inglés; traducción, regalos, eventos históricos, crianza, evolución y transferencias requieren enriquecimiento y verificación adicional.
- No se ha probado en el PC del usuario ni en Chrome Android.

## 5. Plan de implementación y aceptación
### A. Generador de información
- Ejecutar `GENERAR_DATOS_POKEDEX.cmd`.
- Consultar Pokémon #1–807 y recuperar encuentros para los juegos admitidos.
- Guardar `datos_obtencion_encuentros.json` y `resumen_generacion.txt`.
- Incluir versión de API/fecha de extracción, juegos, ubicación, método, condiciones y estado de revisión.
- No reemplazar datos manuales confirmados sin respaldo.
- Marcar como `pendiente_revision` los datos parciales/no cubiertos.

### B. Interfaz por tarjeta
- Botón «Dónde obtenerlo» dentro de cada tarjeta.
- Panel desplegable debajo de la tarjeta; accesible con ratón, toque y teclado.
- Secciones por juego en el orden acordado.
- Mostrar fuente, tipo de método, requisito online/local y estado.
- Abrir/cerrar guía no cambia el progreso.

### C. Cuenta regresiva
- Fecha fija: `2027-02-25T21:00:00-06:00` (hora Nicaragua).
- Mostrar días, horas, minutos y segundos; después del cierre, mostrar «Servicio finalizado».
- Debe funcionar offline; fecha codificada localmente, sin API externa.
- Añadir aviso de que Pokémon HOME Premium es necesario para transferir desde Bank, según soporte oficial.

### D. Pruebas finales
- Verificar 825 entradas, IDs únicos y cantidades por generación: 151, 100, 135, 107, 156, 72, 104.
- Probar abrir/cerrar fichas sin alterar estado; progreso y respaldo intactos.
- Revisar visualización en PC y Android; controles táctiles ≥44 px.
- Probar generador con conexión, reintentos y salida parcial ante fallos.
- Comparar una muestra de encuentros con los juegos/fuentes; registrar datos sin verificar.
- Probar reloj con fecha simulada antes/después del cierre.
- Entregar ZIP completo y guía sencilla. Solo tras aprobación del usuario, preparar comandos Git; no publicar ni fusionar sin autorización.

## 6. Fuentes de datos y límites
- PokéAPI: https://pokeapi.co/ — útil para encuentros registrados por versión, áreas y métodos de encuentro.
- Los encuentros de PokéAPI no equivalen a una guía completa de obtención. No cubren necesariamente eventos distribuidos, regalos, intercambios dentro del juego, crianza, evoluciones ni todas las restricciones de transferencia.
- Los eventos temporales deben llevar fecha y estado comprobado; nunca asumir que siguen activos.
- Transferencia condicionada debe indicar el juego de origen, aplicación/consola requerida y restricciones.


## 7. Entrega técnica del 31 de octubre de 2026
- Se eliminó la sección de búsqueda independiente de obtención de la pantalla inicial.
- Se reemplazó el buscador remoto experimental por `obtencion.js`, una base fija local cargada con `<script>`.
- Cada tarjeta ahora tiene un botón «Dónde obtenerlo» y un panel desplegable independiente del botón de progreso. Abrir la guía no marca ni desmarca Pokémon.
- La base contiene 825 fichas y ocho juegos; los métodos están explícitamente pendientes de revisión cuando no existe dato verificado. Esto es una estructura funcional, no una base de métodos completa.
- Se añadió cuenta regresiva offline para Pokémon Bank y enlace a soporte oficial.
- Se conserva el sistema de progreso y respaldo JSON sin cambiar su formato.
- Se retiró `obtener.js` y el generador CMD anterior del flujo principal para evitar consultas remotas y errores recurrentes.
- Validaciones realizadas: estructura de 825 entradas, 8 juegos por ficha, sintaxis JavaScript y ausencia del buscador de obtención en inicio. No se declara verificada la totalidad de los métodos por especie.


## Avance de base de obtención — bloque 01 (31-10-2026)

Se incorporó el primer bloque a `obtencion.js`:
- Bulbasaur (#001)
- Ivysaur (#002)
- Venusaur (#003)

Se registraron las ocho versiones acordadas para cada especie (24 combinaciones Pokémon-juego). Los métodos usan los campos que consume la interfaz: `tipo`, `lugar` y `detalle`. Se añadieron referencias por ficha. Se separa captura/regalo, evolución e intercambio. Los registros restantes siguen pendientes y no significan que no estén disponibles.

Referencias consultadas:
- Bulbapedia, Bulbasaur: https://bulbapedia.bulbagarden.net/wiki/Bulbasaur
- Thonky, ubicaciones de Ultrasol/Ultraluna: https://www.thonky.com/pokemon-ultra-sun-ultra-moon/list-of-pokemon-locations
- Pokémon Database: https://pokemondb.net/pokedex/bulbasaur

Alcance: primer bloque de datos, no la base completa. No se modificó GitHub ni se publicó nada.


## Avance de base de obtención — bloque 02 (31-10-2026)

Se incorporó la línea de Charmander:
- Charmander (#004)
- Charmeleon (#005)
- Charizard (#006)

Se completaron las ocho versiones por especie: 24 combinaciones adicionales. En Ultrasol/Ultraluna, Charmander se registra por Escaneo Insular en Ruta 3 los domingos; Charmeleon y Charizard por evolución a los niveles 16 y 36. En X/Y se registra el regalo de Charmander en el laboratorio del profesor Ciprés y sus evoluciones. En Sol/Luna y Rubí Omega/Zafiro Alfa se registra la vía de intercambio desde juegos compatibles, sin atribuirles capturas nativas.

Referencias:
- Serebii, Island Scan: https://www.serebii.net/ultrasunultramoon/islandscan.shtml
- Serebii, Charmander X/Y: https://www.serebii.net/pokedex-xy/004.shtml
- Thonky, ubicaciones Ultrasol/Ultraluna: https://www.thonky.com/pokemon-ultra-sun-ultra-moon/list-of-pokemon-locations
- Thonky, ubicaciones Rubí Omega/Zafiro Alfa: https://www.thonky.com/pokemon-omega-ruby-alpha-sapphire/list-of-pokemon-locations


## Avance de base de obtención — bloque 03 (31-10-2026)

Se incorporó la línea de Squirtle:
- Squirtle (#007)
- Wartortle (#008)
- Blastoise (#009)

Se añadieron 24 combinaciones Pokémon-juego. En Ultrasol/Ultraluna, Squirtle se registra por Escaneo Insular en Cueva del Oleaje; Wartortle y Blastoise por evolución a niveles 16 y 36. En X/Y se registra como regalo seleccionable en el laboratorio del profesor Ciprés, seguido de sus evoluciones. Para Sol/Luna y Rubí Omega/Zafiro Alfa se documenta la vía de intercambio compatible, no una captura nativa.

Referencias:
- Bulbapedia, Squirtle: https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)
- Serebii, Island Scan: https://www.serebii.net/ultrasunultramoon/islandscan.shtml
- PokéDreams, Squirtle: https://www.pokedreams.com/pokedex/squirtle
