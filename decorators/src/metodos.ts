

function validarPessoa(idade: number){
    return(target: any, key: string, descriptor: PropertyDescriptor) => {
        const  metodoOriginal = descriptor.value

        descriptor.value = function (){
            if(idade < 18){
            console.log("Cadastrando um menor de idade")
            } else {
            console.log("Cadastrando um maior de idade")
            return metodoOriginal.apply(this)
            }
        }
    }
}

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
