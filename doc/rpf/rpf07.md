# C7 : Loopback

---

## Vantagens

**Rápido e prático**: A estrutura foi criada de forma intuitiva e prática.
**Boa integração com validações**: Campos obrigatórios, tipos e relações são refletidos na estrutura gerada.

## Limitações

**Tamanhos dos campos**: A possibilidade de apenas escolher string, dá-nos um VARCHAR muito elevado, que não seria necessária para por exemplo os nomes das pessoas.
**Dependência do modelo**: Erros de configuração podem gerar uma estrutura com falhas sem aviso nenhum, o que pode dificultar o uso da API.
