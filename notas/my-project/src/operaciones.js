const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>API para hacer operaciones basicas</h1>')
})

app.get('/sumar', (req, res) => {
    if (!req.query.num1 || !req.query.num2) {
        res.status(400).send('num1 and num2 is required')
    }

    const number1 = Number(req.query.num1);
    const number2 = Number(req.query.num2);

    if (isNaN(number1) || isNaN(number2)) {
        res.status(400).send('num1 and num2 must be a number')
    }

    res.send("" + (number1 + number2));
})


app.get('/restar', (req, res) => {
    if (!req.query.num1 || !req.query.num2) {
        res.status(400).send('num1 and num2 is required')
    }

    const number1 = Number(req.query.num1);
    const number2 = Number(req.query.num2);

    if (isNaN(number1) || isNaN(number2)) {
        res.status(400).send('num1 and num2 must be a number')
    }

    res.send("" + (number1 - number2));
})





app.listen(8000, () => console.log('App listen on http://127.0.0.1:8000/'))