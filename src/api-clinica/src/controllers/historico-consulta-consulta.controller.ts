import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  HistoricoConsulta,
  Consulta,
} from '../models';
import {HistoricoConsultaRepository} from '../repositories';

export class HistoricoConsultaConsultaController {
  constructor(
    @repository(HistoricoConsultaRepository)
    public historicoConsultaRepository: HistoricoConsultaRepository,
  ) { }

  @get('/historico-consultas/{id}/consulta', {
    responses: {
      '200': {
        description: 'Consulta belonging to HistoricoConsulta',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Consulta),
          },
        },
      },
    },
  })
  async getConsulta(
    @param.path.number('id') id: typeof HistoricoConsulta.prototype.idHistorico,
  ): Promise<Consulta> {
    return this.historicoConsultaRepository.consulta(id);
  }
}
