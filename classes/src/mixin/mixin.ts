import { applyMixins} from "./apllyMixin";

class Automovel{
    ligar(): void{
        console.log("LIGANDO AUTOMOVEL")
    }
    desligar(): void{
        console.log("DESLIGANDO AUTOMOVEL")
    }
}

class Especificacao{
    descricao: string;

    constructor(descricao: string){
        this.descricao = descricao
    }
}

class Carro {
    nome: string

    constructor(nome: string){
        this.nome = nome
    }
}

interface Carro extends Automovel, Especificacao { }

applyMixins(Carro, [Automovel, Especificacao])

const punto = new Carro("punto 1.6")

punto.ligar()

punto.descricao = "Punto Completo! Automatico"

console.log(punto)

punto.desligar()

