import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { RegistoClinico } from '../models';
import { RegistoClinicoRepository } from '../repositories';
export declare class RegistoClinicoControllerController {
    registoClinicoRepository: RegistoClinicoRepository;
    constructor(registoClinicoRepository: RegistoClinicoRepository);
    create(registoClinico: Omit<RegistoClinico, 'idRegistoClinico'>): Promise<RegistoClinico>;
    count(where?: Where<RegistoClinico>): Promise<Count>;
    find(filter?: Filter<RegistoClinico>): Promise<RegistoClinico[]>;
    updateAll(registoClinico: RegistoClinico, where?: Where<RegistoClinico>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<RegistoClinico>): Promise<RegistoClinico>;
    updateById(id: number, registoClinico: RegistoClinico): Promise<void>;
    replaceById(id: number, registoClinico: RegistoClinico): Promise<void>;
    deleteById(id: number): Promise<void>;
}
