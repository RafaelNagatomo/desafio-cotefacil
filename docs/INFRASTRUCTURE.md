# 🛠️ Infraestrutura e Ferramental

## 1. Estilização Híbrida
* **Material UI (MUI):** Utilizado para componentes estruturais complexos que exigem alta acessibilidade (Modais, Menus, Grids).
* **TailwindCSS:** Utilizado para micro-ajustes de layout, espaçamento e a lógica de cores condicionais (como o verde nos números pares).
* **Theming:** O diretório `/src/theme` exporta um objeto de tema que mapeia variáveis CSS do Tailwind para o `createTheme` do MUI.

## 2. Camada de Serviço (Sync)
* **WebSocketService (Mock):** Implementado como um Singleton no `@core/services`. Utiliza a API `BroadcastChannel` para simular tráfego de rede em tempo real entre instâncias da aplicação.

## 3. Gestão de Estado
* **Redux Toolkit (RTK):** Cada feature possui seu próprio slice, mas o `BaseController` possui acesso ao `dispatch` global, permitindo orquestração complexa entre domínios se necessário.
