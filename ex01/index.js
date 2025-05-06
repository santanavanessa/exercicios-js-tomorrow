//Exemplo


let multiplosDeTres = 0;
let multiplosDeCinco = 0;

for(x=0; x < 1000; x++) {
    if(x % 3 == 0){
        multiplosDeTres += x;

    }
    else if(x % 5 == 0) {
        multiplosDeCinco += x;
    }
   
}

let res = document.getElementById("resultado");
res.innerHTML = ("Resultado da soma:" + (multiplosDeTres + multiplosDeCinco))