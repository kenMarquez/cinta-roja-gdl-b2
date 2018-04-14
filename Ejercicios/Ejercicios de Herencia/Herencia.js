class Animal {
  constructor(name,animal,gender,size,weight,color,food){
    this.name=name;
    this.animal=animal;
    this.gender=gender;
    this.size=size;
    this.weight=weight;
    this.color=color;
    this.food=food; 
    }
    respirar(){
      return this.name + ' puede respirar. *breath*';
    }
    presentarse(){
      if (this.gender === 'hembra' || this.gender === 'macho'){
        this.gender = 'un';
      }

      return 'Hola soy ' +this.name+ ' y soy ' +this.gender+ ' ' +this.animal+ ' que mide ' 
      +this.size+ ', peso ' +this.weight+ ' y soy de color ' +this.color+ '.';
    }
    comer(){
      return this.name + ' esta comiendo su comida favorita que es ' +this.food+ '.'
    }
};

class Corredor extends Animal{

  constructor(name,animal,gender,size,weight,color,food,maxVelocity){
      super(name,animal,gender,size,weight,color,food);
      this.maxVelocity = maxVelocity;
  }
  correr(){
      return `${this.name} puede correr a una velocidad máxima de ${this.maxVelocity}.`;
  }
}

class Volador extends Animal{

  constructor(name,animal,gender,size,weight,color,food,maxHeight){
      super(name,animal,gender,size,weight,color,food);
      this.maxHeight = maxHeight;
  }
  correr(){
      return `${this.name} puede volar a una altura máxima de ${this.maxHeight}.`;
  }
}


let jake = new Corredor('Jake','perro','macho','87 cm','32 kg','negro','croquetas','42km/h');
console.log(jake.respirar());
console.log(jake.presentarse());
console.log(jake.comer());
console.log(jake.correr());

console.log('----------------------');

let piolin = new Volador('Piolin','pajaro','hembra','19 cm','0.4 kg','amarillo','legumbres', '12 metros')
console.log(piolin.respirar());
console.log(piolin.presentarse());
console.log(piolin.comer());
console.log(piolin.correr());