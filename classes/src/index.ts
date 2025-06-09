
import {criarTime} from "./database/connection"
import status from "./database/app"

function acessarCriacao(){
    criarTime({id: 33, nome: "GoiasEC", cor: "Verde e Branco", estado: "Goias"})
}

acessarCriacao();

status();