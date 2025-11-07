# Hooktrace — Monorepo

> Plataforma para captura, inspeção e geração de handlers para webhooks. Estruturado em monorepo com API (backend) e interface web (frontend).

---

## Sumário

- [Visão Geral](#visão-geral)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Setup](#instalação-e-setup)
- [Configuração de Ambiente](#configuração-de-ambiente)
- [Scripts Principais](#scripts-principais)
- [Funcionalidades](#funcionalidades)
- [Detalhes da API](#detalhes-da-api)
- [Detalhes do Frontend Web](#detalhes-do-frontend-web)
- [Links e Referências](#links-e-referências)

---

## Visão Geral

O Hooktrace é um sistema para registrar, listar, inspecionar e gerar handlers para webhooks de forma centralizada. O projeto é dividido em duas partes principais:

- **api/** — Backend em Node.js/TypeScript, expõe endpoints REST para manipulação de webhooks, geração de código e integrações.
- **web/** — Frontend em React + Vite, interface moderna para visualização, seleção e geração de handlers.

---

## Estrutura do Projeto

```
hooktrace/
├── api/         # Backend (Fastify, Drizzle ORM, PostgreSQL)
│   ├── src/
│   │   ├── db/           # Schema, seed, migrações
│   │   ├── routes/       # Rotas da API
│   │   └── server.ts     # Bootstrap do servidor
│   ├── docker-compose.yml
│   └── package.json
├── web/         # Frontend (React, Vite, Tailwind)
│   ├── src/
│   │   ├── components/   # Componentes React reutilizáveis
│   │   ├── http/         # Schemas e utilitários HTTP
│   │   └── main.tsx      # Entry point
│   └── package.json
├── package.json # Gerenciamento monorepo (pnpm)
└── README.md    # Este arquivo
```

---

## Tecnologias Utilizadas

### Monorepo & Geral
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (workspaces)
- [TypeScript](https://www.typescriptlang.org/)

### Backend (api/)
- [Fastify](https://fastify.dev/) — framework HTTP
- [Drizzle ORM](https://orm.drizzle.team/) — ORM para PostgreSQL
- [PostgreSQL](https://www.postgresql.org/) — banco de dados
- [Zod](https://zod.dev/) — validação de schemas
- [@ai-sdk/google](https://js.sdk.ai/) — geração de código handler via IA
- [Docker Compose](https://docs.docker.com/compose/) — ambiente de banco local

### Frontend (web/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@tanstack/react-query](https://tanstack.com/query/latest)
- [@tanstack/react-router](https://tanstack.com/router/latest)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

---

## Instalação e Setup

1. **Clone o repositório e instale as dependências do monorepo:**
   ```bash
   pnpm install
   ```

2. **Instale dependências individuais (opcional):**
   ```bash
   cd api && pnpm install
   cd ../web && pnpm install
   ```

3. **Configure as variáveis de ambiente:**
   - Copie/edite o arquivo `.env` em `api/.env`.
   - Exemplo de conexão local:
     ```env
     DATABASE_URL=postgresql://docker:docker@localhost:5432/hooktrace_DB
     ```

4. **Suba o banco de dados Postgres via Docker Compose:**
   ```bash
   docker compose -f api/docker-compose.yml up -d
   ```

---

## Scripts Principais

### Backend (api/)

| Script            | Descrição                                 |
|-------------------|-------------------------------------------|
| `pnpm run dev`    | Inicia API em modo desenvolvimento        |
| `pnpm run start`  | Inicia API em produção (build necessário) |
| `pnpm run db:generate` | Gera migrações Drizzle ORM           |
| `pnpm run db:migrate`  | Aplica migrações no banco            |
| `pnpm run db:seed`     | Popula banco com dados de exemplo     |

### Frontend (web/)

| Script            | Descrição                                 |
|-------------------|-------------------------------------------|
| `pnpm run dev`    | Inicia frontend em modo desenvolvimento   |
| `pnpm run build`  | Gera build de produção                    |
| `pnpm run preview`| Visualiza build localmente                |

---

## Funcionalidades

### API
- Cadastro, listagem e remoção de webhooks recebidos
- Geração automática de código handler TypeScript para múltiplos webhooks selecionados (via IA)
- Documentação OpenAPI/Swagger embutida

### Web
- Listagem paginada de webhooks recebidos
- Seleção múltipla de webhooks
- Geração de handler TypeScript customizado (com feedback visual de carregamento)
- Visualização de detalhes e payloads dos webhooks
- UI responsiva e moderna (Tailwind, Radix UI)

---

## Detalhes da API

- **Stack:** Fastify, Drizzle ORM, PostgreSQL, Zod
- **Principais rotas:**
  - `GET /api/webhooks` — Lista webhooks (paginado, com cursor)
  - `POST /api/generate-handler` — Gera código handler TypeScript para webhooks selecionados
  - `DELETE /api/webhooks/:id` — Remove um webhook
  - `GET /api/webhooks/:id` — Detalhes de um webhook
- **Schema do banco:**
  - Tabela `webhooks`: id, method, pathname, ip, statusCode, contentType, contentLenght, queryParams, headers, body, cretatedAt
- **Geração de handler:**
  - Utiliza IA (Google Gemini) para gerar código TypeScript de handler a partir dos exemplos de payloads dos webhooks selecionados.
- **Documentação automática:**
  - Disponível via Swagger/OpenAPI (Fastify Swagger)

---

## Detalhes do Frontend Web

- **Stack:** React, Vite, Tailwind CSS, Tanstack Query/Router, Radix UI
- **Componentes principais:**
  - `WebhooksListItem` — Item de webhook com seleção e exclusão
  - `WebhooksList` — Lista paginada, seleção múltipla, botão de geração de handler
  - `CodeBlock` — Exibe código gerado com destaque
- **Funcionalidades de UI:**
  - Feedback visual ao gerar handler (botão desabilita e mostra animação)
  - Dialogs para exibir código gerado
  - Navegação por rotas (Tanstack Router)

---

## Links e Referências

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Fastify](https://fastify.dev/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [PostgreSQL](https://www.postgresql.org/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tanstack Query](https://tanstack.com/query/latest)
- [Tanstack Router](https://tanstack.com/router/latest)
- [Lucide Icons](https://lucide.dev/)
- [Zod](https://zod.dev/)
- [@ai-sdk/google](https://js.sdk.ai/)

---

> Para dúvidas, sugestões ou contribuições, abra uma issue ou pull request.

