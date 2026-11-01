#!/usr/bin/env python3
"""Convierte JSON crudos de Pelagix a una capa local independiente.
Uso: python3 convertir_pelagix.py [carpeta_cruda] [salida.js]
Solo biblioteca estándar. Conserva la fila original completa en `original`.
"""
import json, sys
from pathlib import Path

GAMES = {26:'x',27:'y',28:'omega-ruby',29:'alpha-sapphire',30:'sun',31:'moon',32:'ultra-sun',33:'ultra-moon'}
ROOT = Path(sys.argv[1]) if len(sys.argv)>1 else Path('datos_pelagix_crudo')
OUT = Path(sys.argv[2]) if len(sys.argv)>2 else Path('obtencion_importada.js')

def get_rows(doc):
    """Devuelve filas con identificador de forma; admite el formato observado forms[].rows."""
    result=[]
    forms=doc.get('forms')
    if isinstance(forms, dict):
        for form_id, form in forms.items():
            if isinstance(form, dict):
                rows=form.get('rows', [])
                if isinstance(rows,list): result.extend((str(form_id),r) for r in rows if isinstance(r,dict))
    # Algunos archivos pueden incluir rows en raíz; no duplicar si forms ya contiene esa misma lista.
    rows=doc.get('rows', [])
    if isinstance(rows,list): result.extend(('0',r) for r in rows if isinstance(r,dict))
    return result

def main():
    records=[]; counts={gid:{'with':set(),'without':set(),'rows':0} for gid in GAMES.values()}
    for number in range(1,808):
        path=ROOT/f'{number}.json'
        if not path.exists(): continue
        try: doc=json.loads(path.read_text(encoding='utf-8'))
        except Exception as exc: raise SystemExit(f'JSON inválido {path}: {exc}')
        grouped={gid:[] for gid in GAMES.values()}
        for form_id,row in get_rows(doc):
            games=row.get('g',[])
            if not isinstance(games,list): games=[games]
            for g in games:
                if g not in GAMES: continue
                gid=GAMES[g]; incomplete=[]
                if row.get('l') is None: incomplete.append('lugar')
                if row.get('c') is None: incomplete.append('condicion')
                item={'forma':form_id,'tipoFila':row.get('k'),'nivel':row.get('lv'),'metodo':row.get('m'),
                      'lugarIndice':row.get('l'),'lugar':(doc.get('strings',[])[row['l']] if isinstance(row.get('l'),int) and isinstance(doc.get('strings'),list) and 0<=row['l']<len(doc['strings']) else None),
                      'condiciones':row.get('c'),'nota':row.get('n'),'metadatos':{k:v for k,v in row.items() if k not in {'g','k','lv','m','l','c','n'}},
                      'incompleto':incomplete,'eventoAntecedente':row.get('k') in ('event','dream'),'original':row}
                grouped[gid].append(item); counts[gid]['rows']+=1
        for gid,rows in grouped.items():
            if rows: counts[gid]['with'].add(number)
        if any(grouped.values()): records.append({'numero':number,'juegos':{k:v for k,v in grouped.items() if v}})
    summary={gid:{'especiesConFilas':len(c['with']),'especiesSinFilas':807-len(c['with']),'filas':c['rows']} for gid,c in counts.items()}
    payload={'version':'1.0','etiqueta':'Datos importados, por verificar','fuente':'HydrosPlays/Pelagix (datos derivados de PKHeX; GPL-3.0)','juegos':list(GAMES.values()),'resumen':summary,'registros':records}
    OUT.write_text('window.POKEDEX_OBTENCION_IMPORTADA = '+json.dumps(payload,ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf-8')
    print(json.dumps(summary,ensure_ascii=False,indent=2))
    print(f'Archivo generado: {OUT} | Pokémon con alguna fila: {len(records)}')
if __name__=='__main__': main()
