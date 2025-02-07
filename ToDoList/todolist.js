// Variáveis
const formTodo = document.getElementById("formTodo");
const btnsubmit = document.getElementById("btnSubmit");
const main = document.getElementById("main");
const nomeTodo = document.getElementById("nomeTodo");
const descricaoTodo = document.getElementById("descricaoTodo");
const statusTodo = document.getElementById("statusTodo");

// Array que ficará salvo as tarefas
let listTodo = [];

// Criar uma nova tarefa
function adicionarTarefa(tarefa) {
  listTodo.push(tarefa);
  console.log("Tarefa adicionada: ", tarefa);
  renderizarTarefas();
}

// Fazer a leitura das tarefas
function mostrarTarefas() {
  console.log("Listar Tarefas: ", listTodo);
  return listTodo;
}

// Deletar tarefa
function deletarTarefa(index) {
  listTodo.splice(index, 1);
  renderizarTarefas();
}

// Mostrar no HTML as tarefas
function renderizarTarefas() {
  main.innerHTML = "";

  listTodo.forEach((tarefa, index) => {
    const div = document.createElement("div");
    div.classList.add("tarefa");

    div.innerHTML = `
      <p><strong>${tarefa.nome}</strong></p>
      <p>${tarefa.descricao}</p>
      <p>Status: ${tarefa.status}</p>
      <button onclick="deletarTarefa(${index})">Excluir</button>
    `;

    main.appendChild(div);
  });
}

// Eventos com uso de submit
formTodo.addEventListener("submit", (event) => {
  event.preventDefault();

  const novaTarefa = {
    nome: nomeTodo.value,
    descricao: descricaoTodo.value,
    status: statusTodo.value,
  };

  adicionarTarefa(novaTarefa);
  mostrarTarefas();

  // Limpar os campos após adicionar a tarefa
  nomeTodo.value = "";
  descricaoTodo.value = "";
  statusTodo.value = " ";
});

// Renderizar tarefas ao carregar a página
renderizarTarefas();
