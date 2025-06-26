import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {ClinicaDbDataSource} from '../datasources';
import {Medico, Paciente, RegistoClinico, RegistoClinicoRelations} from '../models';
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
    @inject('datasources.clinicaDbDataSource') dataSource: ClinicaDbDataSource,
    @repository.getter('MedicoRepository') protected medicoRepositoryGetter: Getter<MedicoRepository>,
    @repository.getter('PacienteRepository') protected pacienteRepositoryGetter: Getter<PacienteRepository>,
  ) {
    super(RegistoClinico, dataSource);
    this.medico = this.createBelongsToAccessorFor('medico', medicoRepositoryGetter);
    this.registerInclusionResolver('medico', this.medico.inclusionResolver);

    this.paciente = this.createBelongsToAccessorFor('paciente', pacienteRepositoryGetter);
    this.registerInclusionResolver('paciente', this.paciente.inclusionResolver);
  }
}
