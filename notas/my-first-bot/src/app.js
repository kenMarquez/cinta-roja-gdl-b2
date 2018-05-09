//Importar las dependecias para configurar mi servidor
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
var path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/view/index.html'));
})



app.get('/webhook', (req, res) => {
    // Verificar la coincidendia del token
    let token = req.query["hub.verify_token"];
    if (token === "prueba_token") {
        console.log("Webhook verificado");
        res.status(200).send(req.query["hub.challenge"]);
    } else {
        // Mensaje fallo 
        console.error("La verificación ha fallado, porque los tokens no coinciden");
        res.sendStatus(403);
    }
})

app.post('/webhook', (req, res) => {
    //Verificar si el evento viene de una página 
    if (req.body.object == "page") {
        //Iteramos todas las entradas 
        req.body.entry.forEach(entry => {
            //Iteramos todos los eventos
            entry.messaging.forEach(event => {
                if (event.message) {
                    processEvent(event)
                }
            })
        });
        res.sendStatus(200)
    }
})

function processEvent(event) {
    const senderId = event.sender.id;
    const message = event.message;
    let response = "";
    if (message.text) {
        response = {
            "text": "Echo: " + message.text
        };
    }

    sendMessage(senderId, response)
}

function sendMessage(senderId, response) {
    let requestBody = {
        recipient: {
            id: senderId
        },
        message: response
    }

    request({
        uri: "https://graph.facebook.com/v2.6/me/messages",
        qs: {
            access_token: "EAACgYXyg9pcBACmSOru726oLyo5mPxAy9FR9ayKlZCFOm1JFymBoeGYruG311Ylz9XQgFTflrqX31VzQXT5ZB9bAJgVrXsPmBzgs9xiZBa5e4dZANZCAsYs1qxPqGrg4qS69jp04eg4dI0wmRhT5ZCqAfChWPVNaoPnbAZAnv8ZBk4YMZAymk76uA"
        },
        method: "POST",
        json: requestBody
    }, (err, res, body) => {
        if (!err) {
            console.log("Mensaje Enviado");
        } else {
            console.error("No se pudo mandar el mensaje " + err);
        }
    });
}

const newPort = process.env.PORT || 3002




app.listen(newPort, function () {
         console.log('El servidor esta ejecutandose')
});