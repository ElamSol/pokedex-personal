# Consulta híbrida de métodos de obtención

La aplicación mantiene `obtencion.js` como base local obligatoria. `obtencion-online.js` añade una consulta puntual al abrir una ficha, siempre que `navigator.onLine` indique conexión.

- Fuente remota: `https://raw.githubusercontent.com/HydrosPlays/Pelagix/main/src/renderer/public/data/species/{numero}.json`
- Se consulta solo la especie abierta; no se descargan los 825 archivos de golpe.
- La respuesta se valida de forma básica y se muestra en un panel separado. Nunca reemplaza los registros locales.
- Si no hay conexión, falla CORS, la petición expira o la respuesta no tiene el formato esperado, se mantiene visible la información local.
- `navigator.onLine` es una señal orientativa; la petición fetch es la comprobación efectiva.
- Los registros de tipo evento no se presentan como disponibles ni finalizados automáticamente.
- La fuente es externa, puede cambiar o dejar de estar disponible. Su dataset puede incluir servicios cerrados y eventos antiguos; requiere verificación por juego y distribución.

La consulta remota es experimental y debe probarse en navegador con GitHub Pages/HTTPS, con conexión y sin conexión. No se usa un proxy propio ni un servidor backend.
