import { HistoricoConsulta, Consulta } from '../models';
import { HistoricoConsultaRepository } from '../repositories';
export declare class HistoricoConsultaConsultaController {
    historicoConsultaRepository: HistoricoConsultaRepository;
    constructor(historicoConsultaRepository: HistoricoConsultaRepository);
    getConsulta(id: typeof HistoricoConsulta.prototype.idHistorico): Promise<Consulta>;
}
