
function validarNome(tamanho: number){

    return (target: any, key: string) => {
        let valor = target[key]

        const getter = () => valor
        const setter = (value: string) =>{
            if(value === "" || value.length < tamanho){
                console.log("Modifique o nome do jogo. aumente os caracteres ou escreva algo")
            } else{
                valor = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

class Jogo{
    @validarNome(5)
    nome:string;

    @validarNome(15)
    descricao: string

    constructor(nome: string, descricao: string) {
        this.nome = nome;
        this.descricao = descricao;
        
    }
}

const jogo1 = new Jogo("Rocket League", "Jogo de Futebol com carros")
console.log(jogo1.nome, jogo1.descricao)
console.log(jogo1.descricao)