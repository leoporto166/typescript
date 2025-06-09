
interface NovoProduto<V, N>{
    nome: N;
    preco: V;

    formatar(valor: V): string;

}

const produto1: NovoProduto<number, string> = {
    nome: "Feijão",
    preco: 333,

    formatar(valor: number): string{
        let valorFormatado = valor.toLocaleString("pt-BR",
            {style: "currency",
             currency: "BRL"
            }
        )

        return valorFormatado

    }

}

console.log(produto1.nome, produto1.formatar(333))

console.log("================================")


type Novo<T> = {
    nome: string;
    preco: T;
} 

const produto2: Novo<number> = {
    nome: "Arroz",
    preco: 3333,
}

console.log(produto2.nome, produto2.preco)