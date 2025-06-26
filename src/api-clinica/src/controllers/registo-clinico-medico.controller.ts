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
  Medico,
} from '../models';
import {RegistoClinicoRepository} from '../repositories';

export class RegistoClinicoMedicoController {
  constructor(
    @repository(RegistoClinicoRepository)
    public registoClinicoRepository: RegistoClinicoRepository,
  ) { }

  @get('/registo-clinicos/{id}/medico', {
    responses: {
      '200': {
        description: 'Medico belonging to RegistoClinico',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Medico),
          },
        },
      },
    },
  })
  async getMedico(
    @param.path.number('id') id: typeof RegistoClinico.prototype.idRegistoClinico,
  ): Promise<Medico> {
    return this.registoClinicoRepository.medico(id);
  }
}
