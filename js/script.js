
// Nunca esqueça o break! Sem ele o JS continua executando os cases seguintes (fall-through).
//EXERCÍCIO — Módulo 2
//Crie um verificador de faixa etária: "criança" (< 12), "adolescente" (12–17), "adulto" (18–59), "idoso" (60+).
//Simule um semáforo com switch: verde, amarelo, vermelho → imprima a instrução correspondente.
//Crie um mini-calculadora: peça dois números e uma operação (+, -, *, /) e exiba o resultado.

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
else (idade >= 60) {
    console.log("Idoso");
}
else {
    console.log("Idade inválida");
}


let semaforo = "vermelho";

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

let num1 = 10; //let num1 = console.log("Digite o primeiro número:");
let num2 = 5; //let num2 = console.log("Digite o segundo número:");
let operacao = "+"; //let operacao = console.log("Digite a operação (+, -, *, /):");

switch (operacao) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;                        
    case "/":
      const resultado = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
      console.log(resultado);
      break;
    default:
      console.log("Operação inválida");
}

console.log(`Resultado: ${resultado}`); 