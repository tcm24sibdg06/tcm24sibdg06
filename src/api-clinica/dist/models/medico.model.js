"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medico = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Medico = class Medico extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Medico = Medico;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Medico.prototype, "idMedico", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Medico.prototype, "nome", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Medico.prototype, "telefone", void 0);
exports.Medico = Medico = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Medico);
//# sourceMappingURL=medico.model.js.map