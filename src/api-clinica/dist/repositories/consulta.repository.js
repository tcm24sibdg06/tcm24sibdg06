"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ConsultaRepository = class ConsultaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, historicoConsultaRepositoryGetter, registoClinicoRepositoryGetter, pacienteRepositoryGetter, medicoRepositoryGetter, especialidadeRepositoryGetter) {
        super(models_1.Consulta, dataSource);
        this.historicoConsultaRepositoryGetter = historicoConsultaRepositoryGetter;
        this.registoClinicoRepositoryGetter = registoClinicoRepositoryGetter;
        this.pacienteRepositoryGetter = pacienteRepositoryGetter;
        this.medicoRepositoryGetter = medicoRepositoryGetter;
        this.especialidadeRepositoryGetter = especialidadeRepositoryGetter;
        this.alteracoes = this.createHasManyRepositoryFactoryFor('alteracoes', historicoConsultaRepositoryGetter);
        this.registerInclusionResolver('alteracoes', this.alteracoes.inclusionResolver);
        this.registoClinico = this.createHasOneRepositoryFactoryFor('registoClinico', registoClinicoRepositoryGetter);
        this.registerInclusionResolver('registoClinico', this.registoClinico.inclusionResolver);
        this.paciente = this.createBelongsToAccessorFor('paciente', pacienteRepositoryGetter);
        this.registerInclusionResolver('paciente', this.paciente.inclusionResolver);
        this.medico = this.createBelongsToAccessorFor('medico', medicoRepositoryGetter);
        this.registerInclusionResolver('medico', this.medico.inclusionResolver);
        this.especialidade = this.createBelongsToAccessorFor('especialidade', especialidadeRepositoryGetter);
        this.registerInclusionResolver('especialidade', this.especialidade.inclusionResolver);
    }
};
exports.ConsultaRepository = ConsultaRepository;
exports.ConsultaRepository = ConsultaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mysql')),
    tslib_1.__param(1, repository_1.repository.getter('HistoricoConsultaRepository')),
    tslib_1.__param(2, repository_1.repository.getter('RegistoClinicoRepository')),
    tslib_1.__param(3, repository_1.repository.getter('PacienteRepository')),
    tslib_1.__param(4, repository_1.repository.getter('MedicoRepository')),
    tslib_1.__param(5, repository_1.repository.getter('EspecialidadeRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.ClinicaDbDataSource, Function, Function, Function, Function, Function])
], ConsultaRepository);
//# sourceMappingURL=consulta.repository.js.map