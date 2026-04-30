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
5 == "5"   // true  (compara só valor, converte tipo)
5 === "5"  // false (compara valor E tipo) ← sempre use ===
 
// Operador lógico prático:
const usuarioLogado = false;
const mensagem = usuarioLogado || "Visitante";
console.log(mensagem); // "Visitante"

