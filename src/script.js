

function start() {
  dataAtual();
}

function dataAtual() {
  //coleta a hora atual automaticamente
  atual = new Date();
  dia = atual.getDate();
  mes = atual.getMonth();
  ano = atual.getFullYear();
  var str_date = dia + " -" + (mes + 1) + " -" + ano;
  let date = document.getElementById("dataInput");
  date.innerHTML = str_date;

}

