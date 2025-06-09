

function repositorio<T extends string | number>(){
    let dados: T;

    function getDados(){
        return dados
    }

    function setDados(novoDado: T){
        dados = novoDado
    }

    return {getDados, setDados}
}

const repo1  = repositorio<number>()

repo1.setDados(33)

console.log(repo1.getDados())