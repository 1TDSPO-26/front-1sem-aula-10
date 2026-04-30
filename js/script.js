// Declaração de variáveis — var, let e const
// var	 Escopo de função; pode ser redeclarada; sofre hoisting      / Evite — legado do ES5
// let	 Escopo de bloco {}; pode ser reatribuída; sem hoisting     /  Variáveis que mudam de valor
// const Escopo de bloco {}; não pode ser reatribuída após criação /   Prefira sempre que possível

// var   nome = 'Ana';   // evitar — escopo amplo demais
// let   idade = 25;     // OK para valores que mudam
// const PI = 3.14159;   // prefira para valores fixos
 
// Exemplo de diferença de escopo:
// if (true) {
    // var x = 10;   // vazamento: x existe fora do bloco
    // let y = 20;   // seguro: y existe só dentro do bloco
// }
// console.log(x); // 10  ✓
// console.log(y); // ReferenceError  ✗


// Tipos de dados
// string  — Textos e caracteres  →  "texto"  ou  'texto'  ou  `template`
// number  — Inteiros e decimais (um só tipo)  →  42  /  3.14  /  -7
// boolean  — Verdadeiro ou falso  →  true  /  false
// null  — Ausência intencional de valor  →  null
// undefined  — Variável declarada sem valor  →  undefined
// object  — Coleções e estruturas complexas  →  { nome: 'Ana' }  /  [1, 2, 3]

// typeof revela o tipo de qualquer valor:
// console.log(typeof "olá");       // Retorna: "string"
// console.log(typeof 42);          // Retorna: "number"
// console.log(typeof true);        // Retorna: "boolean"
// console.log(typeof null);        // Retorna: "object" (bug histórico do JS!)
// console.log(typeof undefined);   // Retorna: "undefined"
// console.log(typeof {});          // Retorna: "object"
// console.log(typeof []);          // Retorna: "object"
// Ex: utilizando o typeof para comparaçoes simples

// let nome  = "Eminem";
// let dados = true;

// if (typeof(nome) === typeof(dados)) {
    // console.log('' + nome + ' é igual a ' + dados);
// } else {
   //  console.log('' + nome + ' é diferente de ' + dados);
// }

// Template literals e concatenação
// const nome  = "Maria";
// const idade = 28;
 
// Concatenação (forma antiga):
// console.log("Olá, " + nome + "! Você tem " + idade + " anos.");
 
// Template literal (ES6 — prefira este):  use crases `
// console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
// console.log(`Próximo aniversário: ${idade + 1} anos`);

// Operadores
// Aritméticos:
//     + : Adição
//     - : Subtração
//     * : Multiplicação
//     / : Divisão
//     % : Módulo (resto da divisão)
//      : Exponenciação
// Comparação:
//     === : Igualdade estrita (mesmo valor e tipo)
//     !== : Desigualdade estrita (valor ou tipo diferente)
//     > : Maior que
//     < : Menor que
//     >= : Maior ou igual a
//     <= : Menor ou igual a
// Lógicos:
//     && : E (AND)
//     || : OU (OR)
//     ! : NÃO / Negação (NOT)
// Atenção: == vs ===
// 5 == "5"   // true  (compara só valor, converte tipo)
// 5 === "5"  // false (compara valor E tipo) ← sempre use ===
 
// Operador lógico prático:
// const usuarioLogado = false;
// const mensagem = usuarioLogado || "Visitante";
// onsole.log(mensagem); // "Visitante"

// EXERCÍCIO — Módulo 1
//	Declare três variáveis (nome, idade, cidade) com let e const. Imprima uma frase com template literal.
//	Use typeof para verificar o tipo de pelo menos 4 valores diferentes.
//	Calcule a área de um retângulo. Armazene base e altura em const. Exiba o resultado com console.log.
//	Teste a diferença entre == e ===: compare o número 0 com a string "0" das duas formas.

let nome = "Roberto"
const idade = "23"
const cidade = "São Paulo"
console.log(`Olá, ${nome}! Você tem ${idade} anos. Mora em ${cidade}`)

typeof nome;
typeof idade
typeof cidade
typeof true

let base = "10"
let lado = "20"
const area = base * lado
console.log(`A area do retangulo é: ${area}`)

console.log(0 == "0")
console.log(0 === "0")