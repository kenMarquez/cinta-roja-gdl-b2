

// Hacer una función que dado un número imprima su 
//valor hasta llegar a cero ej. 9,8,7,6,..,0

const  countDown= (numero) =>{
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}

const countDownRecursive = (numero)=> {
    if (numero > 0 ){
        console.log(numero)
        return countDownRecursive(numero - 1)
    }
    console.log(numero)
    return numero
}


const factorial = (number) =>{
    if (number <= 1  )
         return 1
    return  number * factorial(number-1) 
}

console.log(factorial(4))

// Hacer una función recursiva que me sume 
// todos los números anteriores a este.
// 5 = 5+4+3+2+1 = 15

const sumNum = (num) =>{
    if (num <= 0) return 0
    return num + sumNum(num-1)
}

//2- Sumar el número de digitos que tiene un número
// de manera recursiva. 
// ej. 23478 = 24

const sumDigins = (num) =>{
    if (num>0){
        return (num%10) + sumDigins(Math.floor(num/10));
    }
    return num;
}

console.log("SumDigts:  "+sumDigins(23478))



//3- Calcular el número de cifras de 
//un número entero de forma recursiva.
//ej. 23478 = 5

var SumDigitos = function(num){
    if(0<num){
        return (num%10) + SumDigitos(Math.floor(num/10));
    }
    return num;
    }
    console.log(SumDigitos(12345))

const calcularCifraNum = (num) => {
    if ((num+"").length<=1){
            return 1
    }
    return 1 + calcularCifraNum(Math.floor(num/10)) 
}

//4- Calcular serie fibonacci de forma
//recursiva 
// fib n = fib n-1 + fib n-2
// fib 1 = 1 , fib 2 = 2;

const fib = (num) => {
    if (num == 1 || num ==2){
        return 1
    }
    return fib(num-1)+ fib(num-2)
}

console.log("fib: "+ fib(8))