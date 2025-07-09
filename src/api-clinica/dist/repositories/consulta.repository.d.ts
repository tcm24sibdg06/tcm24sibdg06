import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, HasManyRepositoryFactory, HasOneRepositoryFactory } from '@loopback/repository';
import { ClinicaDbDataSource } from '../datasources';
import { Consulta, ConsultaRelations, Especialidade, HistoricoConsulta, Medico, Paciente, RegistoClinico } from '../models';
import { EspecialidadeRepository } from './especialidade.repository';
import { HistoricoConsultaRepository } from './historico-consulta.repository';
import { MedicoRepository } from './medico.repository';
import { PacienteRepository } from './paciente.repository';
import { RegistoClinicoRepository } from './registo-clinico.repository';
export declare class ConsultaRepository extends DefaultCrudRepository<Consulta, typeof Consulta.prototype.idConsulta, ConsultaRelations> {
    protected historicoConsultaRepositoryGetter: Getter<HistoricoConsultaRepository>;
    protected registoClinicoRepositoryGetter: Getter<RegistoClinicoRepository>;
    protected pacienteRepositoryGetter: Getter<PacienteRepository>;
    protected medicoRepositoryGetter: Getter<MedicoRepository>;
    protected especialidadeRepositoryGetter: Getter<EspecialidadeRepository>;
    readonly alteracoes: HasManyRepositoryFactory<HistoricoConsulta, typeof Consulta.prototype.idConsulta>;
    readonly registoClinico: HasOneRepositoryFactory<RegistoClinico, typeof Consulta.prototype.idConsulta>;
    readonly paciente: BelongsToAccessor<Paciente, typeof Consulta.prototype.idConsulta>;
    readonly medico: BelongsToAccessor<Medico, typeof Consulta.prototype.idConsulta>;
    readonly especialidade: BelongsToAccessor<Especialidade, typeof Consulta.prototype.idConsulta>;
    constructor(dataSource: ClinicaDbDataSource, historicoConsultaRepositoryGetter: Getter<HistoricoConsultaRepository>, registoClinicoRepositoryGetter: Getter<RegistoClinicoRepository>, pacienteRepositoryGetter: Getter<PacienteRepository>, medicoRepositoryGetter: Getter<MedicoRepository>, especialidadeRepositoryGetter: Getter<EspecialidadeRepository>);
}
