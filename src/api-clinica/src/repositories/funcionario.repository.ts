import {Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {ClinicaDbDataSource} from '../datasources';
import {Funcionario, HistoricoConsulta} from '../models';
import {HistoricoConsultaRepository} from './historico-consulta.repository';

export class FuncionarioRepository extends DefaultCrudRepository<
  Funcionario,
  typeof Funcionario.prototype.idFuncionario
> {
  public readonly historicoConsultas: HasManyRepositoryFactory<
    HistoricoConsulta,
    typeof Funcionario.prototype.idFuncionario
  >;

  constructor(
    @inject('datasources.clinicaDbDataSource') dataSource: ClinicaDbDataSource,
    @repository.getter('HistoricoConsultaRepository')
    protected historicoConsultaRepositoryGetter: Getter<HistoricoConsultaRepository>,
  ) {
    super(Funcionario, dataSource);

    this.historicoConsultas = this.createHasManyRepositoryFactoryFor(
      'historicoConsultas',
      historicoConsultaRepositoryGetter,
    );
    this.registerInclusionResolver(
      'historicoConsultas',
      this.historicoConsultas.inclusionResolver,
    );
  }
}
