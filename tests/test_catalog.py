import json, re, unittest
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
source=(ROOT/'catalog.js').read_text(encoding='utf-8')
raw=re.search(r'const CATALOGO = (.*);\s*$',source,re.S).group(1)
CATALOGO=json.loads(raw)

class CatalogoTests(unittest.TestCase):
    def test_total_825(self): self.assertEqual(len(CATALOGO),825)
    def test_ids_unique(self):
        ids=[x['id'] for x in CATALOGO]
        self.assertEqual(len(ids),len(set(ids)))
    def test_generation_counts(self):
        expected={1:151,2:100,3:135,4:107,5:156,6:72,7:104}
        actual={g:sum(x['generacion']==g for x in CATALOGO) for g in expected}
        self.assertEqual(actual,expected)
    def test_807_species_and_18_regional(self):
        self.assertEqual(sum(not x['regional'] for x in CATALOGO),807)
        self.assertEqual(sum(x['regional'] for x in CATALOGO),18)
    def test_regional_ids_and_generation(self):
        regional=[x for x in CATALOGO if x['regional']]
        self.assertTrue(all(x['id'].endswith('-alola') and x['generacion']==7 for x in regional))
        self.assertEqual([x['numero'] for x in regional],[19,20,26,27,28,37,38,50,51,52,53,74,75,76,88,89,103,105])
    def test_order_species_then_regional_forms(self):
        keys=[(x['generacion'],x['regional'],x['numero']) for x in CATALOGO]
        self.assertEqual(keys,sorted(keys))
        gen7=[x for x in CATALOGO if x['generacion']==7]
        first_regional=next(i for i,x in enumerate(gen7) if x['regional'])
        self.assertEqual(first_regional,86)

if __name__=='__main__': unittest.main(verbosity=2)
