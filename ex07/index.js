let salario = 3480

let aumentoSalario = salario.toFixed(2) * 0.13

let salarioComAumento = (salario + aumentoSalario).toFixed(2)

let resultado = document.getElementById("resultado");
resultado.innerHTML = `Salário com aumento = ${salario} <br> Valor do aumento = ${aumentoSalario} <br> Preço com desconto = ${salario} + ${aumentoSalario} =  R$ ${salarioComAumento}`