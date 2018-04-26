const express = require('express')
const request = require('request-promise')

const app = express();

// req -> información con la que se hizo la solicitud
// res -> variable con funcionalidades para responder al cliente
app.get('/', (req, res) => {
    res.send('Hello world from Express JS!!')
});

app.get('/pokemon', (req, res) => {

    const numero = req.query.numero
    if (numero) {


        const options = {
            method: 'GET',
            uri: `https://pokeapi.co/api/v2/pokemon/${numero}/`,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true, // Automatically parses the JSON strong in the response
        }

        request(options)
            .then(response => {
                jsonResponse = {
                    name: response.name,
                    weigh: response.weight,
                }
                res.json(jsonResponse)
            })
            .catch(err => res.status(400).send("number no valid"))
    } else {
        res.status(400).send("numero is required")
    }
});


app.get('/pokemon/types', (req, res) => {

    const numero = req.query.numero

    const options2 = {
        method: 'GET',
        uri: `https://pokeapi.co/api/v2/pokemon/${numero}/`,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true, // Automatically parses the JSON strong in the response
    }

    request(options2)
        .then(response => {
            jsonResponse = {
                name: response.name,
                abilities: response.moves.map(movimientos => { return movimientos.move.name }),
            }
            res.json(jsonResponse)
        })
        .catch(err => res.status(400).send("number no valid"))
});


app.listen(3000, () => console.log("Example app listening on port 127.0.0.1:3000"));