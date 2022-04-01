const pari_o_dispari = prompt("Scegli pari o dispari");
const numero = Number(prompt("Scegli un numero da 1 a 5"));

console.log(`Hai scelto ${pari_o_dispari}`);

let numero_casuale = numeroRandom();

const somma = numero_casuale + numero;

console.log(`Numero utente: ${numero} + Numero pc: ${numero_casuale} = ${somma}`);

 if(è_pari_o_dispari(somma) === pari_o_dispari){
     console.log("L'utente ha vinto");
 }else{
     console.log("Il pc ha vinto");
 }


 function è_pari_o_dispari(valore) {
     if(valore % 2 === 0){
         return risultato = "pari";

     }else{
         return risultato = "dispari";
     }
 }

 function numeroRandom() {
    return Math.floor(Math.random() * 5) +1;
}







