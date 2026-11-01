/* Consulta remota opcional. La base local obtencion.js siempre es la fuente de respaldo. */
(() => {
  'use strict';
  const BASE = 'https://raw.githubusercontent.com/HydrosPlays/Pelagix/main/src/renderer/public/data/species/';
  const GAMES = [
    {id:'x',name:'Pokémon X',index:26},{id:'y',name:'Pokémon Y',index:27},
    {id:'omega-ruby',name:'Rubí Omega',index:28},{id:'alpha-sapphire',name:'Zafiro Alfa',index:29},
    {id:'sun',name:'Sol',index:30},{id:'moon',name:'Luna',index:31},
    {id:'ultra-sun',name:'Ultrasol',index:32},{id:'ultra-moon',name:'Ultraluna',index:33}
  ];
  async function consultar(numero, timeoutMs = 7000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(`${BASE}${encodeURIComponent(numero)}.json`, {
        signal: controller.signal, cache: 'no-cache', mode: 'cors', headers: {Accept:'application/json'}
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (!data || typeof data !== 'object' || !data.forms || typeof data.forms !== 'object') throw new Error('Formato remoto no reconocido');
      const rows = Object.values(data.forms).flatMap(form => Array.isArray(form?.rows) ? form.rows : []);
      const result = GAMES.map(game => {
        const encounters = rows.filter(row => Array.isArray(row.g) && row.g.includes(game.index)).map(row => {
          const loc = Number.isInteger(row.l) && Array.isArray(data.strings) ? data.strings[row.l] : '';
          return {
            tipo: row.k === 'wild' ? 'Encuentro salvaje' : row.k === 'gift' ? 'Regalo' : row.k === 'event' ? 'Evento / Mystery Gift' : row.k || 'Encuentro',
            metodo: row.m || '', lugar: loc || 'Ubicación no especificada', nivel: Array.isArray(row.lv) ? row.lv.join('–') : '',
            nota: row.n || '', estadoFuente: row.s || ''
          };
        });
        return { ...game, encounters };
      });
      return { ok:true, source:'Pelagix / datos derivados de PKHeX', sourceUrl:`https://github.com/HydrosPlays/Pelagix/blob/main/src/renderer/public/data/species/${numero}.json`, games:result, checkedAt:new Date().toISOString() };
    } finally { clearTimeout(timer); }
  }
  window.POKEDEX_OBTENCION_ONLINE = { consultar };
})();
