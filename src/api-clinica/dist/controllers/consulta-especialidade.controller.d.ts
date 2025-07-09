import { Consulta, Especialidade } from '../models';
import { ConsultaRepository } from '../repositories';
export declare class ConsultaEspecialidadeController {
    consultaRepository: ConsultaRepository;
    constructor(consultaRepository: ConsultaRepository);
    getEspecialidade(id: typeof Consulta.prototype.idConsulta): Promise<Especialidade>;
}
