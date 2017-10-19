import os
import time
import sys

# Guardar registro de las veces que se reinicia el computador
f=open('timelog.txt','a')
f.write(time.strftime("%c") + "\n")
f.close()
time.sleep(10)
# Ejecucion del servidor nodejs, Cambiar el valor de "pi"
# ubicado en la siguiente ruta, por el usuario de su computadora
os.system('sudo node /home/pi/totem/nodejs/app.js &')
sys.exit()
