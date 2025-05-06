numerosPrimos(200);

function numerosPrimos(){
    for(numero = 2; numero <= numerosPrimos; numero++){
        let primo = true;

        for(divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                primo = false;

            }
        }
        if(primo == true){
            console.log(numero);
        }
    }

}
