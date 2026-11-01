# Generador inicial de encuentros Pokémon (PokéAPI)
# PowerShell 5.1+. Requiere conexión a Internet.
$ErrorActionPreference = "Stop"
# Fuerza TLS 1.2 para conexiones HTTPS en Windows PowerShell 5.1.
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$OutFile = Join-Path $PSScriptRoot "datos_obtencion_encuentros.json"
$Summary = Join-Path $PSScriptRoot "resumen_generacion.txt"
$Games = @("ultra-sun","ultra-moon","sun","moon","x","y","omega-ruby","alpha-sapphire")
$All = New-Object System.Collections.Generic.List[object]
$Errors = New-Object System.Collections.Generic.List[string]
$Total = 807

Write-Host ""
Write-Host "GENERADOR DE ENCUENTROS - POKEDEX PERSONAL" -ForegroundColor Cyan
Write-Host "Consultará PokéAPI para las especies nacionales 1 a 807."
Write-Host "Esto NO recopila por sí solo regalos, eventos, crianza, evoluciones ni transferencias."
Write-Host "No cierres esta ventana mientras trabaja." -ForegroundColor Yellow
Write-Host ""

for ($id = 1; $id -le $Total; $id++) {
    $url = "https://pokeapi.co/api/v2/pokemon/$id/"
    $data = $null
    for ($attempt = 1; $attempt -le 3; $attempt++) {
        try {
            $data = Invoke-RestMethod -Uri $url -TimeoutSec 30
            break
        } catch {
            if ($attempt -eq 3) {
                $Errors.Add("Pokemon #$id : $($_.Exception.Message)")
            } else {
                Start-Sleep -Seconds (2 * $attempt)
            }
        }
    }

    if ($null -ne $data) {
        foreach ($enc in $data.location_area_encounters) {
            try {
                $areaData = Invoke-RestMethod -Uri $enc.location_area.url -TimeoutSec 30
                foreach ($vd in $enc.version_details) {
                    $game = $vd.version.name
                    if ($Games -contains $game) {
                        $methods = @()
                        foreach ($ed in $vd.encounter_details) {
                            $methods += [pscustomobject]@{
                                metodo = $ed.method.name
                                nivel_minimo = $ed.min_level
                                nivel_maximo = $ed.max_level
                                probabilidad = $ed.chance
                                condiciones = @($ed.condition_values | ForEach-Object { $_.name })
                            }
                        }
                        $All.Add([pscustomobject]@{
                            pokemon_id = $id
                            juego = $game
                            area = $areaData.name
                            area_url = $enc.location_area.url
                            metodos = $methods
                            estado_revision = "pendiente_revision"
                            fuente = "PokéAPI"
                        })
                    }
                }
            } catch {
                $Errors.Add("Área de encuentro de #$id : $($_.Exception.Message)")
            }
        }
    }

    if (($id % 25) -eq 0 -or $id -eq $Total) {
        $pct = [math]::Round(($id / $Total) * 100, 1)
        Write-Progress -Activity "Consultando PokéAPI" -Status "$id de $Total ($pct%)" -PercentComplete $pct
        Write-Host "Procesados $id / $Total"
    }
    Start-Sleep -Milliseconds 120
}

$Payload = @{
    version = 1
    generado = (Get-Date).ToString("o")
    fuente = "https://pokeapi.co/"
    juegos_consultados = @($Games)
    alcance = "Encuentros registrados por versión; no representa todos los métodos de obtención."
    registros = $All.ToArray()
    errores = $Errors.ToArray()
}
$Payload | ConvertTo-Json -Depth 12 | Set-Content -Path $OutFile -Encoding UTF8

$lines = @(
    "GENERACIÓN TERMINADA"
    "Fecha: $((Get-Date).ToString('yyyy-MM-dd HH:mm:ss'))"
    "Registros de encuentro: $($All.Count)"
    "Errores: $($Errors.Count)"
    "Archivo: $OutFile"
    ""
    "IMPORTANTE: los datos requieren revisión. No se han inferido regalos, eventos, crianza,"
    "evoluciones ni transferencias. Un Pokémon sin registro no significa que sea imposible obtenerlo."
)
$lines | Set-Content -Path $Summary -Encoding UTF8
Write-Host ""
Write-Host "Listo. Archivos generados:" -ForegroundColor Green
Write-Host $OutFile
Write-Host $Summary
if ($Errors.Count -gt 0) {
    Write-Host "Hubo $($Errors.Count) errores; revisa el JSON." -ForegroundColor Yellow
}
Read-Host "Presiona ENTER para cerrar"
