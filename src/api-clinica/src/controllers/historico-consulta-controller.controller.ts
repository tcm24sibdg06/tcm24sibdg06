import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {HistoricoConsulta} from '../models';
import {HistoricoConsultaRepository} from '../repositories';

export class HistoricoConsultaControllerController {
  constructor(
    @repository(HistoricoConsultaRepository)
    public historicoConsultaRepository: HistoricoConsultaRepository,
  ) { }

  @post('/historico-consultas')
  @response(200, {
    description: 'HistoricoConsulta model instance',
    content: {'application/json': {schema: getModelSchemaRef(HistoricoConsulta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistoricoConsulta, {
            title: 'NewHistoricoConsulta',
            exclude: ['idHistorico'],
          }),
        },
      },
    })
    historicoConsulta: Omit<HistoricoConsulta, 'idHistorico'>,
  ): Promise<HistoricoConsulta> {
    return this.historicoConsultaRepository.create(historicoConsulta);
  }

  @get('/historico-consultas/count')
  @response(200, {
    description: 'HistoricoConsulta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(HistoricoConsulta) where?: Where<HistoricoConsulta>,
  ): Promise<Count> {
    return this.historicoConsultaRepository.count(where);
  }

  @get('/historico-consultas')
  @response(200, {
    description: 'Array of HistoricoConsulta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(HistoricoConsulta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(HistoricoConsulta) filter?: Filter<HistoricoConsulta>,
  ): Promise<HistoricoConsulta[]> {
    return this.historicoConsultaRepository.find(filter);
  }

  @patch('/historico-consultas')
  @response(200, {
    description: 'HistoricoConsulta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistoricoConsulta, {partial: true}),
        },
      },
    })
    historicoConsulta: HistoricoConsulta,
    @param.where(HistoricoConsulta) where?: Where<HistoricoConsulta>,
  ): Promise<Count> {
    return this.historicoConsultaRepository.updateAll(historicoConsulta, where);
  }

  @get('/historico-consultas/{id}')
  @response(200, {
    description: 'HistoricoConsulta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(HistoricoConsulta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(HistoricoConsulta, {exclude: 'where'}) filter?: FilterExcludingWhere<HistoricoConsulta>
  ): Promise<HistoricoConsulta> {
    return this.historicoConsultaRepository.findById(id, filter);
  }

  @patch('/historico-consultas/{id}')
  @response(204, {
    description: 'HistoricoConsulta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistoricoConsulta, {partial: true}),
        },
      },
    })
    historicoConsulta: HistoricoConsulta,
  ): Promise<void> {
    await this.historicoConsultaRepository.updateById(id, historicoConsulta);
  }

  @put('/historico-consultas/{id}')
  @response(204, {
    description: 'HistoricoConsulta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() historicoConsulta: HistoricoConsulta,
  ): Promise<void> {
    await this.historicoConsultaRepository.replaceById(id, historicoConsulta);
  }

  @del('/historico-consultas/{id}')
  @response(204, {
    description: 'HistoricoConsulta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.historicoConsultaRepository.deleteById(id);
  }
}
