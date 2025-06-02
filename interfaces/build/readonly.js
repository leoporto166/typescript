"use strict";
let produto1 = {
    id: "1",
    nome: "Bandeira Goias",
    descricao: "A BANDEIRA DO MAIOR DO CENTRO-OESTE"
};
console.log(produto1);
//produto1.id = "33" -> ERRO, pois "id" é READONLY (uma vez que seu valor for informado ele nunca sera alterado)
