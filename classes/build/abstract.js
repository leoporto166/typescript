"use strict";
class ContaBanco {
}
class PessoFisica extends ContaBanco {
    abrirConta(dados) {
        console.log(`
            Conta P.Fisica criada com sucesso!
            Seu nome: ${dados.nome}
            Número da conta: ${dados.numero_conta}
            `);
        return true;
    }
}
const leo = new PessoFisica();
leo.abrirConta({
    nome: "Leonardo Porto",
    numero_conta: "G-33",
    endereco: "Rua 33, setor Centro"
});
