
class Usuario {
    nome: string;
    email: string;

    constructor(nome: string, email: string){
        this.nome = nome
        this.email = email
    }
}

class Admin extends Usuario{
    cargo: string;
    nivel: number;

    constructor(nome: string, email: string, cargo: string, nivel: number){
        super(nome, email)

        this.cargo = cargo
        this.nivel = nivel
    }

    mostraADM(){
        console.log(`
        Bem vindo: ${this.nome}
        Seu email logado é: ${this.email}
        Seu cargo: ${this.cargo}
        Seu nivel: ${this.nivel}
        Bom trabalho!`)
    }
}

const admin1 = new Admin("Leonardo", "leo@gmail.com", "Programador Seniôr", 33)
console.log(admin1.mostraADM())