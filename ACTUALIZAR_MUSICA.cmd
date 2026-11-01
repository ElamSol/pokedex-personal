@echo off
chcp 65001 >nul
title Actualizar lista de musica - Pokedex personal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0ACTUALIZAR_MUSICA.ps1"
if errorlevel 1 pause
