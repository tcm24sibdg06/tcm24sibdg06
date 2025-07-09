import { Count, Filter, Where } from '@loopback/repository';
import { Consulta, RegistoClinico } from '../models';
import { ConsultaRepository } from '../repositories';
export declare class ConsultaRegistoClinicoController {
    protected consultaRepository: ConsultaRepository;
    constructor(consultaRepository: ConsultaRepository);
    get(id: number, filter?: Filter<RegistoClinico>): Promise<RegistoClinico>;
    create(id: typeof Consulta.prototype.idConsulta, registoClinico: Omit<RegistoClinico, 'idRegistoClinico'>): Promise<RegistoClinico>;
    patch(id: number, registoClinico: Partial<RegistoClinico>, where?: Where<RegistoClinico>): Promise<Count>;
    delete(id: number, where?: Where<RegistoClinico>): Promise<Count>;
}
