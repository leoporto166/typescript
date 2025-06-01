"use strict";
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`Você fez ${quantidadeVendas} vendas hoje`);
    let total = vendas.reduce((acumulador, venda) => acumulador + venda, 0);
    console.log(total);
}
totalVendas(1, 33);
function mostrarNomes(...nomes) {
    let totalNomes = nomes.length;
    console.log(totalNomes);
    nomes.map(nome => {
        console.log(nome);
    });
}
mostrarNomes("Leonardo", "Pig", "Kaua");
