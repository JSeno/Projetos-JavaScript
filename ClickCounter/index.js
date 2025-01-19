const cliqueBtn = document.getElementById("btn-click");
const contadorBtn = document.getElementById("btn-counter");
let contador = 0;

function addCount() {
  contadorBtn.innerHTML = contador;
}

cliqueBtn.addEventListener("click", () => {
  contador++;
  addCount();
});

addCount();
