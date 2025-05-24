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
  `morada` VARCHAR(200) DEFAULT NULL,
  `telefone` VARCHAR(15) DEFAULT NULL,
  PRIMARY KEY (`idPaciente`)
);

CREATE TABLE IF NOT EXISTS MEDICO (
  `idMedico` BIGINT unsigned NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `telefone` VARCHAR(15) DEFAULT NULL,
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
  `telefone` VARCHAR(15) DEFAULT NULL,
  PRIMARY KEY (`idFuncionario`)
);

CREATE TABLE IF NOT EXISTS CONSULTA (
  `idConsulta` BIGINT unsigned NOT NULL AUTO_INCREMENT,
  `dataHora` DATETIME NOT NULL,
  `idPaciente` BIGINT unsigned NOT NULL,
  `idMedico` BIGINT unsigned NOT NULL,
  `idFuncionario` BIGINT unsigned NOT NULL,
  `idEspecialidade` BIGINT unsigned NOT NULL,
  `observacoes` TEXT default NULL,
  PRIMARY KEY (`idConsulta`),
  FOREIGN KEY (`idPaciente`) REFERENCES `PACIENTE`(`idPaciente`),
  FOREIGN KEY (`idMedico`) REFERENCES `MEDICO`(`idMedico`),
  FOREIGN KEY (`idFuncionario`) REFERENCES `FUNCIONARIO`(`idFuncionario`),
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
  `dataAlteracao` DATETIME NOT NULL default CURRENT_TIMESTAMP,
  `tipoAlteracao` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idHistorico`),
  FOREIGN KEY (`idConsulta`) REFERENCES `CONSULTA`(`idConsulta`)
  FOREIGN KEY (`idFuncionario`) REFERENCES `FUNCIONARIO`(`idFuncionario`),
);
```

## DML



---
[< Previous](rebd04.md) | [^ Main](/../../) | Next >
