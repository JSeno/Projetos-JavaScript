// Variáveis.
const btnSubmit = document.getElementById("btnSubmit");
const statusTodo = document.getElementById("statusTodo");
const nomeTodo = document.getElementById("nomeTodo");
const descricaoTodo = document.getElementById("descricaoTodo");
const cardTodo = document.getElementById("card-todo");

// Array que irá receber a lista todo.
let todolist = [];

// Função que adiciona um objeto na lista.
function adicionarTarefa(todo) {
  todo.id = todoId++;
  todolist.push(todo);
  console.log("Tarefa Adicionada: ", todo);
}

// Função que deleta um objeto da lista.

// Função que faz a leitura da lista.

// Função que deleta um objeto da lista.

// Função que mostra no html os itens adicionados.
