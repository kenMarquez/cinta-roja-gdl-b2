  //ejercicio de POO
  class Triangulo{
    constructor(base, height){
      this.bases = base,
      this.altura = height
    };
    calcArea(){
      return 'Area: ' + (this.bases * this.altura) / 2;
    };
    calcPerimetro(){
      return 'Perimetro: ' + this.bases * 3;
    };
  };
  
  //los logs
  var tria1 = new Triangulo(5, 10);
  console.log(tria1.calcArea() + ', ' + tria1.calcPerimetro());  
  