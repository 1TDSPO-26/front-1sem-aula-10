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
const resultado = nota >= 60 ? "Aprovado" : "Reprovado";
console.log(`O aluno foi ${resultado}.`)


// switch
// Use switch quando comparar uma variável contra múltiplos valores fixos. Mais legível que muitos else if encadeados.
const diaSemana = "segunda";

switch (diaSemana) {
  case "segunda":
    console.log("Dia útil e trabalho");
    break;
  case "terça":
    console.log("Dia útil e dia de aula");
    break;
  case "quarta":
    console.log("Dia útil e dia de feira");
    break;
  case "quinta":
    console.log("Dia útil e dia de festa");
    break;
  case "sexta":
    console.log("Feriado!!!");
    break;
  case "sábado":
    console.log("Fim de semana!");
    break;
  case "domingo":
    console.log("Fim de semana!");
    break;
  default:
    console.log("Dia inválido");
}

// Nunca esqueça o break! Sem ele o JS continua executando os cases seguintes (fall-through).
// EXERCÍCIO — Módulo 2
// •	Crie um verificador de faixa etária: "criança" (< 12), "adolescente" (12–17), "adulto" (18–59), "idoso" (60+).
// •	Simule um semáforo com switch: verde, amarelo, vermelho → imprima a instrução correspondente.
// •	Crie um mini-calculadora: peça dois números e uma operação (+, -, *, /) e exiba o resultado.

