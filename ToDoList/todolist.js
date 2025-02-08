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

// Update - Editar uma tarefa

// Delete - Deletar uma tarefa

// Redenrizar no html as tarefas

// Adicionar eventos de submit e click
