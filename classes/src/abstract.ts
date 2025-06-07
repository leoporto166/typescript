type DadosBanco = {
    nome: string;
    numero_conta: string;
    endereco: string;
}

abstract class ContaBanco {
    abstract abrirConta(dados: DadosBanco): boolean;
}

class PessoFisica extends ContaBanco{
    abrirConta(dados: DadosBanco): boolean {
        console.log(`
            Conta P.Fisica criada com sucesso!
            Seu nome: ${dados.nome}
            Número da conta: ${dados.numero_conta}
            `)

        return true;
    }
    
}

const leo = new PessoFisica();

leo.abrirConta({
    nome: "Leonardo Porto",
    numero_conta: "G-33",
    endereco: "Rua 33, setor Centro"
})