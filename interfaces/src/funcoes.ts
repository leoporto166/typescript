
interface ICursoProps {
    id: string;
    nome: string;
    preco: number;

    promocao: (preco: number) => void;
}

function promocaoCurso(preco: number): void {
    console.log(`Não perca essa PROMOÇÃO! o curso esta saindo por  R$ ${preco}`)
}

const novoCurso: ICursoProps = {
    id: "1",
    nome: "Curso TS",
    preco: 600,

    promocao: promocaoCurso
}

console.log(novoCurso)
console.log(novoCurso.promocao(300))    

interface ISomaProps{
    (valor1: number, valor2:number): number;
}

let Soma: ISomaProps = (valor1: number, valor2:number): number => {
    console.log("=========================");
    console.log("Resultado", valor1+valor2);
    return valor1 + valor2
}

Soma(3, 30)

