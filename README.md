# 🚀 Lead Management API

Ideia do projeto:
_"Uma API RESTful para gestão de Leads com Node.js e TypeScript."_

Organizado com princípios de **SOLID**, **Clean Architecture** e **DDD (Domain-Driven Design)**. Uma proposta de base modular e escalável para construção de APIs robustas, testáveis e de fácil manutenção, focada em resolver lógicas complexas de transição de estado no setor de vendas.

## 🎯 Motivo

Este projeto faz parte do meu portfólio.

Desenvolvi com foco no aprendizado prático e na evolução como desenvolvedor, buscando construir uma base técnica sólida para o mercado de trabalho. O objetivo principal foi ir além do CRUD tradicional, aplicando padrões de projeto avançados para resolver problemas reais de acoplamento e regras de negócios complexas de forma elegante.

Se você tiver qualquer feedback, ficarei muito feliz em receber! Toda sugestão é muito bem-vinda para que eu continue melhorando como profissional de engenharia de software.

## 🚀 Começando

### Pré-requisitos

Para executar este projeto no modo de **desenvolvimento**, você precisará ter um ambiente básico com o Node.js 20+ e NPM 10+ instalados.

### Instalando

**Clonando o Repositório**

```bash
$ git clone <sua-url-do-repo>
$ cd lead_management_api
```

**Instalando dependências**

```bash
$ npm install
```

ou

```bash
$ yarn
```

**Executando o servidor**

Com todas as dependências instaladas e o ambiente configurado, você pode iniciar a aplicação:

```bash
$ npm run dev
```

ou

```bash
$ yarn dev
```

O servidor estará rodando em http://localhost:3333.

## 📂 Estrutura e Arquitetura

O projeto adota uma separação rigorosa de responsabilidades (SRP). A interface web (Express) está isolada do modelo de domínio e dos Casos de Uso. A dependência aponta sempre de fora para dentro.

```
src/
 ├── domain/                # Regras de negócio puras (Agnósticas de framework)
 │   ├── observers/         # Padrão Observer (Eventos e Reações)
 │   └── states/            # Padrão State (Máquina de estados da Lead)
 ├── entities/              # Definição das entidades do domínio (Lead, History)
 ├── facades/               # Padrão Facade (Orquestração de serviços complexos)
 ├── repositories/          # Contratos (Interfaces) e Implementações de acesso a dados
 ├── useCases/              # Regras de aplicação (Interações do usuário)
 │   └── EvolveLead/
 │       ├── EvolveLead_Controller.ts   # Recebe a requisição HTTP
 │       ├── EvolveLead_UseCase.ts      # Executa a regra de negócio central
 │       ├── EvolveLead_DTO.ts          # Contratos de entrada/saída
 │       ├── EvolveLead_UseCase.spec.ts # Testes unitários (Jest)
 │       └── index.ts                   # Injeção de dependências e exportação
 ├── app.ts                 # Configuração do app (Middlewares do Express)
 ├── routes.ts              # Roteamento da API
 └── server.ts              # Inicialização do servidor
```

## ⚙️ Design Patterns Aplicados 

Para lidar com a complexidade das regras de negócio de evolução de uma Lead, foram implementados três padrões de projeto essenciais:

**State Pattern (Máquina de Estados):** Utilizado em `src/domain/states/` para controlar o ciclo de vida da Lead (`CONTATO_INICIAL`, `ENVIOU_PROPOSTA`, etc). Em vez de usar múltiplos blocos `if/else` ou `switch` nos Casos de Uso, cada estado é uma classe que dita se a Lead pode avançar, ser ganha ou perdida. Isso reduz drasticamente a complexidade ciclomática e respeita o Princípio Aberto/Fechado (OCP).

**Observer Pattern (Design Orientado a Eventos):** Localizado em `src/domain/observers/`. Quando uma Lead muda de estado, precisamos registrar um histórico de negociação. Para não acoplar essa lógica de auditoria no fluxo principal de evolução, o sistema emite um evento interno. O `HistoryObserver` escuta essa mudança e salva o log de forma totalmente isolada (Desacoplamento).

**Facade Pattern (Orquestração):** Em `src/facades/LeadEvolutionFacade.ts`. Evoluir uma Lead exige buscar dados, instanciar a Factory de estados, executar a ação, salvar no banco de dados e notificar os observadores. A Facade centraliza essa orquestração, entregando ao Caso de Uso um método limpo e direto (`processAction`), ocultando toda a complexidade do subsistema.

## 🛠️ Construído com

- [NodeJS](https://nodejs.org/) - Ambiente de execução
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Express](https://expressjs.com/) - Framework web para roteamento
- [Dotenv](https://github.com/motdotla/dotenv) - Gerenciamento de variáveis de ambiente
- [ts-node-dev](https://github.com/wclr/ts-node-dev) - Ambiente de desenvolvimento TypeScript

## 📚 Referências

- [Youtube - Princípios SOLID em uma API REST com Node.js e TypeScript](https://www.youtube.com)
- Livro - **Clean Architecture** (Robert C. Martin)
- Livro - **Design Patterns: Elements of Reusable Object-Oriented Software** (GoF)