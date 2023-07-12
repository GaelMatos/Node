const produtos = [
    {
        nome: 'boné',
        valor: 19.90
    },
    {
        nome: 'Tenis Nike',
        valor: 730.00
    }
]

const listarProdutos = () => {
    return produtos;
}

const listarUmProdutos = () => {};
const cadastrarProdutos = (produto) => {
    produtos.push(produto);
    return produtos
};
const editarProdutos = () => {};
const deletarProdutos = () => {};

module.exports = {
    listarProdutos,
    listarUmProdutos,
    cadastrarProdutos,
    editarProdutos,
    deletarProdutos,
}