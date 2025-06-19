import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {RegistoClinico, RegistoClinicoRelations, Medico, Paciente} from '../models';
import {MedicoRepository} from './medico.repository';
import {PacienteRepository} from './paciente.repository';

export class RegistoClinicoRepository extends DefaultCrudRepository<
  RegistoClinico,
  typeof RegistoClinico.prototype.idRegistoClinico,
  RegistoClinicoRelations
> {

  public readonly medico: BelongsToAccessor<Medico, typeof RegistoClinico.prototype.idRegistoClinico>;

  public readonly paciente: BelongsToAccessor<Paciente, typeof RegistoClinico.prototype.idRegistoClinico>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MedicoRepository') protected medicoRepositoryGetter: Getter<MedicoRepository>, @repository.getter('PacienteRepository') protected pacienteRepositoryGetter: Getter<PacienteRepository>,
  ) {
    super(RegistoClinico, dataSource);
    this.paciente = this.createBelongsToAccessorFor('paciente', pacienteRepositoryGetter,);
    this.registerInclusionResolver('paciente', this.paciente.inclusionResolver);
    this.medico = this.createBelongsToAccessorFor('medico', medicoRepositoryGetter,);
    this.registerInclusionResolver('medico', this.medico.inclusionResolver);
  }
}
