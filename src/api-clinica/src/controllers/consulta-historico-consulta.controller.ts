import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Consulta,
  HistoricoConsulta,
} from '../models';
import {ConsultaRepository} from '../repositories';

export class ConsultaHistoricoConsultaController {
  constructor(
    @repository(ConsultaRepository) protected consultaRepository: ConsultaRepository,
  ) { }

  @get('/consultas/{id}/historico-consultas', {
    responses: {
      '200': {
        description: 'Array of Consulta has many HistoricoConsulta',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(HistoricoConsulta)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<HistoricoConsulta>,
  ): Promise<HistoricoConsulta[]> {
    return this.consultaRepository.alteracoes(id).find(filter);
  }

  @post('/consultas/{id}/historico-consultas', {
    responses: {
      '200': {
        description: 'Consulta model instance',
        content: {'application/json': {schema: getModelSchemaRef(HistoricoConsulta)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Consulta.prototype.idConsulta,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistoricoConsulta, {
            title: 'NewHistoricoConsultaInConsulta',
            exclude: ['idHistorico'],
            optional: ['idConsulta']
          }),
        },
      },
    }) historicoConsulta: Omit<HistoricoConsulta, 'idHistorico'>,
  ): Promise<HistoricoConsulta> {
    return this.consultaRepository.alteracoes(id).create(historicoConsulta);
  }

  @patch('/consultas/{id}/historico-consultas', {
    responses: {
      '200': {
        description: 'Consulta.HistoricoConsulta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistoricoConsulta, {partial: true}),
        },
      },
    })
    historicoConsulta: Partial<HistoricoConsulta>,
    @param.query.object('where', getWhereSchemaFor(HistoricoConsulta)) where?: Where<HistoricoConsulta>,
  ): Promise<Count> {
    return this.consultaRepository.alteracoes(id).patch(historicoConsulta, where);
  }

  @del('/consultas/{id}/historico-consultas', {
    responses: {
      '200': {
        description: 'Consulta.HistoricoConsulta DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(HistoricoConsulta)) where?: Where<HistoricoConsulta>,
  ): Promise<Count> {
    return this.consultaRepository.alteracoes(id).delete(where);
  }
}
