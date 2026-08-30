# Marketing AI — Base reaproveitável

## Origem

Existe uma aplicação local `conforma360-marketing-ai` que contém uma base independente de agentes de Marketing com IA.

## Componentes avaliados

- Estrategista
- Copywriter
- Social Media
- Analytics
- SDR
- Follow-up
- Tráfego
- WhatsApp
- contexto centralizado do negócio
- cliente server-side para Anthropic

## Estratégia de reaproveitamento

Não copiar a aplicação local inteira para este projeto. A base local utiliza Next.js, enquanto este repositório possui uma base TanStack Start/Vite. O reaproveitamento será conceitual e modular.

Prioridades:

1. contexto centralizado do negócio;
2. regras dos agentes;
3. prompts e estruturas de saída;
4. lógica de integração com IA, adaptada à stack deste projeto;
5. componentes de interface que fizerem sentido;
6. funcionalidades de marketing que agreguem valor ao produto.

## Segurança

A chave da Anthropic deve permanecer exclusivamente no servidor e em variável de ambiente. Nenhuma credencial existente na pasta local deve ser copiada para o GitHub.

## Diretriz

O Marketing AI será um módulo do novo ambiente Conforma360 Dev, mas continuará desacoplado dos módulos centrais de SSMA e Compliance até que exista arquitetura definida para a integração.
