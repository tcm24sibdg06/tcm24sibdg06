import { Consulta, Paciente } from '../models';
import { ConsultaRepository } from '../repositories';
export declare class ConsultaPacienteController {
    consultaRepository: ConsultaRepository;
    constructor(consultaRepository: ConsultaRepository);
    getPaciente(id: typeof Consulta.prototype.idConsulta): Promise<Paciente>;
}
