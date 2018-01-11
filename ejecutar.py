import os
import time
import sys

# Guardar registro de las veces que se reinicia el computador
time.sleep(80)
f=open('/home/turismo/nodeCentral/timelog.txt','a')
f.write(time.strftime("%c") + "\n")
f.close()
while (True):
    date = time.strftime("%Y%m%d%T")
    os.system("mosquitto_pub -h 192.168.251.3 -t time -m "+date)
    time.sleep(60)
sys.exit()
