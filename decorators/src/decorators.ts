import { logInfo } from "./decoratorss/validacoes"

@logInfo("Sistema criado!")
class Sistema{

}

function servidorIp(novoIp: string){
   return(target: any) => {
      return class extends target{
         ip = novoIp
      }
   }
}

@servidorIp("192.168.100.33")
class Servidor{

}

const servidor1 = new Servidor
console.log(servidor1)