//Recuperando o botao entrar 

const usuario = {
    email:theo.email
    senha:theo.senha 
}

const botaoentrar = document.getElementById("btnEntrar");

//Atrelar ao botao um evento 
//Vamos utilizar uma funcao que escuta eventos 
//Essa funcao se chama addEventListener(param1,param2) e recebe dois parametros:
//O pri meir oe o evento em si(click ou outro qualquer)
//O segundo e a funcao, que pode ser uma funcao anonima ou uma funcao declarada
//que sera executada quando o evento ocorrer 

//EX: botaoEntrar.addEventListener("click", function(){});

botaoentrar.addEventListener("click", function(){});

botaoEntrar.addEventListener("click", function(evento){
  evento.preventDefault();
try {
    
    //Recuperando os 2 campos do formulário de login e imprimir no console:
   const email = document.getElementById("idEmail");
   const senha = document.getElementById("idSenha");

   //Imprimindo o valor dos campos em tela.
   console.log(email.value);
   console.log(senha.value);

   //Vamos comparar os dados digitados no formulário com os dados do objeto "usuario" e caso seja valido, redirecionar para a página index.html.


   if(!(email === null && senha === null )){
    if(email.value === usuario.email && senha.valeu === usuario.senha){
        window.location.href = ".index/html";
    } else {
        throw new error("Email ou senha invalidos")
    }
   }
  
} catch (error) {




});
