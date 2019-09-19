var SerialPort = require("serialport");
var port = new SerialPort("COM11", {
  baudRate: 9600
});
var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read ASCII lines
port.pipe(parser); // pipe the serial stream to the parser

let txtTerminal = document.getElementById("txtTerminal");

function readserial() {
  // Switches the port into "flowing mode"
  parser.on("data", function(data) {
    console.log("Data:", data);
    txtTerminal.innerHTML += `${data}<br>`;
  });
}
