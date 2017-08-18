var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require("socket.io").listen(server),
	nicknames = {},
	mqtt = require('mqtt'),
	client = mqtt.connect('mqtt://192.168.252.250:1883'),
	Sensor = require("./models/sensor").Sensor,
	document = require("min-document");

//subscribe a los topicos de los sensores
client.on('connect', function() {
	client.subscribe('temperatura');
	client.subscribe('humedad');
	client.subscribe('puntoRocio');
	client.subscribe('presion');
	client.subscribe('altitud');
	client.subscribe('presion_nivelMar');
	client.subscribe('temperatura_BMP');
	client.subscribe('lumens');
	client.subscribe('uv');
	client.subscribe('viend_ins_grado');
	client.subscribe('viend_chr');
	client.subscribe('viend_2m_grados');
	client.subscribe('vel_2m');
	client.subscribe('raf_ins');
	client.subscribe('raf_10m');
	client.subscribe('raf_ins_grados');
	client.subscribe('raf_10m_grados');
	client.subscribe('lluvia_1h');
	client.subscribe('lluvia_24h');
});

//generar el schema para cargar a la db
client.on('message', function(topic, message) {
	splitMessage = message.toString().split("/");
	//Schema sensores
	var sensor = new Sensor({
		paramSensor: String(topic),
		dato: String(splitMessage[1]),
		idTotem: String(splitMessage[0]),
		fechaYHora: Date()
	});

	//Guardar en la db los datos.
	sensor.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("los datos fueron cargados a la db " + sensor.paramSensor);
		}
	})

});

//Puerto donde corre el sistema
server.listen(80);

//Ruteo a las paginas
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});
app.get('/chat', function(req, res) {
	res.sendFile(__dirname + '/views/chat.html');
});

//Abre conexion con socket
io.sockets.on('connection', function(socket) {

	//Funciones para el sistema de chat
	socket.on('send message', function(data) {
		io.sockets.emit('new message', {
			msg: data,
			nick: socket.nickname
		});
	});

	socket.on('new user', function(data, callback) {
		if (data in nicknames) {
			callback(false);
		} else {
			callback(true);
			socket.nickname = data;
			nicknames[socket.nickname] = 1;
			updateNickNames();
		}
	});

	socket.on('disconnect', function(data) {
		if (!socket.nickname) return;
		delete nicknames[socket.nickname];
		updateNickNames();
	});

	function updateNickNames() {
		io.sockets.emit('usernames', nicknames);
	}

});
