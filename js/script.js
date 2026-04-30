// Declaração de variáveis — var, let e const
// var	 Escopo de função; pode ser redeclarada; sofre hoisting      / Evite — legado do ES5
// let	 Escopo de bloco {}; pode ser reatribuída; sem hoisting     /  Variáveis que mudam de valor
// const Escopo de bloco {}; não pode ser reatribuída após criação /   Prefira sempre que possível

var   nome = 'Ana';   // evitar — escopo amplo demais
let   idade = 25;     // OK para valores que mudam
const PI = 3.14159;   // prefira para valores fixos
 
// Exemplo de diferença de escopo:
if (true) {
    var x = 10;   // vazamento: x existe fora do bloco
    let y = 20;   // seguro: y existe só dentro do bloco
}
console.log(x); // 10  ✓
console.log(y); // ReferenceError  ✗