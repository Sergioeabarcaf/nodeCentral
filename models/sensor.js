var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/estacion');

var sensor_schema = new Schema({
  paramSensor: String,
  dato: String,
  idTotem: String,
  fechaYHora: Date,
});

 //mongoose.model es el contructor de modelo, 1 parametro es nombre del modelo y el 2 es el shcema
var Sensor = mongoose.model("Sensor",sensor_schema);

//toda la comunicacion con mongodb es por modelos.

module.exports.Sensor = Sensor;
