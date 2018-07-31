# Proyecto Totem Turismo

Este repositorio corresponde a los elementos contenido en el Nodo Central (NC), por ende, desde este repositorio se activan los siguientes servicios:
* servicio de mensajeria grupal (Usando el desarrollado por MarioPerezEsteso https://github.com/GeekyTheory/nodechat)
* cambios en banner de alerta para los visitantes
* base de dato en MongoDB que almacena los datos obtenidos por la estacion metereologica ubicada en Torre
* Levantar portal administrador para utilizar servicio de mensajeria y cambios de alerta.

Este proyecto esta desarrollado con NodeJS y utiliza:
* Servidor MQTT mosquitto - (mqtt)
* Socket para comunicacion en tiempo real de los mensajes en sistema de mensajeria grupal y datos obtenidos de la estacion metereologica ubicada en Torre. - (socket.io)
* MongoDB para el almacenamiento de los datos obtenidos de la estacion metereologica ubicada en Torre como tambien los mensajes de alerta emitidos desde el NC a la Torre - (mongoose)

## V0.9
Esta version del sistema esta probada en la experiencia realizada en Rio Clarillo el 25 de enero de 2018.

* Falta pasar a produccion.

## V0.9.1
Esta versión contiene los siguientes cambios

* Reorganizacion de archivos
* Creacion de BASH para que levante el el servicio al inicio del sistema
* Se actualizan las dependencias de NodeJS a las ultimas versiones
* Archivo para configuracion de servidor NTP

Consideraciones:
* NodeJS 8.11.3
* MongoDB V:2.6.10
* Mosquitto 1.4.8
* Instalar servidor NTP y Bind9

Versión estable funcionando desde el 30/Julio/2018 en Proteinlab
