@echo off
set /p commitMsg=Enter commit message (press Enter for default): 

if "%commitMsg%"=="" (
    for /f "tokens=1-4 delims=/-:., " %%a in ('echo %date% %time%') do set timestamp=%%a-%%b-%%c_%%d
    set commitMsg=test dep %timestamp%
)

git add .
git commit -m "%commitMsg%"
git push
pause
