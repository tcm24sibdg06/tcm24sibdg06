"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspecialidadeControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EspecialidadeControllerController = class EspecialidadeControllerController {
    constructor(especialidadeRepository) {
        this.especialidadeRepository = especialidadeRepository;
    }
    async create(especialidade) {
        return this.especialidadeRepository.create(especialidade);
    }
    async count(where) {
        return this.especialidadeRepository.count(where);
    }
    async find(filter) {
        return this.especialidadeRepository.find(filter);
    }
    async updateAll(especialidade, where) {
        return this.especialidadeRepository.updateAll(especialidade, where);
    }
    async findById(id, filter) {
        return this.especialidadeRepository.findById(id, filter);
    }
    async updateById(id, especialidade) {
        await this.especialidadeRepository.updateById(id, especialidade);
    }
    async replaceById(id, especialidade) {
        await this.especialidadeRepository.replaceById(id, especialidade);
    }
    async deleteById(id) {
        await this.especialidadeRepository.deleteById(id);
    }
};
exports.EspecialidadeControllerController = EspecialidadeControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/especialidades'),
    (0, rest_1.response)(200, {
        description: 'Especialidade model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Especialidade) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Especialidade, {
                    title: 'NewEspecialidade',
                    exclude: ['idEspecialidade'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EspecialidadeControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/especialidades/count'),
    (0, rest_1.response)(200, {
        description: 'Especialidade model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Especialidade)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EspecialidadeControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/especialidades'),
    (0, rest_1.response)(200, {
        description: 'Array of Especialidade model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Especialidade, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Especialidade)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EspecialidadeControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/especialidades'),
    (0, rest_1.response)(200, {
        description: 'Especialidade PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Especialidade, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Especialidade)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Especialidade, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EspecialidadeControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/especialidades/{id}'),
    (0, rest_1.response)(200, {
        description: 'Especialidade model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Especialidade, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Especialidade, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EspecialidadeControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/especialidades/{id}'),
    (0, rest_1.response)(204, {
        description: 'Especialidade PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Especialidade, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Especialidade]),
    tslib_1.__metadata("design:returntype", Promise)
], EspecialidadeControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/especialidades/{id}'),
    (0, rest_1.response)(204, {
        description: 'Especialidade PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Especialidade]),
    tslib_1.__metadata("design:returntype", Promise)
], EspecialidadeControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/especialidades/{id}'),
    (0, rest_1.response)(204, {
        description: 'Especialidade DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], EspecialidadeControllerController.prototype, "deleteById", null);
exports.EspecialidadeControllerController = EspecialidadeControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EspecialidadeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EspecialidadeRepository])
], EspecialidadeControllerController);
//# sourceMappingURL=especialidade-controller.controller.js.map