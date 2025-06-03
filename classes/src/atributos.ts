
 /*
 ### O que é  uma classe? ###
 >> Uma classe armazena as caracteristicas e as açoes que esse objeto vai possuir.
 >> Ou seja conjunto de atributos e metodos.
 */

class Loja {
    //Atributos da nossa classe.
    nome: string;
    categoria: string;

    constructor(nome: string, categoria:string) {
        this.nome = nome
        this.categoria = categoria
    }
}

const JbRestaurante = new Loja("JBRestaurante", "Restaurante")

console.log(JbRestaurante.nome)
console.log(JbRestaurante.categoria)