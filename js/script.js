// EXERCÍCIO — Módulo 1
//	Declare três variáveis (nome, idade, cidade) com let e const. Imprima uma frase com template literal.
//	Use typeof para verificar o tipo de pelo menos 4 valores diferentes.
//	Calcule a área de um retângulo. Armazene base e altura em const. Exiba o resultado com console.log.
//	Teste a diferença entre == e ===: compare o número 0 com a string "0" das duas formas.


let nome = "Thales";
let idade = 18;
const cidade = "São Paulo";

console.log(`Nome: ${nome}, Idade: ${idade} Cidade: ${cidade}.`);

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof cidade);
console.log(typeof 10);

const base = 10;
const altura = 5;
const area = base * altura;
console.log(`A área do retângulo é: ${area}`);