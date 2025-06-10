export function validarPessoa(idade: number){
    return(target: any, key: string, descriptor: PropertyDescriptor) => {
        const  metodoOriginal = descriptor.value

        descriptor.value = function (){
            if(idade < 18){
            console.log("Cadastrando um menor de idade")
            } else {
            console.log("Cadastrando um maior de idade")
            return metodoOriginal.apply(this)
            }
        }
    }
}


export function validarNome(tamanho: number){

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


export function logInfo(mensagem: string){
   return(target:any) => {
    console.log(`${mensagem}, ${target}`)
   }
}