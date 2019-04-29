// chiedo all'utente la parola da inserire
var utente=prompt('inserisci parola');

var contrario='';

// controllo che la parola sia palidroma
for(var i=utente.length-1;i>=0;i--){
  contrario+=utente.charAt(i);
}

// informo l'utente sul risultato
if(utente==contrario){
  console.log('la parola è palindroma');
}else{
  console.log('la parola non è palindroma');
}
