//  Hacer una funcion que dado un número imprima su valor hasta llegar a 0, Ej 10,9,8,7...0

const count = (a) => {
    while(a>=0){
        console.log(a);
        a--;
    }
}
const countDownRecursive = (b) => {
    if (b>0){
        console.log(b);
        return countDownRecursive(b - 1)
    }
    console.log(b);
    return b;
}

console.log("Hola desde Node.js");
//count(10);
countDownRecursive(6);

const factorial = (c) => {
    if(c<=1) return 1
    return c * factorial(c-1);

}
console.log(factorial(4))

//6-Hacer una funcion recursiva que sume todos los numeros anteriores a este.

const sumatoria = (d) => {
    if(d<=1) return 1
    return d + sumatoria(d-1);
}
console.log(sumatoria(5))

//5-sumar el número de digitos que tiene un numero de manera recursiva 23478 = 24
/*while (number > 0) {
    print( number % 10);
    number = number / 10;
}
*/
const sumDig = (e) => {
    if(e<=0){return 0};
    return e = e%10 + sumDig(Math.floor(e/10));
}
console.log(sumDig(23478))

//3-calcular el numero de cifras que tiene un entero de forma recursiva
const cifras = (f) => {
    c=0;
    if(Math.floor(f%10<=1)){return 0}
    return c = 1 + cifras(f/10);
    
}
console.log(cifras(2748596))

//4-calcular la serie de fibonacci de forma recursiva fib n = fib n-1 + fib n-2
//fib 1 =1 , fib 2 = 2

const fib = (g) => {
    if (g==1) {return 1} 
    if(g==2){return 1}
    if(g>=3){return g = fib(g-1) + fib(g-2)} 
}
console.log(fib(6))