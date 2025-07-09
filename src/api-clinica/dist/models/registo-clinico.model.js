"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistoClinico = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const medico_model_1 = require("./medico.model");
const paciente_model_1 = require("./paciente.model");
let RegistoClinico = class RegistoClinico extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.RegistoClinico = RegistoClinico;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], RegistoClinico.prototype, "idRegistoClinico", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], RegistoClinico.prototype, "dataHora", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], RegistoClinico.prototype, "descricao", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => medico_model_1.Medico, { name: 'medico' }),
    tslib_1.__metadata("design:type", Number)
], RegistoClinico.prototype, "idMedico", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => paciente_model_1.Paciente, { name: 'paciente' }),
    tslib_1.__metadata("design:type", Number)
], RegistoClinico.prototype, "idPaciente", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], RegistoClinico.prototype, "idConsulta", void 0);
exports.RegistoClinico = RegistoClinico = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], RegistoClinico);
//# sourceMappingURL=registo-clinico.model.js.map