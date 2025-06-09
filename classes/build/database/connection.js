"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarTime = criarTime;
function criarTime(info) {
    console.log(` Seu time foi criado com sucesso:
        Nome: ${info.nome}
        Cor: ${info.cor}
        Estado: ${info.estado}
        `);
}
