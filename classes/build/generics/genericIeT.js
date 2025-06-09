"use strict";
const produto1 = {
    nome: "Feijão",
    preco: 333,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString("pt-BR", { style: "currency",
            currency: "BRL"
        });
        return valorFormatado;
    }
};
console.log(produto1.nome, produto1.formatar(333));
console.log("================================");
const produto2 = {
    nome: "Arroz",
    preco: 3333,
};
console.log(produto2.nome, produto2.preco);
