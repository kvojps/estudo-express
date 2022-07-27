const express = require('express')
const {people} = require('./data.js')

const app = express()

app.get('/api/people', (req, res) => {
    const newPeople = people.map((person) => {
        const {id, name} = person
        return {id, name}
    })

    res.json(newPeople)
})

app.get('/api/people/:personId', (req, res) => {
    const {personId} = req.params
    const person = people.find((pers) => pers.id === Number(personId))

    if(!person) {
        return res.status(404).send('Person does not exists')
    }

    res.json(person)
})

app.get('/api/v1/people/query', (req, res) => {
    const {search, limit} = req.query
    let sortedPeople = [...people]
    
    if(search) {
        sortedPeople = sortedPeople.filter((person) => {
            return person.name.startsWith(search)
        })
    }

    if(limit) {
        sortedPeople = sortedPeople.slice(0, Number(limit))
    }

    res.json(sortedPeople)
})

app.listen(5000, (req, res) => {
    console.log('listening on port 5000')
})