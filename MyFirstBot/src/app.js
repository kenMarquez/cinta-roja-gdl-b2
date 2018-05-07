const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=> {
    res.send('<h1>Esto y lo mejor pá mi bot. :)</h1>')
})


app.get('/webhook', (req, res)=> {
    //verificar la coincidencia del token
    let token = req.query['hub.verify_token'];
    if(token === 'another_token'){
        console.log('webhook verificado')
        res.status(200).send(req.query['hub.challenge']);
    }else{
        console.log('La verificacion del token no coinciden')
        res.sendStatus(403)

    }
})

app.post('/webhook', (req, res)=> {
    //verificar si el evento viene de una página
    console.log(req.body.object);
    if(req.body.object == 'page') {
        //Iteramos todas las entradas
        req.body.entry.forEach(entry => {
            //Iteramos todos los eventos
            entry.messaging.forEach(event => {
                if(event.message){
                    processEvent(event)
                }
            })
        })
        res.sendStatus(200)
    }
});


function processEvent(event){
    const senderId = event.sender.id;
    let response = '';
    if(event.message.text){
        response = {
            "text": 'Senkar repite: ' + event.message.text
        }
    }
    sendMessage(senderId, response)
}

function sendMessage(senderId, response){
    let requestBody = {
        recipient: {
            id: senderId
        },
        message: response
    };
    const options = {
        uri: "https://graph.facebook.com/v2.6/me/messages?access_token=EAATMGkWPLfQBANTq5kvZBcjmPuL7lNX3ItUXCykIFuJQ2nNMZB41LGIVJ3hKlV581MVZAQAZAvR15ttjlFPZAs98cvsmD5MhD8DulQtMwWGnUQ4uVPhv3bKs4xOW3HtfHzHZBD3OozHbQUtxXPZBUSZC9sf3vAoCPTDKqrbVqylUdQZDZD",
        method: "POST",
        json: requestBody
    };

    request(options, (err, rs, body) => {
        if (!err) {
            console.log("Mensaje Enviado");
        }else {
            console.error("No se pudo mandar el mensaje " + err);
        }
    });
};



app.listen(6050, () => console.log('Server: on'));