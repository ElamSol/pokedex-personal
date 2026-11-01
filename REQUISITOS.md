# Requisitos del proyecto — Pokédex personal

**Versión del documento:** 2.0  
**Fecha de actualización:** 31 de octubre de 2026  
**Repositorio:** https://github.com/ElamSol/pokedex-personal  
**Sitio:** https://elamsol.github.io/pokedex-personal/

## 1. Objetivo

Aplicación web personal, adaptable a móvil y escritorio, para registrar una colección de 825 entradas (generaciones I–VII) y consultar métodos de obtención de cada Pokémon con información verificable y vigente.

## 2. Catálogo

- Mantener 825 entradas: 807 especies y 18 formas de Alola.
- Mantener orden nacional, identificadores únicos, generación y sprites.
- No cambiar identificadores ni el catálogo sin migración y pruebas.

## 3. Progreso personal

- Marcar/desmarcar Pokémon como conseguido desde sus tarjetas.
- Guardar automáticamente en el navegador.
- Mostrar estadísticas generales y por generación.
- En cada generación, mostrar primero pendientes y al final conseguidos; conservar el orden nacional dentro de cada grupo.
- Al desmarcar un Pokémon, debe volver al grupo de pendientes.
- La página principal debe mostrar los Pokémon conseguidos más recientemente (máximo inicial: 12), con sprite, nombre, número y fecha cuando exista.
- Los registros antiguos sin fecha deben conservarse y rotularse “Fecha no registrada”; nunca inventar fecha de captura.
- Deshacer debe restaurar exactamente el registro previo, incluida su fecha.
- Las acciones masivas deben aplicar una misma fecha de operación a los nuevos registros y permitir deshacer.

## 4. Respaldo y compatibilidad

- Exportar e importar JSON.
- Importación con modos Combinar y Reemplazar, confirmaciones y validación antes de modificar datos.
- Mantener compatibilidad con los respaldos existentes de formato 1 y catálogo 825-v1.1.
- fechaCaptura es opcional y debe validarse como fecha ISO interpretable.
- La actualización nunca debe borrar, reinterpretar ni fechar artificialmente registros anteriores.
- No subir el progreso personal a GitHub ni a servicios externos.

## 5. Consulta de obtención por Pokémon

- No debe existir un buscador independiente de obtención en la pantalla inicial.
- La consulta se abre exclusivamente desde un botón dentro de cada tarjeta y despliega el panel debajo de esa tarjeta.
- Abrir/cerrar el panel no puede modificar el progreso conseguido/pendiente.
- La información debe proceder de una base local JSON y mostrar estados de verificación; no inventar métodos.
- Juegos prioritarios: Ultrasol/Ultraluna, Sol/Luna, X/Y y Rubí Omega/Zafiro Alfa.


La ficha de cada entrada debe contemplar todas las vías documentadas, no solo encuentros salvajes:

- Encuentro salvaje, pesca, buceo, encuentros especiales y métodos propios del juego.
- Evolución, crianza/huevo, regalo permanente, fósil, intercambio dentro del juego y otras recompensas permanentes.
- Intercambio local con otra consola/jugador, indicando expresamente que requiere otra persona o dispositivo.
- Transferencia desde otro juego compatible, identificando juego de origen, aplicaciones necesarias y restricciones.
- Distribuciones de evento, con nombre, juego, método de distribución y periodo, separadas de las vías vigentes.

### Prioridad de juegos

1. Pokémon Ultrasol y Ultraluna (USUM): mostrar primero cualquier método confirmado.
2. Si no existe ruta confirmada en USUM, revisar Pokémon Sol/Luna cuando sea relevante para la obtención y evolución.
3. Revisar Pokémon X/Y y Pokémon Rubí Omega/Zafiro Alfa (ORAS) como alternativas de 3DS.
4. Para rutas de transferencia, describir el origen y los pasos; no presentarlas como captura directa en el juego de destino.

