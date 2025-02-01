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

adicionarProduto();
mostrarProduto();
