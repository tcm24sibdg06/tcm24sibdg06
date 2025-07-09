import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Especialidade } from '../models';
import { EspecialidadeRepository } from '../repositories';
export declare class EspecialidadeControllerController {
    especialidadeRepository: EspecialidadeRepository;
    constructor(especialidadeRepository: EspecialidadeRepository);
    create(especialidade: Omit<Especialidade, 'idEspecialidade'>): Promise<Especialidade>;
    count(where?: Where<Especialidade>): Promise<Count>;
    find(filter?: Filter<Especialidade>): Promise<Especialidade[]>;
    updateAll(especialidade: Especialidade, where?: Where<Especialidade>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Especialidade>): Promise<Especialidade>;
    updateById(id: number, especialidade: Especialidade): Promise<void>;
    replaceById(id: number, especialidade: Especialidade): Promise<void>;
    deleteById(id: number): Promise<void>;
}
