function calcularTip(evento) {

event.preventDefault();

console.log (evento);

let bil = document.getElementById('bill').value;

let servQual = document.getElementById('servQual').value;

let numPessoas = document.getElementById('pessoas').valor;

if (bil == ''| servQual == 0) {

   alert ("Por favor, os valores!")

Retorna;

}

  if (numPessoas == '' | numPessoas <= 1) {

    numPessoas = 1;

    document.getElementById ('cada').style.display = 'nenhum'

  } senão {

    document.getElementById ('each').style.display = 'block'

  }

  

  let total = (bil * servQual) / numPessoas

  total = total.toFixed(2);

  document.getElementById('tip').innerHTML = total;

  document.getElementById('totTip').style.display = "block";

  

  

}

document.getElementById('totTip').style.display= "nenhum"

document.getElementById('each').style.display = "nenhum"

document.getElementById('tipsForm').addEventListener ('submit', calcularTip);

