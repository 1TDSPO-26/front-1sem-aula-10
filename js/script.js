// um obejto para comparar com os dados do formulário
// const usuario = {
//     nome : "ALexandre",
//     email : "alexandre@email.com",
//     senha : "223344"
// } 

//criando lista de objetos (usuários)
let usuario =[
    {
        email : "alexandre@email.com",
        senha : "223344"
    }, 
    {
        email : "gus@email.com",
        senha : "556677"
    },
    "maça"
]
console.log(usuario);
console.log(usuario[0]);
console.log(usuario[0].email);


const botaoEntrar = document.getElementById("btnEntrar");

botaoEntrar.addEventListener("click", function (evento) {
  evento.preventDefault();
  try {
 
    const email = document.getElementById("idEmail");
    const senha = document.getElementById("idSenha");

   
    console.log(email.value);
    console.log(senha.value);

    if (!(email === null && senha === null)) {
      if (email.value === usuario.email && senha.value === usuario.senha) {
        window.location.href = "./index.html";
      } else {
        throw new Error("Email ou senha incorretos!");
      }
    } else {
      throw new Error("Preencha os campos corretamente!");
    }
    
  } catch (error) {
    alert(error.message);
  }
});

