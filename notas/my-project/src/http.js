const request = require('request')

var options = {
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
    headers: {
        'User-Agent': 'request'
    }
};

request(options,
    (error, response, body) => {
        let json = JSON.parse(body);
        console.log(json.abilities[0].ability.name)
    })


let noPokemon = 200;
const array = ["move1", "move1", "move1", "move1"]
array.forEach(str => console.log(str))
    // 1- headbutt
    // 2- double-


request.get('http://pokeapi.co/api/v2/pokemon/1/',
    function(error, response, body) {
        console.log('error ', error)
        console.log('response', response.statusCode)
            //console.log('response',body)
        var response = JSON.parse(body)
            //console.log('body',response.stats[0].stat.name)
        for (var i = 0; i < response.stats.length; i++) {
            //console.log(response.stats[i].stat.name)
        }
    })