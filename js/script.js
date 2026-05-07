
// Nunca esqueça o break! Sem ele o JS continua executando os cases seguintes (fall-through).
//EXERCÍCIO — Módulo 2
//Crie um verificador de faixa etária: "criança" (< 12), "adolescente" (12–17), "adulto" (18–59), "idoso" (60+).
//Simule um semáforo com switch: verde, amarelo, vermelho → imprima a instrução correspondente.
//Crie um mini-calculadora: peça dois números e uma operação (+, -, *, /) e exiba o resultado.

let idade_individuo = 25;
switch (true) {
    case (idade_individuo < 12):
        console.log("Criança");
        break;
    case (idade_individuo >= 12 && idade_individuo <= 17):
        console.log("Adolescente");
        break;
    case (idade_individuo >= 18 && idade_individuo <= 59):
        console.log("Adulto");
        break;
    case (idade_individuo >= 60):
        console.log("Idoso");
        break;
    default:
        console.log("Idade inválida");
}


let idade=25
if (idade < 12) {
    console.log("Criança");
}
else if (idade >= 12 && idade <= 17) {
    console.log("Adolescente");
}
else if (idade >= 18 && idade <= 59) {
    console.log("Adulto");
}
else if (idade >= 60) {
    console.log("Idoso");
}
else {
    console.log("Idade inválida");
}




let semaforo = console.log("Digite a cor do semáforo: verde, amarelo ou vermelho"); //pesquisar se isso está correto?
// //entender como se faz o print ln para buscar uma resposta do usuário, talvez com prompt() ou algo do tipo. Imagino que seja assim...

switch (semaforo) {
    case "verde":
        console.log("Siga em frente");
        break;
    case "amarelo":
        console.log("Atenção, prepare-se para parar");
        break;
    case "vermelho":
        console.log("Pare");
        break;
    default:
        console.log("Cor de semáforo inválida");
}
//também entender como solicitar as variáveis ao usuário...
let num1 = 10; //let num1 = console.log("Digite o primeiro número:");
let num2 = 5; //let num2 = console.log("Digite o segundo número:");
let operacao = "+"; //let operacao = console.log("Digite a operação (+, -, *, /):");
let resultado = 0; //funciona igual aqui? Deixar zerado e depois atribuir o resultado da operação? Ou criar a espera dos inputs?

switch (operacao) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = "Erro: Divisão por zero";
        }
        break;
    default:
        resultado = "Operação inválida";
}

console.log(`Resultado: ${resultado}`); 