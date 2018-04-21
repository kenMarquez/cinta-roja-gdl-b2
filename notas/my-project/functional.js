


// Dado un arreglo vamos a multiplicar cada elemento de 
//este por 2 , filtrar los mayores a 10 y
// ordenarlos de manera del menor al mayor
// [8,4,7,5,1,2] -> [10,14,16]

let original = [8,4,7,5,1,2];

const mapX2 = (array) => {
    let arrAux = [];
    for(let i in array) {
        arrAux.push(array[i]*2);
    }
    return arrAux;
}

const filtrar = (array2) => {
    let arrAux = [];
    for(let i in array2) {
        if (array2[i] >= 10){
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



original = mapX2(original);
original = filtrar(original);
original = quickSort(original,0,original.length - 1)


console.log(original)


console.log("---------------------------")

let original2 = [8,4,7,5,1,2];

const resultado = original2
    .map( num => num*2) 
    .filter((num) =>num >= 10)
    .sort(original2)
    .reverse();

console.log(resultado)
// Dado regresar todos los numeros pares 
//ordenados de mayor menor
//[1,3,5,2,10,4,6] => [10,6,4,2]

//Escribe una funcion que tome una cadena 
//de palabras en minusculas y la regrese en mayúsculas.
//Entrada: [“hola”,“como”,“estas”]
//Salida: [“HOLA”,“COMO”,“ESTAS”]

const arrayMins = ["hola","como","estas"]

const resultado1 = arrayMins.map(s => s.toUpperCase());
console.log(resultado1)

//Crea una funcion que reciba como
// parametro una cadena de palabras y
// devuelva la cadena de caracteres modificadas
// en mayusculas y minusculas.
//Entrada:[“Hola amigos”, “cinta roja cdmx y gdl”,” yei” ]
//Saloida:[“HOLA amigos”, “CINTA roja CDMX y GDL”,“YEI”]
const inputEj2 = ["Hola amigos", "CINTA ROJA cdmx y gdl", "yei" ]                    
const resultado4 = inputEj2
    .map(frase => {
        let split = frase.split(" ")
        for (i in split) {
            if(i%2==0){
                split[i] = split[i].toUpperCase();
            }else{
                split[i] = split[i].toLowerCase();
            }
        }

        return split
            .reduce((prev,curr) => prev + " " + curr)
    })
console.log(resultado4)




//3. Hacer un arreglo de 4 cantidades de tiempo en minutos 
//[120, 80, 200, 100], y agarrar sólo las que son mayores a ^

let arreglo = [120,80,200,100]

const resultado3 = arreglo
    .filter(num => {
        return num/60 > 2
    });
console.log(resultado3)

//A partir de esta lista [1, 3, 5, 7, 9], multiplicar 
//todos los elementos por 7, y después sólo traer 
//los que son menores a 30
const inputEj4 =  [1, 3, 5, 7, 9];
const resultado5 = inputEj4
    .filter(num => num*7<30);

console.log(resultado5)
    