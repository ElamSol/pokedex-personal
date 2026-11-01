window.POKEDEX_OBTENCION = {
  "version": "1.5",
  "actualizado": "2026-10-31",
  "descripcion": "Base local en construcción. Bloque 3: revisión individual de Ivysaur, Venusaur, Charmeleon, Charizard y Wartortle; correcciones de Chikorita/Cyndaquil y estados de eventos.",
  "juegos": [
    {
      "id": "ultra-sun",
      "nombre": "Ultrasol"
    },
    {
      "id": "ultra-moon",
      "nombre": "Ultraluna"
    },
    {
      "id": "sun",
      "nombre": "Sol"
    },
    {
      "id": "moon",
      "nombre": "Luna"
    },
    {
      "id": "x",
      "nombre": "Pokémon X"
    },
    {
      "id": "y",
      "nombre": "Pokémon Y"
    },
    {
      "id": "omega-ruby",
      "nombre": "Rubí Omega"
    },
    {
      "id": "alpha-sapphire",
      "nombre": "Zafiro Alfa"
    }
  ],
  "estados": [
    "disponible",
    "intercambio_local",
    "transferencia_condicionada",
    "evento_finalizado",
    "sin_ruta_confirmada",
    "pendiente_revision"
  ],
  "metodos_admitidos": [
    "salvaje",
    "pesca",
    "surf",
    "arbol",
    "dexnav",
    "crianza",
    "evolucion",
    "regalo",
    "fosil",
    "intercambio_interno",
    "intercambio_local",
    "evento",
    "transferencia"
  ],
  "fuentes_generales": [
    {
      "nombre": "PokéAPI",
      "url": "https://pokeapi.co/docs/v2",
      "alcance": "Encuentros por versión, área, método, nivel y condiciones; no cubre necesariamente todos los métodos."
    },
    {
      "nombre": "WikiDex - Localizaciones",
      "url": "https://www.wikidex.net/wiki/Lista_de_localizaciones_de_Pok%C3%A9mon_de_Sol_y_Luna",
      "alcance": "Listas por juego y generación; requiere revisión por entrada."
    },
    {
      "nombre": "Bulbapedia - National Pokédex",
      "url": "https://bulbapedia.bulbagarden.net/wiki/National_Pok%C3%A9dex",
      "alcance": "Compatibilidad y disponibilidad por juego."
    }
  ],
  "registros": [
    {
      "id": "1",
      "numero": 1,
      "nombre": "Bulbasaur",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escáner Insular)",
              "lugar": "Ruta 2, Isla de Melemele",
              "detalle": "Escáner Insular: viernes; nivel 10. La fila de PKHeX/Pelagix identifica el encuentro estático y el día.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/1.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "ultra-moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escáner Insular)",
              "lugar": "Ruta 2, Isla de Melemele",
              "detalle": "Escáner Insular: viernes; nivel 10. La fila de PKHeX/Pelagix identifica el encuentro estático y el día.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/1.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "sun": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio local",
              "lugar": "Desde Ultrasol o Ultraluna",
              "detalle": "No tiene encuentro nativo registrado en Sol; requiere recibirlo por intercambio."
            }
          ]
        },
        "moon": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio local",
              "lugar": "Desde Ultrasol o Ultraluna",
              "detalle": "No tiene encuentro nativo registrado en Luna; requiere recibirlo por intercambio."
            }
          ]
        },
        "x": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Regalo inicial",
              "lugar": "Ciudad Luminalia, laboratorio del profesor Ciprés",
              "detalle": "El jugador elige este Pokémon como uno de los tres iniciales de Kanto.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/1.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "y": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Regalo inicial",
              "lugar": "Ciudad Luminalia, laboratorio del profesor Ciprés",
              "detalle": "El jugador elige este Pokémon como uno de los tres iniciales de Kanto.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/1.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Distribución especial",
              "lugar": "Sin ubicación de encuentro indicada en la fuente",
              "detalle": "La fuente registra una fila de Mystery Gift/evento; no confirma si la distribución sigue activa ni su fecha de finalización.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/1.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Distribución especial",
              "lugar": "Sin ubicación de encuentro indicada en la fuente",
              "detalle": "La fuente registra una fila de Mystery Gift/evento; no confirma si la distribución sigue activa ni su fecha de finalización.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/1.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        }
      },
      "fuentes": [
        "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur",
        "https://www.thonky.com/pokemon-ultra-sun-ultra-moon/list-of-pokemon-locations",
        "https://pokemondb.net/pokedex/bulbasaur",
        "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/1.json",
        "https://github.com/HydrosPlays/Pelagix/blob/main/docs/DATA.md"
      ]
    },
    {
      "id": "2",
      "numero": 2,
      "nombre": "Ivysaur",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Evolución",
              "lugar": "Desde Bulbasaur",
              "detalle": "Evoluciona al nivel 16."
            }
          ]
        },
        "ultra-moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Evolución",
              "lugar": "Desde Bulbasaur",
              "detalle": "Evoluciona al nivel 16."
            }
          ]
        },
        "sun": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Bulbasaur por intercambio y subirlo al nivel 16."
            }
          ]
        },
        "moon": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Bulbasaur por intercambio y subirlo al nivel 16."
            }
          ]
        },
        "x": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Safari Amistad)",
              "lugar": "Safari Amistad, Ciudad Batik",
              "detalle": "Nivel 30. La fuente registra el encuentro en Friend Safari; requiere acceso al Safari Amistad correspondiente.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/2.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "y": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Safari Amistad)",
              "lugar": "Safari Amistad, Ciudad Batik",
              "detalle": "Nivel 30. La fuente registra el encuentro en Friend Safari; requiere acceso al Safari Amistad correspondiente.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/2.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "omega-ruby": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Bulbasaur por intercambio y subirlo al nivel 16."
            }
          ]
        },
        "alpha-sapphire": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Bulbasaur por intercambio y subirlo al nivel 16."
            }
          ]
        }
      },
      "fuentes": [
        "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur",
        "https://www.thonky.com/pokemon-ultra-sun-ultra-moon/list-of-pokemon-locations"
      ]
    },
    {
      "id": "3",
      "numero": 3,
      "nombre": "Venusaur",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La base de datos registra una o más filas de evento para este juego. No se infiere que el evento siga activo ni que haya finalizado.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/3.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La base de datos registra una o más filas de evento para este juego. No se infiere que el evento siga activo ni que haya finalizado.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/3.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La base de datos registra una o más filas de evento para este juego. No se infiere que el evento siga activo ni que haya finalizado.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/3.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La base de datos registra una o más filas de evento para este juego. No se infiere que el evento siga activo ni que haya finalizado.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/3.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La fuente registra una fila Mystery Gift/evento para este juego; no se confirma si sigue activa ni cuándo finalizó.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/3.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La fuente registra una fila Mystery Gift/evento para este juego; no se confirma si sigue activa ni cuándo finalizó.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/3.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La fuente registra una fila Mystery Gift/evento para este juego; no se confirma si sigue activa ni cuándo finalizó.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/3.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La fuente registra una fila Mystery Gift/evento para este juego; no se confirma si sigue activa ni cuándo finalizó.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/3.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        }
      },
      "fuentes": [
        "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur",
        "https://www.thonky.com/pokemon-ultra-sun-ultra-moon/list-of-pokemon-locations"
      ]
    },
    {
      "id": "4",
      "numero": 4,
      "nombre": "Charmander",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escáner Insular)",
              "lugar": "Ruta 3, Isla de Melemele",
              "detalle": "Escáner Insular: domingo; nivel 12. La fila de PKHeX/Pelagix identifica el encuentro estático y el día.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/4.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "ultra-moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escáner Insular)",
              "lugar": "Ruta 3, Isla de Melemele",
              "detalle": "Escáner Insular: domingo; nivel 12. La fila de PKHeX/Pelagix identifica el encuentro estático y el día.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/4.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "sun": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio local",
              "lugar": "Desde Ultrasol o Ultraluna",
              "detalle": "Recibir Charmander mediante intercambio; no tiene encuentro nativo en Sol."
            }
          ]
        },
        "moon": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio local",
              "lugar": "Desde Ultrasol o Ultraluna",
              "detalle": "Recibir Charmander mediante intercambio; no tiene encuentro nativo en Luna."
            }
          ]
        },
        "x": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Regalo inicial",
              "lugar": "Ciudad Luminalia, laboratorio del profesor Ciprés",
              "detalle": "El jugador elige este Pokémon como uno de los tres iniciales de Kanto.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/4.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "y": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Regalo inicial",
              "lugar": "Ciudad Luminalia, laboratorio del profesor Ciprés",
              "detalle": "El jugador elige este Pokémon como uno de los tres iniciales de Kanto.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/4.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Distribución especial",
              "lugar": "Sin ubicación de encuentro indicada en la fuente",
              "detalle": "La fuente registra una fila de Mystery Gift/evento; no confirma si la distribución sigue activa ni su fecha de finalización.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/4.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Distribución especial",
              "lugar": "Sin ubicación de encuentro indicada en la fuente",
              "detalle": "La fuente registra una fila de Mystery Gift/evento; no confirma si la distribución sigue activa ni su fecha de finalización.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/4.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        }
      },
      "fuentes": [
        "https://www.serebii.net/ultrasunultramoon/islandscan.shtml",
        "https://www.serebii.net/pokedex-xy/004.shtml",
        "https://www.thonky.com/pokemon-omega-ruby-alpha-sapphire/list-of-pokemon-locations",
        "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/4.json",
        "https://github.com/HydrosPlays/Pelagix/blob/main/docs/DATA.md"
      ]
    },
    {
      "id": "5",
      "numero": 5,
      "nombre": "Charmeleon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Evolución",
              "lugar": "Desde Charmander",
              "detalle": "Evoluciona al nivel 16."
            }
          ]
        },
        "ultra-moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Evolución",
              "lugar": "Desde Charmander",
              "detalle": "Evoluciona al nivel 16."
            }
          ]
        },
        "sun": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Charmander por intercambio y subirlo al nivel 16."
            }
          ]
        },
        "moon": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Charmander por intercambio y subirlo al nivel 16."
            }
          ]
        },
        "x": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Safari Amistad)",
              "lugar": "Safari Amistad, Ciudad Batik",
              "detalle": "Nivel 30. La fuente registra el encuentro en Friend Safari; requiere acceso al Safari Amistad correspondiente.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/5.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "y": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Safari Amistad)",
              "lugar": "Safari Amistad, Ciudad Batik",
              "detalle": "Nivel 30. La fuente registra el encuentro en Friend Safari; requiere acceso al Safari Amistad correspondiente.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/5.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "omega-ruby": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Charmander por intercambio y subirlo al nivel 16."
            }
          ]
        },
        "alpha-sapphire": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Charmander por intercambio y subirlo al nivel 16."
            }
          ]
        }
      },
      "fuentes": [
        "https://www.serebii.net/pokedex-xy/005.shtml",
        "https://www.thonky.com/pokemon-ultra-sun-ultra-moon/list-of-pokemon-locations"
      ]
    },
    {
      "id": "6",
      "numero": 6,
      "nombre": "Charizard",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La base de datos registra una o más filas de evento para este juego. No se infiere que el evento siga activo ni que haya finalizado.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/6.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La base de datos registra una o más filas de evento para este juego. No se infiere que el evento siga activo ni que haya finalizado.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/6.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La base de datos registra una o más filas de evento para este juego. No se infiere que el evento siga activo ni que haya finalizado.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/6.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La base de datos registra una o más filas de evento para este juego. No se infiere que el evento siga activo ni que haya finalizado.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/6.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La base de datos registra una o más filas de evento para este juego. No se infiere que el evento siga activo ni que haya finalizado.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/6.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La base de datos registra una o más filas de evento para este juego. No se infiere que el evento siga activo ni que haya finalizado.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/6.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La base de datos registra una o más filas de evento para este juego. No se infiere que el evento siga activo ni que haya finalizado.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/6.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La base de datos registra una o más filas de evento para este juego. No se infiere que el evento siga activo ni que haya finalizado.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/6.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        }
      },
      "fuentes": [
        "https://www.serebii.net/pokedex-xy/006.shtml",
        "https://www.thonky.com/pokemon-ultra-sun-ultra-moon/list-of-pokemon-locations"
      ]
    },
    {
      "id": "7",
      "numero": 7,
      "nombre": "Squirtle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escáner Insular)",
              "lugar": "Cueva Unemar, Isla de Melemele",
              "detalle": "Escáner Insular: lunes; nivel 12. La fila de PKHeX/Pelagix identifica el encuentro estático y el día.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/7.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "ultra-moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escáner Insular)",
              "lugar": "Cueva Unemar, Isla de Melemele",
              "detalle": "Escáner Insular: lunes; nivel 12. La fila de PKHeX/Pelagix identifica el encuentro estático y el día.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/7.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "sun": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio local",
              "lugar": "Desde Ultrasol o Ultraluna",
              "detalle": "Recibir Squirtle mediante intercambio; no se registra como encuentro nativo en Sol."
            }
          ]
        },
        "moon": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio local",
              "lugar": "Desde Ultrasol o Ultraluna",
              "detalle": "Recibir Squirtle mediante intercambio; no se registra como encuentro nativo en Luna."
            }
          ]
        },
        "x": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Regalo inicial",
              "lugar": "Ciudad Luminalia, laboratorio del profesor Ciprés",
              "detalle": "El jugador elige este Pokémon como uno de los tres iniciales de Kanto.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/7.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "y": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Regalo inicial",
              "lugar": "Ciudad Luminalia, laboratorio del profesor Ciprés",
              "detalle": "El jugador elige este Pokémon como uno de los tres iniciales de Kanto.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/7.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Distribución especial",
              "lugar": "Sin ubicación de encuentro indicada en la fuente",
              "detalle": "La fuente registra una fila de Mystery Gift/evento; no confirma si la distribución sigue activa ni su fecha de finalización.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/7.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Distribución especial",
              "lugar": "Sin ubicación de encuentro indicada en la fuente",
              "detalle": "La fuente registra una fila de Mystery Gift/evento; no confirma si la distribución sigue activa ni su fecha de finalización.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/7.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        }
      },
      "fuentes": [
        "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
        "https://www.serebii.net/ultrasunultramoon/islandscan.shtml",
        "https://www.pokedreams.com/pokedex/squirtle",
        "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/7.json",
        "https://github.com/HydrosPlays/Pelagix/blob/main/docs/DATA.md"
      ]
    },
    {
      "id": "8",
      "numero": 8,
      "nombre": "Wartortle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Evolución",
              "lugar": "Desde Squirtle",
              "detalle": "Evoluciona al nivel 16."
            }
          ]
        },
        "ultra-moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Evolución",
              "lugar": "Desde Squirtle",
              "detalle": "Evoluciona al nivel 16."
            }
          ]
        },
        "sun": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Squirtle por intercambio y subirlo al nivel 16."
            }
          ]
        },
        "moon": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Squirtle por intercambio y subirlo al nivel 16."
            }
          ]
        },
        "x": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Safari Amistad)",
              "lugar": "Safari Amistad, Ciudad Batik",
              "detalle": "Nivel 30. La fuente registra el encuentro en Friend Safari; requiere acceso al Safari Amistad correspondiente.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/8.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "y": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Safari Amistad)",
              "lugar": "Safari Amistad, Ciudad Batik",
              "detalle": "Nivel 30. La fuente registra el encuentro en Friend Safari; requiere acceso al Safari Amistad correspondiente.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/8.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "omega-ruby": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Squirtle por intercambio y subirlo al nivel 16."
            }
          ]
        },
        "alpha-sapphire": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Squirtle por intercambio y subirlo al nivel 16."
            }
          ]
        }
      },
      "fuentes": [
        "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
        "https://www.serebii.net/ultrasunultramoon/islandscan.shtml",
        "https://www.pokedreams.com/pokedex/squirtle"
      ]
    },
    {
      "id": "9",
      "numero": 9,
      "nombre": "Blastoise",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Evolución",
              "lugar": "Desde Wartortle",
              "detalle": "Evoluciona al nivel 36."
            }
          ]
        },
        "ultra-moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Evolución",
              "lugar": "Desde Wartortle",
              "detalle": "Evoluciona al nivel 36."
            }
          ]
        },
        "sun": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Wartortle por intercambio o evolucionar Squirtle al nivel 16 y Wartortle al 36."
            }
          ]
        },
        "moon": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Wartortle por intercambio o evolucionar Squirtle al nivel 16 y Wartortle al 36."
            }
          ]
        },
        "x": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Evolución",
              "lugar": "Desde Wartortle",
              "detalle": "Evoluciona al nivel 36."
            }
          ]
        },
        "y": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Evolución",
              "lugar": "Desde Wartortle",
              "detalle": "Evoluciona al nivel 36."
            }
          ]
        },
        "omega-ruby": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Wartortle por intercambio o recibir Squirtle y evolucionarlo."
            }
          ]
        },
        "alpha-sapphire": {
          "estado": "intercambio_local",
          "metodos": [
            {
              "tipo": "Intercambio y evolución",
              "lugar": "Desde otro juego compatible",
              "detalle": "Recibir Wartortle por intercambio o recibir Squirtle y evolucionarlo."
            }
          ]
        }
      },
      "fuentes": [
        "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
        "https://www.serebii.net/ultrasunultramoon/islandscan.shtml",
        "https://www.pokedreams.com/pokedex/squirtle"
      ]
    },
    {
      "id": "10",
      "numero": 10,
      "nombre": "Caterpie",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "11",
      "numero": 11,
      "nombre": "Metapod",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "12",
      "numero": 12,
      "nombre": "Butterfree",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "13",
      "numero": 13,
      "nombre": "Weedle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "14",
      "numero": 14,
      "nombre": "Kakuna",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "15",
      "numero": 15,
      "nombre": "Beedrill",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "16",
      "numero": 16,
      "nombre": "Pidgey",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "17",
      "numero": 17,
      "nombre": "Pidgeotto",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "18",
      "numero": 18,
      "nombre": "Pidgeot",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "19",
      "numero": 19,
      "nombre": "Rattata",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "20",
      "numero": 20,
      "nombre": "Raticate",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "21",
      "numero": 21,
      "nombre": "Spearow",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "22",
      "numero": 22,
      "nombre": "Fearow",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "23",
      "numero": 23,
      "nombre": "Ekans",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "24",
      "numero": 24,
      "nombre": "Arbok",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "25",
      "numero": 25,
      "nombre": "Pikachu",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "26",
      "numero": 26,
      "nombre": "Raichu",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "27",
      "numero": 27,
      "nombre": "Sandshrew",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "28",
      "numero": 28,
      "nombre": "Sandslash",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "29",
      "numero": 29,
      "nombre": "Nidoran♀",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "30",
      "numero": 30,
      "nombre": "Nidorina",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "31",
      "numero": 31,
      "nombre": "Nidoqueen",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "32",
      "numero": 32,
      "nombre": "Nidoran♂",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "33",
      "numero": 33,
      "nombre": "Nidorino",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "34",
      "numero": 34,
      "nombre": "Nidoking",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "35",
      "numero": 35,
      "nombre": "Clefairy",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "36",
      "numero": 36,
      "nombre": "Clefable",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "37",
      "numero": 37,
      "nombre": "Vulpix",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "38",
      "numero": 38,
      "nombre": "Ninetales",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "39",
      "numero": 39,
      "nombre": "Jigglypuff",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "40",
      "numero": 40,
      "nombre": "Wigglytuff",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "41",
      "numero": 41,
      "nombre": "Zubat",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "42",
      "numero": 42,
      "nombre": "Golbat",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "43",
      "numero": 43,
      "nombre": "Oddish",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "44",
      "numero": 44,
      "nombre": "Gloom",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "45",
      "numero": 45,
      "nombre": "Vileplume",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "46",
      "numero": 46,
      "nombre": "Paras",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "47",
      "numero": 47,
      "nombre": "Parasect",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "48",
      "numero": 48,
      "nombre": "Venonat",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "49",
      "numero": 49,
      "nombre": "Venomoth",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "50",
      "numero": 50,
      "nombre": "Diglett",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "51",
      "numero": 51,
      "nombre": "Dugtrio",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "52",
      "numero": 52,
      "nombre": "Meowth",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "53",
      "numero": 53,
      "nombre": "Persian",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "54",
      "numero": 54,
      "nombre": "Psyduck",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "55",
      "numero": 55,
      "nombre": "Golduck",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "56",
      "numero": 56,
      "nombre": "Mankey",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "57",
      "numero": 57,
      "nombre": "Primeape",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "58",
      "numero": 58,
      "nombre": "Growlithe",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "59",
      "numero": 59,
      "nombre": "Arcanine",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "60",
      "numero": 60,
      "nombre": "Poliwag",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "61",
      "numero": 61,
      "nombre": "Poliwhirl",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "62",
      "numero": 62,
      "nombre": "Poliwrath",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "63",
      "numero": 63,
      "nombre": "Abra",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "64",
      "numero": 64,
      "nombre": "Kadabra",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "65",
      "numero": 65,
      "nombre": "Alakazam",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "66",
      "numero": 66,
      "nombre": "Machop",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "67",
      "numero": 67,
      "nombre": "Machoke",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "68",
      "numero": 68,
      "nombre": "Machamp",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "69",
      "numero": 69,
      "nombre": "Bellsprout",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "70",
      "numero": 70,
      "nombre": "Weepinbell",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "71",
      "numero": 71,
      "nombre": "Victreebel",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "72",
      "numero": 72,
      "nombre": "Tentacool",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "73",
      "numero": 73,
      "nombre": "Tentacruel",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "74",
      "numero": 74,
      "nombre": "Geodude",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "75",
      "numero": 75,
      "nombre": "Graveler",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "76",
      "numero": 76,
      "nombre": "Golem",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "77",
      "numero": 77,
      "nombre": "Ponyta",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "78",
      "numero": 78,
      "nombre": "Rapidash",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "79",
      "numero": 79,
      "nombre": "Slowpoke",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "80",
      "numero": 80,
      "nombre": "Slowbro",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "81",
      "numero": 81,
      "nombre": "Magnemite",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "82",
      "numero": 82,
      "nombre": "Magneton",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "83",
      "numero": 83,
      "nombre": "Farfetch’d",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "84",
      "numero": 84,
      "nombre": "Doduo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "85",
      "numero": 85,
      "nombre": "Dodrio",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "86",
      "numero": 86,
      "nombre": "Seel",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "87",
      "numero": 87,
      "nombre": "Dewgong",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "88",
      "numero": 88,
      "nombre": "Grimer",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "89",
      "numero": 89,
      "nombre": "Muk",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "90",
      "numero": 90,
      "nombre": "Shellder",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "91",
      "numero": 91,
      "nombre": "Cloyster",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "92",
      "numero": 92,
      "nombre": "Gastly",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "93",
      "numero": 93,
      "nombre": "Haunter",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "94",
      "numero": 94,
      "nombre": "Gengar",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "95",
      "numero": 95,
      "nombre": "Onix",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Colina Diez Caras (Ten Carat Hill), Isla de Melemele",
              "detalle": "Tuesday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 14. Movimiento especial: Rototiller.",
              "fuente": "https://www.serebii.net/ultrasunultramoon/islandscan.shtml",
              "fuenteNombre": "Serebii — Island Scan (Ultra Sun/Ultra Moon)"
            }
          ]
        },
        "ultra-moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Colina Diez Caras (Ten Carat Hill), Isla de Melemele",
              "detalle": "Tuesday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 14. Movimiento especial: Rototiller.",
              "fuente": "https://www.serebii.net/ultrasunultramoon/islandscan.shtml",
              "fuenteNombre": "Serebii — Island Scan (Ultra Sun/Ultra Moon)"
            }
          ]
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "96",
      "numero": 96,
      "nombre": "Drowzee",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "97",
      "numero": 97,
      "nombre": "Hypno",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "98",
      "numero": 98,
      "nombre": "Krabby",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "99",
      "numero": 99,
      "nombre": "Kingler",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "100",
      "numero": 100,
      "nombre": "Voltorb",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "101",
      "numero": 101,
      "nombre": "Electrode",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "102",
      "numero": 102,
      "nombre": "Exeggcute",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "103",
      "numero": 103,
      "nombre": "Exeggutor",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "104",
      "numero": 104,
      "nombre": "Cubone",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "105",
      "numero": 105,
      "nombre": "Marowak",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "106",
      "numero": 106,
      "nombre": "Hitmonlee",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "107",
      "numero": 107,
      "nombre": "Hitmonchan",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "108",
      "numero": 108,
      "nombre": "Lickitung",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "109",
      "numero": 109,
      "nombre": "Koffing",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "110",
      "numero": 110,
      "nombre": "Weezing",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "111",
      "numero": 111,
      "nombre": "Rhyhorn",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "112",
      "numero": 112,
      "nombre": "Rhydon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "113",
      "numero": 113,
      "nombre": "Chansey",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "114",
      "numero": 114,
      "nombre": "Tangela",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "115",
      "numero": 115,
      "nombre": "Kangaskhan",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "116",
      "numero": 116,
      "nombre": "Horsea",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Bahía Kala'e, Isla de Melemele",
              "detalle": "Wednesday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 18. Movimiento especial: Water Pulse.",
              "fuente": "https://www.serebii.net/ultrasunultramoon/islandscan.shtml",
              "fuenteNombre": "Serebii — Island Scan (Ultra Sun/Ultra Moon)"
            }
          ]
        },
        "ultra-moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Bahía Kala'e, Isla de Melemele",
              "detalle": "Wednesday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 18. Movimiento especial: Water Pulse.",
              "fuente": "https://www.serebii.net/ultrasunultramoon/islandscan.shtml",
              "fuenteNombre": "Serebii — Island Scan (Ultra Sun/Ultra Moon)"
            }
          ]
        },
        "sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Bahía Kala'e, Isla de Melemele",
              "detalle": "Wednesday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 18. Movimiento especial: Dragon Breath.",
              "fuente": "https://bulbapedia.bulbagarden.net/wiki/Island_Scan",
              "fuenteNombre": "Bulbapedia — Island Scan"
            }
          ]
        },
        "moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Bahía Kala'e, Isla de Melemele",
              "detalle": "Wednesday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 18. Movimiento especial: Dragon Breath.",
              "fuente": "https://bulbapedia.bulbagarden.net/wiki/Island_Scan",
              "fuenteNombre": "Bulbapedia — Island Scan"
            }
          ]
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "117",
      "numero": 117,
      "nombre": "Seadra",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "118",
      "numero": 118,
      "nombre": "Goldeen",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "119",
      "numero": 119,
      "nombre": "Seaking",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "120",
      "numero": 120,
      "nombre": "Staryu",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "121",
      "numero": 121,
      "nombre": "Starmie",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "122",
      "numero": 122,
      "nombre": "Mr. Mime",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "123",
      "numero": 123,
      "nombre": "Scyther",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "124",
      "numero": 124,
      "nombre": "Jynx",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "125",
      "numero": 125,
      "nombre": "Electabuzz",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "126",
      "numero": 126,
      "nombre": "Magmar",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "127",
      "numero": 127,
      "nombre": "Pinsir",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "128",
      "numero": 128,
      "nombre": "Tauros",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "129",
      "numero": 129,
      "nombre": "Magikarp",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "130",
      "numero": 130,
      "nombre": "Gyarados",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "131",
      "numero": 131,
      "nombre": "Lapras",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "132",
      "numero": 132,
      "nombre": "Ditto",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "133",
      "numero": 133,
      "nombre": "Eevee",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "134",
      "numero": 134,
      "nombre": "Vaporeon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "135",
      "numero": 135,
      "nombre": "Jolteon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "136",
      "numero": 136,
      "nombre": "Flareon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "137",
      "numero": 137,
      "nombre": "Porygon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "138",
      "numero": 138,
      "nombre": "Omanyte",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "139",
      "numero": 139,
      "nombre": "Omastar",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "140",
      "numero": 140,
      "nombre": "Kabuto",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "141",
      "numero": 141,
      "nombre": "Kabutops",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "142",
      "numero": 142,
      "nombre": "Aerodactyl",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "143",
      "numero": 143,
      "nombre": "Snorlax",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "144",
      "numero": 144,
      "nombre": "Articuno",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "145",
      "numero": 145,
      "nombre": "Zapdos",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "146",
      "numero": 146,
      "nombre": "Moltres",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "147",
      "numero": 147,
      "nombre": "Dratini",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "148",
      "numero": 148,
      "nombre": "Dragonair",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "149",
      "numero": 149,
      "nombre": "Dragonite",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "150",
      "numero": 150,
      "nombre": "Mewtwo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "151",
      "numero": 151,
      "nombre": "Mew",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "152",
      "numero": 152,
      "nombre": "Chikorita",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escáner Insular)",
              "lugar": "Ruta 2, Isla de Melemele",
              "detalle": "Escáner Insular: viernes; nivel 10. La fila de PKHeX/Pelagix identifica el encuentro estático y el día.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/152.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escáner Insular)",
              "lugar": "Ruta 2, Isla de Melemele",
              "detalle": "Escáner Insular: viernes; nivel 10. La fila de PKHeX/Pelagix identifica el encuentro estático y el día.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/152.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La fuente de datos registra filas de evento para este juego; no se ha confirmado aquí la disponibilidad ni la fecha de finalización.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/152.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La fuente de datos registra filas de evento para este juego; no se ha confirmado aquí la disponibilidad ni la fecha de finalización.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/152.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "omega-ruby": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Regalo",
              "lugar": "Ruta 101",
              "detalle": "Recibido como regalo a nivel 5, según la fila de encuentro de la fuente.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/152.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "alpha-sapphire": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Regalo",
              "lugar": "Ruta 101",
              "detalle": "Recibido como regalo a nivel 5, según la fila de encuentro de la fuente.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/152.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        }
      },
      "fuentes": [
        "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/152.json",
        "https://github.com/HydrosPlays/Pelagix/blob/main/docs/DATA.md"
      ]
    },
    {
      "id": "153",
      "numero": 153,
      "nombre": "Bayleef",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "154",
      "numero": 154,
      "nombre": "Meganium",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "155",
      "numero": 155,
      "nombre": "Cyndaquil",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escáner Insular)",
              "lugar": "Ruta 3, Isla de Melemele",
              "detalle": "Escáner Insular: domingo; nivel 12. La fila de PKHeX/Pelagix identifica el encuentro estático y el día.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/155.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escáner Insular)",
              "lugar": "Ruta 3, Isla de Melemele",
              "detalle": "Escáner Insular: domingo; nivel 12. La fila de PKHeX/Pelagix identifica el encuentro estático y el día.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/155.json",
              "fuenteNombre": "Pelagix — datos de especie derivados de PKHeX"
            }
          ]
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La fuente de datos registra filas de evento para este juego; no se ha confirmado aquí la disponibilidad ni la fecha de finalización.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/155.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": [
            {
              "tipo": "Evento (Mystery Gift)",
              "lugar": "Distribución especial no localizada",
              "detalle": "La fuente de datos registra filas de evento para este juego; no se ha confirmado aquí la disponibilidad ni la fecha de finalización.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/155.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "omega-ruby": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Regalo",
              "lugar": "Ruta 101",
              "detalle": "Recibido como regalo a nivel 5, según la fila de encuentro de la fuente.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/155.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        },
        "alpha-sapphire": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Regalo",
              "lugar": "Ruta 101",
              "detalle": "Recibido como regalo a nivel 5, según la fila de encuentro de la fuente.",
              "fuente": "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/155.json",
              "fuenteNombre": "Pelagix / datos derivados de PKHeX"
            }
          ]
        }
      },
      "fuentes": [
        "https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/155.json",
        "https://github.com/HydrosPlays/Pelagix/blob/main/docs/DATA.md"
      ]
    },
    {
      "id": "156",
      "numero": 156,
      "nombre": "Quilava",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "157",
      "numero": 157,
      "nombre": "Typhlosion",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "158",
      "numero": 158,
      "nombre": "Totodile",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Gruta Unemar (Seaward Cave), Isla de Melemele",
              "detalle": "Monday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 12. Movimiento especial: Metal Claw.",
              "fuente": "https://bulbapedia.bulbagarden.net/wiki/Island_Scan",
              "fuenteNombre": "Bulbapedia — Island Scan"
            }
          ]
        },
        "moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Gruta Unemar (Seaward Cave), Isla de Melemele",
              "detalle": "Monday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 12. Movimiento especial: Metal Claw.",
              "fuente": "https://bulbapedia.bulbagarden.net/wiki/Island_Scan",
              "fuenteNombre": "Bulbapedia — Island Scan"
            }
          ]
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "159",
      "numero": 159,
      "nombre": "Croconaw",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "160",
      "numero": 160,
      "nombre": "Feraligatr",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "161",
      "numero": 161,
      "nombre": "Sentret",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "162",
      "numero": 162,
      "nombre": "Furret",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "163",
      "numero": 163,
      "nombre": "Hoothoot",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "164",
      "numero": 164,
      "nombre": "Noctowl",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "165",
      "numero": 165,
      "nombre": "Ledyba",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "166",
      "numero": 166,
      "nombre": "Ledian",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "167",
      "numero": 167,
      "nombre": "Spinarak",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "168",
      "numero": 168,
      "nombre": "Ariados",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "169",
      "numero": 169,
      "nombre": "Crobat",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "170",
      "numero": 170,
      "nombre": "Chinchou",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "171",
      "numero": 171,
      "nombre": "Lanturn",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "172",
      "numero": 172,
      "nombre": "Pichu",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "173",
      "numero": 173,
      "nombre": "Cleffa",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "174",
      "numero": 174,
      "nombre": "Igglybuff",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "175",
      "numero": 175,
      "nombre": "Togepi",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "176",
      "numero": 176,
      "nombre": "Togetic",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "177",
      "numero": 177,
      "nombre": "Natu",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "178",
      "numero": 178,
      "nombre": "Xatu",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "179",
      "numero": 179,
      "nombre": "Mareep",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "180",
      "numero": 180,
      "nombre": "Flaaffy",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "181",
      "numero": 181,
      "nombre": "Ampharos",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "182",
      "numero": 182,
      "nombre": "Bellossom",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "183",
      "numero": 183,
      "nombre": "Marill",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "184",
      "numero": 184,
      "nombre": "Azumarill",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "185",
      "numero": 185,
      "nombre": "Sudowoodo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "186",
      "numero": 186,
      "nombre": "Politoed",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "187",
      "numero": 187,
      "nombre": "Hoppip",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "188",
      "numero": 188,
      "nombre": "Skiploom",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "189",
      "numero": 189,
      "nombre": "Jumpluff",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "190",
      "numero": 190,
      "nombre": "Aipom",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "191",
      "numero": 191,
      "nombre": "Sunkern",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "192",
      "numero": 192,
      "nombre": "Sunflora",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "193",
      "numero": 193,
      "nombre": "Yanma",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "194",
      "numero": 194,
      "nombre": "Wooper",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "195",
      "numero": 195,
      "nombre": "Quagsire",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "196",
      "numero": 196,
      "nombre": "Espeon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "197",
      "numero": 197,
      "nombre": "Umbreon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "198",
      "numero": 198,
      "nombre": "Murkrow",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "199",
      "numero": 199,
      "nombre": "Slowking",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "200",
      "numero": 200,
      "nombre": "Misdreavus",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "201",
      "numero": 201,
      "nombre": "Unown",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "202",
      "numero": 202,
      "nombre": "Wobbuffet",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "203",
      "numero": 203,
      "nombre": "Girafarig",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "204",
      "numero": 204,
      "nombre": "Pineco",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "205",
      "numero": 205,
      "nombre": "Forretress",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "206",
      "numero": 206,
      "nombre": "Dunsparce",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "207",
      "numero": 207,
      "nombre": "Gligar",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "208",
      "numero": 208,
      "nombre": "Steelix",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "209",
      "numero": 209,
      "nombre": "Snubbull",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "210",
      "numero": 210,
      "nombre": "Granbull",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "211",
      "numero": 211,
      "nombre": "Qwilfish",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "212",
      "numero": 212,
      "nombre": "Scizor",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "213",
      "numero": 213,
      "nombre": "Shuckle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "214",
      "numero": 214,
      "nombre": "Heracross",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "215",
      "numero": 215,
      "nombre": "Sneasel",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "216",
      "numero": 216,
      "nombre": "Teddiursa",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "217",
      "numero": 217,
      "nombre": "Ursaring",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "218",
      "numero": 218,
      "nombre": "Slugma",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "219",
      "numero": 219,
      "nombre": "Magcargo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "220",
      "numero": 220,
      "nombre": "Swinub",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "221",
      "numero": 221,
      "nombre": "Piloswine",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "222",
      "numero": 222,
      "nombre": "Corsola",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "223",
      "numero": 223,
      "nombre": "Remoraid",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "224",
      "numero": 224,
      "nombre": "Octillery",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "225",
      "numero": 225,
      "nombre": "Delibird",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "226",
      "numero": 226,
      "nombre": "Mantine",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "227",
      "numero": 227,
      "nombre": "Skarmory",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "228",
      "numero": 228,
      "nombre": "Houndour",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "229",
      "numero": 229,
      "nombre": "Houndoom",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "230",
      "numero": 230,
      "nombre": "Kingdra",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "231",
      "numero": 231,
      "nombre": "Phanpy",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "232",
      "numero": 232,
      "nombre": "Donphan",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "233",
      "numero": 233,
      "nombre": "Porygon2",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "234",
      "numero": 234,
      "nombre": "Stantler",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "235",
      "numero": 235,
      "nombre": "Smeargle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "236",
      "numero": 236,
      "nombre": "Tyrogue",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "237",
      "numero": 237,
      "nombre": "Hitmontop",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "238",
      "numero": 238,
      "nombre": "Smoochum",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "239",
      "numero": 239,
      "nombre": "Elekid",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "240",
      "numero": 240,
      "nombre": "Magby",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "241",
      "numero": 241,
      "nombre": "Miltank",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "242",
      "numero": 242,
      "nombre": "Blissey",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "243",
      "numero": 243,
      "nombre": "Raikou",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "244",
      "numero": 244,
      "nombre": "Entei",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "245",
      "numero": 245,
      "nombre": "Suicune",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "246",
      "numero": 246,
      "nombre": "Larvitar",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "247",
      "numero": 247,
      "nombre": "Pupitar",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "248",
      "numero": 248,
      "nombre": "Tyranitar",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "249",
      "numero": 249,
      "nombre": "Lugia",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "250",
      "numero": 250,
      "nombre": "Ho-Oh",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "251",
      "numero": 251,
      "nombre": "Celebi",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "252",
      "numero": 252,
      "nombre": "Treecko",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "253",
      "numero": 253,
      "nombre": "Grovyle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "254",
      "numero": 254,
      "nombre": "Sceptile",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "255",
      "numero": 255,
      "nombre": "Torchic",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "256",
      "numero": 256,
      "nombre": "Combusken",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "257",
      "numero": 257,
      "nombre": "Blaziken",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "258",
      "numero": 258,
      "nombre": "Mudkip",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "259",
      "numero": 259,
      "nombre": "Marshtomp",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "260",
      "numero": 260,
      "nombre": "Swampert",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "261",
      "numero": 261,
      "nombre": "Poochyena",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "262",
      "numero": 262,
      "nombre": "Mightyena",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "263",
      "numero": 263,
      "nombre": "Zigzagoon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "264",
      "numero": 264,
      "nombre": "Linoone",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "265",
      "numero": 265,
      "nombre": "Wurmple",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "266",
      "numero": 266,
      "nombre": "Silcoon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "267",
      "numero": 267,
      "nombre": "Beautifly",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "268",
      "numero": 268,
      "nombre": "Cascoon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "269",
      "numero": 269,
      "nombre": "Dustox",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "270",
      "numero": 270,
      "nombre": "Lotad",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "271",
      "numero": 271,
      "nombre": "Lombre",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "272",
      "numero": 272,
      "nombre": "Ludicolo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "273",
      "numero": 273,
      "nombre": "Seedot",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "274",
      "numero": 274,
      "nombre": "Nuzleaf",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "275",
      "numero": 275,
      "nombre": "Shiftry",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "276",
      "numero": 276,
      "nombre": "Taillow",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "277",
      "numero": 277,
      "nombre": "Swellow",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "278",
      "numero": 278,
      "nombre": "Wingull",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "279",
      "numero": 279,
      "nombre": "Pelipper",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "280",
      "numero": 280,
      "nombre": "Ralts",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "281",
      "numero": 281,
      "nombre": "Kirlia",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "282",
      "numero": 282,
      "nombre": "Gardevoir",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "283",
      "numero": 283,
      "nombre": "Surskit",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "284",
      "numero": 284,
      "nombre": "Masquerain",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "285",
      "numero": 285,
      "nombre": "Shroomish",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "286",
      "numero": 286,
      "nombre": "Breloom",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "287",
      "numero": 287,
      "nombre": "Slakoth",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "288",
      "numero": 288,
      "nombre": "Vigoroth",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "289",
      "numero": 289,
      "nombre": "Slaking",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "290",
      "numero": 290,
      "nombre": "Nincada",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "291",
      "numero": 291,
      "nombre": "Ninjask",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "292",
      "numero": 292,
      "nombre": "Shedinja",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "293",
      "numero": 293,
      "nombre": "Whismur",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "294",
      "numero": 294,
      "nombre": "Loudred",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "295",
      "numero": 295,
      "nombre": "Exploud",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "296",
      "numero": 296,
      "nombre": "Makuhita",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "297",
      "numero": 297,
      "nombre": "Hariyama",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "298",
      "numero": 298,
      "nombre": "Azurill",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "299",
      "numero": 299,
      "nombre": "Nosepass",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "300",
      "numero": 300,
      "nombre": "Skitty",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "301",
      "numero": 301,
      "nombre": "Delcatty",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "302",
      "numero": 302,
      "nombre": "Sableye",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "303",
      "numero": 303,
      "nombre": "Mawile",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "304",
      "numero": 304,
      "nombre": "Aron",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "305",
      "numero": 305,
      "nombre": "Lairon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "306",
      "numero": 306,
      "nombre": "Aggron",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "307",
      "numero": 307,
      "nombre": "Meditite",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "308",
      "numero": 308,
      "nombre": "Medicham",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "309",
      "numero": 309,
      "nombre": "Electrike",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "310",
      "numero": 310,
      "nombre": "Manectric",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "311",
      "numero": 311,
      "nombre": "Plusle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "312",
      "numero": 312,
      "nombre": "Minun",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "313",
      "numero": 313,
      "nombre": "Volbeat",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "314",
      "numero": 314,
      "nombre": "Illumise",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "315",
      "numero": 315,
      "nombre": "Roselia",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "316",
      "numero": 316,
      "nombre": "Gulpin",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "317",
      "numero": 317,
      "nombre": "Swalot",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "318",
      "numero": 318,
      "nombre": "Carvanha",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "319",
      "numero": 319,
      "nombre": "Sharpedo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "320",
      "numero": 320,
      "nombre": "Wailmer",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "321",
      "numero": 321,
      "nombre": "Wailord",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "322",
      "numero": 322,
      "nombre": "Numel",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "323",
      "numero": 323,
      "nombre": "Camerupt",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "324",
      "numero": 324,
      "nombre": "Torkoal",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "325",
      "numero": 325,
      "nombre": "Spoink",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "326",
      "numero": 326,
      "nombre": "Grumpig",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "327",
      "numero": 327,
      "nombre": "Spinda",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "328",
      "numero": 328,
      "nombre": "Trapinch",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "329",
      "numero": 329,
      "nombre": "Vibrava",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "330",
      "numero": 330,
      "nombre": "Flygon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "331",
      "numero": 331,
      "nombre": "Cacnea",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "332",
      "numero": 332,
      "nombre": "Cacturne",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "333",
      "numero": 333,
      "nombre": "Swablu",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "334",
      "numero": 334,
      "nombre": "Altaria",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "335",
      "numero": 335,
      "nombre": "Zangoose",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "336",
      "numero": 336,
      "nombre": "Seviper",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "337",
      "numero": 337,
      "nombre": "Lunatone",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "338",
      "numero": 338,
      "nombre": "Solrock",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "339",
      "numero": 339,
      "nombre": "Barboach",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "340",
      "numero": 340,
      "nombre": "Whiscash",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "341",
      "numero": 341,
      "nombre": "Corphish",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "342",
      "numero": 342,
      "nombre": "Crawdaunt",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "343",
      "numero": 343,
      "nombre": "Baltoy",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "344",
      "numero": 344,
      "nombre": "Claydol",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "345",
      "numero": 345,
      "nombre": "Lileep",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "346",
      "numero": 346,
      "nombre": "Cradily",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "347",
      "numero": 347,
      "nombre": "Anorith",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "348",
      "numero": 348,
      "nombre": "Armaldo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "349",
      "numero": 349,
      "nombre": "Feebas",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "350",
      "numero": 350,
      "nombre": "Milotic",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "351",
      "numero": 351,
      "nombre": "Castform",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "352",
      "numero": 352,
      "nombre": "Kecleon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "353",
      "numero": 353,
      "nombre": "Shuppet",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "354",
      "numero": 354,
      "nombre": "Banette",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "355",
      "numero": 355,
      "nombre": "Duskull",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "356",
      "numero": 356,
      "nombre": "Dusclops",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "357",
      "numero": 357,
      "nombre": "Tropius",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "358",
      "numero": 358,
      "nombre": "Chimecho",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "359",
      "numero": 359,
      "nombre": "Absol",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "360",
      "numero": 360,
      "nombre": "Wynaut",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "361",
      "numero": 361,
      "nombre": "Snorunt",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "362",
      "numero": 362,
      "nombre": "Glalie",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "363",
      "numero": 363,
      "nombre": "Spheal",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "364",
      "numero": 364,
      "nombre": "Sealeo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "365",
      "numero": 365,
      "nombre": "Walrein",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "366",
      "numero": 366,
      "nombre": "Clamperl",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "367",
      "numero": 367,
      "nombre": "Huntail",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "368",
      "numero": 368,
      "nombre": "Gorebyss",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "369",
      "numero": 369,
      "nombre": "Relicanth",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "370",
      "numero": 370,
      "nombre": "Luvdisc",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "371",
      "numero": 371,
      "nombre": "Bagon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "372",
      "numero": 372,
      "nombre": "Shelgon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "373",
      "numero": 373,
      "nombre": "Salamence",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "374",
      "numero": 374,
      "nombre": "Beldum",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "375",
      "numero": 375,
      "nombre": "Metang",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "376",
      "numero": 376,
      "nombre": "Metagross",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "377",
      "numero": 377,
      "nombre": "Regirock",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "378",
      "numero": 378,
      "nombre": "Regice",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "379",
      "numero": 379,
      "nombre": "Registeel",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "380",
      "numero": 380,
      "nombre": "Latias",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "381",
      "numero": 381,
      "nombre": "Latios",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "382",
      "numero": 382,
      "nombre": "Kyogre",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "383",
      "numero": 383,
      "nombre": "Groudon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "384",
      "numero": 384,
      "nombre": "Rayquaza",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "385",
      "numero": 385,
      "nombre": "Jirachi",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "386",
      "numero": 386,
      "nombre": "Deoxys",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "387",
      "numero": 387,
      "nombre": "Turtwig",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "388",
      "numero": 388,
      "nombre": "Grotle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "389",
      "numero": 389,
      "nombre": "Torterra",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "390",
      "numero": 390,
      "nombre": "Chimchar",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "391",
      "numero": 391,
      "nombre": "Monferno",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "392",
      "numero": 392,
      "nombre": "Infernape",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "393",
      "numero": 393,
      "nombre": "Piplup",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "394",
      "numero": 394,
      "nombre": "Prinplup",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "395",
      "numero": 395,
      "nombre": "Empoleon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "396",
      "numero": 396,
      "nombre": "Starly",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "397",
      "numero": 397,
      "nombre": "Staravia",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "398",
      "numero": 398,
      "nombre": "Staraptor",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "399",
      "numero": 399,
      "nombre": "Bidoof",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "400",
      "numero": 400,
      "nombre": "Bibarel",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "401",
      "numero": 401,
      "nombre": "Kricketot",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "402",
      "numero": 402,
      "nombre": "Kricketune",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "403",
      "numero": 403,
      "nombre": "Shinx",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "404",
      "numero": 404,
      "nombre": "Luxio",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "405",
      "numero": 405,
      "nombre": "Luxray",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "406",
      "numero": 406,
      "nombre": "Budew",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "407",
      "numero": 407,
      "nombre": "Roserade",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "408",
      "numero": 408,
      "nombre": "Cranidos",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "409",
      "numero": 409,
      "nombre": "Rampardos",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "410",
      "numero": 410,
      "nombre": "Shieldon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "411",
      "numero": 411,
      "nombre": "Bastiodon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "412",
      "numero": 412,
      "nombre": "Burmy",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "413",
      "numero": 413,
      "nombre": "Wormadam",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "414",
      "numero": 414,
      "nombre": "Mothim",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "415",
      "numero": 415,
      "nombre": "Combee",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "416",
      "numero": 416,
      "nombre": "Vespiquen",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "417",
      "numero": 417,
      "nombre": "Pachirisu",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "418",
      "numero": 418,
      "nombre": "Buizel",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "419",
      "numero": 419,
      "nombre": "Floatzel",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "420",
      "numero": 420,
      "nombre": "Cherubi",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "421",
      "numero": 421,
      "nombre": "Cherrim",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "422",
      "numero": 422,
      "nombre": "Shellos",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "423",
      "numero": 423,
      "nombre": "Gastrodon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "424",
      "numero": 424,
      "nombre": "Ambipom",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "425",
      "numero": 425,
      "nombre": "Drifloon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "426",
      "numero": 426,
      "nombre": "Drifblim",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "427",
      "numero": 427,
      "nombre": "Buneary",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "428",
      "numero": 428,
      "nombre": "Lopunny",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "429",
      "numero": 429,
      "nombre": "Mismagius",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "430",
      "numero": 430,
      "nombre": "Honchkrow",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "431",
      "numero": 431,
      "nombre": "Glameow",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "432",
      "numero": 432,
      "nombre": "Purugly",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "433",
      "numero": 433,
      "nombre": "Chingling",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "434",
      "numero": 434,
      "nombre": "Stunky",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "435",
      "numero": 435,
      "nombre": "Skuntank",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "436",
      "numero": 436,
      "nombre": "Bronzor",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "437",
      "numero": 437,
      "nombre": "Bronzong",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "438",
      "numero": 438,
      "nombre": "Bonsly",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "439",
      "numero": 439,
      "nombre": "Mime Jr.",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "440",
      "numero": 440,
      "nombre": "Happiny",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "441",
      "numero": 441,
      "nombre": "Chatot",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "442",
      "numero": 442,
      "nombre": "Spiritomb",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "443",
      "numero": 443,
      "nombre": "Gible",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "444",
      "numero": 444,
      "nombre": "Gabite",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "445",
      "numero": 445,
      "nombre": "Garchomp",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "446",
      "numero": 446,
      "nombre": "Munchlax",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "447",
      "numero": 447,
      "nombre": "Riolu",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "448",
      "numero": 448,
      "nombre": "Lucario",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "449",
      "numero": 449,
      "nombre": "Hippopotas",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "450",
      "numero": 450,
      "nombre": "Hippowdon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "451",
      "numero": 451,
      "nombre": "Skorupi",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "452",
      "numero": 452,
      "nombre": "Drapion",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "453",
      "numero": 453,
      "nombre": "Croagunk",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "454",
      "numero": 454,
      "nombre": "Toxicroak",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "455",
      "numero": 455,
      "nombre": "Carnivine",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "456",
      "numero": 456,
      "nombre": "Finneon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "457",
      "numero": 457,
      "nombre": "Lumineon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "458",
      "numero": 458,
      "nombre": "Mantyke",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "459",
      "numero": 459,
      "nombre": "Snover",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "460",
      "numero": 460,
      "nombre": "Abomasnow",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "461",
      "numero": 461,
      "nombre": "Weavile",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "462",
      "numero": 462,
      "nombre": "Magnezone",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "463",
      "numero": 463,
      "nombre": "Lickilicky",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "464",
      "numero": 464,
      "nombre": "Rhyperior",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "465",
      "numero": 465,
      "nombre": "Tangrowth",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "466",
      "numero": 466,
      "nombre": "Electivire",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "467",
      "numero": 467,
      "nombre": "Magmortar",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "468",
      "numero": 468,
      "nombre": "Togekiss",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "469",
      "numero": 469,
      "nombre": "Yanmega",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "470",
      "numero": 470,
      "nombre": "Leafeon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "471",
      "numero": 471,
      "nombre": "Glaceon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "472",
      "numero": 472,
      "nombre": "Gliscor",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "473",
      "numero": 473,
      "nombre": "Mamoswine",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "474",
      "numero": 474,
      "nombre": "Porygon-Z",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "475",
      "numero": 475,
      "nombre": "Gallade",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "476",
      "numero": 476,
      "nombre": "Probopass",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "477",
      "numero": 477,
      "nombre": "Dusknoir",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "478",
      "numero": 478,
      "nombre": "Froslass",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "479",
      "numero": 479,
      "nombre": "Rotom",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "480",
      "numero": 480,
      "nombre": "Uxie",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "481",
      "numero": 481,
      "nombre": "Mesprit",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "482",
      "numero": 482,
      "nombre": "Azelf",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "483",
      "numero": 483,
      "nombre": "Dialga",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "484",
      "numero": 484,
      "nombre": "Palkia",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "485",
      "numero": 485,
      "nombre": "Heatran",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "486",
      "numero": 486,
      "nombre": "Regigigas",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "487",
      "numero": 487,
      "nombre": "Giratina",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "488",
      "numero": 488,
      "nombre": "Cresselia",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "489",
      "numero": 489,
      "nombre": "Phione",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "490",
      "numero": 490,
      "nombre": "Manaphy",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "491",
      "numero": 491,
      "nombre": "Darkrai",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "492",
      "numero": 492,
      "nombre": "Shaymin",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "493",
      "numero": 493,
      "nombre": "Arceus",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "494",
      "numero": 494,
      "nombre": "Victini",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "495",
      "numero": 495,
      "nombre": "Snivy",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "496",
      "numero": 496,
      "nombre": "Servine",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "497",
      "numero": 497,
      "nombre": "Serperior",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "498",
      "numero": 498,
      "nombre": "Tepig",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "499",
      "numero": 499,
      "nombre": "Pignite",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "500",
      "numero": 500,
      "nombre": "Emboar",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "501",
      "numero": 501,
      "nombre": "Oshawott",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "502",
      "numero": 502,
      "nombre": "Dewott",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "503",
      "numero": 503,
      "nombre": "Samurott",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "504",
      "numero": 504,
      "nombre": "Patrat",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "505",
      "numero": 505,
      "nombre": "Watchog",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "506",
      "numero": 506,
      "nombre": "Lillipup",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "507",
      "numero": 507,
      "nombre": "Herdier",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "508",
      "numero": 508,
      "nombre": "Stoutland",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "509",
      "numero": 509,
      "nombre": "Purrloin",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "510",
      "numero": 510,
      "nombre": "Liepard",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "511",
      "numero": 511,
      "nombre": "Pansage",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "512",
      "numero": 512,
      "nombre": "Simisage",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "513",
      "numero": 513,
      "nombre": "Pansear",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "514",
      "numero": 514,
      "nombre": "Simisear",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "515",
      "numero": 515,
      "nombre": "Panpour",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "516",
      "numero": 516,
      "nombre": "Simipour",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "517",
      "numero": 517,
      "nombre": "Munna",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "518",
      "numero": 518,
      "nombre": "Musharna",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "519",
      "numero": 519,
      "nombre": "Pidove",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "520",
      "numero": 520,
      "nombre": "Tranquill",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "521",
      "numero": 521,
      "nombre": "Unfezant",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "522",
      "numero": 522,
      "nombre": "Blitzle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "523",
      "numero": 523,
      "nombre": "Zebstrika",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "524",
      "numero": 524,
      "nombre": "Roggenrola",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "525",
      "numero": 525,
      "nombre": "Boldore",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "526",
      "numero": 526,
      "nombre": "Gigalith",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "527",
      "numero": 527,
      "nombre": "Woobat",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "528",
      "numero": 528,
      "nombre": "Swoobat",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "529",
      "numero": 529,
      "nombre": "Drilbur",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "530",
      "numero": 530,
      "nombre": "Excadrill",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "531",
      "numero": 531,
      "nombre": "Audino",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "532",
      "numero": 532,
      "nombre": "Timburr",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "533",
      "numero": 533,
      "nombre": "Gurdurr",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "534",
      "numero": 534,
      "nombre": "Conkeldurr",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "535",
      "numero": 535,
      "nombre": "Tympole",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "536",
      "numero": 536,
      "nombre": "Palpitoad",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "537",
      "numero": 537,
      "nombre": "Seismitoad",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "538",
      "numero": 538,
      "nombre": "Throh",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "539",
      "numero": 539,
      "nombre": "Sawk",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "540",
      "numero": 540,
      "nombre": "Sewaddle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "541",
      "numero": 541,
      "nombre": "Swadloon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "542",
      "numero": 542,
      "nombre": "Leavanny",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "543",
      "numero": 543,
      "nombre": "Venipede",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "544",
      "numero": 544,
      "nombre": "Whirlipede",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "545",
      "numero": 545,
      "nombre": "Scolipede",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "546",
      "numero": 546,
      "nombre": "Cottonee",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "547",
      "numero": 547,
      "nombre": "Whimsicott",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "548",
      "numero": 548,
      "nombre": "Petilil",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "549",
      "numero": 549,
      "nombre": "Lilligant",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "550",
      "numero": 550,
      "nombre": "Basculin",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "551",
      "numero": 551,
      "nombre": "Sandile",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "552",
      "numero": 552,
      "nombre": "Krokorok",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "553",
      "numero": 553,
      "nombre": "Krookodile",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "554",
      "numero": 554,
      "nombre": "Darumaka",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "555",
      "numero": 555,
      "nombre": "Darmanitan",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "556",
      "numero": 556,
      "nombre": "Maractus",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "557",
      "numero": 557,
      "nombre": "Dwebble",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "558",
      "numero": 558,
      "nombre": "Crustle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "559",
      "numero": 559,
      "nombre": "Scraggy",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "560",
      "numero": 560,
      "nombre": "Scrafty",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "561",
      "numero": 561,
      "nombre": "Sigilyph",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "562",
      "numero": 562,
      "nombre": "Yamask",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "563",
      "numero": 563,
      "nombre": "Cofagrigus",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "564",
      "numero": 564,
      "nombre": "Tirtouga",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "565",
      "numero": 565,
      "nombre": "Carracosta",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "566",
      "numero": 566,
      "nombre": "Archen",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "567",
      "numero": 567,
      "nombre": "Archeops",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "568",
      "numero": 568,
      "nombre": "Trubbish",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "569",
      "numero": 569,
      "nombre": "Garbodor",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "570",
      "numero": 570,
      "nombre": "Zorua",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "571",
      "numero": 571,
      "nombre": "Zoroark",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "572",
      "numero": 572,
      "nombre": "Minccino",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "573",
      "numero": 573,
      "nombre": "Cinccino",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "574",
      "numero": 574,
      "nombre": "Gothita",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "575",
      "numero": 575,
      "nombre": "Gothorita",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "576",
      "numero": 576,
      "nombre": "Gothitelle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "577",
      "numero": 577,
      "nombre": "Solosis",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "578",
      "numero": 578,
      "nombre": "Duosion",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "579",
      "numero": 579,
      "nombre": "Reuniclus",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "580",
      "numero": 580,
      "nombre": "Ducklett",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "581",
      "numero": 581,
      "nombre": "Swanna",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "582",
      "numero": 582,
      "nombre": "Vanillite",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "583",
      "numero": 583,
      "nombre": "Vanillish",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "584",
      "numero": 584,
      "nombre": "Vanilluxe",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "585",
      "numero": 585,
      "nombre": "Deerling",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "586",
      "numero": 586,
      "nombre": "Sawsbuck",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "587",
      "numero": 587,
      "nombre": "Emolga",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "588",
      "numero": 588,
      "nombre": "Karrablast",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "589",
      "numero": 589,
      "nombre": "Escavalier",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "590",
      "numero": 590,
      "nombre": "Foongus",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "591",
      "numero": 591,
      "nombre": "Amoonguss",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "592",
      "numero": 592,
      "nombre": "Frillish",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "593",
      "numero": 593,
      "nombre": "Jellicent",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "594",
      "numero": 594,
      "nombre": "Alomomola",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "595",
      "numero": 595,
      "nombre": "Joltik",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "596",
      "numero": 596,
      "nombre": "Galvantula",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "597",
      "numero": 597,
      "nombre": "Ferroseed",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "598",
      "numero": 598,
      "nombre": "Ferrothorn",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "599",
      "numero": 599,
      "nombre": "Klink",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Ciudad Hau'oli, Isla de Melemele",
              "detalle": "Thursday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 8. Movimiento especial: Ninguno.",
              "fuente": "https://bulbapedia.bulbagarden.net/wiki/Island_Scan",
              "fuenteNombre": "Bulbapedia — Island Scan"
            }
          ]
        },
        "moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Ciudad Hau'oli, Isla de Melemele",
              "detalle": "Thursday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 8. Movimiento especial: Ninguno.",
              "fuente": "https://bulbapedia.bulbagarden.net/wiki/Island_Scan",
              "fuenteNombre": "Bulbapedia — Island Scan"
            }
          ]
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "600",
      "numero": 600,
      "nombre": "Klang",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "601",
      "numero": 601,
      "nombre": "Klinklang",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "602",
      "numero": 602,
      "nombre": "Tynamo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "603",
      "numero": 603,
      "nombre": "Eelektrik",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "604",
      "numero": 604,
      "nombre": "Eelektross",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "605",
      "numero": 605,
      "nombre": "Elgyem",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "606",
      "numero": 606,
      "nombre": "Beheeyem",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "607",
      "numero": 607,
      "nombre": "Litwick",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Cementerio de Hau'oli, Isla de Melemele",
              "detalle": "Saturday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 9. Movimiento especial: Endure.",
              "fuente": "https://www.serebii.net/ultrasunultramoon/islandscan.shtml",
              "fuenteNombre": "Serebii — Island Scan (Ultra Sun/Ultra Moon)"
            }
          ]
        },
        "ultra-moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Cementerio de Hau'oli, Isla de Melemele",
              "detalle": "Saturday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 9. Movimiento especial: Endure.",
              "fuente": "https://www.serebii.net/ultrasunultramoon/islandscan.shtml",
              "fuenteNombre": "Serebii — Island Scan (Ultra Sun/Ultra Moon)"
            }
          ]
        },
        "sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Cementerio de Hau'oli, Isla de Melemele",
              "detalle": "Saturday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 10. Movimiento especial: Acid.",
              "fuente": "https://bulbapedia.bulbagarden.net/wiki/Island_Scan",
              "fuenteNombre": "Bulbapedia — Island Scan"
            }
          ]
        },
        "moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Cementerio de Hau'oli, Isla de Melemele",
              "detalle": "Saturday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 10. Movimiento especial: Acid.",
              "fuente": "https://bulbapedia.bulbagarden.net/wiki/Island_Scan",
              "fuenteNombre": "Bulbapedia — Island Scan"
            }
          ]
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "608",
      "numero": 608,
      "nombre": "Lampent",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "609",
      "numero": 609,
      "nombre": "Chandelure",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "610",
      "numero": 610,
      "nombre": "Axew",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "611",
      "numero": 611,
      "nombre": "Fraxure",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "612",
      "numero": 612,
      "nombre": "Haxorus",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "613",
      "numero": 613,
      "nombre": "Cubchoo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "614",
      "numero": 614,
      "nombre": "Beartic",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "615",
      "numero": 615,
      "nombre": "Cryogonal",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "616",
      "numero": 616,
      "nombre": "Shelmet",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "617",
      "numero": 617,
      "nombre": "Accelgor",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "618",
      "numero": 618,
      "nombre": "Stunfisk",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "619",
      "numero": 619,
      "nombre": "Mienfoo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "620",
      "numero": 620,
      "nombre": "Mienshao",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "621",
      "numero": 621,
      "nombre": "Druddigon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "622",
      "numero": 622,
      "nombre": "Golett",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "623",
      "numero": 623,
      "nombre": "Golurk",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "624",
      "numero": 624,
      "nombre": "Pawniard",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "625",
      "numero": 625,
      "nombre": "Bisharp",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "626",
      "numero": 626,
      "nombre": "Bouffalant",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "627",
      "numero": 627,
      "nombre": "Rufflet",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "628",
      "numero": 628,
      "nombre": "Braviary",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "629",
      "numero": 629,
      "nombre": "Vullaby",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "630",
      "numero": 630,
      "nombre": "Mandibuzz",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "631",
      "numero": 631,
      "nombre": "Heatmor",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "632",
      "numero": 632,
      "nombre": "Durant",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "633",
      "numero": 633,
      "nombre": "Deino",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Colina Diez Caras (Ten Carat Hill), Isla de Melemele",
              "detalle": "Tuesday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 13. Movimiento especial: Assurance.",
              "fuente": "https://bulbapedia.bulbagarden.net/wiki/Island_Scan",
              "fuenteNombre": "Bulbapedia — Island Scan"
            }
          ]
        },
        "moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Colina Diez Caras (Ten Carat Hill), Isla de Melemele",
              "detalle": "Tuesday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 13. Movimiento especial: Assurance.",
              "fuente": "https://bulbapedia.bulbagarden.net/wiki/Island_Scan",
              "fuenteNombre": "Bulbapedia — Island Scan"
            }
          ]
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "634",
      "numero": 634,
      "nombre": "Zweilous",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "635",
      "numero": 635,
      "nombre": "Hydreigon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "636",
      "numero": 636,
      "nombre": "Larvesta",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "637",
      "numero": 637,
      "nombre": "Volcarona",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "638",
      "numero": 638,
      "nombre": "Cobalion",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "639",
      "numero": 639,
      "nombre": "Terrakion",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "640",
      "numero": 640,
      "nombre": "Virizion",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "641",
      "numero": 641,
      "nombre": "Tornadus",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "642",
      "numero": 642,
      "nombre": "Thundurus",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "643",
      "numero": 643,
      "nombre": "Reshiram",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "644",
      "numero": 644,
      "nombre": "Zekrom",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "645",
      "numero": 645,
      "nombre": "Landorus",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "646",
      "numero": 646,
      "nombre": "Kyurem",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "647",
      "numero": 647,
      "nombre": "Keldeo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "648",
      "numero": 648,
      "nombre": "Meloetta",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "649",
      "numero": 649,
      "nombre": "Genesect",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "650",
      "numero": 650,
      "nombre": "Chespin",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "651",
      "numero": 651,
      "nombre": "Quilladin",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "652",
      "numero": 652,
      "nombre": "Chesnaught",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "653",
      "numero": 653,
      "nombre": "Fennekin",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "654",
      "numero": 654,
      "nombre": "Braixen",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "655",
      "numero": 655,
      "nombre": "Delphox",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "656",
      "numero": 656,
      "nombre": "Froakie",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "657",
      "numero": 657,
      "nombre": "Frogadier",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "658",
      "numero": 658,
      "nombre": "Greninja",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "659",
      "numero": 659,
      "nombre": "Bunnelby",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "660",
      "numero": 660,
      "nombre": "Diggersby",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "661",
      "numero": 661,
      "nombre": "Fletchling",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "662",
      "numero": 662,
      "nombre": "Fletchinder",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "663",
      "numero": 663,
      "nombre": "Talonflame",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "664",
      "numero": 664,
      "nombre": "Scatterbug",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Ciudad Hau'oli, Isla de Melemele",
              "detalle": "Thursday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 9. Movimiento especial: Rage Powder.",
              "fuente": "https://www.serebii.net/ultrasunultramoon/islandscan.shtml",
              "fuenteNombre": "Serebii — Island Scan (Ultra Sun/Ultra Moon)"
            }
          ]
        },
        "ultra-moon": {
          "estado": "disponible",
          "metodos": [
            {
              "tipo": "Captura (Escaneo Insular)",
              "lugar": "Ciudad Hau'oli, Isla de Melemele",
              "detalle": "Thursday: activar el Escáner Insular con 100 puntos QR; encuentro de nivel 9. Movimiento especial: Rage Powder.",
              "fuente": "https://www.serebii.net/ultrasunultramoon/islandscan.shtml",
              "fuenteNombre": "Serebii — Island Scan (Ultra Sun/Ultra Moon)"
            }
          ]
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "665",
      "numero": 665,
      "nombre": "Spewpa",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "666",
      "numero": 666,
      "nombre": "Vivillon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "667",
      "numero": 667,
      "nombre": "Litleo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "668",
      "numero": 668,
      "nombre": "Pyroar",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "669",
      "numero": 669,
      "nombre": "Flabébé",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "670",
      "numero": 670,
      "nombre": "Floette",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "671",
      "numero": 671,
      "nombre": "Florges",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "672",
      "numero": 672,
      "nombre": "Skiddo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "673",
      "numero": 673,
      "nombre": "Gogoat",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "674",
      "numero": 674,
      "nombre": "Pancham",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "675",
      "numero": 675,
      "nombre": "Pangoro",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "676",
      "numero": 676,
      "nombre": "Furfrou",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "677",
      "numero": 677,
      "nombre": "Espurr",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "678",
      "numero": 678,
      "nombre": "Meowstic",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "679",
      "numero": 679,
      "nombre": "Honedge",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "680",
      "numero": 680,
      "nombre": "Doublade",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "681",
      "numero": 681,
      "nombre": "Aegislash",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "682",
      "numero": 682,
      "nombre": "Spritzee",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "683",
      "numero": 683,
      "nombre": "Aromatisse",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "684",
      "numero": 684,
      "nombre": "Swirlix",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "685",
      "numero": 685,
      "nombre": "Slurpuff",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "686",
      "numero": 686,
      "nombre": "Inkay",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "687",
      "numero": 687,
      "nombre": "Malamar",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "688",
      "numero": 688,
      "nombre": "Binacle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "689",
      "numero": 689,
      "nombre": "Barbaracle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "690",
      "numero": 690,
      "nombre": "Skrelp",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "691",
      "numero": 691,
      "nombre": "Dragalge",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "692",
      "numero": 692,
      "nombre": "Clauncher",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "693",
      "numero": 693,
      "nombre": "Clawitzer",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "694",
      "numero": 694,
      "nombre": "Helioptile",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "695",
      "numero": 695,
      "nombre": "Heliolisk",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "696",
      "numero": 696,
      "nombre": "Tyrunt",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "697",
      "numero": 697,
      "nombre": "Tyrantrum",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "698",
      "numero": 698,
      "nombre": "Amaura",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "699",
      "numero": 699,
      "nombre": "Aurorus",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "700",
      "numero": 700,
      "nombre": "Sylveon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "701",
      "numero": 701,
      "nombre": "Hawlucha",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "702",
      "numero": 702,
      "nombre": "Dedenne",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "703",
      "numero": 703,
      "nombre": "Carbink",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "704",
      "numero": 704,
      "nombre": "Goomy",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "705",
      "numero": 705,
      "nombre": "Sliggoo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "706",
      "numero": 706,
      "nombre": "Goodra",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "707",
      "numero": 707,
      "nombre": "Klefki",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "708",
      "numero": 708,
      "nombre": "Phantump",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "709",
      "numero": 709,
      "nombre": "Trevenant",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "710",
      "numero": 710,
      "nombre": "Pumpkaboo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "711",
      "numero": 711,
      "nombre": "Gourgeist",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "712",
      "numero": 712,
      "nombre": "Bergmite",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "713",
      "numero": 713,
      "nombre": "Avalugg",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "714",
      "numero": 714,
      "nombre": "Noibat",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "715",
      "numero": 715,
      "nombre": "Noivern",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "716",
      "numero": 716,
      "nombre": "Xerneas",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "717",
      "numero": 717,
      "nombre": "Yveltal",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "718",
      "numero": 718,
      "nombre": "Zygarde",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "719",
      "numero": 719,
      "nombre": "Diancie",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "720",
      "numero": 720,
      "nombre": "Hoopa",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "721",
      "numero": 721,
      "nombre": "Volcanion",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "722",
      "numero": 722,
      "nombre": "Rowlet",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "723",
      "numero": 723,
      "nombre": "Dartrix",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "724",
      "numero": 724,
      "nombre": "Decidueye",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "725",
      "numero": 725,
      "nombre": "Litten",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "726",
      "numero": 726,
      "nombre": "Torracat",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "727",
      "numero": 727,
      "nombre": "Incineroar",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "728",
      "numero": 728,
      "nombre": "Popplio",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "729",
      "numero": 729,
      "nombre": "Brionne",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "730",
      "numero": 730,
      "nombre": "Primarina",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "731",
      "numero": 731,
      "nombre": "Pikipek",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "732",
      "numero": 732,
      "nombre": "Trumbeak",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "733",
      "numero": 733,
      "nombre": "Toucannon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "734",
      "numero": 734,
      "nombre": "Yungoos",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "735",
      "numero": 735,
      "nombre": "Gumshoos",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "736",
      "numero": 736,
      "nombre": "Grubbin",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "737",
      "numero": 737,
      "nombre": "Charjabug",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "738",
      "numero": 738,
      "nombre": "Vikavolt",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "739",
      "numero": 739,
      "nombre": "Crabrawler",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "740",
      "numero": 740,
      "nombre": "Crabominable",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "741",
      "numero": 741,
      "nombre": "Oricorio",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "742",
      "numero": 742,
      "nombre": "Cutiefly",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "743",
      "numero": 743,
      "nombre": "Ribombee",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "744",
      "numero": 744,
      "nombre": "Rockruff",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "745",
      "numero": 745,
      "nombre": "Lycanroc",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "746",
      "numero": 746,
      "nombre": "Wishiwashi",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "747",
      "numero": 747,
      "nombre": "Mareanie",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "748",
      "numero": 748,
      "nombre": "Toxapex",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "749",
      "numero": 749,
      "nombre": "Mudbray",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "750",
      "numero": 750,
      "nombre": "Mudsdale",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "751",
      "numero": 751,
      "nombre": "Dewpider",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "752",
      "numero": 752,
      "nombre": "Araquanid",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "753",
      "numero": 753,
      "nombre": "Fomantis",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "754",
      "numero": 754,
      "nombre": "Lurantis",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "755",
      "numero": 755,
      "nombre": "Morelull",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "756",
      "numero": 756,
      "nombre": "Shiinotic",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "757",
      "numero": 757,
      "nombre": "Salandit",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "758",
      "numero": 758,
      "nombre": "Salazzle",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "759",
      "numero": 759,
      "nombre": "Stufful",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "760",
      "numero": 760,
      "nombre": "Bewear",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "761",
      "numero": 761,
      "nombre": "Bounsweet",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "762",
      "numero": 762,
      "nombre": "Steenee",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "763",
      "numero": 763,
      "nombre": "Tsareena",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "764",
      "numero": 764,
      "nombre": "Comfey",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "765",
      "numero": 765,
      "nombre": "Oranguru",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "766",
      "numero": 766,
      "nombre": "Passimian",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "767",
      "numero": 767,
      "nombre": "Wimpod",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "768",
      "numero": 768,
      "nombre": "Golisopod",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "769",
      "numero": 769,
      "nombre": "Sandygast",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "770",
      "numero": 770,
      "nombre": "Palossand",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "771",
      "numero": 771,
      "nombre": "Pyukumuku",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "772",
      "numero": 772,
      "nombre": "Type: Null",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "773",
      "numero": 773,
      "nombre": "Silvally",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "774",
      "numero": 774,
      "nombre": "Minior",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "775",
      "numero": 775,
      "nombre": "Komala",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "776",
      "numero": 776,
      "nombre": "Turtonator",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "777",
      "numero": 777,
      "nombre": "Togedemaru",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "778",
      "numero": 778,
      "nombre": "Mimikyu",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "779",
      "numero": 779,
      "nombre": "Bruxish",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "780",
      "numero": 780,
      "nombre": "Drampa",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "781",
      "numero": 781,
      "nombre": "Dhelmise",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "782",
      "numero": 782,
      "nombre": "Jangmo-o",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "783",
      "numero": 783,
      "nombre": "Hakamo-o",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "784",
      "numero": 784,
      "nombre": "Kommo-o",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "785",
      "numero": 785,
      "nombre": "Tapu Koko",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "786",
      "numero": 786,
      "nombre": "Tapu Lele",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "787",
      "numero": 787,
      "nombre": "Tapu Bulu",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "788",
      "numero": 788,
      "nombre": "Tapu Fini",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "789",
      "numero": 789,
      "nombre": "Cosmog",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "790",
      "numero": 790,
      "nombre": "Cosmoem",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "791",
      "numero": 791,
      "nombre": "Solgaleo",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "792",
      "numero": 792,
      "nombre": "Lunala",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "793",
      "numero": 793,
      "nombre": "Nihilego",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "794",
      "numero": 794,
      "nombre": "Buzzwole",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "795",
      "numero": 795,
      "nombre": "Pheromosa",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "796",
      "numero": 796,
      "nombre": "Xurkitree",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "797",
      "numero": 797,
      "nombre": "Celesteela",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "798",
      "numero": 798,
      "nombre": "Kartana",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "799",
      "numero": 799,
      "nombre": "Guzzlord",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "800",
      "numero": 800,
      "nombre": "Necrozma",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "801",
      "numero": 801,
      "nombre": "Magearna",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "802",
      "numero": 802,
      "nombre": "Marshadow",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "803",
      "numero": 803,
      "nombre": "Poipole",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "804",
      "numero": 804,
      "nombre": "Naganadel",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "805",
      "numero": 805,
      "nombre": "Stakataka",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "806",
      "numero": 806,
      "nombre": "Blacephalon",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "807",
      "numero": 807,
      "nombre": "Zeraora",
      "regional": false,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "19-alola",
      "numero": 19,
      "nombre": "Rattata de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "20-alola",
      "numero": 20,
      "nombre": "Raticate de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "26-alola",
      "numero": 26,
      "nombre": "Raichu de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "27-alola",
      "numero": 27,
      "nombre": "Sandshrew de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "28-alola",
      "numero": 28,
      "nombre": "Sandslash de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "37-alola",
      "numero": 37,
      "nombre": "Vulpix de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "38-alola",
      "numero": 38,
      "nombre": "Ninetales de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "50-alola",
      "numero": 50,
      "nombre": "Diglett de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "51-alola",
      "numero": 51,
      "nombre": "Dugtrio de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "52-alola",
      "numero": 52,
      "nombre": "Meowth de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "53-alola",
      "numero": 53,
      "nombre": "Persian de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "74-alola",
      "numero": 74,
      "nombre": "Geodude de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "75-alola",
      "numero": 75,
      "nombre": "Graveler de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "76-alola",
      "numero": 76,
      "nombre": "Golem de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "88-alola",
      "numero": 88,
      "nombre": "Grimer de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "89-alola",
      "numero": 89,
      "nombre": "Muk de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "103-alola",
      "numero": 103,
      "nombre": "Exeggutor de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    },
    {
      "id": "105-alola",
      "numero": 105,
      "nombre": "Marowak de Alola",
      "regional": true,
      "juegos": {
        "ultra-sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "ultra-moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "sun": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "moon": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "x": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "y": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "omega-ruby": {
          "estado": "pendiente_revision",
          "metodos": []
        },
        "alpha-sapphire": {
          "estado": "pendiente_revision",
          "metodos": []
        }
      }
    }
  ]
};
