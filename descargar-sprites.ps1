$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$Project = Split-Path -Parent $MyInvocation.MyCommand.Path
$CatalogFile = Join-Path $Project 'catalog.js'
$SpriteDir = Join-Path $Project 'sprites'
New-Item -ItemType Directory -Force -Path $SpriteDir | Out-Null
$Text = Get-Content -Raw -Encoding UTF8 $CatalogFile
$Json = $Text -replace '^\s*/\*.*?\*/\s*const CATALOGO = ', '' -replace ';\s*$', ''
$Catalog = $Json | ConvertFrom-Json
$Total = $Catalog.Count
$Done = 0
$Missing = [System.Collections.Generic.List[string]]::new()
Write-Host "Descargando sprites locales para $Total entradas..." -ForegroundColor Cyan
foreach ($Pokemon in $Catalog) {
    $Done++
    $Destination = Join-Path $SpriteDir ($Pokemon.id + '.png')
    if (Test-Path $Destination) {
        Write-Progress -Activity 'Sprites de la Pokédex' -Status "[$Done/$Total] $($Pokemon.nombre) (ya existe)" -PercentComplete (($Done/$Total)*100)
        continue
    }
    try {
        # Las formas regionales se consultan por su nombre en PokéAPI; no se deduce su ID numérico.
        if ($Pokemon.regional) { $Lookup = [uri]::EscapeDataString($Pokemon.apiName) }
        else { $Lookup = [string]$Pokemon.numero }
        $Api = Invoke-RestMethod -Uri "https://pokeapi.co/api/v2/pokemon/$Lookup/" -TimeoutSec 20
        $ImageUrl = $Api.sprites.front_default
        if (-not $ImageUrl) { $ImageUrl = $Api.sprites.other.home.front_default }
        if ($ImageUrl) {
            Invoke-WebRequest -Uri $ImageUrl -OutFile $Destination -TimeoutSec 30
        } else {
            $Missing.Add("$($Pokemon.id) - $($Pokemon.nombre)")
        }
    } catch {
        $Missing.Add("$($Pokemon.id) - $($Pokemon.nombre)")
    }
    Write-Progress -Activity 'Sprites de la Pokédex' -Status "[$Done/$Total] $($Pokemon.nombre)" -PercentComplete (($Done/$Total)*100)
    Start-Sleep -Milliseconds 120
}
Write-Progress -Activity 'Sprites de la Pokédex' -Completed
Write-Host "Proceso terminado. Archivos disponibles: $((Get-ChildItem $SpriteDir -Filter '*.png').Count)." -ForegroundColor Green
if ($Missing.Count -gt 0) {
    $Missing | Set-Content -Encoding UTF8 (Join-Path $Project 'sprites-faltantes.txt')
    Write-Host "$($Missing.Count) sprites no se pudieron descargar. Consulta sprites-faltantes.txt; la app mostrará una tarjeta alternativa." -ForegroundColor Yellow
} else {
    Write-Host 'Los 825 sprites están descargados.' -ForegroundColor Green
}
Read-Host 'Pulsa Enter para cerrar'
