(() => {
  'use strict';
  const STORAGE_KEY_V1 = 'pokedexPersonal.progreso.v1';
  const STORAGE_KEY = 'pokedexPersonal.progreso.v2';
  const CONSULTA_ONLINE_ACTIVA = false;
  const META_KEY = 'pokedexPersonal.meta.v1';
  const FORMAT_VERSION = 2;
  const CATALOG_VERSION_V1 = '825-v1.1';
  const CATALOG_VERSION = '825-gen1-7-alola';
  const GENERATIONS = [
    {id:1,name:'Kanto',region:'Región de Kanto',total:151,color:'#d84b4b',color2:'#9e303d',mark:'I'},
    {id:2,name:'Johto',region:'Región de Johto',total:100,color:'#d79a36',color2:'#a76a26',mark:'II'},
    {id:3,name:'Hoenn',region:'Región de Hoenn',total:135,color:'#328e82',color2:'#216c72',mark:'III'},
    {id:4,name:'Sinnoh',region:'Región de Sinnoh',total:107,color:'#6576ad',color2:'#3d4c7e',mark:'IV'},
    {id:5,name:'Teselia',region:'Región de Teselia',total:156,color:'#536b86',color2:'#263f5b',mark:'V'},
    {id:6,name:'Kalos',region:'Región de Kalos',total:72,color:'#b16b9a',color2:'#754a83',mark:'VI'},
    {id:7,name:'Alola',region:'Región de Alola',total:104,color:'#d2a83c',color2:'#a46d26',mark:'VII'}
  ];
  const $ = id => document.getElementById(id);
  const allIds = new Set(CATALOGO.map(p => p.id));
  let progreso = loadProgress();
  let meta = loadMeta();
  let selectedGeneration = null;
  const undoStack = [];
  const pushUndo = () => { undoStack.push(JSON.stringify(progreso)); if (undoStack.length>10) undoStack.shift(); };
  let pendingImport = null;
  let toastTimer = null;

  function normRecord(value) {
    const rec={conseguido:true,enHome:value.enHome===true}; const f=value.conseguidoEn ?? value.fechaCaptura;
    if (typeof f==='string' && !Number.isNaN(Date.parse(f))) rec.conseguidoEn=f; return rec;
  }
  function loadProgress() {
    try {
      let raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) raw = localStorage.getItem(STORAGE_KEY_V1);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('formato');
      const clean = {};
      for (const [id, value] of Object.entries(parsed)) {
        if (allIds.has(id) && value && value.conseguido === true) {
          clean[id]=normRecord(value);
        }
      }
      return clean;
    } catch (error) {
      window.setTimeout(() => showToast('No se pudo leer el progreso local. Se iniciará una colección vacía; conserva cualquier respaldo que tengas.'), 300);
      return {};
    }
  }
  function loadMeta() {
    try { return JSON.parse(localStorage.getItem(META_KEY) || '{}') || {}; }
    catch { return {}; }
  }
  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progreso));
      meta.fechaModificacion = new Date().toISOString();
      localStorage.setItem(META_KEY, JSON.stringify(meta));
      renderHomeStats();
      renderGenerationCards();
      renderReminder();
      renderCaughtCollection();
      return true;
    } catch {
      showToast('El navegador no pudo guardar los cambios. Libera espacio o exporta un respaldo.');
      return false;
    }
  }
  function isCaught(id) { return !!(progreso[id] && progreso[id].conseguido === true); }
  function countCaught(list) { return list.reduce((sum,p) => sum + (isCaught(p.id) ? 1 : 0), 0); }
  function captureDate(id) { const value=progreso[id]?.conseguidoEn; return value && !Number.isNaN(Date.parse(value)) ? value : null; }
  function renderCaughtCollection() {
    const host=$('recentCaughtGrid'); if(!host)return;
    host.replaceChildren();
    const caught=CATALOGO.filter(p=>isCaught(p.id)).sort((a,b)=>{
      const da=captureDate(a.id), db=captureDate(b.id);
      if(da&&db)return Date.parse(db)-Date.parse(da);
      if(da)return -1; if(db)return 1;
      return a.numero-b.numero;
    });
    $('recentCaughtCount').textContent=String(caught.length);
    const openAll=$('recentToggle');
    if(openAll){ if(caught.length)openAll.classList.remove('hidden'); else openAll.classList.add('hidden'); openAll.textContent=`Ver todos y administrar (${caught.length})`; }
    $('recentCaughtNote').textContent=caught.length ? 'Mostrando los 12 más recientes, ordenados por fecha de captura cuando está registrada. Las marcas antiguas se conservan aunque no tengan fecha.' : 'Todavía no has marcado Pokémon como conseguidos.';
    caught.slice(0,12).forEach(p=>{
      const card=createPokemonCard(p);
      const tag=document.createElement('span'); tag.className='regional-tag';
      const date=captureDate(p.id);
      tag.textContent=date ? new Date(date).toLocaleDateString('es',{day:'numeric',month:'short',year:'numeric'}) : 'Fecha no registrada';
      card.append(tag); host.append(card);
    });
  }
  function percent(caught,total) { return total ? Math.round(caught/total*100) : 0; }
  function normalize(value) {
    return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’'.:\-\s]/g,'');
  }
  function showToast(message) {
    const toast = $('toast'); toast.textContent = message; toast.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  }
  function formatDate(value) {
    if (!value) return 'todavía no hay cambios';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 'fecha no disponible';
    return date.toLocaleString('es', {dateStyle:'medium',timeStyle:'short'});
  }
  function timeAgo(value) {
    if (!value) return 'aún no has exportado';
    const days = Math.max(0,Math.floor((Date.now()-new Date(value).getTime())/86400000));
    if (!Number.isFinite(days)) return 'fecha no disponible';
    if (days === 0) return 'hoy'; if (days === 1) return 'hace 1 día'; return `hace ${days} días`;
  }
  function renderReminder() {
    $('backupReminder').textContent = `Último cambio: ${formatDate(meta.fechaModificacion)} · Último respaldo: ${timeAgo(meta.ultimoRespaldo)}.`;
    const viejo=!meta.ultimoRespaldo || (Date.now()-Date.parse(meta.ultimoRespaldo))>14*86400000;
    if (Object.keys(progreso).length && viejo) $('backupReminder').textContent+=' Hace más de 14 días que no respaldas (o nunca lo has hecho): exporta un respaldo.';
  }
  function renderHomeStats() {
    const caught = countCaught(CATALOGO), pending = CATALOGO.length-caught, pct = percent(caught,CATALOGO.length);
    $('caughtTotal').textContent = caught; $('pendingTotal').textContent = pending;
    $('overallPercent').textContent = `${pct}%`; $('overallBar').style.width = `${pct}%`;
  }
  function renderGenerationCards() {
    const host = $('generationGrid'); host.replaceChildren();
    GENERATIONS.forEach(gen => {
      const list = CATALOGO.filter(p => p.generacion === gen.id);
      const caught = countCaught(list), pct = percent(caught,list.length);
      const card = document.createElement('button'); card.type='button'; card.className='generation-card';
      card.style.setProperty('--card',gen.color); card.style.setProperty('--card2',gen.color2);
      card.innerHTML = `<span class="gen-number">GENERACIÓN ${gen.mark}</span><span class="gen-watermark" aria-hidden="true">${gen.mark}</span><h3>${gen.name}</h3><span class="gen-count">${caught}/${list.length} conseguidos · ${pct}%</span><span class="gen-progress"><i style="width:${pct}%"></i></span>`;
      card.addEventListener('click',() => openGeneration(gen.id)); host.append(card);
    });
  }
  function applyFilter(list,filter) {
    return list.filter(p => filter === 'todos' || (filter === 'conseguidos' ? isCaught(p.id) : !isCaught(p.id)));
  }
  function createPokemonCard(p) {
    const caught = isCaught(p.id);
    const card = document.createElement('article');
    card.className = `pokemon-card ${caught?'caught':'pending'}`;
    const toggle = document.createElement('button'); toggle.type='button'; toggle.className='pokemon-main';
    toggle.setAttribute('aria-pressed',String(caught));
    toggle.setAttribute('aria-label',`${p.nombre}, número ${p.numero}, ${caught?'conseguido':'pendiente'}. Tocar para cambiar estado.`);
    const wrap = document.createElement('span'); wrap.className='sprite-wrap';
    const img = document.createElement('img'); img.src=p.sprite; img.alt=''; img.loading='lazy'; img.decoding='async';
    img.addEventListener('error',() => { if (!wrap.querySelector('.sprite-fallback')) { const fallback=document.createElement('span'); fallback.className='sprite-fallback'; const num=document.createElement('strong'); num.textContent=`#${String(p.numero).padStart(3,'0')}`; const name=document.createElement('small'); name.textContent=p.nombre; fallback.append(num,name); wrap.replaceChildren(fallback); } },{once:true});
    wrap.append(img);
    const number=document.createElement('span'); number.className='pokemon-number'; number.textContent=`N.º ${String(p.numero).padStart(3,'0')}${p.regional?' · A':''}`;
    const name=document.createElement('span'); name.className='pokemon-name'; name.textContent=p.nombre;
    const symbol=document.createElement('span'); symbol.className='status-symbol'; symbol.textContent=caught?'✓':'○'; symbol.setAttribute('aria-hidden','true');
    toggle.append(wrap,number,name); if (p.regional) { const tag=document.createElement('span'); tag.className='regional-tag'; tag.textContent='FORMA REGIONAL · ALOLA'; toggle.append(tag); } toggle.append(symbol);
    toggle.addEventListener('click',()=>togglePokemon(p.id));
    const guide=document.createElement('button'); guide.type='button'; guide.className='obtain-toggle'; guide.textContent='⌖ Dónde obtenerlo'; guide.setAttribute('aria-expanded','false');
    const panel=document.createElement('div'); panel.className='obtain-panel hidden';
    guide.addEventListener('click',()=>{ const open=panel.classList.toggle('hidden')===false; guide.setAttribute('aria-expanded',String(open)); guide.textContent=open?'⌃ Ocultar información':'⌖ Dónde obtenerlo'; card.classList.toggle('obtain-open',open); if(open){ renderObtainInfo(p,panel); if(card.scrollIntoView) card.scrollIntoView({behavior:'smooth',block:'nearest'}); } });
    card.append(toggle,guide,panel); return card;
  }
  const GAME_ORDER=['ultra-sun','ultra-moon','sun','moon','x','y','omega-ruby','alpha-sapphire'];
  const GAME_NAMES={'x':'Pokémon X','y':'Pokémon Y','omega-ruby':'Rubí Omega','alpha-sapphire':'Zafiro Alfa','sun':'Sol','moon':'Luna','ultra-sun':'Ultrasol','ultra-moon':'Ultraluna'};
  const GAME_ICONS={'x':'X','y':'Y','omega-ruby':'Ω','alpha-sapphire':'α','sun':'☀','moon':'☾','ultra-sun':'☀','ultra-moon':'☾'};
  function mk(tag,cls,text){ const n=document.createElement(tag); if(cls)n.className=cls; if(text!=null)n.textContent=text; return n; }
  function obtainGame(id){
    const section=mk('section',`obtain-game game-${id}`), h=mk('h4');
    h.append(mk('span','game-icon',GAME_ICONS[id]||''),mk('span','game-name',GAME_NAMES[id]||id));
    section.append(h); return section;
  }
  // Traducción segura: solo términos genéricos y "Route N". Lo que no se conoce con certeza queda en inglés.
  const TR_EXACT={
    'Starter':'Inicial','Gift':'Regalo','Egg':'Huevo','Mystery Gift':'Regalo misterioso','Island Scan':'Escáner Insular',
    'Friend Safari':'Safari Amigo','Safari Zone':'Zona Safari','Tall grass':'Hierba alta','Fishing':'Pesca',
    'Old Rod':'Caña Vieja','Good Rod':'Caña Buena','Super Rod':'Supercaña',
    'Monday':'lunes','Tuesday':'martes','Wednesday':'miércoles','Thursday':'jueves','Friday':'viernes','Saturday':'sábado','Sunday':'domingo',
    'Morning':'mañana','Day':'día','Night':'noche',
    'Cria':'Cría','Evolucion':'Evolución','Evento / distribucion':'Evento / distribución'
  };
  function tr(text){
    if(text==null)return text;
    const t=String(text).trim();
    if(Object.prototype.hasOwnProperty.call(TR_EXACT,t))return TR_EXACT[t];
    return t.replace(/^Route (\d+)/,'Ruta $1');
  }
  function obtainRow(kind,main,detail,warnings=[],isEvent=false,origin=''){
    const row=mk('div','obtain-row'), tags=mk('div','obtain-tags');
    if(kind)tags.append(mk('span',`obtain-type${isEvent?' is-event':''}`,kind));
    if(origin)tags.append(mk('span',`obtain-origin${origin==='Revisado a mano'?' is-manual':''}`,origin));
    if(tags.children.length)row.append(tags);
    if(main)row.append(mk('span','obtain-main',main));
    if(detail)row.append(mk('span','obtain-detail',detail));
    warnings.forEach(w=>row.append(mk('span','obtain-warning',w)));
    return row;
  }
  function renderObtainInfo(p,host) {
    host.replaceChildren();
    const db=window.POKEDEX_OBTENCION;
    const record=db?.registros?.find(x=>x.id===p.id);
    const imported=window.POKEDEX_OBTENCION_IMPORTADA;
    const importedRecord=imported?.registros?.find(x=>x.numero===p.numero);
    const formaKey=p.regional?'1':'0';
    const manualOf=id=>record?.juegos?.[id]?.metodos||[];
    const importedOf=id=>(importedRecord?.juegos?.[id]||[]).filter(r=>String(r.forma)===formaKey);
    const games=GAME_ORDER.filter(id=>manualOf(id).length||importedOf(id).length);
    let hasManual=false;
    if(games.length){
      const wrap=mk('div','obtain-games');
      games.forEach(id=>{
        const section=obtainGame(id), manual=manualOf(id), rows=importedOf(id);
        if(manual.length)hasManual=true;
        // Primero lo revisado a mano; después lo importado.
        manual.forEach(m=>section.append(obtainRow(m.tipo,m.lugar,m.detalle,[],false,'Revisado a mano')));
        rows.forEach(row=>{
          const cond=Array.isArray(row.condiciones)?row.condiciones.map(tr).join(', '):(row.condiciones!=null?JSON.stringify(row.condiciones):'');
          const main=[tr(row.metodo),tr(row.lugar)].filter(Boolean).join(' · ');
          const detail=[row.nivel!=null?`Nivel ${row.nivel}`:'',cond?`Condiciones: ${cond}`:'',row.nota||''].filter(Boolean).join(' · ');
          const warnings=[];
          if(row.incompleto?.length)warnings.push('Dato incompleto: falta '+row.incompleto.join(' y ')+'.');
          if(row.eventoAntecedente)warnings.push('Evento o distribución: antecedente, no indica disponibilidad actual.');
          section.append(obtainRow(tr(row.tipoFila)||'Tipo sin indicar',main,detail,warnings,!!row.eventoAntecedente,manual.length?'Importado · por verificar':''));
        });
        wrap.append(section);
      });
      host.append(wrap);
    } else {
      host.append(mk('p','obtain-pending',importedRecord?'La fuente no trae filas para este Pokémon en estos juegos. Eso no significa que sea imposible conseguirlo.':'No hay filas importadas para esta especie en el archivo local disponible.'));
    }
    const source=mk('div','obtain-source');
    source.append(mk('strong','','Datos importados, por verificar'),mk('p','','Fuente Pelagix/PKHeX, guardada en tu equipo (no requiere Internet). Son datos de referencia, no una confirmación de disponibilidad actual. Los eventos y distribuciones son solo antecedentes. Que no aparezcan filas no significa que sea imposible conseguirlo. Parte del texto sigue en inglés porque es el original de la fuente.'+(hasManual?' Las filas marcadas «Revisado a mano» se comprobaron una por una.':'')));
    host.append(source);
  }
  function renderBankCountdown(){
    const host=$('bankCountdown'); if(!host)return;
    const deadline=new Date('2027-02-25T21:00:00-06:00').getTime(), diff=deadline-Date.now();
    if(diff<=0){host.textContent='Pokémon Bank ya cerró.';return;}
    const days=Math.floor(diff/86400000),hours=Math.floor(diff%86400000/3600000),minutes=Math.floor(diff%3600000/60000),seconds=Math.floor(diff%60000/1000);
    host.textContent=`${days} días · ${hours} h · ${minutes} min · ${seconds} s`;
  }
  function renderHomeSearch() {
    const query=normalize($('searchInput').value), filter=$('homeFilter').value, host=$('homeSearchResults');
    host.replaceChildren();
    if (!query) { const note=document.createElement('p'); note.className='empty-note'; note.textContent='Escribe un nombre o número para buscar en las 825 entradas.'; host.append(note); return; }
    const matches=applyFilter(CATALOGO.filter(p => {
      const name=normalize(p.nombre), id=normalize(p.id), num=String(p.numero);
      return /^\d+$/.test(query) ? num===query : (name.includes(query) || id.includes(query));
    }),filter);
    if (!matches.length) { const note=document.createElement('p'); note.className='empty-note'; note.textContent='No encontramos Pokémon que coincidan con tu búsqueda y filtro.'; host.append(note); return; }
    matches.forEach(p => {
      const card=createPokemonCard(p); const gen=GENERATIONS.find(g=>g.id===p.generacion);
      const label=document.createElement('span'); label.className='regional-tag'; label.textContent=gen.name.toUpperCase(); card.append(label); host.append(card);
    });
  }
  function openGeneration(id) {
    selectedGeneration=id; $('caughtView')?.classList.add('hidden'); $('homeView').classList.add('hidden'); $('helpView').classList.add('hidden'); $('generationView').classList.remove('hidden');
    $('generationSearch').value=''; $('generationFilter').value='todos';
    renderGeneration(); window.scrollTo(0,0);
  }
  function renderGeneration() {
    const gen=GENERATIONS.find(g=>g.id===selectedGeneration); if (!gen) return;
    const list=CATALOGO.filter(p=>p.generacion===gen.id), caught=countCaught(list), pct=percent(caught,list.length);
    $('generationEyebrow').textContent=`GENERACIÓN ${gen.mark}`; $('generationName').textContent=gen.name;
    $('generationSubtitle').textContent=`${gen.region} · ${list.length} entradas`;
    $('generationCount').textContent=`${caught}/${list.length}`; $('generationPercent').textContent=`${pct}%`;
    $('undoBtn').disabled=!undoStack.length;
    $('bulkBtn').textContent=caught===list.length?'Desmarcar generación':'Marcar generación';
    const query=normalize($('generationSearch').value), filter=$('generationFilter').value;
    const filtered=applyFilter(list.filter(p=>!query || normalize(p.nombre).includes(query) || normalize(p.id).includes(query) || String(p.numero)===query),filter).sort((a,b)=>Number(isCaught(a.id))-Number(isCaught(b.id)) || a.numero-b.numero);
    $('generationResultsMeta').textContent=`Mostrando ${filtered.length} de ${list.length} entradas · ${caught} conseguidos`;
    const host=$('pokemonGrid'); host.replaceChildren();
    if (!filtered.length) { const note=document.createElement('p'); note.className='empty-note'; note.textContent=query?'No hay resultados para esa búsqueda en esta generación.':'No hay Pokémon que coincidan con el filtro seleccionado.'; host.append(note); return; }
    filtered.forEach(p=>host.append(createPokemonCard(p)));
  }
  function togglePokemon(id) {
    pushUndo();
    if (isCaught(id)) delete progreso[id]; else progreso[id]={conseguido:true,enHome:false,conseguidoEn:new Date().toISOString()};
    saveProgress(); renderGeneration(); renderHomeSearch();
  }
  function undoLast() {
    if (!undoStack.length) return;
    progreso=JSON.parse(undoStack.pop());
    saveProgress(); renderGeneration(); renderHomeSearch(); showToast('Último cambio deshecho.');
  }
  function bulkToggle() {
    const list=CATALOGO.filter(p=>p.generacion===selectedGeneration), allCaught=list.every(p=>isCaught(p.id));
    const action=allCaught?'desmarcar':'marcar';
    if (!confirm(`¿Seguro que quieres ${action} las ${list.length} entradas de ${GENERATIONS[selectedGeneration-1].name}?`)) return;
    pushUndo();
    const capturedAt=new Date().toISOString();
    list.forEach(p=>{ if(allCaught) delete progreso[p.id]; else progreso[p.id]={conseguido:true,enHome:progreso[p.id]?.enHome===true,conseguidoEn:capturedAt}; });
    saveProgress(); renderGeneration(); showToast(`Generación ${action==='marcar'?'marcada':'desmarcada'}.`);
  }
  function resetAll() {
    if (!confirm('¿Quieres borrar todo el progreso de las 825 entradas?')) return;
    if (!confirm('CONFIRMACIÓN FINAL: esta acción no se puede deshacer. ¿Borrar toda tu colección?')) return;
    pushUndo(); progreso={}; saveProgress(); renderGeneration(); renderHomeSearch();
    showBackupMessage('Todo el progreso se ha reiniciado.','success'); showToast('Colección reiniciada.');
  }
  function exportBackup() {
    const backup={formato:FORMAT_VERSION,catalogo:CATALOG_VERSION,modificado:meta.fechaModificacion||new Date().toISOString(),entradas:progreso};
    const blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'}), url=URL.createObjectURL(blob);
    const a=document.createElement('a'); a.href=url; a.download=`pokedex-respaldo-${new Date().toISOString().slice(0,10)}.json`;
    document.body.append(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    meta.ultimoRespaldo=new Date().toISOString(); localStorage.setItem(META_KEY,JSON.stringify(meta)); renderReminder();
    showBackupMessage('Respaldo exportado. Guarda el archivo en un lugar seguro.','success');
  }
  function duplicateProgressKeys(raw) {
    const match=raw.match(/"(?:progreso|entradas)"\s*:\s*\{/); if (!match) return [];
    const start=match.index+match[0].length-1; let depth=0,end=-1,inString=false,escape=false;
    for(let i=start;i<raw.length;i++) { const c=raw[i]; if(inString){if(escape)escape=false;else if(c==='\\')escape=true;else if(c==='"')inString=false;continue;} if(c==='"'){inString=true;continue;} if(c==='{')depth++; if(c==='}'&&--depth===0){end=i;break;} }
    if(end<0)return ['(progreso incompleto)'];
    const body=raw.slice(start+1,end), keys=[]; let level=1, inKey=false, escaped=false, keyStart=-1;
    for(let i=0;i<body.length;i++) { const c=body[i];
      if(inKey) { if(escaped) escaped=false; else if(c==='\\') escaped=true; else if(c==='"') { inKey=false; let j=i+1; while(/\s/.test(body[j]||''))j++; if(level===1 && body[j]===':') keys.push(JSON.parse(body.slice(keyStart,i+1))); } continue; }
      if(c==='"') { inKey=true; keyStart=i; continue; }
      if(c==='{') level++; else if(c==='}') level--;
    }
    return keys.filter((key,index)=>keys.indexOf(key)!==index);
  }
  function validateBackup(raw) {
    const duplicates=duplicateProgressKeys(raw); if(duplicates.length) throw new Error(`El respaldo contiene identificadores repetidos: ${duplicates.slice(0,4).join(', ')}.`);
    let data; try{data=JSON.parse(raw);}catch{throw new Error('El archivo no contiene un JSON válido.');}
    if(!data || typeof data!=='object' || Array.isArray(data)) throw new Error('La estructura del respaldo no es válida.');
    const fmt=data.formato ?? data.versionFormato;
    if(fmt===1) { if(data.versionCatalogo!==CATALOG_VERSION_V1) throw new Error(`Versión de catálogo incompatible (${String(data.versionCatalogo)}).`); }
    else if(fmt===2) { if(data.catalogo!==CATALOG_VERSION) throw new Error(`Versión de catálogo incompatible (${String(data.catalogo)}). Se esperaba ${CATALOG_VERSION}.`); }
    else if(typeof fmt==='number' && fmt>FORMAT_VERSION) throw new Error(`El respaldo usa un formato más nuevo (${fmt}) que esta versión de la app (${FORMAT_VERSION}).`);
    else throw new Error(`Formato de respaldo no reconocido (${String(fmt)}).`);
    const modificado=fmt===1?data.fechaModificacion:data.modificado;
    if(typeof modificado!=='string' || Number.isNaN(Date.parse(modificado))) throw new Error('Falta una fecha de modificación válida.');
    const source=fmt===1?data.progreso:data.entradas;
    if(!source || typeof source!=='object' || Array.isArray(source)) throw new Error('El campo de entradas no tiene el formato esperado.');
    const clean={};
    for(const [id,value] of Object.entries(source)) {
      if(!allIds.has(id)) throw new Error(`El identificador "${id}" no existe en este catálogo.`);
      if(!value || typeof value!=='object' || value.conseguido!==true) throw new Error(`El registro de "${id}" no tiene el formato { conseguido: true }.`);
      const f=value.conseguidoEn ?? value.fechaCaptura;
      if(f!==undefined && (typeof f!=='string' || Number.isNaN(Date.parse(f)))) throw new Error(`La fecha de "${id}" no es válida.`);
      if(value.enHome!==undefined && typeof value.enHome!=='boolean') throw new Error(`El campo enHome de "${id}" no es válido.`);
      clean[id]=normRecord(value);
    }
    return {data:{fechaModificacion:modificado},formato:fmt,progress:clean};
  }
  function showBackupMessage(message,type='') { const el=$('backupMessage'); el.textContent=message; el.className=`message ${type}`; }
  async function handleImportFile(file) {
    if(!file)return;
    try {
      const raw=await file.text(), parsed=validateBackup(raw); pendingImport=parsed;
      const count=Object.keys(parsed.progress).length, old=meta.fechaModificacion && Date.parse(parsed.data.fechaModificacion)<Date.parse(meta.fechaModificacion);
      $('importSummary').textContent=`Archivo válido: ${count} entradas conseguidas. Modificado: ${formatDate(parsed.data.fechaModificacion)}.${old?' Este archivo es más antiguo que el progreso actual.':''}`;
      $('importPanel').classList.remove('hidden'); showBackupMessage(old?'Advertencia: el respaldo es más antiguo. Confirma el modo de importación para continuar.':'Respaldo validado. Elige Reemplazar o Combinar.','success');
      pendingImport.isOlder=!!old;
    } catch(error) { pendingImport=null; $('importPanel').classList.add('hidden'); showBackupMessage(`${error.message} No se modificó tu progreso.`,'error'); }
  }
  function applyImport(mode) {
    if(!pendingImport)return;
    if(pendingImport.isOlder && !confirm('Este archivo es más antiguo que el progreso actual. ¿Deseas continuar?'))return;
    if(!confirm(mode==='replace'?'Reemplazarás exactamente tu progreso actual por el del archivo. ¿Continuar?':'Se combinarán ambos progresos sin quitar marcas actuales. ¿Continuar?'))return;
    pushUndo();
    if(mode==='replace') progreso=JSON.parse(JSON.stringify(pendingImport.progress));
    else { const merged={...progreso}; for (const [id,b] of Object.entries(pendingImport.progress)) { const a=merged[id]; if(!a){merged[id]={...b};continue;} const f=(a.conseguidoEn&&b.conseguidoEn)?(Date.parse(a.conseguidoEn)>=Date.parse(b.conseguidoEn)?a.conseguidoEn:b.conseguidoEn):(a.conseguidoEn||b.conseguidoEn); merged[id]={conseguido:true,enHome:a.enHome===true||b.enHome===true,...(f?{conseguidoEn:f}:{})}; } progreso=merged; }
    pendingImport=null; saveProgress(); renderGeneration(); renderHomeSearch();
    $('importPanel').classList.add('hidden'); $('importFile').value=''; showBackupMessage(`Respaldo ${mode==='replace'?'reemplazado':'combinado'} correctamente. Las marcas están guardadas en este navegador.`,'success');
  }
  // ---------- Vista «Ya conseguidos»: lista completa, selección y desmarcado en bloque ----------
  const CAUGHT_PAGE = 60;
  const caughtSel = new Set();
  let caughtShown = CAUGHT_PAGE;
  function sortCaughtList(list, mode) {
    if (mode === 'numero') return list.sort((a,b)=>a.numero-b.numero || (a.regional?1:0)-(b.regional?1:0));
    return list.sort((a,b)=>{ const da=captureDate(a.id), db=captureDate(b.id); if(da&&db)return Date.parse(db)-Date.parse(da); if(da)return -1; if(db)return 1; return a.numero-b.numero; });
  }
  function caughtFiltered() {
    const q=normalize($('caughtSearch')?.value||''), gen=$('caughtGen')?.value||'todas', mode=$('caughtSort')?.value||'reciente';
    let list=CATALOGO.filter(p=>isCaught(p.id));
    if(gen!=='todas') list=list.filter(p=>String(p.generacion)===gen);
    if(q) list=list.filter(p=>/^\d+$/.test(q)?String(p.numero)===q:(normalize(p.nombre).includes(q)||normalize(p.id).includes(q)));
    return sortCaughtList(list,mode);
  }
  function renderCaughtActions(list) {
    const total=countCaught(CATALOGO), n=caughtSel.size;
    const un=$('caughtUnmark'); if(un){ un.disabled=n===0; un.textContent=`Desmarcar seleccionados (${n})`; }
    const sa=$('caughtSelectAll'); if(sa){ sa.disabled=!list.length; sa.textContent=`Seleccionar todos los de esta lista (${list.length})`; }
    const cs=$('caughtClearSel'); if(cs) cs.disabled=n===0;
    const ua=$('caughtUnmarkAll'); if(ua) ua.disabled=total===0;
    const ud=$('caughtUndo'); if(ud) ud.disabled=!undoStack.length;
    const sub=$('caughtSubtitle'); if(sub) sub.textContent=`${total} Pokémon conseguidos de ${CATALOGO.length}`;
    const meta=$('caughtMeta'); if(meta) meta.textContent=`Mostrando ${Math.min(caughtShown,list.length)} de ${list.length} en esta lista · ${n} seleccionados`;
  }
  function renderCaughtView() {
    const grid=$('caughtGrid'); if(!grid) return;
    for(const id of [...caughtSel]) if(!isCaught(id)) caughtSel.delete(id);
    const list=caughtFiltered(); grid.replaceChildren();
    if(!list.length){ const note=document.createElement('p'); note.className='empty-note'; note.textContent=countCaught(CATALOGO)?'Ningún conseguido coincide con la búsqueda o el filtro.':'Todavía no has marcado Pokémon como conseguidos.'; grid.append(note); }
    list.slice(0,caughtShown).forEach(p=>grid.append(createPickCard(p)));
    const more=$('caughtMore'); if(more){ if(caughtShown<list.length){ more.classList.remove('hidden'); more.textContent=`Cargar más (${Math.min(CAUGHT_PAGE,list.length-caughtShown)} más)`; } else more.classList.add('hidden'); }
    renderCaughtActions(list);
  }
  function createPickCard(p) {
    const card=document.createElement('label'); card.className='pick-card'+(caughtSel.has(p.id)?' selected':'');
    const cb=document.createElement('input'); cb.type='checkbox'; cb.checked=caughtSel.has(p.id); cb.className='pick-check'; cb.setAttribute('aria-label',`Seleccionar ${p.nombre}`);
    const img=document.createElement('img'); img.src=p.sprite; img.alt=''; img.loading='lazy'; img.decoding='async'; img.className='pick-sprite';
    const num=document.createElement('span'); num.className='pick-number'; num.textContent=`N.º ${String(p.numero).padStart(3,'0')}${p.regional?' · A':''}`;
    const name=document.createElement('span'); name.className='pick-name'; name.textContent=p.nombre;
    const date=document.createElement('span'); date.className='pick-date'; const d=captureDate(p.id);
    date.textContent=d?new Date(d).toLocaleDateString('es',{day:'numeric',month:'short',year:'numeric'}):'Fecha no registrada';
    card.append(cb,img,num,name,date);
    cb.addEventListener('change',()=>{ if(cb.checked){caughtSel.add(p.id);card.className='pick-card selected';} else {caughtSel.delete(p.id);card.className='pick-card';} renderCaughtActions(caughtFiltered()); });
    return card;
  }
  function showCaught() {
    caughtSel.clear(); caughtShown=CAUGHT_PAGE;
    ['homeView','helpView','generationView'].forEach(id=>$(id).classList.add('hidden'));
    $('caughtView').classList.remove('hidden');
    renderCaughtView(); window.scrollTo(0,0);
  }
  function caughtSelectAll() { caughtFiltered().forEach(p=>caughtSel.add(p.id)); renderCaughtView(); }
  function caughtClearSel() { caughtSel.clear(); renderCaughtView(); }
  function caughtUnmarkSelected() {
    const ids=[...caughtSel].filter(isCaught); if(!ids.length) return;
    if(!confirm(`¿Desmarcar ${ids.length} Pokémon como conseguidos? Podrás revertirlo con «Deshacer».`)) return;
    pushUndo(); ids.forEach(id=>delete progreso[id]); caughtSel.clear();
    saveProgress(); renderCaughtView(); showToast(`${ids.length} Pokémon desmarcados.`);
  }
  function caughtUnmarkAll() {
    const n=countCaught(CATALOGO); if(!n) return;
    if(!confirm(`¿Desmarcar TODOS los ${n} Pokémon conseguidos?`)) return;
    if(!confirm('CONFIRMACIÓN FINAL: se quitarán todas las marcas de conseguido. Podrás revertirlo una vez con «Deshacer». ¿Continuar?')) return;
    pushUndo(); progreso={}; caughtSel.clear();
    saveProgress(); renderCaughtView(); showToast('Todos los Pokémon fueron desmarcados.');
  }
  function caughtUndo() { if(!undoStack.length) return; undoLast(); renderCaughtView(); }
  function showHelp() { $('homeView').classList.add('hidden'); $('generationView').classList.add('hidden'); $('caughtView')?.classList.add('hidden'); $('helpView').classList.remove('hidden'); window.scrollTo(0,0); }
  function showHome() { selectedGeneration=null; caughtSel.clear(); $('caughtView')?.classList.add('hidden'); $('generationView').classList.add('hidden'); $('helpView').classList.add('hidden'); $('homeView').classList.remove('hidden'); renderHomeStats(); renderGenerationCards(); renderHomeSearch(); window.scrollTo(0,0); }

  $('backHome').addEventListener('click',showHome); $('brandHome').addEventListener('click',e=>{e.preventDefault();showHome();});
  $('backFromHelp').addEventListener('click',showHome); $('helpDone').addEventListener('click',showHome);
  $('helpBtn').addEventListener('click',showHelp);
  $('backupBtn').addEventListener('click',()=>{showBackupMessage('');$('importPanel').classList.add('hidden');$('backupDialog').showModal();});
  $('exportBtn').addEventListener('click',exportBackup); $('importBtn').addEventListener('click',()=>$('importFile').click());
  $('importFile').addEventListener('change',e=>handleImportFile(e.target.files[0]));
  $('replaceBtn').addEventListener('click',()=>applyImport('replace')); $('mergeBtn').addEventListener('click',()=>applyImport('merge'));
  $('resetBtn').addEventListener('click',resetAll); $('undoBtn').addEventListener('click',undoLast); $('bulkBtn').addEventListener('click',bulkToggle);
  $('generationSearch').addEventListener('input',renderGeneration); $('generationFilter').addEventListener('change',renderGeneration);
  $('searchInput').addEventListener('input',renderHomeSearch); $('homeFilter').addEventListener('change',renderHomeSearch);
  $('recentToggle')?.addEventListener('click',showCaught); $('caughtBack')?.addEventListener('click',showHome);
  $('caughtSearch')?.addEventListener('input',()=>{caughtShown=CAUGHT_PAGE;renderCaughtView();});
  $('caughtGen')?.addEventListener('change',()=>{caughtShown=CAUGHT_PAGE;renderCaughtView();}); $('caughtSort')?.addEventListener('change',()=>{caughtShown=CAUGHT_PAGE;renderCaughtView();});
  $('caughtMore')?.addEventListener('click',()=>{caughtShown+=CAUGHT_PAGE;renderCaughtView();});
  $('caughtSelectAll')?.addEventListener('click',caughtSelectAll); $('caughtClearSel')?.addEventListener('click',caughtClearSel);
  $('caughtUnmark')?.addEventListener('click',caughtUnmarkSelected); $('caughtUnmarkAll')?.addEventListener('click',caughtUnmarkAll); $('caughtUndo')?.addEventListener('click',caughtUndo);
  $('clearSearch').addEventListener('click',()=>{$('searchInput').value='';renderHomeSearch();$('searchInput').focus();});
  $('clearGenerationSearch').addEventListener('click',()=>{$('generationSearch').value='';renderGeneration();$('generationSearch').focus();});
  $('backupDialog').addEventListener('click',e=>{if(e.target===$('backupDialog'))$('backupDialog').close();});

  // Estado inicial: catálogo embebido; no hay solicitudes de red ni fetch.
  renderHomeStats(); renderGenerationCards(); renderReminder(); renderHomeSearch(); renderCaughtCollection();
  renderBankCountdown(); window.setInterval(renderBankCountdown,1000);
})();
