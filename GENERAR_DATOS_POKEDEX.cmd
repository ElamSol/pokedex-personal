@echo off
chcp 65001 >nul
title Generador de datos - Pokedex personal
echo ================================================
echo   GENERADOR DE ENCUENTROS - POKEDEX PERSONAL
echo ================================================
echo.
where powershell.exe >nul 2>nul
if errorlevel 1 (
  echo No se encontro Windows PowerShell.
  pause
  exit /b 1
)
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0GENERAR_DATOS_POKEDEX.ps1"
if errorlevel 1 (
  echo.
  echo Ocurrio un error. Revisa el mensaje anterior.
  pause
  exit /b 1
)
