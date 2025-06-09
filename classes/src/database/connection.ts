type Time = {
    readonly id: number;
    nome: string;
    cor: string;
    estado: string;
}


export function criarTime(info: Time){
    console.log(` Seu time foi criado com sucesso:
        Nome: ${info.nome}
        Cor: ${info.cor}
        Estado: ${info.estado}
        `)
}