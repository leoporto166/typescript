"use strict";
class Jogos {
    constructor(servidor) {
        this.id = "33";
        this.servidor = servidor;
    }
    get getServidorIp() {
        console.log("=== GET ====");
        console.log(this.servidor);
        return this.servidor;
    }
    set setServidorip(novoIp) {
        if (novoIp === this.servidor) {
            throw new Error("Error: O ip novo não pode ser igual ao antigo!");
        }
        else {
            this.servidor = novoIp;
        }
    }
}
const Fifa25 = new Jogos("192.168.66.10");
try {
    Fifa25.setServidorip = "192.168.33.10";
}
catch (error) {
    console.log(error);
}
Fifa25.getServidorIp;
