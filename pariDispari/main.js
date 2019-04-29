// chiedere a utente se pari o dispari
var utente_pd=prompt('scegli pari o dispari?');
var pari=(%2=0);
var dispari=(%2!=0);

// chiedere all'utente numero
var utente_num=parsInt(prompt('scegli un numero da 1 a 5'));

// generare numero computer random
var computer=Math.floor(Math.random()*5)+1;
// confrontare i due lanci e dire chi ha vinto
if(utente_pd==pari && utente_num+computer=pari){
  console.log('hai vinto');
}else if(utente_pd==dispari && utente_num+computer=dispari){
  console.log('hai vinto');
}else{
  console.log('hai perso');
}
