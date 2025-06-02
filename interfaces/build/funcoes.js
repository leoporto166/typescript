"use strict";
function promocaoCurso(preco) {
    console.log(`Não perca essa PROMOÇÃO! o curso esta saindo por  R$ ${preco}`);
}
const novoCurso = {
    id: "1",
    nome: "Curso TS",
    preco: 600,
    promocao: promocaoCurso
};
console.log(novoCurso);
console.log(novoCurso.promocao(300));
let Soma = (valor1, valor2) => {
    console.log("=========================");
    console.log("Resultado", valor1 + valor2);
    return valor1 + valor2;
};
Soma(3, 30);
