function start() {
  dataAtual();
  TempUmid();
}

function dataAtual() {
  //coleta a hora atual automaticamente
  atual = new Date();
  dia = atual.getDate();
  mes = atual.getMonth();
  ano = atual.getFullYear();
  var str_date = dia + "/" + (mes + 1) + "/" + ano;
  let date = document.getElementById("dataInput");
  date.innerHTML = str_date;
}

function TempUmid() {
  //variaveis da temperatura
  let tempInicial = document.getElementById("textResultTempIni");
  let tempFinal = document.getElementById("textResultTempFin");
  let tempDelta = document.getElementById("textResultTempDelta");
  //variaveis da umidade
  let umidInicial = document.getElementById("textResultUmidIni");
  let umidFinal = document.getElementById("textResultUmidFin");
  let umidDelta = document.getElementById("textResultUmidDelta");

  //simulaçao dos dados temperatura e adicionar no html
  let ti = 28;
  tempInicial.innerHTML = ti;
  let tf = 31.0;
  tempFinal.innerHTML = tf;
  delta = tf - ti;
  tempDelta.innerHTML = delta;

  //simulaçao dos dados umidade e adicionar no html
  let ui = 55;
  let uf = 98;
  umidInicial.innerHTML = ui;
  umidFinal.innerHTML = uf;
  deltau = uf - ui;
  umidDelta.innerHTML = deltau;
}
