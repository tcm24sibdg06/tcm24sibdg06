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
  Funcionario,
} from '../models';
import {HistoricoConsultaRepository} from '../repositories';

export class HistoricoConsultaFuncionarioController {
  constructor(
    @repository(HistoricoConsultaRepository)
    public historicoConsultaRepository: HistoricoConsultaRepository,
  ) { }

  @get('/historico-consultas/{id}/funcionario', {
    responses: {
      '200': {
        description: 'Funcionario belonging to HistoricoConsulta',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Funcionario),
          },
        },
      },
    },
  })
  async getFuncionario(
    @param.path.number('id') id: typeof HistoricoConsulta.prototype.idHistorico,
  ): Promise<Funcionario> {
    return this.historicoConsultaRepository.funcionario(id);
  }
}
