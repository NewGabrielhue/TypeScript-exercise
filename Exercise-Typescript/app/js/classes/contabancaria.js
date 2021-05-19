"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./cliente");
var agencia_1 = require("./agencia");
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(clienteNome, agenciaNome, agenciaCidade, agenciaBairro, numero) {
        this.saldo = 0;
        this.cliente = new cliente_1.default(clienteNome);
        this.agencia = new agencia_1.default(agenciaNome, agenciaCidade, agenciaBairro);
        this.numero = numero;
    }
    Object.defineProperty(ContaBancaria.prototype, "cliente", {
        get: function () {
            return this._cliente;
        },
        set: function (cliente) {
            this._cliente = cliente;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaBancaria.prototype, "agencia", {
        get: function () {
            return this._agencia;
        },
        set: function (agencia) {
            this._agencia = agencia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaBancaria.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (numero) {
            this._numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * informacoesConta
     */
    ContaBancaria.prototype.informacoesConta = function () {
        console.log("N\u00FAmero da conta: " + this.numero + "\nNome do cliente: " + this.cliente.nome + "\nSaldo: " + this.saldo + "\nNome da ag\u00EAncia: " + this.agencia.nome + "\nCidade da ag\u00EAncia: " + this.agencia.endereco.cidade + "\nBairro da ag\u00EAncia: " + this.agencia.endereco.bairro);
    };
    return ContaBancaria;
}());
exports.default = ContaBancaria;
