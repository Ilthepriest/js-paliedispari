const richiedo_parola = prompt("Iserisci una parola e ti dirò se è palindroma");

function palindroma(parola) {
    let lista_parola_ordinata = [];
    let lista_parola_non_ordinata = [];

    for (let i = parola.length -1 ; i >= 0; i--) {
        lista_parola_non_ordinata.push(parola[i]);
        
    }

    for (let i = 0; i < parola.length; i++) {
        lista_parola_ordinata.push(parola[i]);
    }

    // console.log(lista_parola.toString());
    // console.log(lista_parola_2.toString());

       if(lista_parola_ordinata.toString() === lista_parola_non_ordinata.toString()){
           console.log("è palindroma");
       }else{
           console.log("non è palindroma");
       }
}

palindroma(richiedo_parola)


