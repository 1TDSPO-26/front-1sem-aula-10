// EXERCÍCIO — Módulo 1
//  Declare três variáveis (nome, idade, cidade) com let e const. Imprima uma frase com template literal.
//  Use typeof para verificar o tipo de pelo menos 4 valores diferentes.
//  Calcule a área de um retângulo. Armazene base e altura em const. Exiba o resultado com console.log.
//  Teste a diferença entre == e ===: compare o número 0 com a string "0" das duas formas.

const nome = "Alexandre";
let idade = 18;
let cidade = "São Paulo";
let height = 1.82;

console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos e atualmente moro em ${cidade}`);

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof cidade);
console.log(typeof height);



const altura = 2
const base = 10

console.log(`O resultado é: ${base*altura}`);


console.log(typeof 0 === "0")

console.log(typeof 0 == "0")


let idade = 25

if (idade < 12) {
    console.log("Criança");
} else if (idade >= 12 && idade <= 17) {
    console.log("Adolescente");
} else if (idade >= 18 && idade <= 59) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

let semaforo = "vermelho"

switch (semaforo) {
    case "verde":
        console.log("Siga");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "vermelho":
        console.log("Pare");
        break;
    default:
        console.log("Semáforo inválido");
}

let nr1 = 10;
let nr2 = 20;
let operacao = "+"

switch (operacao) {
    case "+":
        console.log(`O resultado da soma é: ${nr1 + nr2}`);
        break;
    case "-":
        console.log(`O resultado da subtração é: ${nr1 - nr2}`);
        break;
    case "*":
        console.log(`O resultado da multiplicação é: ${nr1 * nr2}`);
        break;
    case "/":
        const resultado = nr2 !== 0 ? nr1 / nr2 : "Erro: Divisão por zero";
        console.log(`O resultado da divisão é: ${resultado}`);
        break;
    default:
        console.log("Operação inválida");
}