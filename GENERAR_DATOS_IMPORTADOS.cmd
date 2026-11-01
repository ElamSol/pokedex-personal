@echo off
chcp 65001 >nul
title Descarga completa - Pokedex personal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0DESCARGAR_DATOS_IMPORTADOS.ps1"
if errorlevel 1 pause
