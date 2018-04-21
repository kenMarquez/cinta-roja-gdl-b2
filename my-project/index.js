// Ejercicios de recursividad

//Hacer una funcion recursiva que sume todos los numeros anteriores a este.
const sumaDeNumeroAnterior = (number) =>{
    if (number <= 0)
        return 0 
    return number = number + sumaDeNumeroAnterior(number-1)
  }

console.log('Sumar todos los numeros anteriores de un numero.');
console.log(sumaDeNumeroAnterior(10))

//sumar el numero de digitos que tiene un numero de manera recursiva

const sumaDeLosDigitos = (number) =>{
    if (number <= 0)
    return 0
    number = number%10 + sumaDeLosDigitos(Math.floor(number/10))
    return number
  }

console.log('Sumar los numeros digitos de un numero.');
console.log(sumaDeLosDigitos(55551));

//Calcular el numero de cifras de un numero entero de forma recursiva.

const numerosDeUnaCifra = (number) => {
  if (number <= 10 ) return 1;
  return 1 + numerosDeUnaCifra(number/10)
};

console.log('Numero de cifras en numero.');
console.log(numerosDeUnaCifra(123456789));

//Calcular series de fibonacci de forma recursiva.
  
const fib = (num) => {
  if (num == 1 || num == 2){
    return 1
  } else {
    return fib(num-1) + fib(num-2) 
  };
};

console.log('Serie fibonnaci.');
console.log(fib(8));