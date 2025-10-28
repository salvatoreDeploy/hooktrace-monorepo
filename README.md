# Hooktrace — Monorepo (Simplificado)

Projeto monorepo para captura/registro de webhooks e hooks relacionados.

## Visão geral

Este repositório contém uma API (pasta `api`) e uma interface web (pasta `web`).
O `api` inclui um `docker-compose.yml` (em `api/src/docker-compose.yml`) com um serviço PostgreSQL para desenvolvimento.

## Tecnologias e bibliotecas

- Node.js + pnpm (monorepo)
- TypeScript
- PostgreSQL (container via Docker)
- Ferramentas front-end: Vite, React (pasta `web`)
- Ferramentas back-end: (pasta `api`) — servidor TypeScript/Node

> Observação: pacotes e scripts específicos estão nas `package.json` de cada pasta (`api/`, `web/`) e no `package.json` raiz.

## Instalação (local)

1. Instale dependências do monorepo (na raiz):

```bash
pnpm install
```

2. Instale dependências individuais (opcional):

```bash
cd api && pnpm install
cd ../web && pnpm install
```

## Variáveis de ambiente

O arquivo de exemplo para a API fica em `api/.env`.

Se estiver usando o docker-compose fornecido, configure a variável `DATABASE_URL` apontando para o container Postgres:

```
DATABASE_URL=postgresql://docker:docker@localhost:5432/hooktrace_DB
```

Os valores padrão do `docker-compose` (em `api/src/docker-compose.yml`) são:

- usuário: `docker`
- senha: `docker`
- database: `hooktrace_DB`
- porta: `5432` (mapeada para a máquina host)

## Executando o Postgres via Docker Compose

No ambiente de desenvolvimento você pode subir apenas o serviço Postgres com o arquivo incluído:

```bash
docker compose -f api/src/docker-compose.yml up -d
```

Verificar logs / status:

```bash
docker compose -f api/src/docker-compose.yml ps
docker compose -f api/src/docker-compose.yml logs -f postgres
```

Para parar e remover:

```bash
docker compose -f api/src/docker-compose.yml down
```

## Rodando a aplicação (dev)

Exemplos genéricos — adapte conforme scripts nas `package.json` de cada pacote:

API (pasta `api`):

```bash
cd api
# ajustar se o script for outro, ex: pnpm run dev
pnpm run dev
```

Web (pasta `web`):

```bash
cd web
pnpm run dev
```

## Notas rápidas

- Se usar o container Postgres e `DATABASE_URL` apontar para `localhost`, a aplicação na máquina host deve conseguir conectar.
- Para ambientes de produção, nunca exponha credenciais no repositório e use secret management (ex.: variáveis de ambiente da infra ou arquivos `.env` excluídos do VCS).
- Se o projeto usar migrações (Prisma, TypeORM, etc.), execute-as após subir o banco.

---

