//Dado un arrgeglo vamos a multplicar cada elemento por 2, filtrar los mayores a 10
//y ordenarlos de manera ascendente

let original = [4,6,7,9,10]

const mapX2 = (array) => {
    let arrAux = [];
    for(let i in array) {
        arrAux.push(array[i]*2);
    }
    return arrAux;
}

const filtrarBy10 = (array2) => {
    let arrAux = [];
    for(let i in array2) {
        if(array2[i]>=10){
            arrAux.push(array2[i])
        }
    }
    return arrAux;

}



function quickSort(items, left, right) {

    var index;

    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}

function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

original = mapX2(original)
original = filtrarBy10(original)
original = quickSort(original,0,original.length-1)

console.log(original)
console.log("-------------------------")

let original2 = [4,6,7,9,10]

const resultado = original2
    .map((num) => num*2)
    .filter(num => num>=10)
    .sort(original2)


console.log(resultado)

//Dado un arreglo todos los numeros pares ordenados de mayor a menor
let original3 = [1,3,5,2,10,4,6]
const resultado2 = original3
    .filter(num => num%2==0)
    .sort((a,b) => a-b)
    //investigar

console.log(resultado2)

//
/*
let arreglomin = ["hola","como","estas"]
const resultado3 = arreglomin
    .map(palabra => {palabra.toUppercase()})

console.log(resultado3)
*/
let arreglocaps = ["hola amigos", "cinta roja cdmx y gdl","yei"]
const resultado4 = arreglocaps
    .map(frase => {
        let split = frase.split(" ")
        for (i in split){
            if(i%2==0){
               split [i] = split[i].toUpperCase();
               return split
            }
        }
    })
console.log(resultado4);