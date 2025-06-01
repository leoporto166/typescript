
let n1: number = 33;
//let n2: string = "33" -> ERRO tem que ser obrigatoriamente um number
let n2: number = 33;

function soma(valor1: number, valor2: number): number{
    let soma = valor1 + valor2;

    return soma
}

console.log(soma(n1, n2))

function noReturn(username: string): void{
    console.log(`Bem vindo ${username}`)

    //return true -> ERRO o void fala que a função não pode retornar nada
}

noReturn("Leonardo")

function soma2(valor1: number, valor2: number): string {
    let soma2 = valor1 + valor2

    if(soma2 < 20){
        return "Soma menor que 20"
    } else {
        return "Soma maior que 20"
    }
}

console.log(soma2(n1, n2))