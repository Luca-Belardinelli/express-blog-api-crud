// RICHIAMIAMO EXPRESS
const express = require('express')
// INALIZZAZIONE EXPRESS
const app = express()
// DEFINIAMO LA PORTA
const port = 3000


// DEFINIAMO LA PRIMA ROTTA
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

// AVVIAMO IL SERVER METTENDELO IN ASCOLTO SULLA PORTA INDICATA
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})