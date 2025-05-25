# Normalização

## Relações

PACIENTE(idPaciente PK, nome, morada, dataNascimento, telefone)
MEDICO(idMedico PK, nome, telefone)
ESPECIALIDADE(idEspecialidade PK, nome, duracaoPadrao)
FUNCIONARIO(idFuncionario PK, nome, telefone)
CONSULTA(idConsulta PK, idMedico FK, idPaciente FK, idFuncionario FK, idEspecialidade FK, observacoes, dataHora)
REGISTO_CLINICO(idRegistoClinico PK, idMedico FK, idPaciente FK, descricao, dataHora)
HISTORICO_CONSULTA(idHistorico PK, idConsulta FK, idFuncionario FK, tipoAlteracao, dataAlteracao)

## Normalização do Esquema Relacional


---
[< Previous](rebd02.md) | [^ Main](/../../) | [Next >](rebd04.md)
