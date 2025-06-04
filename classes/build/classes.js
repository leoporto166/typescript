"use strict";
/*
### O que é  uma classe? ###
>> Uma classe armazena as caracteristicas e as açoes que esse objeto vai possuir.
>> Ou seja conjunto de atributos e metodos.
*/
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarloja() {
        console.log(`Loja criada com sucesso, nome: ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedidos) => {
            console.log(`A mesa pediu: ${pedidos}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "Aberto") {
            console.log("Loja ABERTA!");
        }
        else {
            console.log("Loja FECHADA!");
        }
    }
}
const JbRestaurante = new Loja("JBRestaurante", "Restaurante");
console.log(JbRestaurante.criarloja());
const retornoLoja = JbRestaurante.emitirPedido(33, "Combo1 Carne de sol", "Coca 2L", "Macarrão ao molho branco");
console.log(retornoLoja);
console.log(JbRestaurante.mudarStatus("Aberto"));
