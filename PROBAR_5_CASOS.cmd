@echo off
chcp 65001 >nul
title Prueba de 5 casos - Pokedex personal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0DESCARGAR_DATOS_IMPORTADOS.ps1" -Prueba
if errorlevel 1 pause
