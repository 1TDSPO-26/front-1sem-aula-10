// EXERCÍCIO — Módulo 1
//	Declare três variáveis (nome, idade, cidade) com let e const. Imprima uma frase com template literal.
//	Use typeof para verificar o tipo de pelo menos 4 valores diferentes.
//	Calcule a área de um retângulo. Armazene base e altura em const. Exiba o resultado com console.log.
//	Teste a diferença entre == e ===: compare o número 0 com a string "0" das duas formas.



nome = "Oto";
idade = 100;
cidade_atual = "São Paulo-SP";
cidade_origem = "São Luís-MA";


console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade} mas sou de ${cidade_origem}.`);

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof cidade_atual);
console.log(typeof cidade_origem);

const base = 10;
const altura = 5;
const area = base * altura;

console.log(`A área do retângulo é ${area}.`);

console.log(0 == "0"); //comparando valores
console.log(0 === "0"); //comparando tipos?