//Montando um objeto para comparar com os dados do formulário
const usuario = {
    nome : "Zezinho", 
    email : "zezinho@gmail.com.br",
    senha : "zezinho123"
}



//Recuperando o botão entrar
const botaoEntrar = document.getElementById("btnEntrar");


//Atrelar ao botão um evento
//Vamos utilizar uma função que escuta eventos.
//Essa função se chama addEventListeener(param1, param2) e recebe dois parâmetros:
//O primeiro é o evento em si (click ou outro qualquer).
//O segundo é a função, que pode ser uma função anônima ou uma função declarada.
//Que será executada quando esse evento acontecer.

//Ex: botaoEntrar.addEventListener("click", function(){ Coisas aqui dentro da função para serem executadas quando o botão for clicado. });

botaoEntrar.addEventListener("click", function(evento){
    evento.preventDefault();



try {

  //Recuperando os 2 campos do formulário de login e impirmir no console:    
const campoEmail = document.getElementById("idEmail");
const campoSenha = document.getElementById("idSenha");
    //Imprimindo o valor dos campos em tela
console.log(campoEmail.value);
console.log(campoSenha.value);

//Vamos comparar os dados digitados no formulário com os dados do objeto "usuario" e caso seja valido, redirecionar para a página index.html.
    
if(!(campoEmail === null && campoSenha === null )){
    if(campoEmail.valeu === usuario.campoEmail && campoSenha.valeu === usuario.campoSenha){
        window.location.href = "./index.html";
    }else{
        throw new Error("Preencha os campos corretamente!");
    }
}


} catch (error){


}
});


//Exemplo de função
//function nomeDaFuncao() {
  //  console.log("Olla");
    //return "Olá";
//}

//nomeDaFuncao();
