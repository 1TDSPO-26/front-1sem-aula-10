// um obejto para comparar com os dados do formulário
// const usuario = {
//     nome : "ALexandre",
//     email : "alexandre@email.com",
//     senha : "223344"
// } 

//criando lista de objetos (usuários)
// let usuario =[
//     {
//         email : "alexandre@email.com",
//         senha : "223344"
//     }, 
//     {
//         email : "gus@email.com",
//         senha : "556677"
//     },
//     "maça"
// ]
// console.log(usuario);
// console.log(usuario[0]);
// console.log(usuario[0].email);

//Lista de usuários .
const usuarios = [
  { nome: "Zezinho", email: "zezinho@gmail.com", senha: "123456" },
  { nome: "Maria Eduarda", email: "madu@outlook.com", senha: "senhaSegura1" },
  { nome: "João Paulo", email: "jp.silva@yahoo.com", senha: "admin2026" },
  { nome: "Ana Beatriz", email: "anabea@gmail.com", senha: "mudar123" },
  { nome: "Ricardo Alves", email: "rick.alves@hotmail.com", senha: "qwerty987" },
  { nome: "Fernanda Lima", email: "fer.lima@gmail.com", senha: "flima_2024" },
  { nome: "Lucas Gabriel", email: "lucas.gab@uol.com.br", senha: "minhasenha" },
  { nome: "Camila Rocha", email: "camila.rocha@gmail.com", senha: "rocha_camila" },
  { nome: "Bruno Henrique", email: "bh_oficial@gmail.com", senha: "flamengo81" },
  { nome: "Sofia Martins", email: "sofia.m@icloud.com", senha: "pass_sofia" }
];

const botaoEntrar = document.querySelector("button[type='submit']");
botaoEntrar.addEventListener("click", function (evento) {
  evento.preventDefault();

  try {
    //Recuperando os 2 campos do formulário de login e imprimir no console:
    const email = document.getElementById("idEmail");
    const senha = document.getElementById("idSenha");

    //Imprimindo o valor dos campos em tela.
    console.log(email.value);
    console.log(senha.value);

    if (usuarios) {
      
      for (let x = 0; x < usuarios.length; x++) {
        
        if ((email.value === usuarios[x].email) && (senha.value === usuarios[x].senha)) {
          alert("Login realizado com sucesso!");      
          window.location.href = "../index.html";
        } else {
          throw new Error("Nome de usuário ou senha incorretos!");
        }

      }

    } else {
      throw new Error("Preencha os campos corretamente!");
    }
  } catch (error) {
    alert(error.message);
  }
});