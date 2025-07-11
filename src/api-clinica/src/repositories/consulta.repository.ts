import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  HasOneRepositoryFactory,
  repository,
} from '@loopback/repository';
import {ClinicaDbDataSource} from '../datasources';
import {Consulta, ConsultaRelations, Especialidade, HistoricoConsulta, Medico, Paciente, RegistoClinico} from '../models';
import {EspecialidadeRepository} from './especialidade.repository';
import {HistoricoConsultaRepository} from './historico-consulta.repository';
import {MedicoRepository} from './medico.repository';
import {PacienteRepository} from './paciente.repository';
import {RegistoClinicoRepository} from './registo-clinico.repository';

export class ConsultaRepository extends DefaultCrudRepository<
  Consulta,
  typeof Consulta.prototype.idConsulta,
  ConsultaRelations
> {
  public readonly alteracoes: HasManyRepositoryFactory<HistoricoConsulta, typeof Consulta.prototype.idConsulta>;
  public readonly registoClinico: HasOneRepositoryFactory<RegistoClinico, typeof Consulta.prototype.idConsulta>;
  public readonly paciente: BelongsToAccessor<Paciente, typeof Consulta.prototype.idConsulta>;
  public readonly medico: BelongsToAccessor<Medico, typeof Consulta.prototype.idConsulta>;
  public readonly especialidade: BelongsToAccessor<Especialidade, typeof Consulta.prototype.idConsulta>;

  constructor(
    @inject('datasources.mysql') dataSource: ClinicaDbDataSource,
    @repository.getter('HistoricoConsultaRepository') protected historicoConsultaRepositoryGetter: Getter<HistoricoConsultaRepository>,
    @repository.getter('RegistoClinicoRepository') protected registoClinicoRepositoryGetter: Getter<RegistoClinicoRepository>,
    @repository.getter('PacienteRepository') protected pacienteRepositoryGetter: Getter<PacienteRepository>,
    @repository.getter('MedicoRepository') protected medicoRepositoryGetter: Getter<MedicoRepository>,
    @repository.getter('EspecialidadeRepository') protected especialidadeRepositoryGetter: Getter<EspecialidadeRepository>,
  ) {
    super(Consulta, dataSource);

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
}
