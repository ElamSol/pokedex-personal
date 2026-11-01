#!/usr/bin/env python3
"""Auditoría local de la base de métodos; no consulta Internet ni inventa datos."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / 'obtencion.js'
EXPECTED_GAMES = {'ultra-sun','ultra-moon','sun','moon','x','y','omega-ruby','alpha-sapphire'}
EXPECTED_COUNT = 825

raw = SOURCE.read_text(encoding='utf-8')
match = re.search(r'window\.POKEDEX_OBTENCION\s*=\s*(\{.*\})\s*;?\s*$', raw, re.S)
if not match:
    raise SystemExit('ERROR: no se encontró el objeto window.POKEDEX_OBTENCION.')
data = json.loads(match.group(1))
records = data.get('registros', [])
errors, warnings = [], []
if len(records) != EXPECTED_COUNT:
    errors.append(f'Catálogo: se esperaban {EXPECTED_COUNT}, hay {len(records)}.')
nums = [r.get('numero') for r in records]
base = [n for n in nums if n <= 807]
if set(base) != set(range(1, 808)):
    errors.append('La Pokédex base no cubre 1–807 exactamente.')
alola = [r for r in records if 'alola' in r.get('nombre','').lower()]
if len(alola) != 18:
    errors.append(f'Se esperaban 18 formas de Alola identificadas; hay {len(alola)}.')
keys = [(r.get('numero'), r.get('nombre')) for r in records]
if len(set(keys)) != len(keys): errors.append('Hay entradas duplicadas por número y nombre.')
if {g.get('id') for g in data.get('juegos', [])} != EXPECTED_GAMES:
    errors.append('Los identificadores de juegos no coinciden con los 8 acordados.')
allowed = set(data.get('estados', []))
coverage = {g: {'con_datos':0,'pendientes':0,'metodos':0} for g in EXPECTED_GAMES}
for r in records:
    for game in EXPECTED_GAMES:
        cell = r.get('juegos', {}).get(game)
        if not isinstance(cell, dict):
            errors.append(f"#{r.get('numero')}: falta juego {game}"); continue
        state = cell.get('estado')
        methods = cell.get('metodos')
        if state not in allowed: errors.append(f"#{r.get('numero')} {game}: estado inválido {state!r}")
        if not isinstance(methods, list): errors.append(f"#{r.get('numero')} {game}: metodos no es lista"); continue
        if state == 'pendiente_revision': coverage[game]['pendientes'] += 1
        else: coverage[game]['con_datos'] += 1
        coverage[game]['metodos'] += len(methods)
        if state != 'pendiente_revision' and not methods:
            warnings.append(f"#{r.get('numero')} {game}: estado no pendiente sin método.")
        for m in methods:
            if not all(isinstance(m.get(k), str) and m[k].strip() for k in ('tipo','lugar','detalle')):
                errors.append(f"#{r.get('numero')} {game}: método incompleto.")
            if not m.get('fuente'):
                warnings.append(f"#{r.get('numero')} {game}: método sin fuente individual.")
print(f"Registros: {len(records)} | cruces: {len(records)*len(EXPECTED_GAMES)}")
for g,v in coverage.items(): print(f"{g:15} documentados={v['con_datos']:3} pendientes={v['pendientes']:3} métodos={v['metodos']:3}")
print(f"Errores estructurales: {len(errors)} | advertencias de trazabilidad: {len(warnings)}")
for e in errors[:30]: print('ERROR:', e)
for w in warnings[:20]: print('AVISO:', w)
if errors: sys.exit(1)
