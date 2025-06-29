# SQL

## DDL

```sql
USE `clinica`;

DROP TABLE IF EXISTS `paciente`;
DROP TABLE IF EXISTS `medico`;
DROP TABLE IF EXISTS `especialidade`;
DROP TABLE IF EXISTS `funcionario`;
DROP TABLE IF EXISTS `consulta`;
DROP TABLE IF EXISTS `registo_clinica`;
DROP TABLE IF EXISTS `historico_consulta`;

CREATE TABLE IF NOT EXISTS PACIENTE (
  `idPaciente` BIGINT unsigned NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `dataNascimento` DATE NOT NULL,
  `morada` VARCHAR(200) default NULL,
  `telefone` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`idPaciente`)
);

CREATE TABLE IF NOT EXISTS MEDICO (
  `idMedico` BIGINT unsigned NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `telefone` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`idMedico`)
);

CREATE TABLE IF NOT EXISTS ESPECIALIDADE (
  `idEspecialidade` BIGINT unsigned NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `duracaoPadrao` INT NOT NULL,
  PRIMARY KEY (`idEspecialidade`)
);

CREATE TABLE IF NOT EXISTS FUNCIONARIO (
  `idFuncionario` BIGINT unsigned NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `telefone` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`idFuncionario`)
);

CREATE TABLE IF NOT EXISTS CONSULTA (
  `idConsulta` BIGINT unsigned NOT NULL AUTO_INCREMENT,
  `dataHora` DATETIME NOT NULL,
  `idPaciente` BIGINT unsigned NOT NULL,
  `idMedico` BIGINT unsigned NOT NULL,
  `idEspecialidade` BIGINT unsigned NOT NULL,
  `observacoes` TEXT default NULL,
  PRIMARY KEY (`idConsulta`),
  FOREIGN KEY (`idPaciente`) REFERENCES `PACIENTE`(`idPaciente`),
  FOREIGN KEY (`idMedico`) REFERENCES `MEDICO`(`idMedico`),
  FOREIGN KEY (`idEspecialidade`) REFERENCES `ESPECIALIDADE`(`idEspecialidade`)
);

CREATE TABLE IF NOT EXISTS REGISTO_CLINICO (
  `idRegistoClinico` BIGINT unsigned NOT NULL AUTO_INCREMENT,
  `idPaciente` BIGINT unsigned NOT NULL,
  `idMedico` BIGINT unsigned NOT NULL,
  `dataHora` DATETIME NOT NULL,
  `descricao` TEXT NOT NULL,
  PRIMARY KEY (`idRegistoClinico`),
  FOREIGN KEY (`idPaciente`) REFERENCES `PACIENTE`(`idPaciente`),
  FOREIGN KEY (`idMedico`) REFERENCES `MEDICO`(`idMedico`)
);

CREATE TABLE IF NOT EXISTS `HISTORICO_CONSULTA` (
  `idHistorico` BIGINT unsigned NOT NULL AUTO_INCREMENT,
  `idConsulta` BIGINT unsigned NOT NULL,
  `idFuncionario` BIGINT unsigned NOT NULL,
  `dataAlteracao` DATE NOT NULL default CURRENT_DATE,
  `tipoAlteracao` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idHistorico`),
  FOREIGN KEY (`idConsulta`) REFERENCES `CONSULTA`(`idConsulta`),
  FOREIGN KEY (`idFuncionario`) REFERENCES `FUNCIONARIO`(`idFuncionario`)
);
```

## DML
#### Listar todos os pacientes registados na clínica

```sql
SELECT *
FROM PACIENTE;
```

Apresenta todos os dados dos pacientes existentes na base de dados. Verifica se os pacientes estão a ser corretamente armazenados.

#### Listar todos os médicos que trabalham na clínica

```sql
SELECT *
FROM MEDICO;
```

Apresenta todos os dados dos médicos existentes na base de dados. Verifica se os médicos estão a ser corretamente armazenados.

#### Listar todos os funcionarios registados na clínica

```sql
SELECT *
FROM FUNCIONARIO;
```

Apresenta todos os dados dos funcionarios existentes na base de dados. Verifica se os funcionarios estão a ser corretamente armazenados.

#### Listar todas as consultas da clínica

```sql
SELECT *
FROM CONSULTA;
```

Apresenta todos os dados das consultas existentes na base de dados. Verifica se as consultas estão a ser corretamente armazenados.

#### Verificar o registo clínico

```sql
SELECT *
FROM REGISTO_CLINICO;
```

Apresenta todos os dados do registo clínico existente na base de dados. Verifica se o registo clínico está a ser corretamente armazenados.

#### Verificar o histórico de consultas

```sql
SELECT *
FROM HISTORICO_CONSULTA
```

Apresenta todos os dados do histórico de consultas existente na base de dados. Verifica se as alterações feitas às consultas estão a ser corretamente armazenadas.

#### Analisar o histórico de alterações de uma consulta específica

```sql
SELECT *
FROM HISTORICO_CONSULTA
WHERE idConsulta = 542;
```

Apresenta todas as alterações feitas a uma consulta específica (o número 542 é meramente ilustrativo).

#### Analisar os registos clínicos de uma determinada consulta

```sql
SELECT * 
FROM REGISTO_CLINICO 
WHERE idConsulta = 542;
```

Apresenta o registo clínico de uma consulta específica (o número 542 é meramente ilustrativo).

####  Listar todas as consultas marcadas para "hoje"

```sql
SELECT *
FROM CONSULTA
WHERE DATE(dataHora) = CURRENT_DATE;
```

Apresenta as consultas marcadas para o dia "atual".

---
[< Previous](rpf04.md) | [^ Main](/../../) | [Next >](rpf06.md)
