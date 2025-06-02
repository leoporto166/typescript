"use strict";
/*let loja: object;

loja = {
    nome: "BKburgues",
    endereco: "Rua x",
    status: true,
} */
const LojaBK = {
    nome: "BKburgues",
    endereco: "Rua x",
    status: true,
};
console.log(LojaBK);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Enderelo ${endereco}`);
    console.log(`Status de atividade ${status}`);
    console.log("=================================");
}
novaLoja({ nome: "OutliersLTDA", endereco: "Rua y", status: true });
novaLoja({ nome: "PortoFlier", endereco: "Rua p", status: false });
