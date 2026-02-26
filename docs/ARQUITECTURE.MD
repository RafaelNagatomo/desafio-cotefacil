# 🏗️ Arquitetura do Sistema: ChronoShift

## 1. Filosofia de Design
O projeto adota o **Controller-Pattern** em conjunto com **Clean Architecture**. A lógica de negócio é desacoplada da camada de visualização (React), permitindo que os componentes sejam "burros" (apenas UI) e os Controllers gerenciem o estado e efeitos colaterais.

## 2. Estrutura de Pastas (Source Tree)
A organização segue uma abordagem baseada em **Features** e **Core Concerns**:

```text
src/
├── core/                   # Código que não pertence a nenhuma feature específica
│   ├── controllers/
│   ├── entities/
│   ├── contracts/
│   ├── services/
│   └── store/              # Redux Config
├── shared/                 # Recursos reutilizáveis entre múltiplas features
│   ├── common/             # Constantes, Utils e apiRequest genérico
│   ├── components/
│   └── hooks/
├── features/               # Domínios de Negócio (Isolamento de contexto)
│   ├── counter/            # Módulo do Contador
│   │   ├── controllers/
│   │   ├── components/
│   │   ├── services/
│   │   └── counterSlice.ts
│   └── stopwatch/          # Módulo do Cronômetro
│       ├── controllers/
│       ├── components/
│       ├── services/
│       └── stopwatchSlice.ts
├── routes/
└── theme/                  # Configuração de Temas (MUI Palette + Tailwind Tokens)
