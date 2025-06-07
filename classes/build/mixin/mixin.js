"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apllyMixin_1 = require("./apllyMixin");
class Automovel {
    ligar() {
        console.log("LIGANDO AUTOMOVEL");
    }
    desligar() {
        console.log("DESLIGANDO AUTOMOVEL");
    }
}
class Especificacao {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, apllyMixin_1.applyMixins)(Carro, [Automovel, Especificacao]);
const punto = new Carro("punto 1.6");
punto.ligar();
punto.descricao = "Punto Completo! Automatico";
console.log(punto);
punto.desligar();
