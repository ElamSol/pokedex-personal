# Atribución y licencia de los datos de referencia

Los datos de encuentros consultados para este bloque proceden de los archivos de especies de **Pelagix** (`HydrosPlays/Pelagix`), que declara licencia **GNU GPL v3.0**. Su documentación indica que los datos de encuentros, ubicaciones, formas y evolución derivan de **PKHeX**, también distribuido bajo GPL v3.0. La fuente de nombres y otros metadatos puede incluir PokeAPI.

Este proyecto no copia el código de la aplicación Pelagix. Sí conserva enlaces de procedencia a los registros consultados y reconoce que los datos incorporados están basados en su dataset derivado de PKHeX. Antes de distribuir públicamente una versión que incorpore una porción sustancial de esos datos, debe revisarse y cumplirse la GPL-3.0 aplicable, incluyendo la entrega del texto de licencia y los avisos correspondientes. No se afirma que los datos sean exhaustivos ni libres de errores.

Fuentes:
- https://github.com/HydrosPlays/Pelagix
- https://github.com/HydrosPlays/Pelagix/blob/main/docs/DATA.md
- https://github.com/kwsch/PKHeX
- https://www.gnu.org/licenses/gpl-3.0.html

## Capa importada local (cuando se genere)

La capa `obtencion_importada.js` se genera localmente a partir de los JSON originales guardados sin modificar en `datos_pelagix_crudo/`, procedentes de `HydrosPlays/Pelagix` y derivados de `PKHeX`. Se conserva el registro original de cada fila junto con los metadatos y la clave de forma del archivo de especie. La licencia declarada para los datos es GNU GPL-3.0; no se debe redistribuir esta capa ni los JSON crudos públicamente desde este repositorio. Ambos quedan excluidos mediante `.gitignore`.

La capa se etiqueta **«Datos importados, por verificar»**. Sus filas no certifican disponibilidad actual. Los tipos `event` y `dream` se presentan únicamente como antecedentes. La ausencia de filas no demuestra imposibilidad de obtención. Para usar o redistribuir estos datos, revisar el texto completo de GPL-3.0 y las obligaciones de atribución y distribución aplicables.
