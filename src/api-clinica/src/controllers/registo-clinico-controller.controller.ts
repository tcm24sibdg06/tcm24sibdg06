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
import {RegistoClinico} from '../models';
import {RegistoClinicoRepository} from '../repositories';

export class RegistoClinicoControllerController {
  constructor(
    @repository(RegistoClinicoRepository)
    public registoClinicoRepository: RegistoClinicoRepository,
  ) { }

  @post('/registos-clinicos')
  @response(200, {
    description: 'RegistoClinico model instance',
    content: {'application/json': {schema: getModelSchemaRef(RegistoClinico)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistoClinico, {
            title: 'NewRegistoClinico',
            exclude: ['idRegistoClinico'],
          }),
        },
      },
    })
    registoClinico: Omit<RegistoClinico, 'idRegistoClinico'>,
  ): Promise<RegistoClinico> {
    return this.registoClinicoRepository.create(registoClinico);
  }

  @get('/registos-clinicos/count')
  @response(200, {
    description: 'RegistoClinico model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RegistoClinico) where?: Where<RegistoClinico>,
  ): Promise<Count> {
    return this.registoClinicoRepository.count(where);
  }

  @get('/registos-clinicos')
  @response(200, {
    description: 'Array of RegistoClinico model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RegistoClinico, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RegistoClinico) filter?: Filter<RegistoClinico>,
  ): Promise<RegistoClinico[]> {
    return this.registoClinicoRepository.find(filter);
  }

  @patch('/registos-clinicos')
  @response(200, {
    description: 'RegistoClinico PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistoClinico, {partial: true}),
        },
      },
    })
    registoClinico: RegistoClinico,
    @param.where(RegistoClinico) where?: Where<RegistoClinico>,
  ): Promise<Count> {
    return this.registoClinicoRepository.updateAll(registoClinico, where);
  }

  @get('/registos-clinicos/{id}')
  @response(200, {
    description: 'RegistoClinico model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RegistoClinico, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RegistoClinico, {exclude: 'where'}) filter?: FilterExcludingWhere<RegistoClinico>
  ): Promise<RegistoClinico> {
    return this.registoClinicoRepository.findById(id, filter);
  }

  @patch('/registos-clinicos/{id}')
  @response(204, {
    description: 'RegistoClinico PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistoClinico, {partial: true}),
        },
      },
    })
    registoClinico: RegistoClinico,
  ): Promise<void> {
    await this.registoClinicoRepository.updateById(id, registoClinico);
  }

  @put('/registos-clinicos/{id}')
  @response(204, {
    description: 'RegistoClinico PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() registoClinico: RegistoClinico,
  ): Promise<void> {
    await this.registoClinicoRepository.replaceById(id, registoClinico);
  }

  @del('/registos-clinicos/{id}')
  @response(204, {
    description: 'RegistoClinico DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.registoClinicoRepository.deleteById(id);
  }
}
