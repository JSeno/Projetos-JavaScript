// Pegando elementos pelo ID:
const itemName = document.getElementById("itemName");
const itemQuantity = document.getElementById("itemQuantity");
const itemPrice = document.getElementById("itemPrice");
const produtosList = document.getElementById("produtosList");
const itemForm = document.getElementById("itemForm");
const btnSubmit = document.querySelector("#itemForm button[type='submit']");

// Array para salvar os produtos.
let produtos = [];
let edicaoProduto = null;
let produtoId = 1;

// Função para criar um produto (Create)
function adicionarProduto(produto) {
  produto.id = produtoId++;
  produtos.push(produto);
  console.log("Produto Adicionado: ", produto);
}

// Função para ler todos os produtos (Read)
function mostrarProduto() {
  console.log("Produtos: ", produtos);
  return produtos;
}

// Função para editar um produto (Update)
function editarProduto(index) {
  if (index >= 0 && index < produtos.length) {
    const produto = produtos[index];
    itemName.value = produto.nome;
    itemQuantity.value = produto.quantidade;
    itemPrice.value = produto.preco;

    btnSubmit.textContent = "Salvar Edição";
    edicaoProduto = index;
  } else {
    console.error("Índice inválido!");
  }
}

// Função para deletar um produto (Delete)
function deletarProduto(index) {
  if (index >= 0 && index < produtos.length) {
    const produtoRemovido = produtos.splice(index, 1);
    console.log("Produto Removido: ", produtoRemovido);
    renderProdutos();
  } else {
    console.error("Índice inválido!");
  }
}

// Função para renderizar os produtos na tela
function renderProdutos() {
  // Limpa o conteúdo da tabela (exceto o cabeçalho)
  const tbody = produtosList.querySelector("tbody");
  if (tbody) {
    tbody.remove(); // Remove o tbody existente
  }

  // Cria um novo tbody
  const newTbody = document.createElement("tbody");

  // Adiciona cada produto ao tbody
  produtos.forEach((produto, index) => {
    const tr = document.createElement("tr");

    // Cria e adiciona as células (td) para cada campo do produto
    const tdId = document.createElement("td");
    tdId.textContent = produto.id;
    tr.appendChild(tdId);

    const tdNome = document.createElement("td");
    tdNome.textContent = produto.nome;
    tr.appendChild(tdNome);

    const tdQuantidade = document.createElement("td");
    tdQuantidade.textContent = produto.quantidade;
    tr.appendChild(tdQuantidade);

    const tdPreco = document.createElement("td");
    tdPreco.textContent = produto.preco.toFixed(2);
    tr.appendChild(tdPreco);

    // Cria e adiciona os botões de editar e excluir
    const tdAcoes = document.createElement("td");

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click", () => {
      editarProduto(index);
    });

    const btnDeletar = document.createElement("button");
    btnDeletar.textContent = "Excluir";
    btnDeletar.addEventListener("click", () => {
      deletarProduto(index);
    });

    tdAcoes.appendChild(btnEditar);
    tdAcoes.appendChild(btnDeletar);
    tr.appendChild(tdAcoes);

    // Adiciona a linha ao tbody
    newTbody.appendChild(tr);
  });

  // Adiciona o tbody à tabela
  produtosList.appendChild(newTbody);
  console.log("Produtos renderizados!");
}

// Adicionar ou editar itens com o botão submit.
itemForm.addEventListener("submit", (event) => {
  console.log("Cliquei no botão!");
  // Evitar recarregamento da página.
  event.preventDefault();

  const novoProduto = {
    nome: itemName.value,
    quantidade: itemQuantity.value,
    preco: parseFloat(itemPrice.value),
  };

  if (edicaoProduto !== null) {
    produtos[edicaoProduto] = novoProduto;
    edicaoProduto = null;
    btnSubmit.textContent = "Adicionar Produto";
  } else {
    adicionarProduto(novoProduto);
  }

  renderProdutos();
  itemForm.reset();
});

// Renderiza os produtos ao carregar a página
renderProdutos();
