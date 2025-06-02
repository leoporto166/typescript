
interface IProdutosProps {
    readonly id: string;
    nome: string;
    descricao: string;
}

let produto1: IProdutosProps = {
    id: "1",
    nome: "Bandeira Goias",
    descricao: "A BANDEIRA DO MAIOR DO CENTRO-OESTE"
}

console.log(produto1)

//produto1.id = "33" -> ERRO, pois "id" é READONLY (uma vez que seu valor for informado ele nunca sera alterado)