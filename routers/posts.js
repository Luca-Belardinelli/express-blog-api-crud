// IMPORTIAMO EXPRESS E UTILIZZIAMO LA PARTE DI ROUTING
const express = require('express');
const router = express.Router();

// IMPORTIAMO L'ARRAY DI OGGETTI PRESENTE IN POSTS DENTRO LA CARTELLA DATA
const posts = require('../data/posts');



// ROTTE  CRUD
// INDEX
router.get('/', function (req, res) {
    res.send('Lista dei post');
});

// SHOW
router.get('/:id', function (req, res) {
    res.send('Dettagli del post ' + req.params.id);
});

// STORE
router.post('/', function (req, res) {
    res.send('Creazione nuova post');
});

// UPDATE
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});

// MODIFY
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post' + req.params.id);
});

// DESTROY
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

// ESPORTIAMO IL MODULO ROUTER
module.exports = router;