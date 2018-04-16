                                    // Arrow function.

//Hacer una función que convierta de grados centígrados a Farenheit.
console.log('-----Centigrados a Farenheit-----')

const convertGradosC_F = (centigrade) => centigrade + ' Centigrados son: ' + 
(centigrade*9/5+32) + ' Farenheit.';

console.log(convertGradosC_F(37));

// Hacer una función que muestre la tabla de multiplicar de un número.
console.log('-----Tabla de Multiplcar-----')

const multiplo = (number) =>{
  var tabla = []
  for(var i=1; i <= 10; i++){
    tabla.push(number + ' x ' + i +' = '+ (number*i) );
  };
  for(var e = 0; e < tabla.length; e++)
    console.log(tabla[e])
}

multiplo(7)

// Pasar de decimal a binario.
console.log('-----Decimal a Binario -----')

const decimalToBinario = (decimal) => {
  binario = parseInt(decimal, 10).toString(2);
  return 'El numero ' +decimal+ ' tiene como forma binaria: ' + binario;
}

console.log(decimalToBinario(12))

//Función que pida N parametros y devuelva cuantos parametros se le pasaron.
console.log('-----Numero de parametros-----')

const numeroParametros = (...parametros) => 'Has colocado ' + parametros.length + ' parametros.';

var variable = 'var';
console.log(numeroParametros(variable,'hi', 23, true, false, null, undefined))

//Leer un array de enteros y sacar su media.
console.log('-----Sacar media(promedio)-----')

const arrayDeNumeros = [1,2,3,4,5,6,7,8,9,10]

const promedio = (array) => {
  var suma = 0;
  var promedio = 0;
  for(i = 0; i < array.length; i++){
   suma = suma + array[i]
   promedio = suma / array.length;
  };
  return 'Los numeros colocados tienen un promedio de ' + promedio;
};

console.log(promedio(arrayDeNumeros));

// Leer el nombre y sueldo de 8 empleados y mostrar el nombre y sueldo del empleado que más gana.
console.log('-----El mayor sueldo-----')

var empleados = [
  {name:'oswaldo', salary:1}, 
  {name:'luis', salary:2}, 
  {name:'daniel', salary:3}, 
  {name:'cristobal', salary:4}, 
  {name:'joaquin', salary:5},
  {name:'jovani', salary:6},
  {name:'oscar', salary:999}, 
  {name:'cristina', salary:7000}
]

var higherSalary = (array) => {
  var max = array[0]
  for (var i = 1; i < array.length; i++)
  if (array[i].salary > max.salary){
    max = array[i]
  }
  return max 
}

console.log(higherSalary(empleados))

//Guardar en un array los 20 primeros números pares.
console.log('-----Numeros pares-----')

const guardarPares = (cantidad) => {
  var array = [];
  for (i = 0; i <= cantidad; i++){
    if (i%2 === 0)
    array.push(i)
  }
 return (array)
}

var primeros20Pares = guardarPares(38);  

console.log(primeros20Pares)

/* Hacer una funcion que calcule el tiempo necesario para que un automóvil que se mueve 
con una velocidad de 73000 m/h recorra una distancia de 120 km. (TIEMPO = d/v). */
console.log('-----Calcular tiempo-----')

const calcTime = (speed,distance) => 'Con una velocidad de '+speed*1000+' m/h tardara en recorrer ' 
+ distance+' km en ' + Math.round(distance/speed * Math.pow(10, 2))/Math.pow(10, 2) + ' horas.'; 

console.log(calcTime(7.3, 120))

// Hacer los primeros 10 dígitost de serie fibonacci.
console.log('-----Fibonacci-----')

var fibonacci = (n) => {
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacci(10));

//Crear una funcion que reciba como parametro una oración y defina si es palindromo.
console.log('-----Dectetar palindromo-----')

function palindrome(string) {
  if (string== string.split("").reverse().join("")){
    return string.charAt(0).toUpperCase()+string.slice(1)  + ': es una palabra palindromo.';
  }
   else {
     return string.charAt(0).toUpperCase()+string.slice(1)   + ': no es una palabra palindromo.';
   } 
 }

console.log(palindrome('reconocer'))