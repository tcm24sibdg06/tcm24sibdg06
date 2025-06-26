import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  RegistoClinico,
  Paciente,
} from '../models';
import {RegistoClinicoRepository} from '../repositories';

export class RegistoClinicoPacienteController {
  constructor(
    @repository(RegistoClinicoRepository)
    public registoClinicoRepository: RegistoClinicoRepository,
  ) { }

  @get('/registo-clinicos/{id}/paciente', {
    responses: {
      '200': {
        description: 'Paciente belonging to RegistoClinico',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Paciente),
          },
        },
      },
    },
  })
  async getPaciente(
    @param.path.number('id') id: typeof RegistoClinico.prototype.idRegistoClinico,
  ): Promise<Paciente> {
    return this.registoClinicoRepository.paciente(id);
  }
}
