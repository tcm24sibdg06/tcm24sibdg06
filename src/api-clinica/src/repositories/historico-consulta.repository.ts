import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {ClinicaDbDataSource} from '../datasources';
import {Consulta, Funcionario, HistoricoConsulta, HistoricoConsultaRelations} from '../models';
import {ConsultaRepository} from './consulta.repository';
import {FuncionarioRepository} from './funcionario.repository';

export class HistoricoConsultaRepository extends DefaultCrudRepository<
  HistoricoConsulta,
  typeof HistoricoConsulta.prototype.idHistorico,
  HistoricoConsultaRelations
> {
  public readonly consulta: BelongsToAccessor<Consulta, typeof HistoricoConsulta.prototype.idHistorico>;
  public readonly funcionario: BelongsToAccessor<Funcionario, typeof HistoricoConsulta.prototype.idHistorico>;

  constructor(
    @inject('datasources.clinicaDbDataSource') dataSource: ClinicaDbDataSource,
    @repository.getter('ConsultaRepository') protected consultaRepositoryGetter: Getter<ConsultaRepository>,
    @repository.getter('FuncionarioRepository') protected funcionarioRepositoryGetter: Getter<FuncionarioRepository>,
  ) {
    super(HistoricoConsulta, dataSource);

    this.consulta = this.createBelongsToAccessorFor('consulta', consultaRepositoryGetter);
    this.registerInclusionResolver('consulta', this.consulta.inclusionResolver);

    this.funcionario = this.createBelongsToAccessorFor('funcionario', funcionarioRepositoryGetter);
    this.registerInclusionResolver('funcionario', this.funcionario.inclusionResolver);
  }
}
