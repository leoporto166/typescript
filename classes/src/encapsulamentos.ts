

// Existem quatro modificadores de acesso que podemos atribuir aos atributos como:
// public, protected, private, readonly (apenas nos atributos)

/*
  >> Protected: Atributos e métodos protegidos podem ser acessados ou alterados por meio da 
  classe em que foram criados e por meio das classes que foram filhas (que extende a classe pai).

  >> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados, 
  Ou seja ele nao pode ser acessado ou modificado fora da classe em que foi criado.

  >> E o famoso readonly: (apenas para os atributos) Podemos apenas ler e ver esse atributo porem
  nao podemos alterar ele.
*/

//PUBLIC

class EncapsulamentesPublic {
    public nome: string;
    public email: string;

    constructor(nome: string, email: string){
        this.nome = nome
        this.email = email
    }

    public mudarNome(){
        console.log("Nome ALTERADO")
    }

}

const public1 = new EncapsulamentesPublic("Leonardo", "leo@gmail.com")

console.log(public1)

console.log("==========================================================")


//PRIVATE

class EncapsulamentesProtect {
    protected id: number;
    nome: string;

    constructor(id: number, nome: string){
        this.id = id
        this.nome = nome
    }

    protected mudarNome(nome: string){
        console.log(`Nome ALTERADO: ${nome}`)
    }

}

class Protected extends EncapsulamentesProtect {
    email: string;

    constructor(id: number, nome: string, email: string){
        super(id, nome)

        this.email = email
    }

    acessarMudarNome(){
        this.mudarNome("Leonardo")
    }

}

const protected1 = new Protected(33, "Leo", "leo@gmail.com")
console.log(protected1)

console.log(protected1.acessarMudarNome())

console.log("==================================")

//PRIVATE

class EncapsulamentesPrivate{
    private limite: number = 450

    private aumentarLimite(quantidade: number):void{
        if(quantidade < 1000){
            console.log(`Seu aumento foi aceito e passa a ser: ${quantidade}`)
        } else{
            console.log(`Seu aumente foi RECUSADO e contina: ${this.limite}`)
        }
    }

    solicitarAumento(estaAutenticado: boolean, quantidade: number): void | boolean{
        if(estaAutenticado === true){
            this.aumentarLimite(quantidade)
            this.limite = quantidade
        }else {
            return false
        }

    }



}

const fulano = new EncapsulamentesPrivate()

fulano.solicitarAumento(true, 900)
console.log(fulano)

console.log("===================================")

class EncapsulamentesReadonly{
    readonly id: string = "33";
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }
}

const usuario1 = new EncapsulamentesReadonly("Leo", 17)
console.log(usuario1)

console.log(`O id do(a) ${usuario1.nome} é: ${usuario1.id}`)

//usuario1.id("333") -> ERRADO