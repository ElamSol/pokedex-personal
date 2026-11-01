/* Reproductor de música de la Pokédex.
   Lee window.POKEDEX_MUSICA (archivo playlist.js, generado por ACTUALIZAR_MUSICA.cmd).
   No reproduce nada solo: el navegador exige que pulses Reproducir. */
(() => {
  'use strict';
  const STORE = 'pokedexPersonal.reproductor.v1';
  const base = window.POKEDEX_MUSICA;
  const pistas = Array.isArray(base && base.pistas) ? base.pistas.filter(p => p && typeof p.ruta === 'string') : [];
  let cfg = { vol: 0.7, muted: false, shuffle: false, repeat: 'off', ultima: null, album: '', disco: '' };
  try { Object.assign(cfg, JSON.parse(localStorage.getItem(STORE) || '{}') || {}); } catch (e) {}
  const guardar = () => { try { localStorage.setItem(STORE, JSON.stringify(cfg)); } catch (e) {} };
  const mk = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  const norm = v => String(v).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const fmt = s => { if (!Number.isFinite(s) || s < 0) return '0:00'; const m = Math.floor(s / 60), r = Math.floor(s % 60); return m + ':' + String(r).padStart(2, '0'); };
  const url = ruta => ruta.split('/').map(encodeURIComponent).join('/');

  const audio = new Audio();
  audio.preload = 'metadata';
  let actual = null, historial = [], erroresSeguidos = 0, arrastrando = false, consulta = '', intentoPlay = false;

  // ---------- Interfaz ----------
  const root = mk('section', 'music-player'); root.id = 'musicPlayer'; root.setAttribute('aria-label', 'Reproductor de música');
  const panel = mk('div', 'music-panel hidden');
  const tools = mk('div', 'music-tools');
  const search = mk('input', 'music-search'); search.type = 'search'; search.placeholder = 'Buscar pista…'; search.setAttribute('aria-label', 'Buscar pista');
  const selAlbum = mk('select', 'music-select'); selAlbum.setAttribute('aria-label', 'Álbum o carpeta');
  const selDisco = mk('select', 'music-select'); selDisco.setAttribute('aria-label', 'Disco');
  tools.append(search, selAlbum, selDisco);
  const meta = mk('p', 'music-meta');
  const lista = mk('div', 'music-list'); lista.setAttribute('role', 'list');
  panel.append(tools, meta, lista);

  const bar = mk('div', 'music-bar');
  const btnLista = mk('button', 'music-btn music-btn-list', '♪ Lista'); btnLista.type = 'button'; btnLista.setAttribute('aria-expanded', 'false');
  const info = mk('div', 'music-info');
  const titulo = mk('strong', 'music-title', pistas.length ? 'Elige una pista' : 'Sin pistas todavía');
  const sub = mk('span', 'music-sub', pistas.length ? 'Pulsa ▶ para empezar' : 'Copia tu música en la carpeta «musica» y ejecuta ACTUALIZAR_MUSICA.cmd');
  info.append(titulo, sub);
  const ctr = mk('div', 'music-controls');
  const mkBtn = (txt, label, cls = '') => { const b = mk('button', 'music-btn ' + cls, txt); b.type = 'button'; b.setAttribute('aria-label', label); b.title = label; return b; };
  const bPrev = mkBtn('⏮', 'Pista anterior'), bBack = mkBtn('−10 s', 'Retroceder 10 segundos', 'music-small');
  const bPlay = mkBtn('▶', 'Reproducir', 'music-play'), bFwd = mkBtn('+10 s', 'Adelantar 10 segundos', 'music-small'), bNext = mkBtn('⏭', 'Pista siguiente');
  ctr.append(bPrev, bBack, bPlay, bFwd, bNext);
  const seekWrap = mk('div', 'music-seek');
  const tCur = mk('span', 'music-time', '0:00'), tTot = mk('span', 'music-time', '0:00');
  const seek = mk('input', 'music-range'); seek.type = 'range'; seek.min = '0'; seek.max = '1000'; seek.value = '0'; seek.setAttribute('aria-label', 'Posición de la pista');
  seekWrap.append(tCur, seek, tTot);
  const extra = mk('div', 'music-extra');
  const bShuf = mkBtn('⇄', 'Orden aleatorio: apagado', 'music-toggle'), bRep = mkBtn('↻', 'Repetir: no', 'music-toggle');
  const bMute = mkBtn('🔊', 'Silenciar', 'music-toggle');
  const vol = mk('input', 'music-range music-vol'); vol.type = 'range'; vol.min = '0'; vol.max = '100'; vol.value = String(Math.round(cfg.vol * 100)); vol.setAttribute('aria-label', 'Volumen');
  extra.append(bShuf, bRep, bMute, vol);
  bar.append(btnLista, info, ctr, seekWrap, extra);
  const estado = mk('p', 'music-status'); estado.setAttribute('role', 'status'); estado.setAttribute('aria-live', 'polite');
  root.append(panel, bar, estado);
  document.body.append(root);
  if (document.body.classList) document.body.classList.add('has-player');

  const mensaje = t => { estado.textContent = t || ''; };

  // ---------- Lista filtrada ----------
  function coincide(i) {
    const p = pistas[i];
    if (cfg.album && p.album !== cfg.album) return false;
    if (cfg.disco !== '' && String(p.disco == null ? '' : p.disco) !== String(cfg.disco)) return false;
    if (consulta && !norm(p.titulo || p.ruta).includes(consulta)) return false;
    return true;
  }
  function listaActual() { const r = []; for (let i = 0; i < pistas.length; i++) if (coincide(i)) r.push(i); return r; }

  function llenarFiltros() {
    const albums = [...new Set(pistas.map(p => p.album).filter(Boolean))];
    selAlbum.replaceChildren(); const t = mk('option', '', 'Todas las carpetas'); t.value = ''; selAlbum.append(t);
    albums.forEach(a => { const o = mk('option', '', a); o.value = a; selAlbum.append(o); });
    selAlbum.value = cfg.album || '';
    const discos = [...new Set(pistas.filter(p => !cfg.album || p.album === cfg.album).map(p => p.disco).filter(d => d != null))].sort((a, b) => a - b);
    selDisco.replaceChildren(); const td = mk('option', '', 'Todos los discos'); td.value = ''; selDisco.append(td);
    discos.forEach(d => { const o = mk('option', '', 'Disco ' + d); o.value = String(d); selDisco.append(o); });
    selDisco.value = String(cfg.disco == null ? '' : cfg.disco);
    selDisco.classList.toggle('hidden', discos.length === 0);
  }

  function dibujarLista() {
    const idx = listaActual();
    lista.replaceChildren();
    meta.textContent = pistas.length ? `Mostrando ${idx.length} de ${pistas.length} pistas. Siguiente y Anterior se mueven dentro de esta lista.` : 'No hay pistas cargadas.';
    idx.forEach((i, n) => {
      const p = pistas[i];
      const b = mk('button', 'music-item' + (i === actual ? ' is-current' : '')); b.type = 'button'; b.setAttribute('role', 'listitem');
      b.append(mk('span', 'music-item-n', String(n + 1)), mk('span', 'music-item-t', p.titulo || p.ruta), mk('span', 'music-item-d', p.disco != null ? 'Disco ' + p.disco : ''));
      b.addEventListener('click', () => { if (actual != null && actual !== i) historial.push(actual); cargar(i, true); });
      lista.append(b);
    });
  }

  // ---------- Reproducción ----------
  function marcarPlay(on) {
    bPlay.textContent = on ? '⏸' : '▶'; bPlay.setAttribute('aria-label', on ? 'Pausar' : 'Reproducir'); bPlay.title = on ? 'Pausar' : 'Reproducir';
    root.classList.toggle('is-playing', on);
  }
  function actualizarMediaSession() {
    if (!('mediaSession' in navigator) || actual == null || typeof MediaMetadata === 'undefined') return;
    const p = pistas[actual];
    try { navigator.mediaSession.metadata = new MediaMetadata({ title: p.titulo || '', artist: 'Pokémon', album: p.album || '' }); } catch (e) {}
  }
  function cargar(i, reproducirYa) {
    const p = pistas[i]; if (!p) return;
    actual = i; audio.src = url(p.ruta);
    titulo.textContent = p.titulo || p.ruta;
    sub.textContent = [p.album, p.disco != null ? 'Disco ' + p.disco : ''].filter(Boolean).join(' · ');
    seek.value = '0'; tCur.textContent = '0:00'; tTot.textContent = '0:00';
    cfg.ultima = p.ruta; guardar(); mensaje(''); actualizarMediaSession(); dibujarLista();
    if (reproducirYa) reproducir();
  }
  function reproducir() {
    intentoPlay = true;
    if (actual == null) { const l = listaActual(); if (!l.length) return; cargar(l[0], true); return; }
    const pr = audio.play();
    if (pr && pr.catch) pr.catch(() => mensaje('El navegador no pudo reproducir esta pista. Prueba pulsando ▶ otra vez.'));
  }
  function alternar() { if (audio.paused) reproducir(); else audio.pause(); }
  function siguiente(deFin) {
    const l = listaActual(); if (!l.length) return;
    if (deFin && cfg.repeat === 'one') { audio.currentTime = 0; reproducir(); return; }
    const pos = l.indexOf(actual); let next;
    if (cfg.shuffle && l.length > 1) { do { next = l[Math.floor(Math.random() * l.length)]; } while (next === actual); }
    else if (cfg.shuffle || pos < 0) next = l[0];
    else if (pos < l.length - 1) next = l[pos + 1];
    else if (cfg.repeat === 'all' || !deFin) next = l[0];
    else { audio.pause(); audio.currentTime = 0; marcarPlay(false); return; }
    if (actual != null) { historial.push(actual); if (historial.length > 200) historial.shift(); }
    cargar(next, true);
  }
  function anterior() {
    if (audio.currentTime > 3) { audio.currentTime = 0; return; }
    const l = listaActual(); if (!l.length) return;
    if (cfg.shuffle && historial.length) { cargar(historial.pop(), true); return; }
    const pos = l.indexOf(actual);
    const prev = pos > 0 ? l[pos - 1] : (cfg.repeat === 'all' ? l[l.length - 1] : l[0]);
    cargar(prev, true);
  }
  const saltar = d => { if (actual == null) return; const dur = audio.duration; const t = audio.currentTime + d; audio.currentTime = Math.max(0, Number.isFinite(dur) ? Math.min(dur, t) : t); };

  function pintarToggles() {
    bShuf.classList.toggle('on', !!cfg.shuffle); bShuf.setAttribute('aria-pressed', String(!!cfg.shuffle));
    const sl = 'Orden aleatorio: ' + (cfg.shuffle ? 'activado' : 'apagado'); bShuf.setAttribute('aria-label', sl); bShuf.title = sl;
    bRep.classList.toggle('on', cfg.repeat !== 'off'); bRep.textContent = cfg.repeat === 'one' ? '↻1' : '↻';
    const rl = 'Repetir: ' + (cfg.repeat === 'off' ? 'no' : cfg.repeat === 'all' ? 'toda la lista' : 'esta pista'); bRep.setAttribute('aria-label', rl); bRep.title = rl;
    bMute.textContent = (cfg.muted || cfg.vol === 0) ? '🔇' : '🔊'; bMute.classList.toggle('on', !!cfg.muted);
    const ml = cfg.muted ? 'Quitar silencio' : 'Silenciar'; bMute.setAttribute('aria-label', ml); bMute.title = ml;
    audio.volume = Math.max(0, Math.min(1, cfg.vol)); audio.muted = !!cfg.muted;
  }

  // ---------- Eventos ----------
  bPlay.addEventListener('click', alternar);
  bNext.addEventListener('click', () => siguiente(false));
  bPrev.addEventListener('click', anterior);
  bBack.addEventListener('click', () => saltar(-10));
  bFwd.addEventListener('click', () => saltar(10));
  bShuf.addEventListener('click', () => { cfg.shuffle = !cfg.shuffle; guardar(); pintarToggles(); });
  bRep.addEventListener('click', () => { cfg.repeat = cfg.repeat === 'off' ? 'all' : cfg.repeat === 'all' ? 'one' : 'off'; guardar(); pintarToggles(); });
  bMute.addEventListener('click', () => { cfg.muted = !cfg.muted; guardar(); pintarToggles(); });
  vol.addEventListener('input', () => { cfg.vol = Number(vol.value) / 100; if (cfg.vol > 0) cfg.muted = false; guardar(); pintarToggles(); });
  seek.addEventListener('input', () => { arrastrando = true; if (Number.isFinite(audio.duration)) { audio.currentTime = Number(seek.value) / 1000 * audio.duration; tCur.textContent = fmt(audio.currentTime); } });
  seek.addEventListener('change', () => { arrastrando = false; });
  btnLista.addEventListener('click', () => {
    const abrir = panel.classList.toggle('hidden') === false;
    btnLista.setAttribute('aria-expanded', String(abrir));
    if (abrir) { dibujarLista(); const c = Array.from(lista.children).find(x => x.className && String(x.className).includes('is-current')); if (c && c.scrollIntoView) c.scrollIntoView({ block: 'center' }); }
  });
  search.addEventListener('input', () => { consulta = norm(search.value.trim()); dibujarLista(); });
  selAlbum.addEventListener('change', () => { cfg.album = selAlbum.value; cfg.disco = ''; guardar(); llenarFiltros(); dibujarLista(); });
  selDisco.addEventListener('change', () => { cfg.disco = selDisco.value; guardar(); dibujarLista(); });

  audio.addEventListener('play', () => marcarPlay(true));
  audio.addEventListener('pause', () => { marcarPlay(false); if (!audio.error) intentoPlay = false; });
  audio.addEventListener('playing', () => { erroresSeguidos = 0; mensaje(''); });
  audio.addEventListener('loadedmetadata', () => { tTot.textContent = fmt(audio.duration); });
  audio.addEventListener('timeupdate', () => {
    tCur.textContent = fmt(audio.currentTime);
    if (!arrastrando && Number.isFinite(audio.duration) && audio.duration > 0) seek.value = String(Math.round(audio.currentTime / audio.duration * 1000));
  });
  audio.addEventListener('ended', () => siguiente(true));
  audio.addEventListener('error', () => {
    if (actual == null) return;
    erroresSeguidos++;
    mensaje('No se pudo abrir «' + (pistas[actual].titulo || pistas[actual].ruta) + '». Revisa que el archivo esté en la carpeta «musica» y vuelve a ejecutar ACTUALIZAR_MUSICA.cmd.');
    marcarPlay(false);
    if (intentoPlay && erroresSeguidos < 3) setTimeout(() => siguiente(false), 700); else intentoPlay = false;
  });

  if ('mediaSession' in navigator) {
    const acciones = { play: reproducir, pause: () => audio.pause(), previoustrack: anterior, nexttrack: () => siguiente(false), seekbackward: () => saltar(-10), seekforward: () => saltar(10) };
    Object.entries(acciones).forEach(([k, f]) => { try { navigator.mediaSession.setActionHandler(k, f); } catch (e) {} });
  }

  // ---------- Inicio ----------
  llenarFiltros(); pintarToggles(); marcarPlay(false);
  if (!pistas.length) { [bPrev, bBack, bPlay, bFwd, bNext, bShuf, bRep].forEach(b => { b.disabled = true; }); }
  else {
    let ini = pistas.findIndex(p => p.ruta === cfg.ultima);
    if (ini < 0) { const l = listaActual(); ini = l.length ? l[0] : 0; }
    cargar(ini, false);
  }
  window.reproductorPokedex = { total: pistas.length };
})();
