"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ConsultaControllerController = class ConsultaControllerController {
    constructor(consultaRepository) {
        this.consultaRepository = consultaRepository;
    }
    async create(consulta) {
        return this.consultaRepository.create(consulta);
    }
    async count(where) {
        return this.consultaRepository.count(where);
    }
    async find(filter) {
        return this.consultaRepository.find(filter);
    }
    async updateAll(consulta, where) {
        return this.consultaRepository.updateAll(consulta, where);
    }
    async findById(id, filter) {
        return this.consultaRepository.findById(id, filter);
    }
    async updateById(id, consulta) {
        await this.consultaRepository.updateById(id, consulta);
    }
    async replaceById(id, consulta) {
        await this.consultaRepository.replaceById(id, consulta);
    }
    async deleteById(id) {
        await this.consultaRepository.deleteById(id);
    }
};
exports.ConsultaControllerController = ConsultaControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/consultas'),
    (0, rest_1.response)(200, {
        description: 'Consulta model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Consulta) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Consulta, {
                    title: 'NewConsulta',
                    exclude: ['idConsulta'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/consultas/count'),
    (0, rest_1.response)(200, {
        description: 'Consulta model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Consulta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/consultas'),
    (0, rest_1.response)(200, {
        description: 'Array of Consulta model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Consulta, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Consulta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/consultas'),
    (0, rest_1.response)(200, {
        description: 'Consulta PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Consulta, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Consulta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Consulta, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/consultas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Consulta model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Consulta, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Consulta, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/consultas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Consulta PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Consulta, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Consulta]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/consultas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Consulta PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Consulta]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/consultas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Consulta DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaControllerController.prototype, "deleteById", null);
exports.ConsultaControllerController = ConsultaControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ConsultaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ConsultaRepository])
], ConsultaControllerController);
//# sourceMappingURL=consulta-controller.controller.js.map