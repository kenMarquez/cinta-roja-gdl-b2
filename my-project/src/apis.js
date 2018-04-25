const rp = require('request-promise')


// Hacer una peticion a (http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse) y devolver el género de la banda deseada

let artistName = "justin bieber";

var options = {
    method: 'Get',
    uri: 'http://www.theaudiodb.com/api/v1/json/1/search.php?s='+artistName+'',
    headers: {
     'User-Agent': 'request-promise'
   },
   json: true //Automatically parses the JSON strong in the response
 };


//  rp(options)
//         .then(response => {
//             console.log("Genero de banda: " +response.artists[0].strGenre)
//         })
//         .catch(err => {
//             console.log("error");
//         })



///////////////////////////////////////

let autorName = "george r r martin ";

var options2 = {
    method: 'Get',
    url: 'http://openlibrary.org/search.json?author='+autorName+'',
    headers: {
     'User-Agent': 'request-promise'
   },
   json: true //Automatically parses the JSON strong in the response
 };


//  rp(options2)
//         .then(response => {
//             console.log('Todos los libros de ' + response.docs[0].author_name + " y sus fechas de publicacion:")
//             response.docs.forEach((lib, i=1) => console.log("Titulo "+i+": " + lib.title + '.  ' +lib.publish_date[0]+ "." ))
//         })
//         .catch(err => {
//             console.log("error");
//         })

///////////////////////////////////////\



var poke = 2

var options3 = {
    method: 'Get',
    url: 'http://pokeapi.co/api/v2/pokemon/?limit=151&offset=151"',
    headers: {
     'User-Agent': 'request-promise'
   },
   json: true //Automatically parses the JSON strong in the response
 };


 rp(options3)
        .then((response, i)=> {
          var objet = {
            nombre: response.results[0].name,
            // movimientos: response.moves.forEach((srt) => srt.move.name),
            // tipo: response.types.forEach((srt) => { return srt.type.name }),
            // altura: response.height,
            // peso: response.weight
          }
      
          console.log(objet)
        })
        .catch(err => {
            console.log("error");
        })