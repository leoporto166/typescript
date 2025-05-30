
//unknown = Desconhecido

let valorUser: unknown;

let idPedido: any = 123;
let totalEntregas: unknown = 33;

let idTotal: number = idPedido;
//let idEntregador: number = totalEntregas; ISSO ESTA ERRADO, POIS UNKNOWM NÃO PODE RECEBER OUTRO TIPO

let idEntregador: unknown = totalEntregas; 
//Correto

console.log(idEntregador)