### Estados obligatorios

- **Disponible actualmente:** ruta comprobada que puede realizarse hoy bajo los requisitos indicados.
- **Disponible con intercambio local:** requiere otra consola/jugador y comunicación local; no depende de servidores en línea.
- **Transferencia condicionada:** requiere Pokémon obtenido previamente en otro juego y aplicaciones compatibles; señalar limitaciones y fecha límite si aplica.
- **Evento finalizado:** distribución temporal ya cerrada. Mostrarla solo como antecedente histórico, con fechas y método conocidos; no presentarla como opción activa.
- **Sin ruta actual confirmada:** no se ha verificado una vía normal vigente en los juegos cubiertos. No equivale a afirmar que sea imposible en todo contexto.
- **Datos por verificar:** usar cuando las fuentes no permitan afirmar con seguridad la localización, método o vigencia.

No inferir disponibilidad de un evento por encontrar una página antigua. No asumir que un Pokémon se puede conseguir en un juego porque aparezca en su Pokédex interna.

## 6. Contexto actual de Nintendo 3DS

- El juego en línea y la distribución de datos por servicios en línea de 3DS finalizaron el 8 de abril de 2024.
- El juego sin conexión y la comunicación local continúan disponibles.
- Nintendo informa que Pokémon Bank finalizará el 25 de febrero de 2027 y que ya no se puede descargar de nuevo. Las rutas que dependan de Bank deben advertir que solo son utilizables por quienes ya tengan acceso y antes del cierre; no describir Bank como solución permanente.
- El cierre de Bank puede afectar las transferencias hacia Pokémon HOME, no la captura offline dentro de los cartuchos.

Fuentes oficiales: [Nintendo — suspensión de servicios 3DS](https://es-americas-support.nintendo.com/app/answers/detail/a_id/63228/p/50/c/120) y [Nintendo — fin de Pokémon Bank](https://es-americas-support.nintendo.com/app/answers/detail/p/172/a_id/61583).

## 7. Calidad y fuentes de datos

- Usar datos estructurados de encuentros por versión como apoyo, no como única fuente para todos los métodos.
- Contrastar métodos de evolución, regalos, intercambios y eventos con fuentes fiables del juego o documentación especializada contrastable.
- Cada ruta debe guardar fuente, fecha de revisión, versión exacta, ubicación, método, condiciones y estado.
- Cuando falte evidencia, mostrar “Datos por verificar” en lugar de inventar una localización.
- Los datos de disponibilidad son independientes del progreso personal.

## 8. Accesibilidad y experiencia

- Interfaz responsive para teléfono y escritorio.
- Controles utilizables con teclado, foco visible, etiquetas accesibles y estados comprensibles sin depender solo del color.
- Imágenes con alternativa visual cuando falte el sprite.
- Mensajes claros en errores de respaldo y almacenamiento.

## 9. Criterios de aceptación

1. El catálogo contiene exactamente 825 entradas y conserva las cantidades por generación.
2. Los conseguidos aparecen al final de cada generación; al desmarcar, vuelven arriba.
3. La página principal muestra los 12 conseguidos más recientes con fechas reales, sin fechar registros heredados.
4. Exportar/importar respaldos antiguos sigue funcionando.
5. Deshacer, acciones masivas, combinar y reemplazar conservan registros y fechas correctamente.
6. Las guías de obtención distinguen método, juego, requisitos, disponibilidad actual, evento caducado y transferencia.
7. Ninguna ruta aparece como disponible sin evidencia y fecha de revisión.
8. Las advertencias de 3DS y Pokémon Bank reflejan el estado vigente al momento de consulta.

## 10. Fuera de alcance de esta entrega

La actualización de interfaz y progreso no certifica por sí misma una base de datos completa de métodos de obtención de las 825 entradas. Esa base debe construirse y verificarse por juego, especie, método y evento antes de mostrarla como guía definitiva.
