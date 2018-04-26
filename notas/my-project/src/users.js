const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = [];

users.push({ id: 1, name: 'Ken', lastName: 'Márquez' })
users.push({ id: 2, name: 'Jaime', lastName: 'Duende' })


app.get('/', (req, res) => {
    res.send('<h1> Mi primer RestfulAPI</h1>')
})

app.get('/users/all', (req, res) => {
    res.json(users)
})

app.get('/users', (req, res) => {
    const id = req.query.id
    if (id) {

        const results = users
            .filter(usr => usr.id === id)

        if (results.length > 0) {
            res.json(results[0])
        } else {
            res.status(404).json({ error: 'usuario no encontrado' })
        }
    } else {
        res.status(400).json({ error: 'parametro id es requerido' })
    }
})

app.post('/users', (req, res) => {
    //const name = req.body.name;
    //const lastName = req.body.lastName;
    const { name, lastName } = req.body
    if (!name || !lastName) {
        res.json({ error: 'name y lastName son requeridos' })
    } else {

        const user = {
            id: users.length + 1,
            name: name,
            lastName: lastName,
        }

        users.push(user)
        res.status(201).json(user)
    }
})

app.put('/users', (req, res) => {
    //const id = req.body.id
    const { id } = req.body
    if (id) {

        users.forEach(usr => {
            if (usr.id == id) {
                if (req.body.name) {
                    usr.name = req.body.name
                }
                if (req.body.lastName) {
                    usr.lastName = req.body.lastName
                }
            }
        })

        const results = users
            .filter(usr => usr.id == id)

        if (results.length > 0) {
            res.json(results[0])
        } else {
            res.status(404).json({ error: 'usuario no encontrado' })
        }

    } else {
        res.status(400).json({ error: 'parametro id es requerido' })
    }

});


app.delete('/users', (req, res) => {

    const { id } = req.body
    if (id) {
        let userDeleted;
        users.forEach((usr, i) => {
            if (usr.id == id) {
                console.log("indice: " + i)
                userDeleted = users.splice(i, 1)
            }
        })

        if (userDeleted) {
            res.json({
                result: "success",
                id: userDeleted[0].id,
            })
        } else {
            res.json({ error: "Usuario a borrar no encontrado" })
        }


    } else {
        res.status(400).json({ error: 'parametro id es requerido' })
    }
});


app.listen(5000, () => {
    console.log("App listening on port 5000")
})