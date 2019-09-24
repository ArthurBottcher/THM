var fs = require('fs');





var SerialPort = require("serialport");
var port = new SerialPort("COM11", { baudRate: 9600 });
var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read ASCII lines
port.pipe(parser); // pipe the serial stream to the parser

let txtTerminal = document.getElementById("txtTerminal");
//variaveis da temperatura
let tempInicial = document.getElementById("textResultTempIni");
let tempFinal = document.getElementById("textResultTempFin");
let tempDelta = document.getElementById("textResultTempDelta");
//variaveis da umidade
let umidInicial = document.getElementById("textResultUmidIni");
let umidFinal = document.getElementById("textResultUmidFin");
let umidDelta = document.getElementById("textResultUmidDelta");

let dadosTemp = [];
let dadosUmid = [];
let ti = 0;
let tf = 0;
let ui = 0;
let uf = 0;

function readserial() {
  parser.on("data", function (data) {
    let temp = data.slice(0, 4);
    let umid = data.slice(6, 10);
    console.log("Data:", temp, "AAA", umid);
    dadosTemp.push(temp);
    dadosUmid.push(umid);
    txtTerminal.innerHTML += `${data}<br>`;
  });
}

function gravar() {
  tempInicial.innerHTML = dadosTemp[dadosTemp.length - 1];
  ti = dadosTemp[dadosTemp.length - 1];
  umidInicial.innerHTML = dadosUmid[dadosUmid.length - 1];
  ui = dadosUmid[dadosUmid.length - 1];
}

function stop() {
  port.close(function (err) {
    let nomeModelo = String(document.getElementById("modeloInput").value);
    let nomeCalçado = String(document.getElementById("calcadoInput").value);
    let nomeArquivo = `${nomeModelo}_${nomeCalçado}`;
    var writeStream = fs.createWriteStream(`../resultados/${nomeArquivo}.csv`);
    console.log("port closed", err);
    tempFinal.innerHTML = dadosTemp[dadosTemp.length - 1];
    tf = dadosTemp[dadosTemp.length - 1];
    umidFinal.innerHTML = dadosUmid[dadosUmid.length - 1];
    uf = dadosUmid[dadosUmid.length - 1];
    let dt = tf - ti;
    let du = uf - ui;
    console.log(dt, "ttt", du);
    tempDelta.innerHTML = dt.toFixed(1);
    umidDelta.innerHTML = du.toFixed(1);

    let header = "Sample Number (1 samples per second),temperatura (ºC),umidade (%)" + "\n"
    writeStream.write(header);
    for (let i = 0; i < dadosTemp.length; i++) {
      let row = i + "," + dadosTemp[i] + "," + dadosUmid[i] + "\n";
      writeStream.write(row);
    }
    writeStream.close()
  });
}
