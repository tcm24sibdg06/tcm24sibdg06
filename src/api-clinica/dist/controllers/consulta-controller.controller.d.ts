import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Consulta } from '../models';
import { ConsultaRepository } from '../repositories';
export declare class ConsultaControllerController {
    consultaRepository: ConsultaRepository;
    constructor(consultaRepository: ConsultaRepository);
    create(consulta: Omit<Consulta, 'idConsulta'>): Promise<Consulta>;
    count(where?: Where<Consulta>): Promise<Count>;
    find(filter?: Filter<Consulta>): Promise<Consulta[]>;
    updateAll(consulta: Consulta, where?: Where<Consulta>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Consulta>): Promise<Consulta>;
    updateById(id: number, consulta: Consulta): Promise<void>;
    replaceById(id: number, consulta: Consulta): Promise<void>;
    deleteById(id: number): Promise<void>;
}
