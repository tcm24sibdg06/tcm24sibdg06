"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricoConsultaFuncionarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let HistoricoConsultaFuncionarioController = class HistoricoConsultaFuncionarioController {
    constructor(historicoConsultaRepository) {
        this.historicoConsultaRepository = historicoConsultaRepository;
    }
    async getFuncionario(id) {
        return this.historicoConsultaRepository.funcionario(id);
    }
};
exports.HistoricoConsultaFuncionarioController = HistoricoConsultaFuncionarioController;
tslib_1.__decorate([
    (0, rest_1.get)('/historico-consultas/{id}/funcionario', {
        responses: {
            '200': {
                description: 'Funcionario belonging to HistoricoConsulta',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Funcionario),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistoricoConsultaFuncionarioController.prototype, "getFuncionario", null);
exports.HistoricoConsultaFuncionarioController = HistoricoConsultaFuncionarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.HistoricoConsultaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.HistoricoConsultaRepository])
], HistoricoConsultaFuncionarioController);
//# sourceMappingURL=historico-consulta-funcionario.controller.js.map