// chiedo all'utente la parola da inserire
var utente=prompt('inserisci parola');

var contrario=utente.charAt(i);

// controllo che la parola sia palidroma
for(var i=utente.length-1;i>=0;i--){
  console.log(utente.charAt(i));
  document.writeln(utente.charAt(i));
}

// informo l'utente sul risultato
if(utente==contrario){
  console.log('la parola è palindroma');
}else{
  console.log('la parola non è palindroma');
}
