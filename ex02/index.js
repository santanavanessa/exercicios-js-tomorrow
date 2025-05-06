let numbers = [5,7,1,8,9];

sortedNumbers = numbers.toSorted((a,b) =>{

    return b - a;
   
})

let sortedNumbersList = document.getElementById("resultado");
sortedNumbersList.innerHTML = `O resultado da inversão é: ${sortedNumbers}`;