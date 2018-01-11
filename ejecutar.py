import os
import time
import sys

# Guardar registro de las veces que se reinicia el computador
time.sleep(80)
f=open('/home/turismo/nodeCentral/timelog.txt','a')
f.write(time.strftime("%c") + "\n")
f.close()
while (True):
    fecha = time.strftime("%Y%m%d")
    hora = time.strftime("%T")
    os.system("mosquitto_pub -h 192.168.251.3 -t fecha -m "+fecha)
    os.system("mosquitto_pub -h 192.168.251.3 -t hora -m "+hora)
    time.sleep(60)
