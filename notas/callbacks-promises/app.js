

const wait = (milliseconds) => {
    const start = new Date().getTime();
    let end  = start;
    while(end < start + milliseconds){
        end = new Date().getTime();
    }
}

console.log("Paso1");
wait(500);
console.log("Paso2");


console.log("--------Callbacks--------------")

const myFunction = function (text){
    console.log(text)
}


function llamaLog(funcParam){
    funcParam("Imprime esgto")
}

llamaLog(myFunction)

console.log("--------Async--------------")

const timeOutCallback = () => {
    console.log("Paso 1")
}

setTimeout(timeOutCallback,500)

console.log("Paso 2")

console.log("-------Estructura callbacks--------")

function succes(){
    console.log("Exito")
}

function error(){
    console.log("Error")
}

const getUser = (callbackSucces,callbackError) => {
    const status = 0;
    if (status == 1){
        callbackSucces();
    }else{
        callbackError();
    }
}

getUser(succes,error)

console.log("-------------Promises-----------")

const number = Math.floor(Math.random() *10 )
console.log(number)

const promise = new Promise( (resolve,reject) =>{
    const number = Math.floor(Math.random() * 10)

    setTimeout(() => {
        if (number >5){
            resolve(number)
        }else{
            reject(new Error(`Invalid number: ${number} `))
        }
    },2000)
});

promise
    .then(number => console.log(`valid number ${number}`))
    .catch(error => console.log(error))
