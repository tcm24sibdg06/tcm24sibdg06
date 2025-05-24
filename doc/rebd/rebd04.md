# Esquema Relacional  <!-- omit in toc -->

- [Relações](#relações)
  - [PACIENTE](#PACIENTE)
  - [MEDICO](#MEDICO)
  - [ESPECIALIDADE](#ESPECIALIDADE)
  - [FUNCIONARIO](#FUNCIONARIO)
  - [CONSULTA](#CONSULTA)
  - [MEDICO_ESPECIALIDADE](#MEDICO_ESPECIALIDADE)
  - [REGISTO_CLINICO](#REGISTO_CLINICO)
  - [HISTORICO_CONSULTA](#HISTORICO_CONSULTA)
- [Vistas](#vistas)

## Relações

### PACIENTE

#### DESCRIÇÃO <!-- omit in toc -->

Tabela que armazena informação dos pacientes da clínica.

#### COLUNAS <!-- omit in toc -->

| Nome           | Descrição                 | Domínio      | por Omissão | Automático | Nulo |
| :------------- | :------------------------ | :----------- | :---------- | :--------- | :--- |
| idPaciente     | identificador do paciente | BIGINT       | -           | Sim        | Não  |
| nome           | nome do paciente          | VARCHAR(50)  | -           | Não        | Não  |
| dataNascimento | data de nascimento        | DATE         | -           | Não        | Não  |
| morada         | morada do paciente        | VARCHAR(200) | -           | Não        | Sim  |
| telefone       | telefone de contacto      | VARCHAR(15)  | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s)  |
| ---------- |
| idPaciente |

### MEDICO

#### DESCRIÇÃO <!-- omit in toc -->



#### COLUNAS <!-- omit in toc -->



#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->



### ESPECIALIDADE

#### DESCRIÇÃO <!-- omit in toc -->



#### COLUNAS <!-- omit in toc -->



#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->



### FUNCIONARIO

#### DESCRIÇÃO <!-- omit in toc -->



#### COLUNAS <!-- omit in toc -->



#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->



### CONSULTA

#### DESCRIÇÃO <!-- omit in toc -->



#### COLUNAS <!-- omit in toc -->



#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->



### MEDICO_ESPECIALIDADE

#### DESCRIÇÃO <!-- omit in toc -->



#### COLUNAS <!-- omit in toc -->



#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->



### REGISTO_CLINICO

#### DESCRIÇÃO <!-- omit in toc -->



#### COLUNAS <!-- omit in toc -->



#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->



### HISTORICO_CONSULTA

#### DESCRIÇÃO <!-- omit in toc -->



#### COLUNAS <!-- omit in toc -->



#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->


## Vistas



---
| [< Previous](rebd03.md) | [^ Main](/../../) | [Next >](rebd05.md) |

