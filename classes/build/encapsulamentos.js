"use strict";
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
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    mudarNome() {
        console.log("Nome ALTERADO");
    }
}
const public1 = new EncapsulamentesPublic("Leonardo", "leo@gmail.com");
console.log(public1);
console.log("==========================================================");
//PRIVATE
class EncapsulamentesProtect {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    mudarNome(nome) {
        console.log(`Nome ALTERADO: ${nome}`);
    }
}
class Protected extends EncapsulamentesProtect {
    constructor(id, nome, email) {
        super(id, nome);
        this.email = email;
    }
    acessarMudarNome() {
        this.mudarNome("Leonardo");
    }
}
const protected1 = new Protected(33, "Leo", "leo@gmail.com");
console.log(protected1);
console.log(protected1.acessarMudarNome());
console.log("==================================");
//PRIVATE
class EncapsulamentesPrivate {
    constructor() {
        this.limite = 450;
    }
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            console.log(`Seu aumento foi aceito e passa a ser: ${quantidade}`);
        }
        else {
            console.log(`Seu aumente foi RECUSADO e contina: ${this.limite}`);
        }
    }
    solicitarAumento(estaAutenticado, quantidade) {
        if (estaAutenticado === true) {
            this.aumentarLimite(quantidade);
            this.limite = quantidade;
        }
        else {
            return false;
        }
    }
}
const fulano = new EncapsulamentesPrivate();
fulano.solicitarAumento(true, 900);
console.log(fulano);
console.log("===================================");
class EncapsulamentesReadonly {
    constructor(nome, idade) {
        this.id = "33";
        this.nome = nome;
        this.idade = idade;
    }
}
const usuario1 = new EncapsulamentesReadonly("Leo", 17);
console.log(usuario1);
console.log(`O id do(a) ${usuario1.nome} é: ${usuario1.id}`);
//usuario1.id("333") -> ERRADO
