"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricoConsultaControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let HistoricoConsultaControllerController = class HistoricoConsultaControllerController {
    constructor(historicoConsultaRepository) {
        this.historicoConsultaRepository = historicoConsultaRepository;
    }
    async create(historicoConsulta) {
        return this.historicoConsultaRepository.create(historicoConsulta);
    }
    async count(where) {
        return this.historicoConsultaRepository.count(where);
    }
    async find(filter) {
        return this.historicoConsultaRepository.find(filter);
    }
    async updateAll(historicoConsulta, where) {
        return this.historicoConsultaRepository.updateAll(historicoConsulta, where);
    }
    async findById(id, filter) {
        return this.historicoConsultaRepository.findById(id, filter);
    }
    async updateById(id, historicoConsulta) {
        await this.historicoConsultaRepository.updateById(id, historicoConsulta);
    }
    async replaceById(id, historicoConsulta) {
        await this.historicoConsultaRepository.replaceById(id, historicoConsulta);
    }
    async deleteById(id) {
        await this.historicoConsultaRepository.deleteById(id);
    }
};
exports.HistoricoConsultaControllerController = HistoricoConsultaControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/historico-consultas'),
    (0, rest_1.response)(200, {
        description: 'HistoricoConsulta model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.HistoricoConsulta) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HistoricoConsulta, {
                    title: 'NewHistoricoConsulta',
                    exclude: ['idHistorico'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistoricoConsultaControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/historico-consultas/count'),
    (0, rest_1.response)(200, {
        description: 'HistoricoConsulta model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.HistoricoConsulta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistoricoConsultaControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/historico-consultas'),
    (0, rest_1.response)(200, {
        description: 'Array of HistoricoConsulta model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.HistoricoConsulta, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.HistoricoConsulta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistoricoConsultaControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/historico-consultas'),
    (0, rest_1.response)(200, {
        description: 'HistoricoConsulta PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HistoricoConsulta, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.HistoricoConsulta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.HistoricoConsulta, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistoricoConsultaControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/historico-consultas/{id}'),
    (0, rest_1.response)(200, {
        description: 'HistoricoConsulta model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HistoricoConsulta, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.HistoricoConsulta, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistoricoConsultaControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/historico-consultas/{id}'),
    (0, rest_1.response)(204, {
        description: 'HistoricoConsulta PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HistoricoConsulta, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.HistoricoConsulta]),
    tslib_1.__metadata("design:returntype", Promise)
], HistoricoConsultaControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/historico-consultas/{id}'),
    (0, rest_1.response)(204, {
        description: 'HistoricoConsulta PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.HistoricoConsulta]),
    tslib_1.__metadata("design:returntype", Promise)
], HistoricoConsultaControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/historico-consultas/{id}'),
    (0, rest_1.response)(204, {
        description: 'HistoricoConsulta DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], HistoricoConsultaControllerController.prototype, "deleteById", null);
exports.HistoricoConsultaControllerController = HistoricoConsultaControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.HistoricoConsultaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.HistoricoConsultaRepository])
], HistoricoConsultaControllerController);
//# sourceMappingURL=historico-consulta-controller.controller.js.map