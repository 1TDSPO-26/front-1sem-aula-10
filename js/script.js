
// Nunca esqueça o break! Sem ele o JS continua executando os cases seguintes (fall-through).
//EXERCÍCIO — Módulo 2
//Crie um verificador de faixa etária: "criança" (< 12), "adolescente" (12–17), "adulto" (18–59), "idoso" (60+).
//Simule um semáforo com switch: verde, amarelo, vermelho → imprima a instrução correspondente.
//Crie um mini-calculadora: peça dois números e uma operação (+, -, *, /) e exiba o resultado.

let idade_individuo = 25;
switch (true) {
    case (idade_individuo < 12):
        console.log("Criança");
        break;
    case (idade_individuo >= 12 && idade_individuo <= 17):
        console.log("Adolescente");
        break;
    case (idade_individuo >= 18 && idade_individuo <= 59):
        console.log("Adulto");
        break;
    case (idade_individuo >= 60):
        console.log("Idoso");
        break;
    default:
        console.log("Idade inválida");
}
