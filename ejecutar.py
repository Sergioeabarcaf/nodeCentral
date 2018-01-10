import os
import time
import sys

# Guardar registro de las veces que se reinicia el computador
f=open('timelog.txt','a')
f.write(time.strftime("%c") + "\n")
f.close()
# Ejecucion del servidor nodejs, Cambiar el valor de "pi"
# ubicado en la siguiente ruta, por el usuario de su computadora
while (True):
    date = time.strftime("%Y%m%d%T")
    os.system("mosquitto_pub -h 192.168.251.3 -t time -m "+date)
    time.sleep(10)
sys.exit()
