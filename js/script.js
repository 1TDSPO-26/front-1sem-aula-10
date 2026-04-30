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
