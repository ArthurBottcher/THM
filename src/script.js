function calculo() {
  let tempInicial = document.getElementById("textResultTempIni");
  let tempFinal = document.getElementById("textResultTempFin");
  let tempDelta = document.getElementById("textResultTempDelta");

  let umidInicial = document.getElementById("textResultUmidIni");
  let umidFinal = document.getElementById("textResultUmidFin");
  let umidDelta = document.getElementById("textResultUmidDelta");

  let ti = 28;
  tempInicial.innerHTML = ti;
  let tf = 31.0;
  tempFinal.innerHTML = tf;
  delta = tf - ti;
  tempDelta.innerHTML = delta;

  let ui = 55;
  let uf = 98;
  umidInicial.innerHTML = ui;
  umidFinal.innerHTML = uf;
  deltau = uf - ui;
  umidDelta.innerHTML = deltau;
}
