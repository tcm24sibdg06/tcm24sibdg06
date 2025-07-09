"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricoConsulta = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const consulta_model_1 = require("./consulta.model");
const funcionario_model_1 = require("./funcionario.model");
let HistoricoConsulta = class HistoricoConsulta extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.HistoricoConsulta = HistoricoConsulta;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], HistoricoConsulta.prototype, "idHistorico", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], HistoricoConsulta.prototype, "dataAlteracao", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], HistoricoConsulta.prototype, "tipoAlteracao", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => consulta_model_1.Consulta, { name: 'consulta' }),
    tslib_1.__metadata("design:type", Number)
], HistoricoConsulta.prototype, "idConsulta", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => funcionario_model_1.Funcionario, { name: 'funcionario' }),
    tslib_1.__metadata("design:type", Number)
], HistoricoConsulta.prototype, "idFuncionario", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], HistoricoConsulta.prototype, "alteracoes", void 0);
exports.HistoricoConsulta = HistoricoConsulta = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], HistoricoConsulta);
//# sourceMappingURL=historico-consulta.model.js.map