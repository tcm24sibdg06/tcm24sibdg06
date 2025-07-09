"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PacienteControllerController = class PacienteControllerController {
    constructor(pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }
    async create(paciente) {
        return this.pacienteRepository.create(paciente);
    }
    async count(where) {
        return this.pacienteRepository.count(where);
    }
    async find(filter) {
        return this.pacienteRepository.find(filter);
    }
    async updateAll(paciente, where) {
        return this.pacienteRepository.updateAll(paciente, where);
    }
    async findById(id, filter) {
        return this.pacienteRepository.findById(id, filter);
    }
    async updateById(id, paciente) {
        await this.pacienteRepository.updateById(id, paciente);
    }
    async replaceById(id, paciente) {
        await this.pacienteRepository.replaceById(id, paciente);
    }
    async deleteById(id) {
        await this.pacienteRepository.deleteById(id);
    }
};
exports.PacienteControllerController = PacienteControllerController;
tslib_1.__decorate([
    (0, rest_1.post)('/pacientes'),
    (0, rest_1.response)(200, {
        description: 'Paciente model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente, {
                    title: 'NewPaciente',
                    exclude: ['idPaciente'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PacienteControllerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pacientes/count'),
    (0, rest_1.response)(200, {
        description: 'Paciente model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Paciente)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PacienteControllerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pacientes'),
    (0, rest_1.response)(200, {
        description: 'Array of Paciente model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Paciente, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Paciente)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PacienteControllerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/pacientes'),
    (0, rest_1.response)(200, {
        description: 'Paciente PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Paciente)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Paciente, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PacienteControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pacientes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Paciente model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Paciente, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PacienteControllerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/pacientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Paciente PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Paciente]),
    tslib_1.__metadata("design:returntype", Promise)
], PacienteControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/pacientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Paciente PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Paciente]),
    tslib_1.__metadata("design:returntype", Promise)
], PacienteControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/pacientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Paciente DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PacienteControllerController.prototype, "deleteById", null);
exports.PacienteControllerController = PacienteControllerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PacienteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PacienteRepository])
], PacienteControllerController);
//# sourceMappingURL=paciente-controller.controller.js.map