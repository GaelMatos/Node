const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', (req, res) => {
    res.send(produtoController.listarProdutos())
});


    router.get('/:posicao', (req, res) => {
      res.send(produtoController.listarUmProdutos(re1.params.posicao));


    })


router.post('/', (req, res) => {
    res.send(produtoController.cadastrarProdutos(req.body));
});

router.post('/:posicao', (req, res)=>{
    res.send(produtoController.editarProduto(req.params.posicao, req.body));
})

router.delete('/', (req, res) => {
    res.send(produtoController.deletarProduto(req.params.posicao));
    
});

module.exports = router;