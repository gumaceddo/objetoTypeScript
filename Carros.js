"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Veiculo_1 = require("./Veiculo");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* METODOS */
    Carro.prototype.trocarMarcha = function () {
        console.log("Trocando marcha com a MÃO");
    };
    Carro.prototype.freia = function () {
        console.log("Freia com o PÉ");
    };
    ;
    return Carro;
}(Veiculo_1.VeiculoTerrestre));
exports.Carro = Carro;
