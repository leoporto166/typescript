
type Info = {
    id: number;
    nome: string;
    descricao?: string;
}
let produto: Info = {
    id: 33,
    nome: "Mouse",
    descricao: "Mouse gamer"
}

console.log(produto)

console.log("==========================")

type Categoria = {
    quantidade: number;
}

type Final = Info & Categoria
const produtoFinal: Final ={
    id: 333,
    nome: "Teclado",
    descricao: "Teclado gamer",
    quantidade: 3
}

console.log(produtoFinal)

