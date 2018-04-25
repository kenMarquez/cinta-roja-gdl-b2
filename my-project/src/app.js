const express = require('express')
const request = require('request-promise')

const app = express();

// El ejercicio es crear una ruta pokemon/types en el cual
// cuando se haga una solicitud de tipo GET debe regresar el nombre del pokemon
// y la lista de tipos que este tiene, la ruta
// debe esperar como parametro el número del pokemon haciendo
// validaciones adecuadas para que no falle el servidor
// resultado ejemplo esperado:
// {
//         name: 'bulbasaur',
//         types: [
//             { name: 'venenoso' },
//             { name: 'hierva' }
//         ]
// }


//Esto es lo que va a SOLICITAR(req) mi servidor y que RESPONDERA(res).
app.get('/pokemon/types', (req, res) => {
    const n = req.query.n
    const options = {
        method: 'GET',
        uri: `https://pokeapi.co/api/v2/pokemon/${n}/`,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    }

    if (n !== undefined){
        request(options)
        .then(response => {
            let respuesta = {
                Nombre: response.name.charAt(0).toUpperCase() + response.name.slice(1),
                Tipos: response.types.map((srt) => " " + srt.type.name.charAt(0).toUpperCase() + response.name.slice(1))
            }
            res.json(respuesta)
	    console.log(`Alguien esta buscando el pokemon numero ${req.query.n}.`)
        })
        .catch(err => res.status(400).send("Numero de Pokemon no es valido >:v"))
    }else{
        res.status(400).send("Se requiere numero de Pokemon")
    }
});
//el link para que funcione es:     http://localhost:3000/pokemon/types/?n=1


app.listen(3000, () => console.log("El servidor funciona!"));