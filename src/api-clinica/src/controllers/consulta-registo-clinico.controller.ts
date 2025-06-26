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
  RegistoClinico,
} from '../models';
import {ConsultaRepository} from '../repositories';

export class ConsultaRegistoClinicoController {
  constructor(
    @repository(ConsultaRepository) protected consultaRepository: ConsultaRepository,
  ) { }

  @get('/consultas/{id}/registo-clinico', {
    responses: {
      '200': {
        description: 'Consulta has one RegistoClinico',
        content: {
          'application/json': {
            schema: getModelSchemaRef(RegistoClinico),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<RegistoClinico>,
  ): Promise<RegistoClinico> {
    return this.consultaRepository.registoClinico(id).get(filter);
  }

  @post('/consultas/{id}/registo-clinico', {
    responses: {
      '200': {
        description: 'Consulta model instance',
        content: {'application/json': {schema: getModelSchemaRef(RegistoClinico)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Consulta.prototype.idConsulta,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistoClinico, {
            title: 'NewRegistoClinicoInConsulta',
            exclude: ['idRegistoClinico'],
            optional: ['idConsulta']
          }),
        },
      },
    }) registoClinico: Omit<RegistoClinico, 'idRegistoClinico'>,
  ): Promise<RegistoClinico> {
    return this.consultaRepository.registoClinico(id).create(registoClinico);
  }

  @patch('/consultas/{id}/registo-clinico', {
    responses: {
      '200': {
        description: 'Consulta.RegistoClinico PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistoClinico, {partial: true}),
        },
      },
    })
    registoClinico: Partial<RegistoClinico>,
    @param.query.object('where', getWhereSchemaFor(RegistoClinico)) where?: Where<RegistoClinico>,
  ): Promise<Count> {
    return this.consultaRepository.registoClinico(id).patch(registoClinico, where);
  }

  @del('/consultas/{id}/registo-clinico', {
    responses: {
      '200': {
        description: 'Consulta.RegistoClinico DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(RegistoClinico)) where?: Where<RegistoClinico>,
  ): Promise<Count> {
    return this.consultaRepository.registoClinico(id).delete(where);
  }
}
