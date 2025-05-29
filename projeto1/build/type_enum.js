"use strict";
var DesignCor;
(function (DesignCor) {
    DesignCor["white"] = "#FFFFFF";
    DesignCor["black"] = "#000000";
})(DesignCor || (DesignCor = {}));
console.log(DesignCor.black);
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Segunda"] = 0] = "Segunda";
    DiaDaSemana[DiaDaSemana["Ter\u00E7a"] = 1] = "Ter\u00E7a";
    DiaDaSemana[DiaDaSemana["Quarta"] = 2] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 3] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 4] = "Sexta";
})(DiaDaSemana || (DiaDaSemana = {}));
console.log(DiaDaSemana[0]);
