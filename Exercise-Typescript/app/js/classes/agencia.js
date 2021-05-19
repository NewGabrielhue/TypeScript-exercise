"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endereco_1 = require("./endereco");
var Agencia = /** @class */ (function () {
    function Agencia(nome, enderecoCidade, enderecoBairro) {
        this.nome = nome;
        this.endereco = new endereco_1.default(enderecoCidade, enderecoBairro);
    }
    Object.defineProperty(Agencia.prototype, "endereco", {
        get: function () {
            return this._endereco;
        },
        set: function (endereco) {
            this._endereco = endereco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Agencia.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    return Agencia;
}());
exports.default = Agencia;
