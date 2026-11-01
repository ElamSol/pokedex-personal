# Descargador de datos de obtencion (Pelagix / PKHeX) para la Pokedex personal.
# Windows PowerShell 5.1 o superior. Necesita Internet SOLO para esta descarga.
# Modo prueba:  -Prueba  (5 casos, no genera el archivo final)
param([switch]$Prueba)
$ErrorActionPreference = 'Stop'
try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 } catch {}

$BaseUrl = 'https://raw.githubusercontent.com/HydrosPlays/Pelagix/main/src/renderer/public/data'
$Raiz    = $PSScriptRoot
$Crudo   = Join-Path $Raiz 'datos_pelagix_crudo'
$Utf8    = New-Object System.Text.UTF8Encoding($false)
if (-not (Test-Path $Crudo)) { New-Item -ItemType Directory -Path $Crudo | Out-Null }

function Detener([string]$msg) {
    Write-Host ''
    Write-Host 'SE DETUVO EL PROCESO' -ForegroundColor Red
    Write-Host $msg -ForegroundColor Yellow
    Write-Host 'No se invento ningun dato. Copia este mensaje y pegaselo a Claude.'
    Read-Host 'Presiona ENTER para cerrar'
    exit 1
}

function Descargar([string]$url, [string]$destino) {
    if ((Test-Path $destino) -and ((Get-Item $destino).Length -gt 0)) { return 'cache' }
    for ($i = 1; $i -le 3; $i++) {
        try {
            $wc = New-Object System.Net.WebClient
            $bytes = $wc.DownloadData($url)
            [IO.File]::WriteAllBytes($destino, $bytes)
            Start-Sleep -Milliseconds 150
            return 'ok'
        } catch {
            if ($i -eq 3) { return ('error: ' + $_.Exception.Message) }
            Start-Sleep -Seconds (2 * $i)
        }
    }
}

function LeerJson([string]$ruta) {
    $t = [IO.File]::ReadAllText($ruta, $Utf8)
    return ($t | ConvertFrom-Json)
}

# ---------- Paso 1: indice general (dex.json) ----------
Write-Host ''
Write-Host 'DESCARGADOR DE DATOS IMPORTADOS - POKEDEX PERSONAL' -ForegroundColor Cyan
if ($Prueba) { Write-Host 'MODO PRUEBA: solo 5 casos.' -ForegroundColor Yellow }
Write-Host 'Descargando indice general (dex.json)...'
$r = Descargar "$BaseUrl/dex.json" (Join-Path $Crudo 'dex.json')
if ($r -like 'error*') { Detener "No pude descargar dex.json. $r" }
try { $dex = LeerJson (Join-Path $Crudo 'dex.json') } catch { Detener "dex.json no es un JSON valido. $($_.Exception.Message)" }
if ($null -eq $dex.games -or $null -eq $dex.species) { Detener 'dex.json no tiene "games" o "species". El formato cambio.' }
$listaJuegos = @($dex.games)
if ($listaJuegos.Count -lt 34) { Detener "dex.json trae solo $($listaJuegos.Count) juegos; se esperaban al menos 34." }

# ---------- Paso 2: comprobar que los indices 26..33 son los 8 juegos ----------
$esperado = @('x','y','omegaruby','alphasapphire','sun','moon','ultrasun','ultramoon')
$idsApp   = @('x','y','omega-ruby','alpha-sapphire','sun','moon','ultra-sun','ultra-moon')
$mapa = @{}
for ($k = 0; $k -lt 8; $k++) {
    $idx  = 26 + $k
    $raw  = [string]$listaJuegos[$idx]
    $norm = (($raw.ToLower()) -replace '[^a-z]', '') -replace '^(pokemon|pokmon)', ''
    if ($norm -ne $esperado[$k]) {
        $volcado = ($listaJuegos | ForEach-Object -Begin { $n = 0 } -Process { "$n = $_"; $n++ }) -join '; '
        Detener "El indice $idx deberia ser '$($esperado[$k])' pero el archivo dice '$raw'. Lista completa: $volcado"
    }
    $mapa[$idx] = $idsApp[$k]
}
Write-Host 'Juegos verificados (indices 26 a 33): X, Y, Rubi Omega, Zafiro Alfa, Sol, Luna, Ultrasol, Ultraluna.' -ForegroundColor Green

