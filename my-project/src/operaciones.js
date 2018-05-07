const express = require('express')

const app = express();



app.get('/', (req, res)=>{
    res.send('<h1>Api para hacer operaciones basicas</h1>')
})

//http://localhost:8000/sumar/
app.get('/sumar', (req, res)=>{

    if(!req.query.n1 || !req.query.n1 || !req.query.n1){
        res.status(400).send('num1, num2, num3 required')
    }

    const num1 = Number(req.query.n1)
    const num2 = Number(req.query.n2)
    const num3 = Number(req.query.n3)

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
        res.status(400).send('num1, num2 and num3 must be a number')
    }
    res.send('' +  (num1+num2+num3))
})

app.get('/restar', (req, res)=>{

    if(!req.query.n1 || !req.query.n1 || !req.query.n1){
        res.status(400).send('num1, num2 and num3 required')
    }

    const num1 = Number(req.query.n1)
    const num2 = Number(req.query.n2)
    const num3 = Number(req.query.n3)

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
        res.status(400).send('num1, num2 and num3 must be a number')
    }
    res.send('' +  (num1-num2-num3))
})


app.get('/dividir', (req, res)=>{

    if(!req.query.n1 || !req.query.n1){
        res.status(400).send('num1 and num2 required')
    }

    const num1 = Number(req.query.n1)
    const num2 = Number(req.query.n2)

    if (isNaN(num1) || isNaN(num2)){
        res.status(400).send('num1 and num2 must be a number')
    }

    if (num2 == 0){
        res.status(400).send('num2 must not be 0')
    }
    res.send('' +  (num1/num2))
})

app.listen(8000, () => console.log('El servidor funciona http://127.0.0.1:8000/'))