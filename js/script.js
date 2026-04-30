// switch
// Use switch quando comparar uma variável contra múltiplos valores fixos. Mais legível que muitos else if encadeados.
const diaSemana = "segunda";

switch (diaSemana) {
  case "segunda":
  case "terça":
  case "quarta":
  case "quinta":
  case "sexta":
    console.log("Dia útil");
    break;
  case "sábado":
  case "domingo":
    console.log("Fim de semana!");
    break;
  default:
    console.log("Dia inválido");
}
