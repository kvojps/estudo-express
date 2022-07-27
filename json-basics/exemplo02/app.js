const express = require('express')
const {people} = require('./data.js')

const app = express()

app.get('/api/people', (req, res) => {
    const newPeople = people.map(person => {
        const {id, name} = person
        return {id, name}
    })

    res.json(newPeople)
})

