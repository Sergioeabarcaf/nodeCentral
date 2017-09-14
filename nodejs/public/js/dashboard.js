$( document ).ready(function() {
  var socket = io.connect();

//Dashboard de temperatura
  var temperatura = new LinearGauge({
    renderTo: 'temperatura',
    width: 150,
    height: 300,
    units: "°C",
    minValue: -20,
    startAngle: 90,
    ticksAngle: 180,
    valueBox: false,
    maxValue: 50,
    majorTicks: [
        "-20",
        "-10",
        "0",
        "10",
        "20",
        "30",
        "40",
        "50"
    ],
    minorTicks: 10,
    strokeTicks: false,
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    colorNeedle: "#fb0000",
    colorBarProgress: "#fb0000",
    animationDuration: 1500,
    animationRule: "linear",
    barWidth: 10,
    value: 0,
    valueBox: "true"
  }).draw();

//dashboard de humedad
  var humedad = new LinearGauge({
    renderTo: 'humedad',
    width: 150,
    height: 300,
    units: "%",
    minValue: 0,
    startAngle: 90,
    ticksAngle: 180,
    valueBox: false,
    maxValue: 100,
    majorTicks: [
        "0",
        "20",
        "40",
        "60",
        "80",
        "100"
    ],
    minorTicks: 1,
    strokeTicks: false,
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    colorNeedle: "rgba(0, 0, 255, 0.6)",
    colorBarProgress: "rgba(0, 0, 255, 0.6)",
    animationDuration: 1500,
    animationRule: "linear",
    barWidth: 10,
    value: 0,
    valueBox: "true"
  }).draw();

//dashboard de puntoRocio
  var puntoRocio = new LinearGauge({
    renderTo: 'puntoRocio',
    width: 150,
    height: 300,
    units: "°C",
    minValue: -30,
    startAngle: 90,
    ticksAngle: 180,
    valueBox: false,
    maxValue: 30,
    majorTicks: [
        "-30",
        "-10",
        "0",
        "10",
        "30"
    ],
    minorTicks: 1,
    strokeTicks: false,
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    colorNeedle: "rgba(0, 255, 0, 0.6)",
    colorBarProgress: "rgba(0, 255, 0, 0.6)",
    animationDuration: 1500,
    animationRule: "linear",
    barWidth: 10,
    value: 0,
    valueBox: "true"
  }).draw();

//dashboard de UV
  var uv = new LinearGauge({
    renderTo: 'uv',
    width: 150,
    height: 300,
    units: "Indice UV",
    minValue: 0,
    startAngle: 90,
    ticksAngle: 180,
    valueBox: false,
    maxValue: 12,
    majorTicks: [
        "0",
        "2",
        "4",
        "6",
        "8",
        "10",
        "11+"
    ],
    highlights: [
            {
                "from": 0,
                "to": 3,
                "color": "rgba(0, 255, 0, 1)"
            },
            {
                "from": 3,
                "to": 6,
                "color": "rgba(255, 255, 1, 1)"
            },
            {
                "from": 6,
                "to": 8,
                "color": "rgba(255, 99, 1, 1)"
            },
            {
                "from": 8,
                "to": 11,
                "color": "rgba(255, 0, 0, 1)"
            },
            {
                "from":11 ,
                "to": 12,
                "color": "rgba(139, 0, 255, 1)"
            }

    ],
    minorTicks: 1,
    strokeTicks: false,
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    colorNeedle: "rgba(0, 255, 0, 0.6)",
    animationDuration: 1500,
    animationRule: "linear",
    barWidth: 10,
    value: 0,
    valueBox: "true"
  }).draw();

//dashboard de mmAgua
  var mmAgua = new LinearGauge({
    renderTo: 'mmAgua',
    width: 150,
    height: 300,
    units: "mm",
    minValue: 0,
    startAngle: 90,
    ticksAngle: 180,
    valueBox: false,
    maxValue: 50,
    majorTicks: [
        "0",
        "10",
        "20",
        "30",
        "40",
        "50"
    ],
    minorTicks: 1,
    strokeTicks: false,
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    colorNeedle: "rgba(0, 255, 0, 0.6)",
    colorBarProgress: "rgba(0, 255, 0, 0.6)",
    animationDuration: 1500,
    animationRule: "linear",
    barWidth: 10,
    value: 0,
    valueBox: "true"
  }).draw();

//dashboard de lummens
  var lummens = new LinearGauge({
    renderTo: 'lummens',
    width: 150,
    height: 300,
    units: "lux",
    minValue: 0,
    startAngle: 90,
    ticksAngle: 180,
    valueBox: false,
    maxValue: 120000,
    majorTicks: [
        "0",
        "1.000",
        "10.000",
        "100.000",
        "120.000"
    ],
    minorTicks: 1,
    strokeTicks: false,
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    colorNeedle: "rgba(0, 255, 0, 0.6)",
    colorBarProgress: "rgba(0, 255, 0, 0.6)",
    animationDuration: 1500,
    animationRule: "linear",
    barWidth: 10,
    value: 0,
    valueBox: "true",
    fontNumbersSize: 15
  }).draw();

//dashboard de presion
  var presion = new RadialGauge({
    renderTo: 'presion',
    width: 300,
    height: 300,
    units: "hPa",
    minValue: 200,
    maxValue: 1200,
    majorTicks: [
        "200",
        "400",
        "600",
        "800",
        "1000",
        "1200"
    ],
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
        {
            "from": 1000,
            "to": 1200,
            "color": "rgba(200, 50, 50, .75)"
        }
    ],
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    animationDuration: 1500,
    animationRule: "linear"
  }).draw();

//dashboard de velViento
  var velViento = new RadialGauge({
    renderTo: 'velViento',
    width: 300,
    height: 300,
    units: "Km/Hr",
    minValue: 0,
    maxValue: 150,
    majorTicks: [
        "0",
        "10",
        "20",
        "30",
        "40",
        "50",
        "60",
        "70",
        "80",
        "90",
        "100",
        "110",
        "120",
        "130",
        "140",
        "150"
    ],
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
        {
            "from": 100,
            "to": 150,
            "color": "rgba(200, 50, 50, .75)"
        }
    ],
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    animationDuration: 1500,
    animationRule: "linear"
  }).draw();

