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

Todas as relações já se apresentam em 4FN.

  -1FN: Todos os atributos são atómicos.
  
  -2FN: Tem chave primária simples, e todos os atributos dependem totalmente dela.
  
  -3FN: Não há dependências transitivas.
  
  -BCNF: Todas as dependências funcionais têm a chave como determinante.
  
  -4FN: Não há dependências multivaloradas.
  
---
[< Previous](rpf02.md) | [^ Main](/../../) | [Next >](rpf04.md)
