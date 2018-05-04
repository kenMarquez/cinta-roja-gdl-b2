"use strict";

console.log("Ejecutandose archivo JS");

// JSX
var persons = [{
    name: "Ken",
    age: 25,
    location: "CDMX"
}, {
    name: "Jorge",
    age: 26
}, {
    name: "Ramiro",
    age: 20,
    location: "CDMX"
}];

var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            "h1",
            null,
            "Location: ",
            location,
            " "
        );
    }
    return React.createElement(
        "h3",
        null,
        "Location: Desconocida "
    );
};

var template = React.createElement(
    "div",
    null,
    persons.map(function (person) {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                person.name
            ),
            React.createElement(
                "p",
                null,
                "Age: ",
                person.age
            ),
            getLocation(person.location)
        );
    })
);

var appRoot = document.getElementById('app');

// 1 parametro es un template (HTML) - JSX
// 2do parametro es en donde lo vamos a colocar
ReactDOM.render(template, appRoot);
