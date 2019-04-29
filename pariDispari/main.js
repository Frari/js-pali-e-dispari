// chiedere a utente se pari o dispari
var utente_pd=parseInt(prompt('scegli 2:pari o 1:dispari?'));


// chiedere all'utente numero
var utente_num=parseInt(prompt('scegli un numero da 1 a 5'));

// generare numero computer random
var computer=Math.floor(Math.random()*5)+1;
 alert(computer);
var somma=utente_num+computer;
// confrontare i due lanci e dire chi ha vinto
if(utente_pd==2 && somma %2==0){
  console.log('hai vinto');
}else if(utente_pd==1 && somma %2==1){
  console.log('hai vinto');
}else{
  console.log('hai perso');
}
