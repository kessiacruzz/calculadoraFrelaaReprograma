var inputPrecoHora = document.querySelector("#valor-hora") //variavel que se refere a ganho mes do html
var inputHorasProjeto = document.querySelector("#horas-projeto") //variavel que se refere a horas dia do html
var resultado = document.querySelector("#resposta") //variavel que se refere a respota do html

function calcular(){ //funçao que esta no html que ao clicar no batão mostra o resultado

    var precoHora = inputPrecoHora.valueAsNumber //peguei a variarel que criei(para deicar de ser uma string) e relacionei a caixa para receber numeros
    var horasProjeto = inputHorasProjeto.valueAsNumber //peguei a variarel que criei(para deicar de ser uma string) e relacionei a caixa para receber numeros
    var salario = precoHora * horasProjeto //variavel salario recebeu a multiplicação das outras duas variaveis criadas ja com os valores numericos
    var salarioDuasCasas = salario.toFixed(2) //feito para o salario sair com 2 digitos antes da virgula 

    resultado.textContent = "R$ " + salarioDuasCasas.replace(".", ",") //para sair o R$ antes do resultado
}


