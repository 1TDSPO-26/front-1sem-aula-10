// switch
// Use switch quando comparar uma variável contra múltiplos valores fixos. Mais legível que muitos else if encadeados.
const diaSemana = "segunda";

switch (diaSemana) {
  case "segunda":
    console.log("Dia útil");
    break;
  case "terça":
    console.log("Dia útil");
    break;
  case "quarta":
    console.log("Dia útil");
    break;
  case "quinta":
    console.log("Dia útil");
    break;
  case "sexta":
    console.log("Feriado!!!");
    break;
  case "sábado":
  case "domingo":
    console.log("Fim de semana!");
    break;
  default:
    console.log("Dia inválido");
}
