const express = require('express')
const path = require('path')

const app = express()

//nao ta funcionando
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('response is not found')
})

app.listen(5000, () => {
    console.log('listening on port 5000...')
})