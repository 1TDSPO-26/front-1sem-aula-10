
// EXERCÍCIO — Módulo 1
//  Declare três variáveis (nome, idade, cidade) com let e const. Imprima uma frase com template literal.
//  Use typeof para verificar o tipo de pelo menos 4 valores diferentes.
//  Calcule a área de um retângulo. Armazene base e altura em const. Exiba o resultado com console.log.
//  Teste a diferença entre == e ===: compare o número 0 com a string "0" das duas formas.


let nome = "Gusatvo";
let idade = 25;
const cidade = "São Paulo";
console.log(`NOME: ${nome}, IDADE: ${idade}, CIDADE: ${cidade}`);


console.log(typeof nome);
console.log(typeof idade);
console.log(typeof cidade);
console.log(typeof null);


let base =10;
let altura = 5;
const area = base * altura / 2;
console.log(`A área do triângulo é: ${area}`);

 
 console.log(0 == "0");
 console.log(0 === "0");
