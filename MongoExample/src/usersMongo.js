const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb://Senkar137:hola12345@ds259079.mlab.com:59079/devf-example-senkar');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("DataBase connect")
});

const UserSchema = new mongoose.Schema({
    name: String,
    lastName: String
});

const User = mongoose.model('User', UserSchema);

//http://localhost:6000
app.get('/', (req, res) => {
    res.send('hola');
});

//http://localhost:6000/user/all  *Get all*
app.get('/user/all', (req, res) => {
    User.find((err, users) => {
        if (err) res.send(err)
        res.send(users)
        console.log(`Todos los usuarios encontrados son:`)
        console.log(users)
        console.log("-------------------------------------------------------------------")
    })
});

//http://localhost:6000/user/?id= *Get one*
app.get('/user', (req, res) => {
    const id = req.query.id;
    if (id){
        User.findById(id, (err, users) =>{
            if (err) res.status(404).json({error: "User doesn't exist"})
            res.send(users)
            console.log(`El usuario con ID: ${users._id} . Ha sido Buscado`)
            console.log("-------------------------------------------------------------------")

        })
    }else{
        res.status(400).json({error: "Param id is required"})
    };
});

//http://localhost:6000/user/ *POST*
app.post('/user', (req, res) =>{
    const {name, lastName} = req.body;
    if(!name || !lastName){
        res.status(400).json({error: "name and lastName  is required"})
    }else{
        const userx = new User({
            name: name,
            lastName: lastName,
        });
        userx.save()
        res.status(201).json(userx);
        console.log(`El usuario con ID: ${userx._id} . Ha sido Agregado`)
        console.log("-------------------------------------------------------------------")

    };
});

//http://localhost:6000/user/?id= *PUT*
app.put('/user', (req, res) => {
    const { id } = req.query;
    const {name, lastName} = req.body;
    if (id){
        const userx = {
            name: name,
            lastName: lastName,
        };
        User.findByIdAndUpdate(id ,userx, (err, users) =>{
            if (err) return res.status(404).json({error: "User doesn't exist"})
           res.send(userx)
           console.log(`El usuario con ID: ${users._id} . Ha sido Actualizado`)
           console.log("-------------------------------------------------------------------")

        });
    }else {
        res.status(400).json({error: "Param id is required"})        
    }
});

//http://localhost:6000/user/?id= *Get one*
app.delete('/user', (req, res) => {
    const id = req.query.id;
    if (id){
        User.findByIdAndRemove(id, (err, users) =>{
            if (err) res.status(404).json({error: "User doesn't exist"})
            res.send(users)
            console.log(`El usuario con ID: ${users._id} . Ha sido Eliminado`)
            console.log("-------------------------------------------------------------------")

        })
    }else{
        res.status(400).json({error: "Param id is required"})
    };
});


app.listen(6000, () => console.log('Server connect'));