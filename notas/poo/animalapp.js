class Animal{
    constructor(nombre,peso,patas,tipo,tamaño){
    this.nombre = nombre;
    this.peso = peso;
    this.patas = patas;
    this.tipo = tipo;
    this.tamaño = tamaño;
    }

    descripcion(){
        return ("El " + this.nombre + " es un animal de tipo " + this.tipo + " tiene " + this.patas + " patas y pesa alrededor de " + this.peso + " kg." ); 
    }

}

class Volador extends Animal{
    constructor(nombre,peso,patas,tipo,tamaño,maxAltura){
        super(nombre,peso,patas,tipo,tamaño)
        this.maxAltura=maxAltura
    }
    volar () {
        return "El/La" + this.nombre + " puede volar a una altura de "+ this.maxAltura +"."
    }
}
const animal = new Animal ("Oso", 850,4,"terrestre",1.90);
console.log(animal.descripcion());
const aguila = new Volador ("Aguila",7,2,"volador",1.20,2000)

console.log(aguila.volar());