"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistoClinicoControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RegistoClinicoControllerController = class RegistoClinicoControllerController {
    constructor(registoClinicoRepository) {
        this.registoClinicoRepository = registoClinicoRepository;
    }
    async create(registoClinico) {
        return this.registoClinicoRepository.create(registoClinico);
    }
    async count(where) {
        return this.registoClinicoRepository.count(where);
    }
    async find(filter) {
        return this.registoClinicoRepository.find(filter);
    }
    async updateAll(registoClinico, where) {
        return this.registoClinicoRepository.updateAll(registoClinico, where);
    }
    async findById(id, filter) {
        return this.registoClinicoRepository.findById(id, filter);
    }
    async updateById(id, registoClinico) {
        await this.registoClinicoRepository.updateById(id, registoClinico);
    }
    async replaceById(id, registoClinico) {
        await this.registoClinicoRepository.replaceById(id, registoClinico);
    }
    async deleteById(id) {
        await this.registoClinicoRepository.deleteById(id);
    }
};
exports.RegistoClinicoControllerController = RegistoClinicoControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/registos-clinicos'),
    (0, rest_1.response)(200, {
        description: 'RegistoClinico model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.RegistoClinico) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.RegistoClinico, {
                    title: 'NewRegistoClinico',
                    exclude: ['idRegistoClinico'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RegistoClinicoControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/registos-clinicos/count'),
    (0, rest_1.response)(200, {
        description: 'RegistoClinico model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.RegistoClinico)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RegistoClinicoControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/registos-clinicos'),
    (0, rest_1.response)(200, {
        description: 'Array of RegistoClinico model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.RegistoClinico, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.RegistoClinico)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RegistoClinicoControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/registos-clinicos'),
    (0, rest_1.response)(200, {
        description: 'RegistoClinico PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.RegistoClinico, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.RegistoClinico)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.RegistoClinico, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RegistoClinicoControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/registos-clinicos/{id}'),
    (0, rest_1.response)(200, {
        description: 'RegistoClinico model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.RegistoClinico, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.RegistoClinico, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RegistoClinicoControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/registos-clinicos/{id}'),
    (0, rest_1.response)(204, {
        description: 'RegistoClinico PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.RegistoClinico, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.RegistoClinico]),
    tslib_1.__metadata("design:returntype", Promise)
], RegistoClinicoControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/registos-clinicos/{id}'),
    (0, rest_1.response)(204, {
        description: 'RegistoClinico PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.RegistoClinico]),
    tslib_1.__metadata("design:returntype", Promise)
], RegistoClinicoControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/registos-clinicos/{id}'),
    (0, rest_1.response)(204, {
        description: 'RegistoClinico DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], RegistoClinicoControllerController.prototype, "deleteById", null);
exports.RegistoClinicoControllerController = RegistoClinicoControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RegistoClinicoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RegistoClinicoRepository])
], RegistoClinicoControllerController);
//# sourceMappingURL=registo-clinico-controller.controller.js.map