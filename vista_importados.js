/* Muestra la capa "Datos importados, por verificar" dentro del panel "Dónde obtenerlo".
   Lee window.POKEDEX_IMPORTADO (archivo obtencion_importada.js). Solo usa textContent. */
(function () {
  const JUEGOS = [['ultra-sun', 'Ultrasol'], ['ultra-moon', 'Ultraluna'], ['sun', 'Sol'], ['moon', 'Luna'],
                  ['x', 'Pokémon X'], ['y', 'Pokémon Y'], ['omega-ruby', 'Rubí Omega'], ['alpha-sapphire', 'Zafiro Alfa']];
  const TIPOS = { wild: 'Salvaje', static: 'Encuentro fijo', gift: 'Regalo', egg: 'Huevo regalo', trade: 'Intercambio en el juego',
                  event: 'Evento / distribución', dream: 'Dream World / Dream Radar' };
  const ES_EVENTO = k => k === 'event' || k === 'dream';
  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt) n.textContent = txt; return n; };

  function textoFila(f) {
    const p = [TIPOS[f.tipo] || f.tipo];
    if (f.metodo) p.push(f.metodo);
    p.push(f.lugar ? f.lugar : 'dato incompleto (sin lugar)');
    if (f.nivel) p.push('Nv. ' + f.nivel[0] + '–' + f.nivel[1]);
    if (f.condiciones && f.condiciones.length) p.push('Condición: ' + f.condiciones.join(', '));
    if (f.shiny) p.push('Shiny: ' + f.shiny);
    if (f.nota) p.push('Nota: ' + f.nota);
    if (f.via) p.push('Vía: ' + f.via);
    if (f.evento) {
      const e = f.evento;
      if (e.ot) p.push('OT: ' + e.ot);
      if (e.desde || e.hasta) p.push('Fechas de la fuente: ' + (e.desde ? 'desde ' + e.desde : 'inicio desconocido') + (e.hasta ? ' hasta ' + e.hasta : ' (sin fecha de fin; no significa que siga activo)'));
    }
    return p.join(' · ');
  }

  window.renderImportados = function (p, host) {
    const sec = el('section', 'obtain-imported');
    sec.append(el('h4', '', 'Datos importados, por verificar'));
    const db = window.POKEDEX_IMPORTADO;
    if (!db || !db.especies) {
      sec.append(el('p', 'obtain-pending', 'Aún no se han importado datos. Ejecuta GENERAR_DATOS_IMPORTADOS.cmd (requiere Internet solo esa vez).'));
      host.append(sec); return;
    }
    const d = db.especies[p.id];
    sec.append(el('p', 'obtain-foot', 'Fuente: Pelagix (derivado de PKHeX). No está verificado fila por fila. Si un juego no tiene filas, eso NO significa que sea imposible conseguirlo. En inglés se conserva el texto original de la fuente.'));
    if (!d) { sec.append(el('p', 'obtain-pending', 'Esta entrada no está en el archivo importado.')); host.append(sec); return; }
    const nombreEsp = n => { const c = (typeof CATALOGO !== 'undefined' ? CATALOGO : []).find(x => x.numero === n && !x.regional); return c ? c.nombre : '#' + n; };
    JUEGOS.forEach(([id, nombre]) => {
      const propias = (d.filas || []).filter(f => f.juegos.includes(id));
      const ordinarias = propias.filter(f => !ES_EVENTO(f.tipo));
      const eventos = propias.filter(f => ES_EVENTO(f.tipo));
      const evo = (d.evoluciona || []).filter(e => e.juegos.includes(id));
      const cria = (d.cria || []).includes(id);
      const g = el('section', 'obtain-game');
      g.append(el('h4', '', nombre));
      ordinarias.forEach(f => g.append(el('p', '', textoFila(f))));
      evo.forEach(e => g.append(el('p', '', 'Evolución: desde ' + nombreEsp(e.desde[0]) + (e.desde[1] ? ' (forma ' + e.desde[1] + ')' : '') + ' · ' + e.como)));
      if (cria) g.append(el('p', '', 'Se puede obtener por huevo en este juego (puede requerir un padre transferido).'));
      if (eventos.length) {
        g.append(el('p', 'obtain-foot', 'Antecedente de eventos y distribuciones: no confirma que sigan activos ni que ya hayan terminado.'));
        eventos.forEach(f => g.append(el('p', '', textoFila(f))));
      }
      if (!ordinarias.length && !eventos.length && !evo.length && !cria) g.append(el('p', 'obtain-pending', 'La fuente no trae filas para este juego. No implica que no pueda obtenerse.'));
      sec.append(g);
    });
    host.append(sec);
  };
})();
