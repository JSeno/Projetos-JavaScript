// Variáveis.
const btnSubmit = document.getElementById("btnsubmit");
const statusTodo = document.getElementById("statusTodo");
const nomeTodo = document.getElementById("nomeTodo");
const descricaoTodo = document.getElementById("descricaoTodo");
const cardTodo = document.getElementById("card-todo");
const formTodo = document.getElementById("formTodo");

// Array que irá receber a lista todo.
let todolist = [];

// Função que adiciona um objeto na lista.
function adicionarTarefa(todo) {
  todolist.push(todo);
  console.log("Tarefa Adicionada: ", todo);
}

// Função que retorna as tarefas.
function listarTodo() {
  console.log("Tarefas:", todolist);
  return todolist;
}

// Fução que editar uma tarefa.
function editarTarefa() {
  todolist.push(1);
  console.log("Editar tarefa: ", todo);
}

// Função que deleta um objeto da lista.
function deletarTarefa(todo) {
  todolist.splice(1);
  console.log("Tarefa Removida: ", todo);
}

// Função que mostra no html os itens adicionados.
function mostrarTodo() {
  cardTodo.innerHTML = ""; // Limpa a lista antes de adicionar novas tarefas

  todolist.forEach((todo, index) => {
    const divTodo = document.createElement("div");
    divTodo.classList.add("card"); // Adicionando classe

    const pName = document.createElement("p");
    pName.textContent = `Tarefa: ${todo.nome}`;

    const pDesc = document.createElement("p");
    pDesc.textContent = `Descrição: ${todo.descricao}`;

    const pStatus = document.createElement("p");
    pStatus.textContent = `Status: ${todo.status}`;

    // Criando botão de deletar
    const btnDeletar = document.createElement("button");
    btnDeletar.textContent = "Remover";
    btnDeletar.addEventListener("click", () => deletarTarefa(todo));

    // Criando botão para editar
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click", () => editarTarefa(todo));

    // Adicionando os elementos dentro da divTodo
    divTodo.appendChild(pName);
    divTodo.appendChild(pDesc);
    divTodo.appendChild(pStatus);
    divTodo.appendChild(btnEditar);
    divTodo.appendChild(btnDeletar);

    // Adicionando a divTodo dentro da div principal
    cardTodo.appendChild(divTodo);
  });
}

// Botão Submit
formTodo.addEventListener("submit", (event) => {
  console.log("Cliquei no botão!");
  // Evitar recarregamento da página.
  event.preventDefault();

  // Adicionando itens no Array de todolist
  const newTodo = {
    nome: nomeTodo.value,
    descricao: descricaoTodo.value,
    status: statusTodo.value,
  };

  adicionarTarefa(newTodo);
  mostrarTodo();
});
