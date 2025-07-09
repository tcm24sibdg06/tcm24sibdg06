"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Funcionario = class Funcionario extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Funcionario = Funcionario;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Funcionario.prototype, "idFuncionario", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Funcionario.prototype, "nome", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Funcionario.prototype, "telefone", void 0);
exports.Funcionario = Funcionario = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Funcionario);
//# sourceMappingURL=funcionario.model.js.map