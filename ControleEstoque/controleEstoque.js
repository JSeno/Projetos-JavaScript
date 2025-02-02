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

// Função para criar um produto (Create)
function adicionarProduto(produto) {
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
  produtosList.innerHTML = "";
  produtos.forEach((produto, index) => {
    const li = document.createElement("li");

    // Adiciona o conteúdo do produto
    li.textContent = `${produto.nome} - ${produto.quantidade} - ${produto.preco}`;

    // Adiciona um botão para editar o produto
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click", () => {
      editarProduto(index);
    });

    // Adiciona um botão para deletar o produto
    const btnDeletar = document.createElement("button");
    btnDeletar.textContent = "Excluir";
    btnDeletar.addEventListener("click", () => {
      deletarProduto(index);
    });

    li.appendChild(btnEditar);
    li.appendChild(btnDeletar);
    produtosList.appendChild(li);
  });
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

renderProdutos();
