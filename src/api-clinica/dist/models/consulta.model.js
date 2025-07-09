"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const especialidade_model_1 = require("./especialidade.model");
const historico_consulta_model_1 = require("./historico-consulta.model");
const medico_model_1 = require("./medico.model");
const paciente_model_1 = require("./paciente.model");
const registo_clinico_model_1 = require("./registo-clinico.model");
let Consulta = class Consulta extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Consulta = Consulta;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Consulta.prototype, "idConsulta", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Consulta.prototype, "dataHora", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Consulta.prototype, "observacoes", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => paciente_model_1.Paciente, { name: 'paciente' }),
    tslib_1.__metadata("design:type", Number)
], Consulta.prototype, "idPaciente", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => medico_model_1.Medico, { name: 'medico' }),
    tslib_1.__metadata("design:type", Number)
], Consulta.prototype, "idMedico", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => especialidade_model_1.Especialidade, { name: 'especialidade' }),
    tslib_1.__metadata("design:type", Number)
], Consulta.prototype, "idEspecialidade", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => historico_consulta_model_1.HistoricoConsulta, { keyTo: 'idConsulta' }),
    tslib_1.__metadata("design:type", Array)
], Consulta.prototype, "alteracoes", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => registo_clinico_model_1.RegistoClinico, { keyTo: 'idConsulta' }),
    tslib_1.__metadata("design:type", registo_clinico_model_1.RegistoClinico)
], Consulta.prototype, "registoClinico", void 0);
exports.Consulta = Consulta = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Consulta);
//# sourceMappingURL=consulta.model.js.map