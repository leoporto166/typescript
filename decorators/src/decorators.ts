
function logInfo(mensagem: string){
   return(target:any) => {
    console.log(`${mensagem}, ${target}`)
   }
}

@logInfo("Sistema criado!")
class Sistema{

}