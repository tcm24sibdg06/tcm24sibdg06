"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaPacienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ConsultaPacienteController = class ConsultaPacienteController {
    constructor(consultaRepository) {
        this.consultaRepository = consultaRepository;
    }
    async getPaciente(id) {
        return this.consultaRepository.paciente(id);
    }
};
exports.ConsultaPacienteController = ConsultaPacienteController;
tslib_1.__decorate([
    (0, rest_1.get)('/consultas/{id}/paciente', {
        responses: {
            '200': {
                description: 'Paciente belonging to Consulta',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConsultaPacienteController.prototype, "getPaciente", null);
exports.ConsultaPacienteController = ConsultaPacienteController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ConsultaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ConsultaRepository])
], ConsultaPacienteController);
//# sourceMappingURL=consulta-paciente.controller.js.map