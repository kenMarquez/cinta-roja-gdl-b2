

function wait (miliseconds){
    const start = new Date().getTime();
    let end = start;
    while(end < start + miliseconds){
        end = new Date().getTime();
    }
}

console.log("Paso1");
wait(1000);
console.log("Paso2");


console.log("______________Callbacks______________");

const log = function (text){
    console.log(text)
}

log("Paso3");

function llamaLog(funcionLog){
    funcionLog("Paso4");
}

llamaLog(log);

console.log("___________Async___________");

const timeOutCallback = () => {console.log("Paso 1")};
setTimeout(timeOutCallback,2000);
console.log("Paso 2");
 // se espera 2 segundos para ejecutarlo, pero no interrumpe la ejecución de código

console.log("-------------------estructura callbacks________________");

function success () {
    console.log("éxito")
}
function error() {
    console.log("error")
}
const getUser = (callbackSuccess,cabllbackError) =>{
    const status = 1;
    if (status == 1) {
        callbackSuccess();
    }else{
        cabllbackError();
    }
}

getUser(success,error);

//una promesa sirve para este tipo de estructuras

console.log("_________________________promises________________________")

const promise = new Promise((resolve,reject) => {
    const number = Math.floor(Math.random()*10)
    setTimeout(() => {
        if(number>5){
            resolve(`Valid number'${number}`);
        }else{
            reject(new Error (`Invalid number'${number}`))
        }
    },2000)
});

promise
    .then(number => console.log(number))
    .catch(error => console.log(error))
