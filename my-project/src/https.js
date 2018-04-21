const request = require('request')


let noPokemon = 25;

var options = {
   url: 'http://pokeapi.co/api/v2/pokemon/'+noPokemon+'',
   headers: {
     'User-Agent': 'request'
   }
 };


request(options,
   (error,response,body) =>{
    let json = JSON.parse(body);
    json.moves.forEach((srt, i) => console.log(srt.move.name, i))
   })
