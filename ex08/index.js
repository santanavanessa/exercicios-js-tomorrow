let numero = parseFloat(prompt('Digite um número: '))

let fatorial = numero;

for(cont = 1; cont < numero; cont++){
    fatorial = fatorial * (numero - cont);
}

let res = document.getElementById("resultado");
res.innerHTML = `Fatorial do número digitado: ${fatorial}.5
`;
