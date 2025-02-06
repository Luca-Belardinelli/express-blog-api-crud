// IMPORTIAMO L'ARRAY PRESENTE IN DATA
const posts = require('../data/posts');


// FUNZIONE PER LE ROTTE

// INDEX
function index(req, res) {
    res.json(posts);
}
// SHOW
// STORE
// UPDATE
// MODIFY
// DESTROY