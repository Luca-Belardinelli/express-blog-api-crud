// RICHIAMIAMO EXPRESS
const express = require('express')
// INALIZZAZIONE EXPRESS
const app = express()
// DEFINIAMO LA PORTA
const port = 3000
//importiamo il router 
const postsRouter = require('./routers/posts')


// DEFINIAMO USA DI UNA CARTELLA PER I FILE STATICI
app.use(express.static('public'));

// DEFINIAMO LA PRIMA ROTTA
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

// router
app.use("/posts", postsRouter)

// AVVIAMO IL SERVER METTENDELO IN ASCOLTO SULLA PORTA INDICATA
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})