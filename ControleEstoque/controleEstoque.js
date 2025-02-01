// Pegando elementos pelo ID:
const itemList = document.getElementById("itemList");
const itemName = document.getElementById("itemName");
const itemQuantity = document.getElementById("itemQuantity");
const itemPrice = document.getElementById("itemPrice");
const produtosList = document.getElementById("produtosList");

// Array para salvar os produtos.
let produtos = [];

// Função para criar um item (Create)
function adicionarProduto(produto) {
  produtos.push(produto);
  console.log("Produto Adicionado: ", produto);
}

// Função para ler todos os itens (Read)
function mostrarProduto() {
  console.log("Produtos: ", produtos);
  return produtos;
}

// Função para atualizar um item (Update)

// Função para deletar um item (Delete)

// Função para Mostrar na tela os produtos.
function renderProdutos() {
  produtosList.innerHTML = "";
  produtos.forEach((produto) => {
    const li = document.createElement("li");
    li.textContent = `${produto.nome} - ${produto.quantidade} - ${produto.preco}`;
    produtosList.appendChild(li);
    console.log("Novo Produto Adicionado!");
  });
}

// Adicionar itens com o botão submit.
itemForm.addEventListener("submit", (event) => {
  console.log("Cliquei no botão!");
  // Evitar recarregamento da página.
  event.preventDefault();

  // Variável para salvar os produtos quando clica no botão
  const novoProduto = {
    nome: itemName.value,
    quantidade: itemQuantity.value,
    preco: parseFloat(itemPrice.value),
  };

  adicionarProduto(novoProduto);
  renderProdutos();
});

renderProdutos();
