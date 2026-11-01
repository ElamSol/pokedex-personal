const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
class FakeClassList { constructor(){this.s=new Set();} add(x){this.s.add(x)} remove(x){this.s.delete(x)} contains(x){return this.s.has(x)} }
class FakeElement {
  constructor(tag='div'){this.tagName=tag;this.children=[];this.listeners={};this.classList=new FakeClassList();this.style={setProperty(){}};this.value='';this.textContent='';this.attributes={};this.disabled=false;this.files=[];this.className='';}
  addEventListener(type,fn){(this.listeners[type]??=[]).push(fn)}
  dispatch(type){for(const fn of this.listeners[type]||[])fn({target:this,preventDefault(){}})}
  append(...els){this.children.push(...els)}
  appendChild(el){this.children.push(el);return el}
  replaceChildren(...els){this.children=[...els]}
  setAttribute(k,v){this.attributes[k]=v}
  querySelector(){return this.children.find(x=>x.className==='sprite-fallback')||null}
  click(){this.dispatch('click')}
  focus(){}
  showModal(){}
  close(){}
  remove(){}
  get childElementCount(){return this.children.length}
}
(async()=>{
  const elements=new Map();
  const document={getElementById(id){if(!elements.has(id))elements.set(id,new FakeElement());return elements.get(id)},createElement(tag){return new FakeElement(tag)},body:new FakeElement('body')};
  const store=new Map();
  const localStorage={getItem:k=>store.has(k)?store.get(k):null,setItem:(k,v)=>store.set(k,String(v)),removeItem:k=>store.delete(k)};
  const window={setTimeout,setInterval(){return 0},scrollTo(){}};
  let confirmCount=0;
  const context={document,window,localStorage,console,URL:{createObjectURL(){return 'blob:test'},revokeObjectURL(){}},Blob:class{},confirm:()=>{confirmCount++;return true},setTimeout,clearTimeout,Date,JSON,Set,Map,Math,String,Object,Array,Number,RegExp,Error,Promise};
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(__dirname+'/../catalog.js','utf8'),context);
  vm.runInContext(fs.readFileSync(__dirname+'/../app.js','utf8'),context);
  assert.equal(document.getElementById('generationGrid').children.length,7,'home renders seven generations');
  document.getElementById('generationGrid').children[0].click();
  assert.equal(document.getElementById('pokemonGrid').children.length,151,'Kanto opens with 151 entries');
  document.getElementById('pokemonGrid').children[0].children[0].click();
  assert.equal(document.getElementById('generationCount').textContent,'1/151','marking updates generation counter');
  assert.equal(document.getElementById('caughtTotal').textContent,1,'marking updates global counter');
  document.getElementById('generationFilter').value='conseguidos'; document.getElementById('generationFilter').dispatch('change');
  assert.equal(document.getElementById('pokemonGrid').children.length,1,'caught filter shows only caught');
  document.getElementById('undoBtn').click();
  assert.equal(document.getElementById('generationCount').textContent,'0/151','undo restores previous state');
  document.getElementById('backHome').click();
  document.getElementById('searchInput').value='19'; document.getElementById('searchInput').dispatch('input');
  assert.equal(document.getElementById('homeSearchResults').children.length,2,'national number search shows species and Alola form');
  document.getElementById('searchInput').value='flabebe'; document.getElementById('searchInput').dispatch('input');
  assert.equal(document.getElementById('homeSearchResults').children.length,1,'accent-insensitive name search works');
  document.getElementById('searchInput').value='19'; document.getElementById('searchInput').dispatch('input');
  document.getElementById('homeSearchResults').children[0].children[0].click();
  document.getElementById('homeFilter').value='conseguidos'; document.getElementById('homeFilter').dispatch('change');
  assert.equal(document.getElementById('homeSearchResults').children.length,1,'home filter combines with search');
  document.getElementById('backupBtn').click();
  const importInput=document.getElementById('importFile');
  importInput.files=[{text:async()=>'{"versionFormato":1,"versionCatalogo":"825-v1.1","fechaModificacion":"2026-10-30T00:00:00.000Z","progreso":{"25":{"conseguido":true},"25":{"conseguido":true}}}'}];
  await importInput.listeners.change[0]({target:importInput});
  assert.match(document.getElementById('backupMessage').textContent,/repetidos/,'duplicate IDs are rejected');
  assert.equal(document.getElementById('caughtTotal').textContent,1,'invalid import does not alter progress');
  importInput.files=[{text:async()=>JSON.stringify({versionFormato:1,versionCatalogo:'825-v1.1',fechaModificacion:'2026-10-29T00:00:00.000Z',progreso:{'26':{conseguido:true}}})}];
  await importInput.listeners.change[0]({target:importInput});
  assert.equal(document.getElementById('importPanel').classList.contains('hidden'),false,'valid import presents mode choices');
  document.getElementById('replaceBtn').click();
  assert.equal(document.getElementById('caughtTotal').textContent,1,'replace import applies validated progress');
  assert.equal(Object.keys(JSON.parse(store.get('pokedexPersonal.progreso.v2'))).join(','),'26','replace import replaces old IDs');
  importInput.files=[{text:async()=>JSON.stringify({versionFormato:1,versionCatalogo:'825-v1.1',fechaModificacion:'2026-10-30T00:00:00.000Z',progreso:{'27':{conseguido:true}}})}];
  await importInput.listeners.change[0]({target:importInput});
  document.getElementById('mergeBtn').click();
  assert.deepEqual(Object.keys(JSON.parse(store.get('pokedexPersonal.progreso.v2'))).sort(),['26','27'],'merge import preserves both progress records');
  document.getElementById('backupDialog').close();
  document.getElementById('generationGrid').children[0].click();
  document.getElementById('bulkBtn').click();
  assert.equal(document.getElementById('generationCount').textContent,'151/151','bulk action marks full generation');
  document.getElementById('undoBtn').click();
  assert.equal(document.getElementById('generationCount').textContent,'2/151','undo reverts bulk action and restores pre-existing marks');
  document.getElementById('backupBtn').click();
  const beforeResetConfirms=confirmCount;
  document.getElementById('resetBtn').click();
  assert.equal(confirmCount-beforeResetConfirms,2,'reset requires two confirmations');
  assert.equal(document.getElementById('caughtTotal').textContent,0,'reset clears all progress');
  // AT-03 / AT-04: formato v2, migración v1 y combinación
  importInput.files=[{text:async()=>JSON.stringify({versionFormato:1,versionCatalogo:'825-v1.1',fechaModificacion:'2026-10-30T00:00:00.000Z',progreso:{'25':{conseguido:true,fechaCaptura:'2026-10-30T10:00:00.000Z'}}})}];
  await importInput.listeners.change[0]({target:importInput}); document.getElementById('replaceBtn').click();
  let st=JSON.parse(store.get('pokedexPersonal.progreso.v2'));
  assert.equal(st['25'].enHome,false,'migración v1 a v2 añade enHome'); assert.equal(st['25'].conseguidoEn,'2026-10-30T10:00:00.000Z','migración v1 conserva la fecha');
  importInput.files=[{text:async()=>JSON.stringify({formato:2,catalogo:'825-gen1-7-alola',modificado:'2026-11-02T00:00:00.000Z',entradas:{'19-alola':{conseguido:true,conseguidoEn:'2026-11-01T10:00:00.000Z',enHome:true}}})}];
  await importInput.listeners.change[0]({target:importInput}); document.getElementById('mergeBtn').click();
  st=JSON.parse(store.get('pokedexPersonal.progreso.v2'));
  assert.ok(st['25'] && st['19-alola'].enHome===true,'combinar conserva lo existente y añade lo importado');
  importInput.files=[{text:async()=>JSON.stringify({formato:3,catalogo:'x',modificado:'2026-11-02T00:00:00.000Z',entradas:{}})}];
  await importInput.listeners.change[0]({target:importInput});
  assert.match(document.getElementById('backupMessage').textContent,/más nuevo/,'formato futuro rechazado');
  console.log('OK: navegación, 7 generaciones, cuadrícula Kanto, marcado, contadores, filtros, deshacer simple y masivo, búsqueda numérica y sin acentos, importación duplicada rechazada, reemplazo, combinación y reinicio con doble confirmación.');
})().catch(error=>{console.error(error);process.exit(1)});
