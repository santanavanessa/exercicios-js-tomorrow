let preco = 1850.0
let desconto = preco * 0.2
let precoComDesconto = preco - desconto

let resultado = document.getElementById("resultado");
resultado.innerHTML = `Preco sem desconto = ${preco} <br> Valor do desconto = ${desconto} <br> Preço com desconto = ${preco} - ${desconto} =  R$ ${precoComDesconto}`