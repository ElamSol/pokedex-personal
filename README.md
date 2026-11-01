# Pokédex personal

Aplicación web estática en HTML, CSS y JavaScript para llevar el control de 825 entradas de las generaciones I–VII (807 especies y 18 formas de Alola). No requiere cuenta ni servidor; el progreso se guarda en el navegador mediante localStorage.

## Publicación

GitHub Pages sirve el contenido de la rama main desde la carpeta raíz. Los archivos principales son index.html, styles.css, catalog.js y app.js; los sprites están en sprites/.

## Uso y respaldo

- Marca una tarjeta para alternar entre conseguido y pendiente.
- En cada generación, los pendientes aparecen primero y los conseguidos al final.
- La página principal muestra hasta 12 Pokémon conseguidos recientemente.
- Las nuevas marcas guardan fecha y hora. Las marcas antiguas se mantienen, pero se muestran sin fecha porque el dato histórico no existía.
- Exporta periódicamente un JSON desde Respaldo. Importa con Combinar para conservar ambos progresos o Reemplazar para sustituir el actual.
- Cada navegador/dispositivo conserva sus propios datos. GitHub Pages no sincroniza el progreso.

## Compatibilidad del respaldo

Se mantiene el formato versionFormato 1 y el catálogo 825-v1.1. El campo opcional fechaCaptura amplía los registros sin invalidar respaldos anteriores que solo contienen conseguido: true.

## Guía de obtención Pokémon

Los requisitos y el modelo de datos previstos se documentan en REQUISITOS.md y GUIA-DATOS-OBTENCION.md. No se debe etiquetar una vía como disponible sin comprobar versión, método, requisitos y estado actual. Los eventos caducados deben identificarse como históricos, nunca como capturas activas.

**Situación de Nintendo 3DS (consulta: 31-10-2026):** las funciones en línea generales de 3DS terminaron el 8-04-2024; el juego sin conexión y la comunicación local siguen siendo posibles. Nintendo anunció que Pokémon Bank terminará el 25-02-2027 y que ya no está disponible para nuevas descargas. Por tanto, una ruta que dependa de Bank debe advertir esta fecha límite y que el usuario ya debe tener acceso a la aplicación. Fuentes: [Nintendo: fin de servicios en línea de 3DS](https://es-americas-support.nintendo.com/app/answers/detail/a_id/63228/p/50/c/120) · [Nintendo: fin de Pokémon Bank](https://es-americas-support.nintendo.com/app/answers/detail/p/172/a_id/61583).

## Catálogo e imágenes

- Catálogo: 807 especies y 18 formas de Alola.
- Distribución: 151, 100, 135, 107, 156, 72 y 104 entradas por generación.
- Sprites PNG: carpeta sprites/; procedencia PokéAPI. Proyecto personal sin fines de lucro. Los derechos de Pokémon pertenecen a sus titulares.

## Pruebas

Ejecuta python tests/test_catalog.py para validar total, identificadores, formas regionales y cantidades por generación. Antes de publicar cambios de lógica, comprobar además: marcar/desmarcar, deshacer, marcado masivo, exportar, importar, combinar y reemplazar.


### Guía local de obtención
La información se carga desde `obtencion.js`, sin API ni servidor. Cada tarjeta tiene su propio panel. Los métodos aún no investigados aparecen como pendientes de verificación. El progreso personal continúa en respaldo JSON.


## Avance de guía de obtención (31-10-2026)

Se integró un segundo bloque contrastado de cinco especies usando archivos de datos individuales de Pelagix/PKHeX. Consulta `BLOQUE-VERIFICADO-02-INICIALES.md` y `ATRIBUCION-LICENCIA-DATOS.md`. La guía sigue incompleta: el validador registra 825 fichas, 6,600 cruces, 0 errores estructurales y advertencias de trazabilidad que aún requieren revisión.

## Consulta híbrida de obtención

La guía local (`obtencion.js`) permanece disponible sin Internet. `obtencion-online.js` realiza una consulta puntual al archivo JSON de Pelagix para el Pokémon abierto y muestra sus filas como complemento separado. Si no hay conexión o la consulta falla, se conserva la ficha local. Consulta `GUIA-CONSULTA-HIBRIDA.md` para limitaciones y fuente. La consulta remota es experimental y no sustituye la revisión manual de eventos, ubicaciones y condiciones.
