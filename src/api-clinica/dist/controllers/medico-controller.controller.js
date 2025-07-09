"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MedicoControllerController = class MedicoControllerController {
    constructor(medicoRepository) {
        this.medicoRepository = medicoRepository;
    }
    async create(medico) {
        return this.medicoRepository.create(medico);
    }
    async count(where) {
        return this.medicoRepository.count(where);
    }
    async find(filter) {
        return this.medicoRepository.find(filter);
    }
    async updateAll(medico, where) {
        return this.medicoRepository.updateAll(medico, where);
    }
    async findById(id, filter) {
        return this.medicoRepository.findById(id, filter);
    }
    async updateById(id, medico) {
        await this.medicoRepository.updateById(id, medico);
    }
    async replaceById(id, medico) {
        await this.medicoRepository.replaceById(id, medico);
    }
    async deleteById(id) {
        await this.medicoRepository.deleteById(id);
    }
};
exports.MedicoControllerController = MedicoControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/medicos'),
    (0, rest_1.response)(200, {
        description: 'Medico model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Medico) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medico, {
                    title: 'NewMedico',
                    exclude: ['idMedico'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MedicoControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/medicos/count'),
    (0, rest_1.response)(200, {
        description: 'Medico model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Medico)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MedicoControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/medicos'),
    (0, rest_1.response)(200, {
        description: 'Array of Medico model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Medico, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Medico)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MedicoControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/medicos'),
    (0, rest_1.response)(200, {
        description: 'Medico PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medico, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Medico)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Medico, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MedicoControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/medicos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Medico model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medico, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Medico, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MedicoControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/medicos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Medico PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Medico, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Medico]),
    tslib_1.__metadata("design:returntype", Promise)
], MedicoControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/medicos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Medico PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Medico]),
    tslib_1.__metadata("design:returntype", Promise)
], MedicoControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/medicos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Medico DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], MedicoControllerController.prototype, "deleteById", null);
exports.MedicoControllerController = MedicoControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MedicoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MedicoRepository])
], MedicoControllerController);
//# sourceMappingURL=medico-controller.controller.js.map