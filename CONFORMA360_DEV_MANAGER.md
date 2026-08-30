# CONFORMA360 DEV MANAGER

## Ambiente independente de desenvolvimento

Este repositório será utilizado como ambiente independente para desenvolvimento, arquitetura, prototipação, testes e evolução técnica do Conforma360.

O projeto Conforma360 atualmente mantido no Claude permanece completamente separado e fora do escopo deste repositório.

## Regra de isolamento

- Não acessar, copiar ou integrar com o projeto mantido no Claude.
- Este repositório pode ser alterado, reorganizado e evoluído.
- O código existente aqui é a base anteriormente mantida no Lovable e poderá ser reaproveitado, refatorado ou substituído.
- Nenhuma alteração neste repositório representa alteração no Conforma360 mantido no Claude.

## Objetivo técnico

Transformar esta base em um ambiente próprio para construção de uma aplicação Conforma360 independente, com desenvolvimento controlado, testável e rastreável.

## Stack identificada inicialmente

O projeto utiliza React 19, TanStack Start/Router, Vite 7, TypeScript, Tailwind CSS 4, TanStack React Query e componentes Radix UI, conforme a configuração atual do projeto.

## Princípios

1. Inspecionar antes de alterar.
2. Preservar o que for útil.
3. Desenvolver por etapas.
4. Testar cada módulo.
5. Não armazenar secrets no código.
6. Priorizar segurança e integridade.
7. Registrar decisões técnicas relevantes.
8. Evitar mudanças destrutivas sem necessidade.

## Fluxo

Requisito → Arquitetura → Implementação → Testes → Validação → Release

## Prioridades

### P0 — Crítico
Segurança, perda de dados, falhas graves e indisponibilidade.

### P1 — Produto
Funcionalidades essenciais e recursos de alto valor comercial.

### P2 — Evolução
Melhorias, automações, otimizações e diferenciais.

## Arquitetura-alvo

```text
Frontend
  ↓
Application / Server Functions
  ↓
Business Logic
  ↓
Data Access
  ↓
Database

Serviços complementares:
- autenticação e autorização
- auditoria
- notificações
- armazenamento de documentos
- integrações
- inteligência artificial
```

## Relação com os agentes

```text
CONFORMA360 GROWTH MANAGER
        ↓
CONFORMA360 PRODUCT MANAGER
        ↓
CONFORMA360 DEV MANAGER
        ↓
Aplicação neste repositório
```

## Regra final

Este é um projeto independente. O Conforma360 existente no Claude não faz parte desta base, não será acessado e não será integrado.
