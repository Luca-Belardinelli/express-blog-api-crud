// IMPORTIAMO L'ARRAY PRESENTE IN DATA
const posts = require('../data/posts.js');


// FUNZIONE PER LE ROTTE

// INDEX
function index(req, res) {
    res.json(posts);
}
// SHOW
function show(req, res) {
    // RECUPERIAMO L'ID E TRASFORMIAMOLO IN UN NUMERO
    const id = parseInt(req.params.id)
    // CERCHIAMO IL POSTS TRAMITE ID
    const post = posts.find(post => post.id === id);
    // FACCIAMO IL CONTROLLO 
    if(!post){
        // IMPOSTO LO STATUS
        res.status(404)
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    //RESTITUIAMOLO SOTTO FOTMA DI JSON
    res.json(post);
}
// STORE
function store(req, res) {
    res.send("creazione nuovo post");
}
// UPDATE
function update(req, res) {
    res.send("modifica completa del post numero " + req.params.id)
}
// MODIFY
function modify(req, res) {
    res.send("modifica parziale del post numero " + req.params.id);
}
// DESTROY
function destroy(req, res) {
    // RECUPERO ID E LO TRASFORMO IN NUMERO
    const id = parseInt(req.params.id)
    // CHERCHIAMO IL POST TRAMITE ID
    const post = posts.find(post => post.id === id);
    // CONTROLLO 
    if(!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    // RIMUVIAMO IL POST DALLA LISTA
    posts.splice(posts.indexOf(post), 1);

    // VERIFICA SUL TERMINALE
    console.log(posts);

    // RESTITUIAMO LO STATUS
    res.sendStatus(204)
}

// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy};