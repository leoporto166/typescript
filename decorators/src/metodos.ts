import {validarPessoa } from "./decoratorss/validacoes"


class Cadastro{
    nome: string;

    constructor(nome: string) {
        this.nome = nome
    }

    @validarPessoa(17)
    cadastroPessoa(){
        console.log(`Bem vindo ${this.nome} seu cadastro foi realizado com sucesso!`)
    }
}

const pessoa1 = new Cadastro("Leonardo")

pessoa1.cadastroPessoa()
