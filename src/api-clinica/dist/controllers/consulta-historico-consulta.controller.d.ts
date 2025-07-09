import { Count, Filter, Where } from '@loopback/repository';
import { Consulta, HistoricoConsulta } from '../models';
import { ConsultaRepository } from '../repositories';
export declare class ConsultaHistoricoConsultaController {
    protected consultaRepository: ConsultaRepository;
    constructor(consultaRepository: ConsultaRepository);
    find(id: number, filter?: Filter<HistoricoConsulta>): Promise<HistoricoConsulta[]>;
    create(id: typeof Consulta.prototype.idConsulta, historicoConsulta: Omit<HistoricoConsulta, 'idHistorico'>): Promise<HistoricoConsulta>;
    patch(id: number, historicoConsulta: Partial<HistoricoConsulta>, where?: Where<HistoricoConsulta>): Promise<Count>;
    delete(id: number, where?: Where<HistoricoConsulta>): Promise<Count>;
}
