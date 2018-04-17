

function greet(){
    console.log("hi")
}

const obj= { saludo : "hola!" } 
obj.despedida = "Adios!"

greet.despedida = "Hasta la vista baby!"

console.log(obj.saludo)
console.log(obj.despedida)
console.log(greet.despedida)

console.log("-----------------")

1+2



console.log("-----------------------")

var a = 3;
var b;


b = a;
a = 0;

console.log(a)
console.log(b)


const c = {greeting : "Hello"} 
let d;

d = c;

d.greeting = "Heeeeello"

console.log(c)
console.log(d)

c = { greeting : 'otra cosas'}
d.greeting = "------"

console.log(c)
console.log(d)
