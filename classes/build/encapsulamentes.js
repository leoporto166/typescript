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
const public = new EncapsulamentesPublic("Leonardo", "leo@gmail.com");
console.log(public);
