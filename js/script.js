/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

                            /*     ESECUZIONE    */
// Numero lunghezza array
const arrayRndNumberLenght = 5;

// Creare array numeri generati random
const arrayRndNumber = [];

// Creare funzione che genera 5 numeri casuali non uguali da 1 a 100
function generetorRndNuber (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// Aggiungo numeri generati nell'array (non uguali)
let i = 0;
while(arrayRndNumber.length < arrayRndNumberLenght) {
    const numberRnd = generetorRndNuber (1, 100);
    if(!arrayRndNumber.includes(numberRnd)) {
        arrayRndNumber.push(numberRnd)
    }
    i++;
}

// Array aggiunto al DOM
const stampFirstArray = document.querySelector(".first-array");
stampFirstArray.innerHTML = arrayRndNumber; 
console.log(arrayRndNumber);

// Settare timeOut dopo 30 secondi dalla comparsa dei numeri generati per far sparire i numeri
function hidden () {
    stampFirstArray.classList.add("hidden");
}
setTimeout(hidden, 30000);

// Creare array di numeri risposta dell'utente
const userNumber = [];

// Funzione che chiede all'utente tramite prompt i numeri visualizzati precedentemente 
// Aggiungere numeri risposta dell'utente all'array
function number () {
    for (let i = 0; i < 5; i++){
        let userNumbers = parseInt(prompt("Inserisci i numeri memorizzati"));
        userNumber.push(userNumbers);
    }
    console.log(userNumber);
}
setTimeout(number, 30000);
 
// SE numberRnd === userNumber 
//    count++;
//    pusho i numeri uguali nell' array soluzione;

// Stampo array soluzioni nel DOM
// const stampSecondArray = document.querySelector(".second-array");
// stampSecondArray.innerHTML = arrayResult; 
// console.log(arrayResult);

