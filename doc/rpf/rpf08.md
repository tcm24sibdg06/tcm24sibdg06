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

### MEDICO

Inclui apenas `GET` e `POST` uma vez que são os principais métodos que seriam utilizados. Poderia também ser utilizado o método CRUD `PATCH` mas seria utilizado muito esporádicamente.

| Endpoint | Justificação |
|----------|--------------|
| `GET /medicos` | Listar medicos |
| `POST /medicos`| Criar medico |

![Medico1](images/medico1.png)

![Medico2](images/medico2.png)

### FUNCIONARIO

Inclui apenas `GET` e `POST` uma vez que são os principais métodos que seriam utilizados. Poderia também ser utilizado o método CRUD `PATCH` mas seria utilizado muito esporádicamente.

| Endpoint | Justificação |
|----------|--------------|
| `GET /funcionarios` | Listar funcionarios |
| `POST /funcionarios`| Criar funcionario |

![Funcionario1](images/funcionario1.png)

![Funcionario2](images/funcionario2.png)

### ESPECIALIDADE

Inclui apenas `GET` e `POST` uma vez que são os principais métodos que seriam utilizados. Poderia também ser utilizado o método CRUD `PATCH` mas seria utilizado muito esporádicamente.

| Endpoint | Justificação |
|----------|--------------|
| `GET /especialidades` | Listar especialidades |
| `POST /especialidades`| Criar especialidade |

![Especialidade1](images/especialidade1.png)

![Especialidade2](images/especialidade2.png)

### CONSULTA

Inclui os métodos CRUD `GET`, `POST`, `PATCH` e `DELETE`

| Endpoint | Justificação |
|----------|--------------|
| `GET /consultas` | Listar consultas |
| `GET /consultas/:id` | Ver consulta por id |
| `POST /consultas`| Criar consulta |
| `PATCH /consultas/:id` | Atualizar consulta |
| `DELETE /consultas/:id`| Apagar consulta |

![Consulta1](images/consulta1.png)

![Consulta2](images/consulta2.png)

![Consulta3](images/consulta3.png)

![Consulta4](images/consulta4.png)

![Consulta5](images/consulta5.png)

### REGISTO_CLINICO

Inclui apenas `GET` uma vez que é o único método CRUD útil para esta entidade.

| Endpoint | Justificação |
|----------|--------------|
| `GET /consultas/:id/registo-clinico` | Obter registo clinico de consulta |

![Registo_Clinico1](images/registoclinico1.png)

### HISTORICO_CONSULTA

Inclui apenas `GET` uma vez que é o único método CRUD útil para esta entidade.

| Endpoint | Justificação |
|----------|--------------|
| `GET /historico-consultas` | Listar histórico de consultas |
| `GET /consultas/:id/alteracoes` | Obter alteracoes feitas numa consulta |

![Historico_Consultas1](images/historicoconsultas1.png)

![Historico_Consultas2](images/historicoconsultas2.png)

---
[< Previous](rpf07.md) | [^ Main](/../../) | Next >
