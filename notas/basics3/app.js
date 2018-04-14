



console.log(3+4*5)// 23 primero se ejecuta la multiplicación , después la suma
// 3<2 = false  por lo tanto false < 1 = true por coersión
console.log(3<2<1)

console.log("--------Comparación Estricta----------")

console.log('0'===0)
console.log('0'!==0)

console.log("--------POO----------")

class Persona{

    // constructor donde definimos los propiedades
    constructor(name,edad,telefono,email){
            this.nombre =name
            this.edad = edad
            this.telefono = telefono
            this.email = email
    }

    //Función que define el saludo de la persona
    presentarse(){
        return "Hola me llamo " + this.nombre + " y tengo " + this.edad +" años"
    }

    correr(){
        return "Estoy corriendo"
    }

}

class Progra extends Persona{

    constructor(name,edad,telefono,email,lenguaje){
        super(name,edad,telefono,email)
        this.lenguaje = lenguaje            
    }

    programar(){
        return "El desarrollador "+ this.nombre+" esta programando en " +this.lenguaje
    }


}



// Se utiliza la palabra reservada new
var arturo = new Persona("Arturo",34,5544332211,"arturo@gmail.com")
console.log(arturo.presentarse())
var daniel = new Persona("Daniel",26,5544332211,"arturo@gmail.com")
console.log(daniel.presentarse())

const ken = new Desarrollador("Ken",25,5544332211,"ken@devf.mx","Ensamblador")
console.log(ken.presentarse())
console.log(ken.programar())
