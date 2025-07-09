"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricoConsultaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let HistoricoConsultaRepository = class HistoricoConsultaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, consultaRepositoryGetter, funcionarioRepositoryGetter) {
        super(models_1.HistoricoConsulta, dataSource);
        this.consultaRepositoryGetter = consultaRepositoryGetter;
        this.funcionarioRepositoryGetter = funcionarioRepositoryGetter;
        this.consulta = this.createBelongsToAccessorFor('consulta', consultaRepositoryGetter);
        this.registerInclusionResolver('consulta', this.consulta.inclusionResolver);
        this.funcionario = this.createBelongsToAccessorFor('funcionario', funcionarioRepositoryGetter);
        this.registerInclusionResolver('funcionario', this.funcionario.inclusionResolver);
    }
};
exports.HistoricoConsultaRepository = HistoricoConsultaRepository;
exports.HistoricoConsultaRepository = HistoricoConsultaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.clinicaDbDataSource')),
    tslib_1.__param(1, repository_1.repository.getter('ConsultaRepository')),
    tslib_1.__param(2, repository_1.repository.getter('FuncionarioRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.ClinicaDbDataSource, Function, Function])
], HistoricoConsultaRepository);
//# sourceMappingURL=historico-consulta.repository.js.map