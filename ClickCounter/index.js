const buttonClick = document.getElementById("btn-click");
const contadorParagrafo = document.getElementById("contador-paragrafo");
let contador = 0;

function addContador() {
  contadorParagrafo.innerHTML = contador;
}

buttonClick.addEventListener("click", () => {
  contador++;
  addContador();

  if (contador === 10) {
    document.body.style.backgroundColor = "rgb(131, 115, 45)";
  } else if (contador === 20) {
    document.body.style.backgroundColor = "rgb(191, 202, 39)";
  } else if (contador === 30) {
    document.body.style.backgroundColor = "rgb(23, 177, 44)";
  } else if (contador === 40) {
    document.body.style.backgroundColor = "rgb(185, 21, 21)";
  }
});

addContador();
