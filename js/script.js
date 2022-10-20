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

/**
 * Description: funzione che genera 5 numeri casuali non uguali da 1 a 100
 * @param {number} min -> numero minimo
 * @param {number} max -> numero massimo
 * @returns {number} random number
 */
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

/**
 * Description: Settare timeOut dopo 30 secondi dalla comparsa dei numeri generati per far sparire i numeri
 * @returns {object} array iniziale che scopare dopo 3 secondi
 */
function hidden () {
    stampFirstArray.classList.add("hidden");
}
setTimeout(hidden, 3000);

// Creare array di numeri risposta dell'utente
const userNumber = [];


/**
 * Description: Funzione che chiede all'utente tramite prompt i numeri visualizzati precedentemente 
 * @returns {number} numero che inserisce l'utente
 */
function number () {
    for (let i = 0; i < arrayRndNumberLenght; i++){
        let userNumbers = parseInt(prompt("Inserisci i numeri memorizzati"));
        if(!userNumber.includes(userNumbers)){
            userNumber.push(userNumbers);
        }
    }
    console.log(userNumber);

    // Verifico quali numeri ha indovinato l'utente
    const guessedNumbers = findCommonElement (arrayRndNumber, userNumber);
    console.log(guessedNumbers);

    // Stampare output
    printResult(parseInt(guessedNumbers));
}
setTimeout(number, 3000);
 
/**
 * Description: restituisce array con elementi in comune dei due array
 * @param {array} firstArray primo array da confrontare
 * @param {array} secondArray secondo array da confrontare
 * @returns {array} array di numeri in comune
 */
function findCommonElement (firstArray, secondArray) {
    const result = [];
    // Per ogni elemento dell'array 
    for (let i = 0; i < firstArray.length; i++) {
        const thisElement = firstArray[i];
        //    SE è incluso nel secondo array
        if(secondArray.includes(thisElement)){
            // Lo pusho nell'array finale
            result.push(thisElement);
        }
    }
    return result;
}

/**
 * Description: stampa numeri indovinati e la loro quantità
 * @param {any} resultArray array di numeri da stampare
 */
function printResult(resultArray) {
    const resultLast = document.getElementById("result");
    resultLast.innerHTML +=`Hai indovinato ${resultArray.length} numeri: ${resultArray}`;
}

