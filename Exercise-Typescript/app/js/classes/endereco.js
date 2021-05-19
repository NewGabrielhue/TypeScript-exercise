"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endereco = /** @class */ (function () {
    function Endereco(cidade, bairro) {
        this.cidade = cidade;
        this.bairro = bairro;
    }
    Object.defineProperty(Endereco.prototype, "cidade", {
        get: function () {
            return this._cidade;
        },
        set: function (cidade) {
            this._cidade = cidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "bairro", {
        get: function () {
            return this._bairro;
        },
        set: function (bairro) {
            this._bairro = bairro;
        },
        enumerable: false,
        configurable: true
    });
    return Endereco;
}());
exports.default = Endereco;
