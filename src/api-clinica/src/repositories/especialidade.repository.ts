import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {ClinicaDbDataSource} from '../datasources';
import {Consulta, Especialidade} from '../models';
import {ConsultaRepository} from './consulta.repository';

export class EspecialidadeRepository extends DefaultCrudRepository<
  Especialidade,
  typeof Especialidade.prototype.idEspecialidade
> {
  public readonly consultas: HasManyRepositoryFactory<Consulta, typeof Especialidade.prototype.idEspecialidade>;

  constructor(
    @inject('datasources.clinicaDbDataSource') dataSource: ClinicaDbDataSource,
    @repository.getter('ConsultaRepository')
    protected consultaRepositoryGetter: Getter<ConsultaRepository>,
  ) {
    super(Especialidade, dataSource);

    this.consultas = this.createHasManyRepositoryFactoryFor(
      'consultas',
      consultaRepositoryGetter
    );
    this.registerInclusionResolver('consultas', this.consultas.inclusionResolver);
  }
}
