//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// Invitati
var invitati =["Mario Rossi", "Luigi Bianchi", "Francesco Verdi"];
// Chiedere all'utente nome e cognome
var nomeutente = prompt("Inserisci nome e cognome");
// Controllare se il nome inserito rientra nella lista
var partecipazione = "Non puoi partecipare"
for (var i = 0; i < invitati.length; i++) {
    if ( invitati[i] == nomeutente ) {
        partecipazione = "Puoi partecipare"
    } else {
        partezipazione = partecipazione
    }
} 
// Comunicare se l'utente può partecipare o meno
alert(partecipazione);