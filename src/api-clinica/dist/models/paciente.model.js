"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Paciente = class Paciente extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Paciente = Paciente;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Paciente.prototype, "idPaciente", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Paciente.prototype, "nome", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Paciente.prototype, "dataNascimento", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Paciente.prototype, "morada", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Paciente.prototype, "telefone", void 0);
exports.Paciente = Paciente = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Paciente);
//# sourceMappingURL=paciente.model.js.map