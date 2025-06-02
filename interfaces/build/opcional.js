"use strict";
const Usuario = {
    nome: "Leonardo",
    apelido: "Leo",
    idade: 17,
    sexo: "Homem",
};
console.log(Usuario);
function NovoUsuario({ nome, apelido, idade, sexo }) {
    console.log("=========================");
    console.log(`Bem vindo ${apelido}`);
    console.log(`${nome} tem ${idade} anos`);
    console.log(`${nome} é do sexo ${sexo}`);
}
NovoUsuario({ nome: "Kaua", apelido: "Kiwi", idade: 17 });
