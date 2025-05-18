# Rodando o Estúdio Inara com Docker

Este guia irá ajudá-lo a executar o projeto do Estúdio Inara em sua máquina local usando Docker.

## Pré-requisitos

- Docker instalado em sua máquina
- Docker Compose instalado em sua máquina

## Instruções de Execução

1. **Clone o repositório** para sua máquina local:

```bash
git clone <URL_DO_REPOSITÓRIO>
cd estudio-inara
```

2. **Construa e inicie** o container Docker:

```bash
docker-compose up --build
```

3. **Acesse o site** em seu navegador:

```
http://localhost:5000
```

## Estrutura de Arquivos para Docker

- `Dockerfile`: Configura o ambiente de execução para o aplicativo
- `docker-compose.yml`: Configura os serviços e volumes para o desenvolvimento
- `docker-entrypoint.sh`: Script que configura variáveis de ambiente e inicia o aplicativo

## Solução de Problemas

Se você encontrar problemas ao executar o projeto com Docker, verifique os seguintes itens:

1. **Erro de permissão para docker-entrypoint.sh**:
   
   Se você receber um erro relacionado a permissões do script, execute:
   ```bash
   chmod +x docker-entrypoint.sh
   ```

2. **Porta 5000 já em uso**:
   
   Se a porta 5000 já estiver em uso, modifique o arquivo `docker-compose.yml` para usar outra porta:
   ```yaml
   ports:
     - "8080:5000"  # Agora o site estará disponível em localhost:8080
   ```

3. **Problemas com montagem de volume**:
   
   Se as alterações de código não forem refletidas na aplicação, verifique se os volumes estão montados corretamente no `docker-compose.yml`.

## Desenvolvimento

Ao realizar alterações no código, o servidor deve recarregar automaticamente graças à configuração de volumes no Docker Compose. Se isso não acontecer, você pode reiniciar o container:

```bash
docker-compose restart
```

---

Para qualquer problema adicional, consulte a documentação do Docker ou entre em contato com a equipe de desenvolvimento.