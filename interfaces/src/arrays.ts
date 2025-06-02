
interface ItecProps {
    readonly id: string;
    nome: string;
    descricao: string[];
}

let tec1: ItecProps = {
    id: "1",
    nome: "TypeScript",
    descricao: ["Fremework do JS", "Tipagem"]
}

console.log(tec1)

interface ITecnologiaProps {
    readonly id: string;
    nome: string;
    descricao?: string;
}

interface INomeProps {
    tecnologia: ITecnologiaProps[];
}

console.log("=========================")

let frontend: INomeProps = {
    
    tecnologia: [
        {id: "1", nome: "typeScript", descricao: "Framework do JS"},
        {id: "2", nome: "React"}
    ]
}

console.log(frontend.tecnologia)