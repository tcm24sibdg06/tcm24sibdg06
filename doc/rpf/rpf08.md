# C8 : Postman

---
## Estrutura

A coleção foi organizada por entidades:

- [PACIENTE](#PACIENTE)
- [MEDICO](#MEDICO)
- [FUNCIONARIO](#FUNCIONARIO)
- [ESPECIALIDADE](#ESPECIALIDADE)
- [CONSULTA](#CONSULTA)
- [REGISTO_CLINICO](#REGISTO_CLINICO)
- [HISTORICO_CONSULTA](#HISTORICO_CONSULTA)

### PACIENTE

Inclui apenas `GET` e `POST` uma vez que são os principais métodos que seriam utilizados. Poderia também ser utilizado o método CRUD `PATCH` mas seria utilizado muito esporádicamente.

| Endpoint | Justificação |
|----------|--------------|
| `GET /pacientes` | Listar pacientes |
| `GET /pacientes/:id` | Ver paciente por id |
| `POST /pacientes`| Criar paciente |

![Paciente1](images/paciente1.png)

![Paciente2](images/paciente2.png)

![Paciente3](images/paciente3.png)

