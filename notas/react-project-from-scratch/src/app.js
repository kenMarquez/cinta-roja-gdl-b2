console.log("Ejecutandose archivo JS")

// JSX
const persons = [
    {
        name: "Ken",
        age: 25,
        location: "CDMX"
    },
    {
        name: "Jorge",
        age: 26
    },
    {
        name: "Ramiro",
        age: 20,
        location: "CDMX"
    },
    {
        name: "Juan",
        age: 21,
        location: "SINALOA"
    },
]

const getLocation = (location) => {
    if (location) {
        return <h1>Location: {location} </h1>
    }
    return <h3>Location: Desconocida </h3>
}


var template = (
    <div>
        {persons.map(person => {
            return (
                <div>
                    <h1>{person.name}</h1>
                    <p>Age: {person.age}</p>
                    {getLocation(person.location)}
                </div>)

        })
        }


    </div>
);

const appRoot = document.getElementById('app')

// 1 parametro es un template (HTML) - JSX
// 2do parametro es en donde lo vamos a colocar
ReactDOM.render(template, appRoot)

