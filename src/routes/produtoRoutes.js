const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', (req, res) => {
    res.send(produtoController.listarProdutos())
});

router.post('/', (req, res) =>{
    res.send(produtoController.cadastrarProdutos(req.body));
});

router.delete('/', (req, res) =>{
    res.send('Deletar Produto')
});

module.exports = router;