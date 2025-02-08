// Variáveis
const formTodo = document.getElementById("formTodo");
const btnsubmit = document.getElementById("btnSubmit");
const main = document.getElementById("main");
const nomeTodo = document.getElementById("nomeTodo");
const descricaoTodo = document.getElementById("descricaoTodo");
const statusTodo = document.getElementById("statusTodo");

// Array que ficará salvo as tarefas
let listTodo = [];

// Create - Criar nova tarefa.
function adicionarTarefa(tarefa) {
  listTodo.push(tarefa);
  console.log("Tarefa adicionada: ", tarefa);
}

// Read - Fazer a Leitura das tarefas
function mostrarTarefas() {
  console.log("Listando tarefas: ", listTodo);
  return listTodo;
}

// Update - Editar uma tarefa

// Delete - Deletar uma tarefa

// Redenrizar no html as tarefas
function renderizarTarefas() {
  main.innerHTML = ""; // Limpa as tarefas antes de renderizar

  listTodo.forEach((tarefa) => {
    const div = document.createElement("div");
    div.classList.add("card-tarefa");

    div.innerHTML = `
      <p>Tarefa: ${tarefa.nome}</p>
      <p>Descrição: ${tarefa.descricao}</p>
      <p>Status: ${tarefa.status}</p>
    `;

    main.appendChild(div);
  });
}

// Adicionar eventos de submit e click
formTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  const novaTarefa = {
    nome: nomeTodo.value,
    descricao: descricaoTodo.value,
    status: statusTodo.value,
  };

  adicionarTarefa(novaTarefa);
  mostrarTarefas();
  renderizarTarefas();

  nomeTodo.value = "";
  descricaoTodo.value = "";
  statusTodo.value = "";
});

renderizarTarefas();
