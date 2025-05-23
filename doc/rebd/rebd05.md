# SQL

## DDL

```sql
USE `test`;

DROP TABLE IF EXISTS `tabela_a`;
DROP TABLE IF EXISTS `tabela_b`;

CREATE TABLE IF NOT EXISTS `tabela_a` (
  `model` int(4) unsigned NOT NULL,
  `speed` int(4) unsigned NOT NULL,
  `ram` int(3) unsigned NOT NULL,
  `hd` float unsigned NOT NULL,
  `screen` float unsigned NOT NULL,
  `price` int(7) NOT NULL,
  PRIMARY KEY (`model`)
);

CREATE TABLE IF NOT EXISTS `tabela_b` (
  `model` int(4) unsigned NOT NULL,
  `speed` int(4) unsigned NOT NULL,
  `ram` int(3) unsigned NOT NULL,
  `hd` float unsigned NOT NULL,
  `cd` varchar(3) COLLATE latin1_bin NOT NULL,
  `price` int(7) NOT NULL,
  PRIMARY KEY (`model`)
);
```

## DML



---
[< Previous](rebd04.md) | [^ Main](/../../) | Next >