# ---------- Paso 3: lista de objetivos (825 = 807 base + 18 Alola) ----------
$objetivos = @()
$nBase = 0; $nAlola = 0
foreach ($s in @($dex.species)) {
    if ([int]$s.id -gt 807) { continue }
    foreach ($fm in @($s.forms)) {
        if ($fm.cat -eq 'base') {
            $objetivos += , @{ clave = [string]$s.id; id = [int]$s.id; forma = [int]$fm.f }
            $nBase++
        } elseif ($fm.cat -eq 'regional' -and $fm.region -eq 'alola') {
            $objetivos += , @{ clave = ([string]$s.id + '-alola'); id = [int]$s.id; forma = [int]$fm.f }
            $nAlola++
        }
    }
}
if ($nBase -ne 807 -or $nAlola -ne 18) { Detener "Se esperaban 807 formas base y 18 de Alola; encontre $nBase y $nAlola." }

if ($Prueba) {
    $claves = @('1', '25', '150', '722', '26-alola')
    $objetivos = @($objetivos | Where-Object { $claves -contains $_.clave })
}

# ---------- Conversion de una forma ----------
function ConvertirForma($sp, [int]$forma, [hashtable]$mapaJ) {
    $prop = $sp.forms.PSObject.Properties[[string]$forma]
    if ($null -eq $prop) { throw "no existe la forma $forma en el archivo" }
    $fd = $prop.Value
    $filas = New-Object System.Collections.ArrayList
    $textos = @()
    if ($null -ne $sp.strings) { $textos = @($sp.strings) }
    if ($null -ne $fd.rows) {
        foreach ($row in $fd.rows) {
            if ($null -eq $row.g -or $null -eq $row.k) { throw 'una fila no tiene g o k' }
            $js = @()
            foreach ($gi in $row.g) { if ($mapaJ.ContainsKey([int]$gi)) { $js += $mapaJ[[int]$gi] } }
            if ($js.Count -eq 0) { continue }
            $o = [ordered]@{ juegos = [string[]]$js; tipo = [string]$row.k }
            if ($null -ne $row.m) { $o['metodo'] = [string]$row.m }
            if ($null -ne $row.l) {
                $li = [int]$row.l
                if ($li -lt 0 -or $li -ge $textos.Count) { throw "indice de lugar $li fuera de rango" }
                $o['lugar'] = [string]$textos[$li]
            }
            $lv = @($row.lv)
            if ($lv.Count -eq 2 -and -not ([int]$lv[0] -eq 0 -and [int]$lv[1] -eq 0)) { $o['nivel'] = @([int]$lv[0], [int]$lv[1]) }
            if ($null -ne $row.c) { $o['condiciones'] = [string[]]@($row.c | ForEach-Object { [string]$_ }) }
            if ($null -ne $row.s) { $o['shiny'] = [string]$row.s }
            if ($null -ne $row.n) { $o['nota'] = [string]$row.n }
            if ($null -ne $row.via) { $o['via'] = [string]$row.via }
            if ($null -ne $row.x) {
                $ev = [ordered]@{}
                if ($null -ne $row.x.ot)   { $ev['ot'] = [string]$row.x.ot }
                if ($null -ne $row.x.from) { $ev['desde'] = [string]$row.x.from }
                if ($null -ne $row.x.to)   { $ev['hasta'] = [string]$row.x.to }
                if ($null -ne $row.x.id)   { $ev['id'] = [int]$row.x.id }
                $o['evento'] = $ev
            }
            [void]$filas.Add($o)
        }
    }
    $evo = New-Object System.Collections.ArrayList
    if ($null -ne $fd.evolve) {
        foreach ($e in $fd.evolve) {
            $jj = @()
            foreach ($gi in $e.g) { if ($mapaJ.ContainsKey([int]$gi)) { $jj += $mapaJ[[int]$gi] } }
            if ($jj.Count -gt 0) {
                $from = @($e.from)
                if ($from.Count -ne 2) { throw 'una evolucion no tiene origen [especie, forma]' }
                [void]$evo.Add([ordered]@{ desde = @([int]$from[0], [int]$from[1]); como = [string]$e.how; juegos = [string[]]$jj })
            }
        }
    }
    $cria = @()
    if ($null -ne $fd.breed) {
        foreach ($gi in $fd.breed) { if ($mapaJ.ContainsKey([int]$gi)) { $cria += $mapaJ[[int]$gi] } }
    }
    return [ordered]@{ filas = $filas.ToArray(); evoluciona = $evo.ToArray(); cria = [string[]]$cria }
}

