class Animal {
  constructor(name,size,food){
    this.name = name
    this.size = size
    this.food = food
  }

  eat(){
    return "I'm eating " + this.food;
  }
  sleep(){
    return "Time for sleep";
  }
}

class Bird extends Animal {
  constructor(name,size,food,feather,flySpeed) {
    super(name,size,food);
    this.feather = feather
    this.flySpeed = flySpeed
  }
  fly(){
    return "Look I'm flying at " + this.flySpeed + "m/h !";
  }
}

class Dog extends Animal {
  constructor(name,size,food,breed) {
    super(name,size,food);
    this.breed = breed
  }
  bark(){
    if(this.size === "small") {
      return "gua gua gua";
    } else if (this.size === "big") {
      return "GUA GUA GUA";
    } else {
      return "gua";
    }
  }
}

var lazzie = new Dog("lazzie","big","dog food","collie");
var piolin = new Bird("piolin","small","seeds","yellow",10);


console.log(lazzie.bark());
console.log(lazzie.eat());
console.log(piolin.eat());
console.log(piolin.fly());
