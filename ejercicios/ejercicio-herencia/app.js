


class Animal{

    constructor(size,name,color){
        this.size = size;
        this.name = name;
        this.color = color;
    }

    respirar(){
        return "El/La "+this.name+ " esta respirando";
    }   


    comer(){
        return "El/La "+ this.name+ " esta comiendo "
    }


}

class Volador extends Animal{

    constructor(size,name,color,maxAltura){
        super(size,name,color);
        this.maxAltura = maxAltura;
    }

    volar(){
        return `El/La ${this.name} puede volar a una altura máxima de ${this.maxAltura} m` ;
    }

}

const animal = new Animal(150,"OSO","CAFE");
console.log(animal.respirar());
console.log(animal.comer());

const aguila = new Volador("1.5m","Águila","Café",2000)
console.log(aguila.comer())
console.log(aguila.volar())


