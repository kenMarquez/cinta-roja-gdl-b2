//Ejercicios de programacion Funcional.

// dado un arreglo, multiplicar cada elemento 
//por 2 y filtrar los mayores a 10 y ordenarlos de manera ascendente.

let arreglo = [9,2,8,1,5,53,6,3,12,];

//opcion 1
const mapX2 = (array) => {
    let arrAux = [];
    for (let i in array){
        arrAux.push(array[i] * 2)
    }
    return arrAux
}

const filtrar = (array) =>{
    let arrAux = [];
    for (let i in array){
        if (array[i] >= 10){
            arrAux.push(array[i])
        }
    }
    return arrAux
}

    // ordenando ascendentemente

    function swap(items, firstIndex, secondIndex){
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    function partition(items, left, right) {
        var pivot = items[Math.floor((right + left) / 2)],
            i = left,
            j = right;

        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            } while (items[j] > pivot) {
                j--;
            } if (i <= j) {
                swap(items, i, j);
                i++;
                j--;
            }
        }
        return i;
    }

    function quickSort(items, left, right) {
        var index;
        if (items.length > 1) {
            index = partition(items, left, right);
            if (left < index - 1) {
                quickSort(items, left, index - 1);
            } if (index < right) {
                quickSort(items, index, right);
            }
        }
        return items;
    } 

arreglo = mapX2(arreglo);
arreglo = filtrar(arreglo);
arreglo = quickSort(arreglo,0,arreglo.length-2)

console.log(arreglo);

console.log('------------------------------');

//opcion 2

let arreglo2 = [1,5,2,7,8,9,2,4];

arreglo2 = arreglo2.map(num => num*2).filter(num => num >= 10).sort();

console.log(arreglo2);


console.log('------------------------------');

// dado un arreglo regresar todos los numeros pares ordenados de mayor a menor.

let arregloPares = [8,1,3,2,4,14,6,5,7,10,12,];

arregloPares = arregloPares.filter(num => num%2 === 0).sort((b,a) => a - b);

console.log(arregloPares);

console.log('------------------------------');

// ejercicios gdl vs cmdx :D

console.log('ejercicio 1')

let minArray = ['hola', 'como', 'estas'];

let mayArray = minArray.map(string => string.toUpperCase());

console.log(mayArray);



console.log('ejercicio 2');

let inputEj2 = ['HOLA AMIGOS QUE TAL', 'CINTA ROJA LOL CDMX y GDL', 'YEI'];

const resultado = inputEj2.map(frase => {
    let split = frase.split(" ");
    for (i in split){
        if (i%2 == 0){
            split[i] = split[i].toUpperCase();
        } else {
            split[i] = split[i].toLowerCase();
        };
    };
    return split.reduce((a, b) => a + ' ' + b);
});

console.log(resultado);



console.log('ejercicio 3');

let minutos = [120, 80, 200, 100];

let horas = minutos.map(num => Math.floor(num/60)).filter(num => num >= 2);

console.log(horas);



console.log('ejercicio 4');

let lista = [1,3,5,7,9];

lista = lista.map(num => num*7)
            .filter(num => num <= 30);
            
console.log(lista);