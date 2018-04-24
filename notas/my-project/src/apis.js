//Hacer una peticion a
// (http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse) 
// devolver el género de la banda de este

const request = require('request');
const rp = require('request-promise')

const options = {
    method: 'GET',
    uri: 'http://www.theaudiodb.com/api/v1/json/1/search.php?s=nirvana',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true, // Automatically parses the JSON strong in the response
}

rp(options)
    .then((response => {
        console.log(response.artists[0].strGenre);
    }))
    .catch(err => {
        console.log("error");
    })


//Tuf Voyaging - 1986

const optionsOpenLib = {
    method: 'GET',
    uri: 'http://openlibrary.org/search.json?author=george+r+r+martin',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

rp(optionsOpenLib)
    .then(response => {
        const publications = response.docs;
        const formatNames = publications.map(element => {
            retunrn `${element.title_suggest} - ${element.publish_date[0]}  `
        });
        console.log(formatNames)
    })

//Traer los primeros 151 pokemon de la primera generacion y
// devolver un objeto con el nombre, sus moves, tipos,
// tamaño y peso