import { validarNome } from "./decoratorss/validacoes"

class Jogo{
    @validarNome(5)
    nome:string;

    @validarNome(15)
    descricao: string

    constructor(nome: string, descricao: string) {
        this.nome = nome;
        this.descricao = descricao;
        
    }
}

const jogo1 = new Jogo("Rocket League", "Jogo de Futebol com carros")
console.log(jogo1.nome, jogo1.descricao)
console.log(jogo1.descricao)