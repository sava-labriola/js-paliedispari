// chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

//chiedo all utente un numero e pari o dispari e controllo che i valori siano corretti
var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'))
if (numeroUtente < 1 || numeroUtente > 5) {
    console.log('numero inserito (' + numeroUtente + ') non valido, ricarica la pagina e riprova');
}
else {
    var pari_dispari = prompt('Scegli pari o dispari');
    if (pari_dispari != 'pari' && pari_dispari != 'dispari') {
    console.log('parola inserita (' + pari_dispari + ') non valido, ricarica la pagina e riprova');
    }
    else {
//funzione per generare un numero random da 1 a 5
        function random(min, max) {
            var numeroComputer = Math.floor(Math.random() * (max - min + 1)) + min;
            return numeroComputer;
        }
//assegno ad una variabile il risultato della funzione
        var numeroComputer = random(1, 5);
//somma tra il numero dell utente e quello del pc
        var somma = numeroUtente + numeroComputer;
        var resto = somma % 2;
//stampa dei valori
        console.log('Il valore inserito da te è: ' + numeroUtente);
        console.log('Il valore del computer è: ' + numeroComputer);
        console.log('La somma del tuo valore e quello del computer è: ' + somma);
        console.log('Hai scelto ' + pari_dispari);
//controllo dell esito finale della partita
        if(pari_dispari == 'pari' && resto == 0) {
            console.log('Hai vinto');
        }
        else if (pari_dispari == 'dispari' && resto != 0) {
            console.log('Hai vinto');
        }
        else {
            console.log('Hai perso');
        }
    }
}