# ---------- Paso 4: descargar y convertir ----------
$especies = [ordered]@{}
$errores = New-Object System.Collections.ArrayList
$nDescargados = 0; $nCache = 0
$total = $objetivos.Count
$hecho = 0
$spId = -1; $sp = $null
foreach ($t in $objetivos) {
    $hecho++
    if ($t.id -ne $spId) {
        $destino = Join-Path $Crudo ("species_" + $t.id + ".json")
        $res = Descargar "$BaseUrl/species/$($t.id).json" $destino
        if ($res -like 'error*') {
            [void]$errores.Add("Especie $($t.id): $res")
            $spId = -1; $sp = $null
            continue
        }
        if ($res -eq 'ok') { $nDescargados++ } else { $nCache++ }
        try { $sp = LeerJson $destino } catch { Detener "El archivo de la especie $($t.id) no es JSON valido. $($_.Exception.Message)" }
        $spId = $t.id
        if ($null -eq $sp.forms -or $null -eq $sp.PSObject.Properties['strings']) { Detener "La especie $($t.id) no tiene 'forms' o 'strings'. El formato cambio." }
    }
    if ($null -eq $sp) { continue }
    try { $especies[$t.clave] = ConvertirForma $sp $t.forma $mapa }
    catch { Detener "Formato inesperado en $($t.clave): $($_.Exception.Message)" }
    if (-not $Prueba -and (($hecho % 25) -eq 0 -or $hecho -eq $total)) { Write-Host "Procesados $hecho de $total" }
}

# ---------- Resumen por juego ----------
$nombresJuego = [ordered]@{ 'x' = 'Pokemon X'; 'y' = 'Pokemon Y'; 'omega-ruby' = 'Rubi Omega'; 'alpha-sapphire' = 'Zafiro Alfa'; 'sun' = 'Sol'; 'moon' = 'Luna'; 'ultra-sun' = 'Ultrasol'; 'ultra-moon' = 'Ultraluna' }
$lineas = New-Object System.Collections.ArrayList
function Dec([string]$txt) { Write-Host $txt; [void]$lineas.Add($txt) }

if ($Prueba) {
    Dec ''
    Dec 'RESULTADO DE LA PRUEBA (revisa que tenga sentido antes de la descarga completa)'
    foreach ($t in $objetivos) {
        if (-not $especies.Contains($t.clave)) { Dec "== $($t.clave): NO SE PUDO DESCARGAR"; continue }
        $d = $especies[$t.clave]
        Dec ''
        Dec "== Entrada $($t.clave) =="
        foreach ($g in $nombresJuego.Keys) {
            $propias = @($d.filas | Where-Object { $_.juegos -contains $g })
            Dec "  [$($nombresJuego[$g])] $($propias.Count) fila(s)"
            foreach ($f in $propias) {
                $partes = @($f.tipo)
                if ($f.metodo) { $partes += $f.metodo }
                if ($f.lugar) { $partes += $f.lugar } else { $partes += 'dato incompleto (sin lugar)' }
                if ($f.nivel) { $partes += ('Nv ' + $f.nivel[0] + '-' + $f.nivel[1]) }
                if ($f.condiciones) { $partes += ('cond: ' + ($f.condiciones -join ', ')) }
                if ($f.nota) { $partes += ('nota: ' + $f.nota) }
                Dec ('     - ' + ($partes -join ' | '))
            }
            foreach ($e in @($d.evoluciona | Where-Object { $_.juegos -contains $g })) { Dec ('     - evoluciona desde #' + $e.desde[0] + ' forma ' + $e.desde[1] + ': ' + $e.como) }
            if ($d.cria -contains $g) { Dec '     - se puede obtener por huevo en este juego (puede requerir un padre transferido)' }
        }
    }
    [IO.File]::WriteAllLines((Join-Path $Raiz 'resultado_prueba.txt'), [string[]]$lineas, $Utf8)
    Write-Host ''
    Write-Host 'Tambien quedo guardado en resultado_prueba.txt. Pegaselo a Claude para revisarlo.' -ForegroundColor Green
    if ($errores.Count -gt 0) { Write-Host ('Errores de descarga: ' + ($errores -join ' / ')) -ForegroundColor Yellow }
    Read-Host 'Presiona ENTER para cerrar'
    exit 0
}

