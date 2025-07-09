import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Paciente } from '../models';
import { PacienteRepository } from '../repositories';
export declare class PacienteControllerController {
    pacienteRepository: PacienteRepository;
    constructor(pacienteRepository: PacienteRepository);
    create(paciente: Omit<Paciente, 'idPaciente'>): Promise<Paciente>;
    count(where?: Where<Paciente>): Promise<Count>;
    find(filter?: Filter<Paciente>): Promise<Paciente[]>;
    updateAll(paciente: Paciente, where?: Where<Paciente>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Paciente>): Promise<Paciente>;
    updateById(id: number, paciente: Paciente): Promise<void>;
    replaceById(id: number, paciente: Paciente): Promise<void>;
    deleteById(id: number): Promise<void>;
}
