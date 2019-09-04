function calculo() {
  let tempInicial = parseFloat(document.getElementById("textResultTempIni"));
  let tempFinal = parseFloat(document.getElementById("textResultTempFin"));
  let tempDelta = parseFloat(document.getElementById("textResultTempDelta"));

  umidInicial = parseFloat(document.getElementById("texResultUmidIni"));
  umidFinal = parseFloat(document.getElementById("textResultUmidFin"));
  umidDelta = parseFloat(document.getElementById("textResultUmidDelta"));
  let ti = 28;
  tempInicial.innerHTML = `${ti}`;
  let tf = 31.0;
  tempFinal.innerHTML - `${tf}`;
  delta = tf - ti;
  tempDelta.innerHTML = `${delta}`;
}
