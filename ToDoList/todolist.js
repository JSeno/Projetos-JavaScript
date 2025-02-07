// Variáveis
const formTodo = document.getElementById("formTodo");
const btnsubmit = document.getElementById("btnSubmit");
const main = document.getElementById("main");
const nomeTodo = document.getElementById("nomeTodo");
const descricaoTodo = document.getElementById("descricaoTodo");
const statusTodo = document.getElementById("statusTodo");

// Array que ficará salvo as tarefas
let listTodo = [];

// Criar uma nova tarefas
function adicionarTarefa(tarefa) {
  listTodo.push(tarefa);
  console.log("Tarefa adicionada: ", tarefa);
}

// Fazer a leitura das tarefas

// Editar tarefa

// Deletar tarefa

// Mostrar no html as tarefas

// Eventos com uso de submit e click
