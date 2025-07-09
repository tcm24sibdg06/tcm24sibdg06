"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaHistoricoConsultaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ConsultaHistoricoConsultaController = class ConsultaHistoricoConsultaController {
    constructor(consultaRepository) {
        this.consultaRepository = consultaRepository;
    }
    async find(id, filter) {
        return this.consultaRepository.alteracoes(id).find(filter);
    }
    async create(id, historicoConsulta) {
        return this.consultaRepository.alteracoes(id).create(historicoConsulta);
    }
    async patch(id, historicoConsulta, where) {
        return this.consultaRepository.alteracoes(id).patch(historicoConsulta, where);
    }
    async delete(id, where) {
        return this.consultaRepository.alteracoes(id).delete(where);
    }
};
exports.ConsultaHistoricoConsultaController = ConsultaHistoricoConsultaController;
tslib_1.__decorate([
    (0, rest_1.get)('/consultas/{id}/historico-consultas', {
        responses: {
            '200': {
                description: 'Array of Consulta has many HistoricoConsulta',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.HistoricoConsulta) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaHistoricoConsultaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/consultas/{id}/historico-consultas', {
        responses: {
            '200': {
                description: 'Consulta model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.HistoricoConsulta) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HistoricoConsulta, {
                    title: 'NewHistoricoConsultaInConsulta',
                    exclude: ['idHistorico'],
                    optional: ['idConsulta']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaHistoricoConsultaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/consultas/{id}/historico-consultas', {
        responses: {
            '200': {
                description: 'Consulta.HistoricoConsulta PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HistoricoConsulta, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.HistoricoConsulta))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaHistoricoConsultaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/consultas/{id}/historico-consultas', {
        responses: {
            '200': {
                description: 'Consulta.HistoricoConsulta DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.HistoricoConsulta))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaHistoricoConsultaController.prototype, "delete", null);
exports.ConsultaHistoricoConsultaController = ConsultaHistoricoConsultaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ConsultaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ConsultaRepository])
], ConsultaHistoricoConsultaController);
//# sourceMappingURL=consulta-historico-consulta.controller.js.map