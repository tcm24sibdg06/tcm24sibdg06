import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Medico } from '../models';
import { MedicoRepository } from '../repositories';
export declare class MedicoControllerController {
    medicoRepository: MedicoRepository;
    constructor(medicoRepository: MedicoRepository);
    create(medico: Omit<Medico, 'idMedico'>): Promise<Medico>;
    count(where?: Where<Medico>): Promise<Count>;
    find(filter?: Filter<Medico>): Promise<Medico[]>;
    updateAll(medico: Medico, where?: Where<Medico>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Medico>): Promise<Medico>;
    updateById(id: number, medico: Medico): Promise<void>;
    replaceById(id: number, medico: Medico): Promise<void>;
    deleteById(id: number): Promise<void>;
}
