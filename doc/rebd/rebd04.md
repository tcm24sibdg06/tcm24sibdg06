# Esquema Relacional  <!-- omit in toc -->

- [Relações](#relações)
  - [PACIENTE](#PACIENTE)
  - [MEDICO](#MEDICO)
  - [ESPECIALIDADE](#ESPECIALIDADE)
  - [FUNCIONARIO](#FUNCIONARIO)
  - [CONSULTA](#CONSULTA)
  - [REGISTO_CLINICO](#REGISTO_CLINICO)
  - [HISTORICO_CONSULTA](#HISTORICO_CONSULTA)
- [Vistas](#vistas)

## Relações

### PACIENTE

#### DESCRIÇÃO <!-- omit in toc -->

Tabela que armazena os dados dos pacientes da clínica.

#### COLUNAS <!-- omit in toc -->

| Nome           | Descrição                       | Domínio      | por Omissão | Automático | Nulo |
| :------------- | :------------------------------ | :----------- | :---------- | :--------- | :--- |
| idPaciente     | identificador único do paciente | BIGINT       | -           | Sim        | Não  |
| nome           | nome do paciente                | VARCHAR(50)  | -           | Não        | Não  |
| dataNascimento | data de nascimento              | DATE         | -           | Não        | Não  |
| morada         | morada do paciente              | VARCHAR(200) | -           | Não        | Sim  |
| telefone       | contacto telefónico             | VARCHAR(15)  | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| idPaciente |

### MEDICO

#### DESCRIÇÃO <!-- omit in toc -->

Tabela que armazena os dados dos médicos da clínica.

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                     | Domínio     | por Omissão | Automático | Nulo |
| :------- | :---------------------------- | :---------- | :---------- | :--------- | :--- |
| idMedico | identificador único do médico | BIGINT      | -           | Sim        | Não  |
| nome     | nome do médico                | VARCHAR(50) | -           | Não        | Não  |
| telefone | contacto telefónico           | VARCHAR(15) | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| idMedico  |

### ESPECIALIDADE

#### DESCRIÇÃO <!-- omit in toc -->

Especialidades da clínica.

#### COLUNAS <!-- omit in toc -->

| Nome            | Descrição                            | Domínio     | por Omissão | Automático | Nulo |
| :-------------- | :----------------------------------- | :---------- | :---------- | :--------- | :--- |
| idEspecialidade | identificador único da especialidade | BIGINT      | -           | Sim        | Não  |
| nome            | nome da especialidade                | VARCHAR(50) | -           | Não        | Não  |
| duracaoPadrao   | duração padrão de uma consulta       | INT         | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)       |
| --------------- |
| idEspecialidade |

### FUNCIONARIO

#### DESCRIÇÃO <!-- omit in toc -->

Tabela que armazena os dados dos funcionários da clínica.

#### COLUNAS <!-- omit in toc -->

| Nome          | Descrição                          | Domínio      | por Omissão | Automático | Nulo |
| :------------ | :--------------------------------- | :----------- | :---------- | :--------- | :--- |
| idFuncionario | identificador único do funcionario | BIGINT       | -           | Sim        | Não  |
| nome          | nome da especialidade              | VARCHAR(50)  | -           | Não        | Não  |
| telefone      | contacto telefónico                | VARCHAR(15)  | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)     |
| ------------- |
| idFuncionario |

### CONSULTA

#### DESCRIÇÃO <!-- omit in toc -->

Tabela que armazena os dados das consultas agendadas.

#### COLUNAS <!-- omit in toc -->

| Nome            | Descrição                       | Domínio  | por Omissão | Automático | Nulo |
| :-------------- | :------------------------------ | :------- | :---------- | :--------- | :--- |
| idConsulta      | identificador único da consulta | BIGINT   | -           | Sim        | Não  |
| dataHora        | data e hora da consulta         | DATETIME | -           | Não        | Não  |
| idPaciente      | FK para PACIENTE                | BIGINT   | -           | Não        | Não  |
| idMedico        | FK para MEDICO                  | BIGINT   | -           | Não        | Não  |
| idEspecialidade | FK para ESPECIALIDADE           | BIGINT   | -           | Não        | Não  |
| observacoes     | observações gerais              | TEXT     | -           | Não        | Sim  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| idConsulta |

- **Referêncial** (chaves estrangeiras)*:

| Nome             | Coluna(s)       | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ---------------- | --------------- | ------------------- | ------------------------- | ------- |
| paciente_fk      | idPaciente      | PACIENTE            | idPaciente                | Sim     |
| medico_fk        | idMedico        | MEDICO              | idMedico                  | Sim     |
| especialidade_fk | idEspecialidade | FUNCIONARIO         | idEspecialidade           | Sim     |

### REGISTO_CLINICO

#### DESCRIÇÃO <!-- omit in toc -->

Armazenamento dos registos do que foi feito e observado nas consultas

#### COLUNAS <!-- omit in toc -->

| Nome             | Descrição                                            | Domínio      | por Omissão | Automático | Nulo |
| :--------------- | :--------------------------------------------------- | :----------- | :---------- | :--------- | :--- |
| idRegistoClinico | identificador único do registo clínico realizado     | BIGINT       | -           | Sim        | Não  |
| idMedico         | FK para MEDICO                                       | BIGINT       | -           | Não        | Não  |
| idPaciente       | FK para PACIENTE                                     | BIGINT       | -           | Não        | Não  |
| dataHora         | data e hora da consulta                              | DATETIME     | -           | Não        | Não  |
| descricao        | descrição do que foi feito e observado numa consulta | TEXT         | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)        |
| ---------------- |
| idRegistoClinico |

- **Referêncial** (chaves estrangeiras)*:

| Nome        | Coluna(s)  | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----------- | ---------- | ------------------- | ------------------------- | ------- |
| paciente_fk | idPaciente | PACIENTE            | idPaciente                | Sim     |
| medico_fk   | idMedico   | MEDICO              | idMedico                  | Sim     |

### HISTORICO_CONSULTA

#### DESCRIÇÃO <!-- omit in toc -->

Histórico de alterações e cancelamentos de consultas.

#### COLUNAS <!-- omit in toc -->

| Nome          | Descrição                        | Domínio     | por Omissão | Automático | Nulo |
| :------------ | :------------------------------- | :---------- | :---------- | :--------- | :--- |
| idHistorico   | identificador único da alteração | BIGINT      | -           | Sim        | Não  |
| idConsulta    | FK para CONSULTA                 | BIGINT      | -           | Não        | Não  |
| idFuncionario | FK para FUNCIONARIO              | BIGINT      | -           | Não        | Não  |
| dataAlteracao | data da alteração                | DATE        | now()       | Não        | Não  |
| tipoAlteracao | tipo de alteração                | VARCHAR(50) | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)   |
| ----------- |
| idHistorico |

- **Referêncial** (chaves estrangeiras)*:

| Nome           | Coluna(s)     | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| -------------- | ------------- | ------------------- | ------------------------- | ------- |
| consulta_fk    | idConsulta    | CONSULTA            | idConsulta                | Sim     |
| funcionario_fk | idFuncionario | FUNCIONARIO         | idFuncionario             | Sim     |


## Vistas



---
| [< Previous](rebd03.md) | [^ Main](/../../) | [Next >](rebd05.md) |

