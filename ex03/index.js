/*

    Listando os seis primeiros números primos: 2, 3, 5, 7, 11 e 13, podemos ver 
    que o sexto primo é 13. Qual é o 1001º número primo? Faça um programa 
    JavaScript que apresente esse número para o usuário.

*/


let primos = 0;
for (n = 2; primos < 1001; n++) {
  let numeroPrimo = true;
  for (i = 2; n > i; i++) {
    if (n % i == 0) {
      numeroPrimo = false;
      
    };
  };
  if (Boolean(numeroPrimo)) { 
    primos++;
  }
};

window.alert("O 1001º número primo é: " + --n );


