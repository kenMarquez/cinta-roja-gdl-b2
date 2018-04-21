

const convertidorGradosC_F = (centigrados) => {return centigrados*1.8+32}
function convertidorGradosC_F1(centigrados){
    return centigrados*1.8+32;
} //con esta opciòn si haces un console log antes de la funciòn la evalua ya que siempre toma en cuenta los valores de las funciones al correr

arrayInt = [4,4,4,4,4,4,4]

const promedio = (arreglo) => {
    a=0;
    for (i in arreglo){
        a = a + arreglo[i];


    }
    return (a/arreglo.length)
}

console.log(promedio(arrayInt));

const primveinte = () => {
    veinti = [];
    begin=0;
    i=0;
    while (veinti.length < 20){
        if (begin%2 == 0){
            veinti[i]=begin;
            i++;
            begin++;
            console.log("agrego")
        }else{
            begin++;
        
        }

    }
    return veinti;
    
}
console.log(primveinte());

const contadorPar = (...others) =>{
    return(others.length)
}
console.log(contadorPar(1,2,3,4,5))
// convertir a binario
const convBin = (numBin) => {
    a=[];
    b=0;
    c=1;
    i=0;
    while(numBin >1){
        a[i]=numBin%2;
        numBin = numBin / 2;
        i++;
    }

}
