

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