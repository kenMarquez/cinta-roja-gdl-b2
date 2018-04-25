const express = require('express')
const request = require('request-promise')
const app = express();



app.get('/', (req, res)=>{
    res.send('<h1>Api para hacer operaciones basicas</h1>')
})

app.get('/pesoAdolar', (req, res)=>{
    if(!req.query.peso){
        res.status(400).send('Tienes que poner un valor a peso')
    }

    const peso = Number(req.query.peso)

    if (isNaN(peso)){
        res.status(400).send('los pesos tienen que ser un numero')
    }

    const options2 = {
        method: 'GET',
        uri: `http://apilayer.net/api/live?currencies=MXN&format=1&access_key=eb2bf9387670229086aa4adb95540268`,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    }

    request(options2)
    .then(response => {
        let resp = response.quotes.USDMXN
        res.send('' +  (peso/resp))
    })
})




app.get('/dolarApeso', (req, res)=>{

    if(!req.query.dolar){
        res.status(400).send('Tienes que poner un valor a dolar')
    }

    const dolar = Number(req.query.dolar)

    if (isNaN(dolar)){
        res.status(400).send('los dolar tienen que ser un numero')
    }

    const options = {
        method: 'GET',
        uri: `http://apilayer.net/api/live?currencies=MXN&format=1&access_key=eb2bf9387670229086aa4adb95540268`,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    }

    request(options)
        .then(response => {
        let valorDeDolar = response.quotes.USDMXN
        res.send('' +  (dolar*valorDeDolar))
    })
})

app.listen(8080, () => console.log('server ON'))