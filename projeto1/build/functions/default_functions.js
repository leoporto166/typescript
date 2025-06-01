"use strict";
function cadastro(senha, email, nome = "Usuario", idade) {
    let data = { senha, email, nome, idade };
    console.log(data);
}
cadastro("123456", "Leo@gmail.com", undefined, 17);
