function greet(){
    console.log("Hi!")
}

const obj = {saludo : "Hola" }
obj.despedida = "Adios!"
greet.despedida = "Hasta la vista baby"

console.log(obj.saludo)
console.log(greet)
console.log(obj.despedida)
console.log(greet.despedida)

console.log("---------------")

1+2

//var x = if (a==3) esto no se puede hacer

//Por valor o por referencia?

// todos los valores primitivos son por valor y los objetos por referencia

let a = 3;
let b;

b = a // asigna un valor
a = 0;

console.log(a)
console.log(b)

let c = {greeting : "Hello"} //en este caso se puede usar constante para hacer mas robusto tu codigo
let d;

d = c; //asigna una referencia por lo que al asignar un c.greeting a Hola! tambièn estamos cambiando el valor de d por que es una referencia
d.greeting = "Hola!";

console.log(c)
console.log(d)

function changeGreeting(obj){
    obj.greeting = "heeeellloo"

}
changeGreeting(c)
console.log(c)
console.log(d)

c={greeting : 'otras cosas'} //este comando asigna un nuevo espacio para almacenar la variable
d.greeting = "----"

console.log(c)
console.log(d)