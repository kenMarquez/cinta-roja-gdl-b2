class Persona {
  constructor(name,email){
    this.name = name
    this.email = email
  }

  sayHello(){
    return "Hi my name is " + this.name;
  }
}

class Desarrollador extends Persona {
  constructor(name,email,lenguaje){
    super(name,email,lenguaje);

    this.lenguaje = lenguaje
  }
  programar() {
    return "El desarrollador " + this.name + " esta programando en " + this.lenguaje;
  }
}

var arturo = new Persona("Arturo","arturo@mail.com");
let oswaldo = new Desarrollador("Oswaldo","oz@mail.com","javascript");
console.log(oswaldo.programar());
console.log(oswaldo.sayHello());
//console.log(arturo.sayHello());
//console.log(arturo.email);

class Triangulo{
  constructor(base,altura){
    this.base = base
    this.altura = altura
  }
  area(){
    return (this.base * this.altura)/2;
  }
  perimetro(){
    return this.base * 3;
  }
}

var aTriangulo = new Triangulo(5,10);
//console.log(aTriangulo.area());
//console.log(aTriangulo.perimetro());
