import os
import time
import sys

# Guardar registro de las veces que se reinicia el computador
time.sleep(80)
f=open('/home/turismo/nodeCentral/timelog.txt','a')
f.write(time.strftime("%c") + " Se acaba de iniciar el sistema \n")
f.close()
sys.exit()
