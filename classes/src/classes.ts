
 /*
 ### O que é  uma classe? ###
 >> Uma classe armazena as caracteristicas e as açoes que esse objeto vai possuir.
 >> Ou seja conjunto de atributos e metodos.
 */

 type Status = "Aberto" | "Fechado"
class Loja {
    //Atributos da nossa classe.
    nome: string;
    categoria: string;

    constructor(nome: string, categoria:string) {
        this.nome = nome
        this.categoria = categoria
    }

    criarloja():void{
        console.log(`Loja criada com sucesso, nome: ${this.nome}, categoria: ${this.categoria}`)
    }

    emitirPedido(mesa: number, ...pedidos: string[]): string{
        

        pedidos.map((pedidos) => {
            console.log(`A mesa pediu: ${pedidos}`)
        })
        
        return `Pedido na mesa: ${mesa}`
    }

    mudarStatus(status: Status):void{
        if(status === "Aberto"){
            console.log("Loja ABERTA!")
        }else{
            console.log("Loja FECHADA!")
        }
    }
}

const JbRestaurante = new Loja("JBRestaurante", "Restaurante")

console.log(JbRestaurante.criarloja())

const retornoLoja = JbRestaurante.emitirPedido(33, "Combo1 Carne de sol", "Coca 2L", "Macarrão ao molho branco")
console.log(retornoLoja)

console.log(JbRestaurante.mudarStatus("Aberto"))


