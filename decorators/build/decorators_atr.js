"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validarNome(tamanho) {
    return (target, key) => {
        let valor = target[key];
        const getter = () => valor;
        const setter = (value) => {
            if (value === "" || value.length < tamanho) {
                console.log("Modifique o nome do jogo. aumente os caracteres ou escreva algo");
            }
            else {
                valor = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
class Jogo {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
}
__decorate([
    validarNome(5)
], Jogo.prototype, "nome", void 0);
__decorate([
    validarNome(15)
], Jogo.prototype, "descricao", void 0);
const jogo1 = new Jogo("Rocket League", "Jogo de Futebol com carros");
console.log(jogo1.nome, jogo1.descricao);
console.log(jogo1.descricao);
