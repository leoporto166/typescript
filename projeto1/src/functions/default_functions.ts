
function cadastro(senha: string, email: string, nome = "Usuario", idade?: number): void{
    let data = { senha, email, nome, idade}
    console.log(data)
}

cadastro("123456", "Leo@gmail.com", undefined, 17)