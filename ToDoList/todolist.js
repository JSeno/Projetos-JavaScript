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

// Função que deleta um objeto da lista.

// Função que retorna as tarefas.
function listarTodo() {
  console.log("Tarefas:", todolist);
  return todolist;
}

// Função que deleta um objeto da lista.

// Função que mostra no html os itens adicionados.

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
});