$cuenta = @{}
foreach ($g in $nombresJuego.Keys) { $cuenta[$g] = 0 }
$sinNada = 0
foreach ($clave in $especies.Keys) {
    $hay = $false
    foreach ($g in $nombresJuego.Keys) {
        if (@($especies[$clave].filas | Where-Object { $_.juegos -contains $g }).Count -gt 0) { $cuenta[$g]++; $hay = $true }
    }
    if (-not $hay) { $sinNada++ }
}

# ---------- Adaptar al formato que ya lee la app (window.POKEDEX_OBTENCION_IMPORTADA) ----------
$nombreDe = @{}
foreach ($s in @($dex.species)) { $nombreDe[[int]$s.id] = [string]$s.name }
$tiposEs = @{ 'wild' = 'Salvaje'; 'static' = 'Encuentro fijo'; 'gift' = 'Regalo'; 'egg' = 'Huevo regalo'; 'trade' = 'Intercambio en el juego'; 'event' = 'Evento / distribucion'; 'dream' = 'Dream World / Dream Radar' }
$porNumero = [ordered]@{}
foreach ($t in $objetivos) {
    if (-not $especies.Contains($t.clave)) { continue }
    $forma = 0
    if ($t.clave -like '*-alola') {
        if ($t.forma -ne 1) { Detener "La forma de Alola de $($t.clave) no es la 1 (es $($t.forma)); la app espera la 1." }
        $forma = 1
    }
    $d = $especies[$t.clave]
    $kn = [string]$t.id
    if (-not $porNumero.Contains($kn)) { $porNumero[$kn] = [ordered]@{} }
    $juegosReg = $porNumero[$kn]
    foreach ($g in $nombresJuego.Keys) {
        if (-not $juegosReg.Contains($g)) { $juegosReg[$g] = New-Object System.Collections.ArrayList }
        $lista = $juegosReg[$g]
        $grupos = [ordered]@{}
        foreach ($f in @($d.filas | Where-Object { $_.juegos -contains $g })) {
            $k2 = (@($f.tipo, $f.metodo, $f.lugar, ($f.nivel -join '-'), ($f.condiciones -join ','), $f.nota, $f.shiny, $f.via, $f.evento.ot, $f.evento.desde, $f.evento.hasta) | ForEach-Object { [string]$_ }) -join '|'
            if ($grupos.Contains($k2)) { $grupos[$k2].n = $grupos[$k2].n + 1 } else { $grupos[$k2] = @{ f = $f; n = 1 } }
        }
        foreach ($gr in $grupos.Values) {
            $f = $gr.f
            $row = [ordered]@{ forma = $forma }
            $tipoEs = $tiposEs[[string]$f.tipo]
            if (-not $tipoEs) { $tipoEs = [string]$f.tipo }
            $row['tipoFila'] = $tipoEs
            if ($f.metodo) { $row['metodo'] = [string]$f.metodo }
            if ($f.lugar) { $row['lugar'] = [string]$f.lugar } else { $row['incompleto'] = @('lugar') }
            if ($f.nivel) {
                if ($f.nivel[0] -eq $f.nivel[1]) { $row['nivel'] = [string]$f.nivel[0] }
                else { $row['nivel'] = ([string]$f.nivel[0] + '-' + [string]$f.nivel[1]) }
            }
            if ($f.condiciones) { $row['condiciones'] = [string[]]@($f.condiciones) }
            $notas = @()
            if ($f.nota) { $notas += [string]$f.nota }
            if ($f.shiny) { $notas += ('Shiny: ' + $f.shiny) }
            if ($f.via) { $notas += ('Via: ' + $f.via) }
            if ($f.evento) {
                if ($f.evento.ot) { $notas += ('OT: ' + $f.evento.ot) }
                if ($f.evento.desde -and $f.evento.hasta) { $notas += ('Fechas de la fuente: ' + $f.evento.desde + ' a ' + $f.evento.hasta) }
                elseif ($f.evento.desde) { $notas += ('Fecha de la fuente: desde ' + $f.evento.desde + ' (sin fecha de fin; no significa que siga activo)') }
            }
            if ($gr.n -gt 1) { $notas += ('x' + $gr.n + ' filas iguales') }
            if ($notas.Count -gt 0) { $row['nota'] = ($notas -join ' | ') }
            if ($f.tipo -eq 'event' -or $f.tipo -eq 'dream') { $row['eventoAntecedente'] = $true }
            [void]$lista.Add($row)
        }
        foreach ($e in @($d.evoluciona | Where-Object { $_.juegos -contains $g })) {
            $n0 = [int]$e.desde[0]
            $orig = [string]$nombreDe[$n0]
            if (-not $orig) { $orig = '#' + $n0 }
            $lugarEvo = 'Desde ' + $orig + ' (#' + $n0 + ')'
            if ([int]$e.desde[1] -ne 0) { $lugarEvo += ', forma ' + $e.desde[1] }
            [void]$lista.Add([ordered]@{ forma = $forma; tipoFila = 'Evolucion'; metodo = [string]$e.como; lugar = $lugarEvo })
        }
        if ($d.cria -contains $g) {
            [void]$lista.Add([ordered]@{ forma = $forma; tipoFila = 'Cria'; metodo = 'Huevo'; lugar = 'No aplica'; nota = 'Puede requerir un padre transferido (segun la fuente).' })
        }
    }
}
$registros = New-Object System.Collections.ArrayList
foreach ($num in $porNumero.Keys) {
    $jr = [ordered]@{}
    foreach ($g in $porNumero[$num].Keys) {
        $arr = $porNumero[$num][$g]
        if ($arr.Count -gt 0) { $jr[$g] = $arr.ToArray() }
    }
    [void]$registros.Add([ordered]@{ numero = [int]$num; juegos = $jr })
}