//Dashboard de dirViento
  var dirViento = new RadialGauge({
      renderTo: 'dirViento',
      width: 300,
      height: 300,
      minValue: 0,
      maxValue: 360,
      majorTicks: [
          "N",
          "NE",
          "E",
          "SE",
          "S",
          "SW",
          "W",
          "NW",
          "N"
      ],
      minorTicks: 22,
      ticksAngle: 360,
      startAngle: 180,
      strokeTicks: false,
      highlights: false,
      colorPlate: "#3a3",
      colorMajorTicks: "#f5f5f5",
      colorMinorTicks: "#ddd",
      colorNumbers: "#ccc",
      colorNeedle: "rgba(240, 128, 128, 1)",
      colorNeedleEnd: "rgba(255, 160, 122, .9)",
      valueBox: false,
      valueTextShadow: false,
      colorCircleInner: "#fff",
      colorNeedleCircleOuter: "#ccc",
      needleCircleSize: 15,
      needleCircleOuter: false,
      animationRule: "linear",
      needleType: "line",
      needleStart: 75,
      needleEnd: 99,
      needleWidth: 3,
      borders: true,
      borderInnerWidth: 0,
      borderMiddleWidth: 0,
      borderOuterWidth: 10,
      colorBorderOuter: "#ccc",
      colorBorderOuterEnd: "#ccc",
      colorNeedleShadowDown: "#222",
      borderShadowWidth: 0,
      animationDuration: 1500,
      value: 180
  }).draw();

//Funciones que actualizan los valores del dashboard
  //actualiza valor dashboard temperatura
  socket.on('new temperatura', function(data) {
    console.log("Entro a new temperatura");
    temperatura.value = parseFloat(data.value);
    console.log(parseFloat(data.value));
  });
  //actualiza valor dashboard humedad
  socket.on('new humedad', function(data) {
    console.log("Entro a new humedad");
    humedad.value = parseFloat(data.value);
    console.log(parseFloat(data.value));
  });
  //actualiza valor dashboard puntoRocio
  socket.on('new puntoRocio', function(data) {
    console.log("Entro a new puntoRocio");
    puntoRocio.value = parseFloat(data.value);
    console.log(parseFloat(data.value));
  });
  //actualiza valor dashboard presion
  socket.on('new presion', function(data) {
    console.log("Entro a new presion");
    presion.value = parseFloat(data.value);
    console.log(parseFloat(data.value));
  });
  //actualiza valor dashboard velViento
  socket.on('new vel_2m', function(data) {
    console.log("Entro a new vel_2m");
    velViento.value = parseFloat(data.value);
    console.log(parseFloat(data.value));
  });
  //actualiza valor dashboard dirViento
  socket.on('new viend_ins_grado', function(data) {
    console.log("Entro a new viend_ins_grado");
    dirViento.value = parseFloat(data.value);
    console.log(parseFloat(data.value));
  });
  //actualiza valor dashboard lluvia_1h
  socket.on('new lluvia_1h', function(data) {
    console.log("Entro a new lluvia_1h");
    mmAgua.value = parseFloat(data.value);
    console.log(parseFloat(data.value));
  });
  //actualiza valor dashboard UV
  socket.on('new uv', function(data) {
    console.log("Entro a new uv");
    uv.value = parseFloat(data.value);
    console.log(parseFloat(data.value));
  });
  //actualiza valor dashboard lummens
  socket.on('new lummens', function(data) {
    console.log("Entro a new lummens");
    lummens.value = parseFloat(data.value);
    console.log(parseFloat(data.value));
  });

});
