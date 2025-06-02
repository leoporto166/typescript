
interface IJogoProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];
}

let fifa: IJogoProps = {
    id: "33",
    nome: "fifa-24",
    descricao: "Jogo de futebol online",
    plataforma: ["PC", "XBOX One", "PS5"],
}

interface IDLC extends IJogoProps {
    jogoOriginal: IJogoProps;
    novoConteudo: string[];
}

let fifanew: IDLC = {
    id: "66",
    nome: "new fifa-24",
    descricao: "Jogo de futebol online",
    plataforma: ["PC", "XBOX One", "PS5"],
    novoConteudo: ["Novos personagens", "Novos estadios"],
    jogoOriginal: fifa,

}

console.log(fifanew)