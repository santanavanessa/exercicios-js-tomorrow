
function exibirNumerosPrimos(limite) {
    let primo = [];
  for (numero = 2; numero <= limite; numero++) {
    let primo = true;

    for (divisor = 2; divisor < numero; divisor++) {
      if (numero % divisor === 0) {
        primo = false;
        break;
      }
    }

    if (primo) {
      console.log(numero);
    }
  }
}
exibirNumerosPrimos(200);
