// chiedo all'utente la parola da inserire
var utente=prompt('inserisci parola');
// controllo che la parola sia palidroma

for(var i=utente.length-1;i>=0;i--){
  console.log(utente.charAt(i));
  document.writeln(utente.charAt(i));
}if(utente==utente.chatAt(i)){
  console.log('la parola è palindroma');
}else{
  console.log('la parola non è palindroma');
}
// informo l'utente sul risultato
