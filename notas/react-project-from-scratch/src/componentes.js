class Application extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <Header/>
                <Persons/>
            </div>
        );
    }
}

class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>Mi APP</h1>
                <h2>Subtitulo</h2>
            </div>
        );
    }
}

class Persons extends React.Component {

    render() {
        const persons = [
            {name: "Ken",age: 25, location: "CDMX"},
            {name: "Jorge",age: 25},
            {name: "Ramiro",age: 20, location: "CDMX"},
        ]
        return (
            <div>
                {
                    persons.map((person,i) => {
                        return <Person
                            key={i}
                            name={person.name}
                            age={person.age}
                            location={person.location}
                        />
                    })
                }
            </div>
        )
    }

}

class Person extends React.Component {


    render() {

        console.log(this.props)
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>age: {this.props.age}</h3>
                <h3>Location: {this.props.location}</h3>
            </div>
        );
    }
}


//ReactDOM.render(<Application/>, document.getElementById("app"))
export default Persons



