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
  Paciente,
} from '../models';
import {ConsultaRepository} from '../repositories';

export class ConsultaPacienteController {
  constructor(
    @repository(ConsultaRepository)
    public consultaRepository: ConsultaRepository,
  ) { }

  @get('/consultas/{id}/paciente', {
    responses: {
      '200': {
        description: 'Paciente belonging to Consulta',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Paciente),
          },
        },
      },
    },
  })
  async getPaciente(
    @param.path.number('id') id: typeof Consulta.prototype.idConsulta,
  ): Promise<Paciente> {
    return this.consultaRepository.paciente(id);
  }
}
