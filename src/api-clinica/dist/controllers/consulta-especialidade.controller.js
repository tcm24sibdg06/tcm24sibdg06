"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaEspecialidadeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ConsultaEspecialidadeController = class ConsultaEspecialidadeController {
    constructor(consultaRepository) {
        this.consultaRepository = consultaRepository;
    }
    async getEspecialidade(id) {
        return this.consultaRepository.especialidade(id);
    }
};
exports.ConsultaEspecialidadeController = ConsultaEspecialidadeController;
tslib_1.__decorate([
    (0, rest_1.get)('/consultas/{id}/especialidade', {
        responses: {
            '200': {
                description: 'Especialidade belonging to Consulta',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Especialidade),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaEspecialidadeController.prototype, "getEspecialidade", null);
exports.ConsultaEspecialidadeController = ConsultaEspecialidadeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ConsultaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ConsultaRepository])
], ConsultaEspecialidadeController);
//# sourceMappingURL=consulta-especialidade.controller.js.map