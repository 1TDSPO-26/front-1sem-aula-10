//Montando um objeto para comparar com os dados do formulário
const usuario = {
  nome: "Zezinho",
  email: "zezinho@gmail.com",
  senha: "123456",
};

//Recuperando o botão entrar
const botaoEntrar = document.getElementById("btnEntrar");

//Atrelar ao botão um evento
//Vamos utilizar uma função que escuta eventos.
//Essa função se chama addEventListener(param1, param2) e recebe dois parâmetros:
//O primeiro é o evento em si (click ou outro qualquer).
//O segundo é a função, que pode ser uma função anônima ou uma função declarada.
//Que será executada quando esse evento acontecer.

//Ex: botaoEntrar.addEventListener("click", function(){ Coisas aqui dentro da função para serem executadas quando o botão for clicado. });

botaoEntrar.addEventListener("click", function (evento) {
  evento.preventDefault();

  try {
    //Recuperando os 2 campos do formulário de login e imprimir no console:
    const email = document.getElementById("idEmail");
    const senha = document.getElementById("idSenha");

    //Imprimindo o valor dos campos em tela.
    console.log(email.value);
    console.log(senha.value);

    //Vamos comparar os dados digitados no formulário com os dados do objeto "usuario" e caso seja valido, redirecionar para a página index.html.

    if (!(email === null && senha === null)) {
      if (email.value === usuario.email && senha.value === usuario.senha) {
        window.location.href = "./index.html";
      } else {
        throw new Error("Nome de usuário ou senha incorretos!");
      }
    } else {
      throw new Error("Preencha os campos corretamente!");
    }
    
  } catch (error) {
    alert(error.message);
  }
});
