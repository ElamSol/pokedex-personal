# Crea playlist.js leyendo todas las pistas de la carpeta "musica" (y sus subcarpetas).
# No necesita Internet. Vuelve a ejecutarlo cada vez que agregues o quites musica.
$ErrorActionPreference = 'Stop'
$Raiz   = $PSScriptRoot
$Musica = Join-Path $Raiz 'musica'
$Utf8   = New-Object System.Text.UTF8Encoding($false)

if (-not (Test-Path -LiteralPath $Musica)) {
    New-Item -ItemType Directory -Path $Musica | Out-Null
    Write-Host 'Cree la carpeta "musica". Copia ahi tus archivos (puedes usar subcarpetas, por ejemplo una por juego) y vuelve a ejecutar este archivo.' -ForegroundColor Yellow
    Read-Host 'Presiona ENTER para cerrar'
    exit 0
}

$extensiones = @('.mp3', '.m4a', '.ogg', '.wav', '.flac', '.opus', '.aac')
$archivos = @(Get-ChildItem -LiteralPath $Musica -Recurse -File | Where-Object { $extensiones -contains $_.Extension.ToLower() })
if ($archivos.Count -eq 0) {
    Write-Host 'No encontre pistas dentro de la carpeta "musica". Revisa que los archivos esten ahi.' -ForegroundColor Yellow
    Read-Host 'Presiona ENTER para cerrar'
    exit 0
}

function RutaRelativa($f) { return ($f.FullName.Substring($Musica.Length).TrimStart('\', '/') -replace '\\', '/') }
$evaluador = [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $m.Value.PadLeft(8, '0') }
$ordenados = $archivos | Sort-Object { [regex]::Replace((RutaRelativa $_).ToLower(), '\d+', $evaluador) }

function LimpiarNombre([string]$archivo) {
    $t = [IO.Path]::GetFileNameWithoutExtension($archivo)
    $t = $t -replace '[\u200e\u200f\u202a-\u202e]', ''
    $t = $t -replace '^\s*\d+\s*[-.]\s*\d+\s*[.\-_)\]]*\s*', ''
    $t = $t -replace '^\s*\d+\s*[.\-_)\]]+\s*', ''
    $t = ($t -replace '_', ' ').Trim()
    if ([string]::IsNullOrWhiteSpace($t)) { $t = [IO.Path]::GetFileNameWithoutExtension($archivo) }
    return $t
}

$lista = New-Object System.Collections.ArrayList
foreach ($f in $ordenados) {
    $rel = RutaRelativa $f
    $partes = $rel.Split('/')
    $album = 'Musica'
    if ($partes.Count -gt 1) { $album = $partes[0] }
    $limpio = ($f.Name -replace '[\u200e\u200f\u202a-\u202e]', '')
    $disco = $null
    if ($limpio -match '^\s*(\d+)\s*-\s*\d+') { $disco = [int]$Matches[1] }
    $o = [ordered]@{ ruta = ('musica/' + $rel); titulo = (LimpiarNombre $f.Name); album = $album }
    if ($null -ne $disco) { $o['disco'] = $disco }
    [void]$lista.Add($o)
}

$payload = [ordered]@{ version = 1; generado = (Get-Date).ToString('o'); pistas = $lista.ToArray() }
$json = $payload | ConvertTo-Json -Depth 6 -Compress
[IO.File]::WriteAllText((Join-Path $Raiz 'playlist.js'), ('window.POKEDEX_MUSICA = ' + $json + ';' + "`n"), $Utf8)

$mb = [math]::Round((($archivos | Measure-Object Length -Sum).Sum) / 1MB, 1)
Write-Host ''
Write-Host 'LISTO' -ForegroundColor Green
Write-Host "Pistas encontradas: $($lista.Count)  ($mb MB)"
$lista | Group-Object { $_.album } | ForEach-Object { Write-Host ("  {0}: {1} pistas" -f $_.Name, $_.Count) }
Write-Host 'Se creo playlist.js. Abre index.html y pulsa Ctrl + F5.'
Read-Host 'Presiona ENTER para cerrar'
