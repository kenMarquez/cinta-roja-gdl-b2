class Persona{
    constructor(name,edad,telefono,email){ //donde definimos las propiedades que necesitamos para el objeto
        this.nombre = name; //definimos los atributos del objeto
        this.edad = edad;
        this.telefono = telefono;
        this.email = email;
    }
    //Función que define el saludo de la persona
    presentarse(){
        return "Hola me llamo " + this.nombre + " y tengo " + this.edad + " años";

    }
    correr(){
        return "Estoy corriendo";
    }
}

class Desarrollador extends Persona {
    constructor(name,edad,telefono,email,lenguaje){
        super(name,edad,telefono,email);
        this.lenguaje = lenguaje;
    }

    programar(){
        return "El desarrollador " + this.nombre + " esta programando en " + this.lenguaje + ".";
    }
}
// Se utiliza la siguiente sintaxis para crear un objeto de tipo arturo
let arturo = new Persona("Arturo",34,5542341234,"arturo@gmail.com");
//despues podemos utilizar un comportamiento o metodo del objeto para hacer algo
const dan = new Desarrollador("Daniel",26,3334552319,"dalt.rock@gmail.com","Javascript");
console.log(arturo.presentarse());
console.log(dan.presentarse());
console.log(dan.programar());



//crear un objeto de tipo triangulo que tenga base y altura como atributos y como comportamientos calcular area y perimeto

class Triangulo{
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }
    calcarea(){
        return ((this.base*this.altura)/2);
    }
    calcperimetro(){
        return(this.base*3);
    }
}
var triangulo1 = new Triangulo(4,3);
console.log(triangulo1.calcarea());
console.log(triangulo1.calcperimetro());

//animal- volador terrestre y acuatico

