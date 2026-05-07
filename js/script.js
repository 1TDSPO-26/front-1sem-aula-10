let idade = 17

if(idade < 12){
    console.log("Crianca")
}else if(idade >= 12 && idade <= 17){
    console.log("Adolescente")
}else if(idade >= 18 && idade <= 59){
    console.log("Adulto")
}else{
    console.log("Idoso")
}


let semaforo = "vermelho";

switch(semaforo){
  case "verde":
    console.log("Siga");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "vermelho":
    console.log("Pare");
    break;
  default:
    console.log("Semáforo inválido");
}


// let nr1 = 10;
// let nr2 = 20;
// let operacao = "x";

// switch(operacao){
//   case "+":
//     console.log(nr1 + nr2);
//     break;
//   case "-":
//     console.log(nr1 - nr2);
//     break;  
//   case "*":
//     console.log(nr1 * nr2);
//     break;
//   case "/":
//     const resultado = nr2 !== 0 ? nr1 / nr2 : "Erro divisão por zero.";
//     console.log(resultado);
//     break;
//   default:
//     console.log("Operação inválida!");
// }