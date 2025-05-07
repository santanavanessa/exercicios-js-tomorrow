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


