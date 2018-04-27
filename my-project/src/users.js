const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const users = [];

users.push({id: 1, name: 'Ken', lastName: 'Marquez'});
users.push({id: 2, name: 'piter', lastName: 'miguel'});
users.push({id: 3, name: 'Oscar', lastName: 'Orellana'});

//http://localhost:5000/
app.get('/', (req, res) => {
    res.send('<h1>Mi primer RestfullAPI</h1>');
});

//http://localhost:5000/users/?id=NUMBER
app.get('/users', (req, res) => {
    const id = req.query.id;
    if (id){
        const results = users.filter(usr => usr.id == id)
        if(results.length > 0){
            res.json(results[0]);
        }else{
            res.status(404).json({error: "User doesn't exist"})
        }
    }else{
        res.status(400).json({error: "Param id is required"})
    };
});

//http://localhost:5000/users   FORM urlencode
app.post('/users', (req, res) =>{
    const {name, lastName} = req.body;
    if(!name || !lastName){
        res.status(400).json({error: "name and lastName id is required"})
    }else{
        const user ={
            id: users[users.length - 1].id + 1,
            name: name,
            lastName: lastName,
        };
        users.push(user);
        res.status(201).json(user);
    };
});

//http://localhost:5000/users/all
app.get('/users/all', (req, res) => {
    res.send(users)
});

//http://localhost:5000/users  FORM urlencode
app.put('/users', (req, res) => {
    const { id } = req.body;
    if (id){
        users.forEach(usr => {
            if(usr.id == id){
                if(req.body.name){
                    usr.name = req.body.name;
                };
                if(req.body.lastName){
                    usr.lastName = req.body.lastName;
                };
            };
        });

        const results = users.filter(usr => usr.id == id);

        if(results.length > 0){
            res.json(results[0]);
        }else{
            res.status(404).json({error: "User doesn't exist"})
        }
    }else {
        res.status(400).json({error: "Param id is required"})        
    }
});

//http://localhost:5000/users   FORM urlencode
app.delete('/users', (req, res) => {
    const { id } = req.body;

    if(id){
        let userDelete;
        users.forEach((usr, i) =>{
            if(usr.id == id){
                userDelete = users.splice(i, 1)
            }
        });
        if(userDelete){
            res.json({result: 'succes', id: userDelete[0].id})
        }else{
            res.json({result: 'User to delete is not found'})
        }
    }else{
        res.status(400).json({error: "Param id is required"})        
    }
 
})



app.listen(5000, () => console.log('App listening on port 3000'));