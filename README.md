# ✎ᝰ. Task List 📝

Este projeto foi desenvolvido com o objetivo principal de **testar meus conhecimentos e colocar em prática** os conceitos de Front-end que venho estudando. É o resultado da transição entre a teoria e a aplicação real de lógica de programação, manipulação dinâmica de elementos e organização de código.



## Por que este projeto?
Para consolidar meu aprendizado, decidi criar uma lista de tarefas funcional que me desafiasse em três frentes:

1.  **Lógica com JavaScript:** Criação e remoção dinâmica de elementos no DOM, garantindo que a interface reaja instantaneamente às ações do usuário.
2.  **Estilização Autoral (CSS):** Aplicação da estética **Retro** com bordas grossas e sombras marcantes, mantendo a coesão visual dos meus projetos.
3.  **Estrutura Modular:** Organização das funções em módulos (`ES6 Modules`) para separar a lógica de criação da lógica de inicialização.

## Desafios Superados

* **Manipulação de Nós (DOM):** Uso de `createElement` e `appendChild` para gerar tarefas dinamicamente, permitindo que cada item da lista seja um objeto independente no HTML.
* **Gerenciamento de Eventos:** Implementação do botão de exclusão ("X") dentro de cada tarefa, configurando o `addEventListener` no momento da criação para que o botão saiba exatamente qual elemento pai deve remover.
* **Lógica Funcional:** Organização das funções para manter o código limpo e funcional em um único script, tratando o fluxo de dados do input até a lista.
* **Feedback de Interface (UX):** Uso de `setTimeout` para gerenciar a classe `ativo` no botão e validações com `.trim()` para impedir tarefas vazias.

## Lógica de Funcionamento
O sistema utiliza um fluxo de criação em tempo real. Ao adicionar uma tarefa, o JavaScript executa o seguinte processo:
1. Valida se o input não está vazio.
2. Cria um elemento `li` para o texto e um `span` para o botão de apagar.
3. Atribui a função de remoção `.remove()` ao botão específico daquela tarefa.

## Tecnologias e Métodos
* **JavaScript (Vanilla):** `createElement`, `appendChild`, `remove()`, `trim()`, `setTimeout`.
* **CSS3:** Estilização Neo-Brutalista, Flexbox para alinhamento de itens e estados de hover.
* **HTML5:** Estrutura para formulários e listas não ordenadas (`ul`).

---
