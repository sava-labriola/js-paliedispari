// scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

//chiedo all utente una parola
var parolaUtente = prompt('Inserisci una parola');
//funzione per verificare se la parola è palindroma
function palindroma() {
//creo un array con i singoli caratteri dell parola dell utente
    var arrayCaratteri = parolaUtente.split('');
//inverto le posizione dei caratteri
    arrayCaratteri = arrayCaratteri.reverse();
//ricompongo la parola nell arrayCaratteri
    arrayCaratteri = arrayCaratteri.join('');
//ritorno arrayCaratteri
    return arrayCaratteri;
}
//assegno alla variabile parolaPalindroma la funzione
var parolaPalindroma = palindroma();
//controllo se la parola invertita corrisponde alla parola inserita inizialmente dall utente
if (parolaPalindroma == parolaUtente) {
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma');
}
