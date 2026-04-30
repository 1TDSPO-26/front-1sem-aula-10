//if / else if / else

const nota = 72;
 
if (nota >= 90) {
    console.log("Aprovado com distinção");
} else if (nota >= 60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
 
// Operador ternário (if/else em uma linha):
const resultado = nota >= 60 ? (nota < 90 && nota >= 70 ? "Aprovado" : "de Recuperação") : "Reprovado";
console.log(`O aluno está ${resultado}.`);
