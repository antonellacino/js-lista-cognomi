//Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
//Scrivi anche la posizione della lista in cui il nuovo utente si trova


//creo la lista dei cognomi
var listaCognomi = ['Capone','Randazzo','Volletti','Mura','Testi','Montanari','Belli','Matonti'];
//faccio inserire il cognome all'utente e lo salvo nella variabile
var newCognome = prompt('Inserisci il tuo cognome');
//inserisco il nuovo cognome nell'elenco
listaCognomi.push(newCognome);
//stampo a video la lista
console.log(listaCognomi);
listaCognomi = listaCognomi.sort();

for (var i = 0; i < listaCognomi.length; i++) {
  var cognome = listaCognomi[i];
  var cognomePrecedente = document.getElementById('list').innerHTML;
  document.getElementById('list').innerHTML = cognomePrecedente + "<li>" + cognome + "</li>";
}



//mostro a video anche la sua posizione
document.getElementById('position').innerHTML = "Sei alla posizione numero: " + (listaCognomi.indexOf(newCognome)+1);
