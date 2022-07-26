const express = require('express')
const app = express()
const {people} = require('./data.js')

app.get('/', (req, res) => {
    res.json(people)
})

app.listen(5000, () => {
    console.log('listening on port 5000...')
})