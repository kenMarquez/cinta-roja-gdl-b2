
const request = require('request')

var options = {
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
    headers: {
      'User-Agent': 'request'
    }
  };

request(options,
    (error,response,body) =>{
        let json = JSON.parse(body);
        console.log(json.abilities[0].ability.name)
    })
let noPokemon = 200;

// 1- headbutt
// 2- double-edge