$payload = [ordered]@{
    version   = 1
    generado  = (Get-Date).ToString('o')
    fuente    = 'https://github.com/HydrosPlays/Pelagix'
    pkhex     = [string]$dex.meta.pkhexVersion
    licencia  = 'GPL-3.0. Datos derivados de PKHeX via Pelagix. Datos importados, por verificar. No publicar sin revisar la atribucion.'
    aviso     = 'Que un Pokemon no tenga filas NO significa que sea imposible conseguirlo. Los eventos son antecedente: no confirman disponibilidad actual.'
    errores   = $errores.ToArray()
    registros = $registros.ToArray()
}
Write-Host 'Generando obtencion_importada.js (puede tardar un par de minutos)...'
$json = $payload | ConvertTo-Json -Depth 20 -Compress
$salida = Join-Path $Raiz 'obtencion_importada.js'
[IO.File]::WriteAllText($salida, ('window.POKEDEX_OBTENCION_IMPORTADA = ' + $json + ';' + "`n"), $Utf8)

Write-Host ''
Write-Host 'LISTO' -ForegroundColor Green
Write-Host "Entradas procesadas: $($especies.Count) de $total  (descargadas ahora: $nDescargados, ya existian: $nCache)"
Write-Host "Fallos de descarga: $($errores.Count)"
foreach ($g in $nombresJuego.Keys) { Write-Host ("  {0,-12} entradas con al menos una fila: {1}" -f $nombresJuego[$g], $cuenta[$g]) }
Write-Host "Entradas sin ninguna fila en los 8 juegos: $sinNada (no significa que sea imposible conseguirlas)"
if ($errores.Count -gt 0) {
    Write-Host 'INCOMPLETO: vuelve a ejecutar este archivo; solo descargara lo que falto.' -ForegroundColor Yellow
    $errores | ForEach-Object { Write-Host "  $_" }
}
Write-Host "Archivo: $salida"
Read-Host 'Presiona ENTER para cerrar'
