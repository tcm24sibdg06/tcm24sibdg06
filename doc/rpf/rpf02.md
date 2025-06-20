# Esquema conceptual

## Modelo E/A
### Entidades:
* PACIENTE (idPaciente, nome, morada, dataNascimento, contacto)
* MEDICO (idMedica, nome, contacto)
* ESPECIALIDADE (idEspecialidade, nome)
* FUNCIONARIO (idFuncionario, nome, contacto)
* CONSULTA (idConsulta, idPaciente (FK), idMedico (FK), idEspecialidade (FK), idFuncionario (FK), local, dataHoraInicio)
* HISTORICO_CONSULTA (idHistorico, idFuncionario (FK), idConsulta (FK), dataHoraAlteracao, tipoAlteracao)
* REGISTO_CLINICO (idRegistoClinico, idMedico (FK), idConsulta (FK), dataHora, descricao)

### Associações:
* Possui (CONSULTA, REGISTO_CLINICO)
* Realiza (MEDICO, CONSULTA)
* Pertence (CONSULTA, ESPECIALIDADE)
* AtuaEm (MEDICO, ESPECIALIDADE)
* Marca (FUNCIONARIO, CONSULTA)
* Sofre (CONSULTA, HISTORICO_CONSULTA)
* Tem (PACIENTE, CONSULTA)
* Altera (FUNCIONARIO, HISTORICO_CONSULTA)

![Modelo E/A](doc/rei/images/image01.png)   

#### Paciente
Representa um utente da clínica. Cada paciente possui um código único (idPaciente), assim como o seu nome, morada, data de nascimento e contacto. Esta entidade armazena as informações necessárias para agendar e associar consultas a cada indivíduo.

#### Médico
Representa um profissional de saúde que realiza consultas na clínica. Cada médico possui um código único (idMedico), nome e contacto. Os médicos estão também associados a especialidades médicas através da relação "AtuaEm" com a entidade "Especialidade".

#### Especialidade
Contém a lista de especializações médicas disponíveis na clínica. Cada especialidade tem um código único (idEspecialidade) e um nome. Esta entidade permite organizar os médicos e consultas.

#### Funcionário
Representa um trabalhador administrativo da clínica. Cada funcionário tem um código único (idFuncionario), um nome e um contacto. Embora não participe diretamente na consulta médica, é responsável por tarefas como o agendamento e receção de pacientes.

#### Consulta
Representa um agendamento entre um paciente e um médico para uma especialidade específica. Contém o código da consulta (idConsulta) e os códigos do paciente, médico e especialidade (como FKs), bem como a data e hora de início da consulta e local.

#### Registo clinico
Serve para o medico tirar apontamentos pós consulta

#### Histórico consulta
Contém o histórico completo de consultas de cada paciente, médico e especialidade, possibilitando a sua verificação e até mesmo o número de consultas num certo espaço de tempo.


## Regras de negócio adicionais (Restrições)
- Um médico não pode ter duas consultas sobrepostas no mesmo horário.
- A duração da consulta é definida pela especialidade e usada para evitar sobreposições.
- O sistema deve permitir reagendamento e cancelamento, mantendo o histórico de alterações.
- A chegada do paciente deve notificar automaticamente o médico.

---
[< Previous](rebd01.md) | [^ Main](/../../) | [Next >](rebd03.md)
