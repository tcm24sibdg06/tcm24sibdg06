import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Consulta,
  Especialidade,
} from '../models';
import {ConsultaRepository} from '../repositories';

export class ConsultaEspecialidadeController {
  constructor(
    @repository(ConsultaRepository)
    public consultaRepository: ConsultaRepository,
  ) { }

  @get('/consultas/{id}/especialidade', {
    responses: {
      '200': {
        description: 'Especialidade belonging to Consulta',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Especialidade),
          },
        },
      },
    },
  })
  async getEspecialidade(
    @param.path.number('id') id: typeof Consulta.prototype.idConsulta,
  ): Promise<Especialidade> {
    return this.consultaRepository.especialidade(id);
  }
}
