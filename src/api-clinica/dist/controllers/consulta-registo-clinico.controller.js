"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaRegistoClinicoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ConsultaRegistoClinicoController = class ConsultaRegistoClinicoController {
    constructor(consultaRepository) {
        this.consultaRepository = consultaRepository;
    }
    async get(id, filter) {
        return this.consultaRepository.registoClinico(id).get(filter);
    }
    async create(id, registoClinico) {
        return this.consultaRepository.registoClinico(id).create(registoClinico);
    }
    async patch(id, registoClinico, where) {
        return this.consultaRepository.registoClinico(id).patch(registoClinico, where);
    }
    async delete(id, where) {
        return this.consultaRepository.registoClinico(id).delete(where);
    }
};
exports.ConsultaRegistoClinicoController = ConsultaRegistoClinicoController;
tslib_1.__decorate([
    (0, rest_1.get)('/consultas/{id}/registo-clinico', {
        responses: {
            '200': {
                description: 'Consulta has one RegistoClinico',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.RegistoClinico),
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
], ConsultaRegistoClinicoController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/consultas/{id}/registo-clinico', {
        responses: {
            '200': {
                description: 'Consulta model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.RegistoClinico) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.RegistoClinico, {
                    title: 'NewRegistoClinicoInConsulta',
                    exclude: ['idRegistoClinico'],
                    optional: ['idConsulta']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaRegistoClinicoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/consultas/{id}/registo-clinico', {
        responses: {
            '200': {
                description: 'Consulta.RegistoClinico PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.RegistoClinico, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.RegistoClinico))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaRegistoClinicoController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/consultas/{id}/registo-clinico', {
        responses: {
            '200': {
                description: 'Consulta.RegistoClinico DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.RegistoClinico))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaRegistoClinicoController.prototype, "delete", null);
exports.ConsultaRegistoClinicoController = ConsultaRegistoClinicoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ConsultaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ConsultaRepository])
], ConsultaRegistoClinicoController);
//# sourceMappingURL=consulta-registo-clinico.controller.js.map