const request = require('request')


let noPokemon = 25;

var options = {
   url: 'http://pokeapi.co/api/v2/pokemon/'+noPokemon+'',
   headers: {
     'User-Agent': 'request' //idenfica quien haze la solicitud para eso el headers
   }
 };


// request(options,
//    (error,response,body) =>{
//     let json = JSON.parse(body);
//     json.moves.forEach((srt, i) => srt.move.name, i)
//    })




// Hacer una petición a cualquier pokemon y mostrar sus tipos.
let pokeNumber = 23;

var options1 = {
   url: 'http://pokeapi.co/api/v2/pokemon/'+pokeNumber+'',
   headers: {
     'User-Agent': 'request'
   }
 };

// console.log("Ejercicio 1")
//  request(options1,
//    (error,response,body) =>{
//     let json = JSON.parse(body);
//     json.types.forEach((srt, i) => console.log(srt.type.name))
//    })


// Hacer una funcion que haga una peticion(Ejemplo: peticionLibro(“i robot”);http://openlibrary.org/search.json?q=i+robot) buscar un libro y traer el o los autores

// console.log("Ejercicio 2")

// Hacer una petición por autor y devolver la lista de sus libros (http://openlibrary.org/search.json?author=asimov)

let autorName = "asimov";

var options3 = {
   url: 'http://openlibrary.org/search.json?author='+autorName+'',
   headers: {
     'User-Agent': 'request'
   }
 };

//  console.log("Ejercicio 3")
//  request(options3,
//    (error,response,body) =>{
//     let json = JSON.parse(body);
//     json.docs.forEach((srt) => console.log("Autor: " + srt.author_name + ".  Titulo: " + srt.title + "."))
//    })   

// Hacer una peticion a (http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse) y devolver el género de la banda deseada

let artistName = "muse";

var options4 = {
   url: 'http://www.theaudiodb.com/api/v1/json/1/search.php?s='+artistName+'',
   headers: {
     'User-Agent': 'request'
   }
 };

// console.log("Ejercicio 4")
 request(options4,
   (error,response,body) =>{
    let json = JSON.parse(body);
    console.log("Genero de banda: " +json.artists[0].strGenre)
   })


// Devolver los asteroides que sean potencialmente peligrosos para la tierra de la semana pasada hasta hoy. 
//(https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-16&end_date=2018-04-17&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i)

let dateStart = "2018-04-16";
let dateEnd = "2018-04-22";

var options5 = {
   url: "https://api.nasa.gov/neo/rest/v1/feed?start_date="+dateStart+"&end_date="+dateEnd+"&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i",
   headers: {
     'User-Agent': 'request'
   }
 };

// console.log("Ejercicio 5")
//  request(options5,
//    (error,response,body) =>{
//     let json = JSON.parse(body);
//     for (i in json.near_earth_objects)
//     json.near_earth_objects[i].forEach(srt => {
//       if (srt.is_potentially_hazardous_asteroid === true)
//       console.log("Nombre del asteroide: " + srt.name + ".  Fecha de aparecimiento: " + srt.close_approach_data[0].close_approach_date)
//     })
//    })


// Hacer una petición a la swapi a un personaje y obtener sus películas.

let persojaneSW = 2;

var options6 = {
   url: 'https://swapi.co/api/people/'+persojaneSW+'',
   headers: {
     'User-Agent': 'request'
   }
 };

// console.log("Ejercicio 6")
//  request(options6,
//    (error,response,body) =>{
//     let json = JSON.parse(body);
//     console.log("Las peliculas del personaje " + json.name + " son:")
//     json.films.forEach((srt) => {

//     var op = {
//       url: srt,
//       headers: {
//         'User-Agent': 'request'
//       }
//     };

//        request(op,
//    (error,response,body) =>{
//     let json2 = JSON.parse(body);
//     console.log(json2.title)
//    })
//     })
//    });


// Traer los primeros 151 pokemon de la primera generacion y devolver un objeto con el nombre, sus moves, tipos, tamaño y peso

for (let poke151 in 151){}

var options7 = {
   url: 'http://pokeapi.co/api/v2/pokemon/'+poke+'',
   headers: {
     'User-Agent': 'request'
   }
 };

console.log("Ejercicio 7")
request(options7,
   (error,response,body) =>{
    let json = JSON.parse(body);

    var objet = {
      nombre: json.name,
      movimientos: json.moves.forEach((srt) => srt.move.name),
      tipo: json.types.forEach((srt) => { return srt.type.name }),
      altura: json.height,
      peso: json.weight
    }

    console.log(objet)
   })