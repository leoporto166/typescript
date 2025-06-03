
type Uuid = string | number | null;

function cadastrar(uuid: Uuid, nome: string): void{
    console.log(`Conta referente ao UUID: ${uuid}, Bem vindo ${nome}`)
}

cadastrar(33, "Leonardo")

console.log("========================================================")

type Moedas = "BRL" | "EUR" | "USD"

function comprar(moeda: Moedas): void{
    console.log(`Compra realizada com a moeda: ${moeda}`)
}

comprar("BRL")