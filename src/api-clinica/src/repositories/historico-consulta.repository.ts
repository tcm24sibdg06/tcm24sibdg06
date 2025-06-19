import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {HistoricoConsulta, HistoricoConsultaRelations, Consulta, Funcionario} from '../models';
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
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ConsultaRepository') protected consultaRepositoryGetter: Getter<ConsultaRepository>, @repository.getter('FuncionarioRepository') protected funcionarioRepositoryGetter: Getter<FuncionarioRepository>,
  ) {
    super(HistoricoConsulta, dataSource);
    this.funcionario = this.createBelongsToAccessorFor('funcionario', funcionarioRepositoryGetter,);
    this.registerInclusionResolver('funcionario', this.funcionario.inclusionResolver);
    this.consulta = this.createBelongsToAccessorFor('consulta', consultaRepositoryGetter,);
    this.registerInclusionResolver('consulta', this.consulta.inclusionResolver);
  }
}
