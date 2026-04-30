// EXERCÍCIO — Módulo 1
//	Declare três variáveis (nome, idade, cidade) com let e const. Imprima uma frase com template literal.
//	Use typeof para verificar o tipo de pelo menos 4 valores diferentes.
//	Calcule a área de um retângulo. Armazene base e altura em const. Exiba o resultado com console.log.
//	Teste a diferença entre == e ===: compare o número 0 com a string "0" das duas formas.


const nome = "Morgan";
let idade = 25;
const cidade = "São Paulo";

console.log("Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.");

console.log(typeof "texto");
console.log(typeof 10);
console.log(typeof true);
console.log(typeof null);

const base = 10;
const altura = 5;
const area = base * altura;
console.log("A área do retângulo é: ${area}");
