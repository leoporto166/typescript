"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./database/connection");
const app_1 = __importDefault(require("./database/app"));
function acessarCriacao() {
    (0, connection_1.criarTime)({ id: 33, nome: "GoiasEC", cor: "Verde e Branco", estado: "Goias" });
}
acessarCriacao();
(0, app_1.default)();
