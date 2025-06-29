# C6 : Construção da API com LoopBack

---

## Escolhas de Implementação

- Criação de modelos e respetivos repositórios e controladores com @loopback/cli.
- Adição manual de relações @belongsTo, @hasMany e @hasOne para garantir integridade.

---

## Problemas Enfrentados e Soluções

### Relação 1:N entre Consulta e HistóricoConsulta

**Problema:**

Na criação desta relação foi cometido um erro ao identificar a chave estrangeira

**Solução:**

Foi necessário remover a relação manualmente e recriá-la com o nome da chave estrangeira corrigido.

### Entidade HistóricoConsulta

**Problema:**

Esta entidade não deve ser manipulada manualmente, uma vez que apresenta um histórico de alterações automático.

**Solução:**

Implementar apenas endpoints do tipo `GET`.

---

| [< Previous](rpf05.md) | [^ Main](/../../) | [Next >](rpf07.md) |
