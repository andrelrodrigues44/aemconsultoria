# CONFORMA360 DEV — Arquitetura

## Escopo

Este repositório é independente do Conforma360 mantido no Claude. Não existe dependência, sincronização ou integração com aquele projeto.

## Base atual identificada

A aplicação existente neste repositório é baseada em React 19, TanStack Start/Router, Vite 7, TypeScript, Tailwind CSS 4, React Query e Radix UI.

## Direção arquitetural

A evolução deve buscar uma aplicação modular, segura, auditável e preparada para SaaS B2B.

```text
UI / Frontend
      ↓
Rotas e Server Functions
      ↓
Serviços / Casos de uso
      ↓
Regras de negócio
      ↓
Data Access
      ↓
Banco de dados
```

Serviços transversais:
- autenticação
- autorização
- auditoria
- notificações
- armazenamento de documentos
- integrações
- IA

## Núcleo SaaS

```text
Organização
  └── Unidades
       └── Usuários
            └── Papéis / Permissões
                 └── Dados da organização
```

O isolamento entre organizações deve ser obrigatório para qualquer dado empresarial.

## Módulos previstos

1. Dashboard executivo
2. Empresas e unidades
3. Usuários e permissões
4. Segurança do Trabalho
5. Meio Ambiente
6. Requisitos Legais
7. Documentos
8. Inspeções
9. Planos de Ação
10. Licenças
11. Treinamentos
12. Auditorias
13. Indicadores
14. Evidências
15. Inteligência Artificial
16. Marketing AI

## IA

A experiência de IA deve ser construída com contexto controlado, respostas rastreáveis quando aplicável e validação humana em decisões técnicas ou regulatórias.

## Segurança

Secrets somente em variáveis de ambiente ou mecanismo seguro equivalente. Nunca versionar chaves, tokens ou senhas.

## Estratégia de evolução

Primeiro construir o núcleo de identidade, organização, unidade, usuário e autorização. Depois adicionar módulos de negócio.
