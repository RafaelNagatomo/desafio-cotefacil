# 🚀 Especificações de Funcionalidades

## 1. Contador (Counter)
O contador é uma ferramenta de incremento e decremento com feedback visual dinâmico.

* **Regra de Cor (Feedback Visual):**
    * Algarismos **PARES**: Devem ser renderizados na cor verde (`text-green-500`).
    * Algarismos **ÍMPARES**: Mantêm a cor padrão do tema.
    * *Nota:* A lógica de verificação deve ocorrer na camada de Controller ou via um Helper puro em `@shared/common`.
* **Persistência:** O valor atual deve persistir no `localStorage` através do `StorageService`.
* **Sincronização:** Mudanças em uma aba devem refletir em todas as abas abertas via `BroadcastChannel`.

## 2. Cronômetro (Stopwatch)
Focado em alta performance e precisão de segundos, evitando re-renders desnecessários.

* **Formato:** `HH:mm:ss`.
* **Função "Save Time":**
    * Um botão "Save" permite capturar o timestamp atual sem interromper a contagem do cronômetro.
    * Os tempos salvos devem ser listados em um componente de "Histórico" ou "Laps".
* **Persistência de Sessão:** Se a página for recarregada enquanto o cronômetro estiver rodando, o sistema deve calcular a diferença de tempo baseada no timestamp de início salvo para retomar a contagem correta.
