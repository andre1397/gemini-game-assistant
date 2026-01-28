# Assistente de Meta AI

O **Assistente de Meta** é uma aplicação web interativa que utiliza Inteligência Artificial para fornecer dicas, builds e estratégias em tempo real para diversos jogos competitivos. O projeto utiliza a API do **Google Gemini** com recursos de busca integrada para garantir que as informações de patches e atualizações de jogos estejam sempre em dia.

---

## Funcionalidades

* **Consultas Especializadas**: Obtenha informações sobre builds de itens, escolhas de runas e estratégias de jogo.
* **Suporte Multi-Jogos**: Opções para *Valorant*, *League of Legends*, *Overwatch*, *CS:GO* e *Dota 2*.
* **IA com Acesso à Internet**: A aplicação utiliza ferramentas de busca em tempo real para evitar informações obsoletas.
* **Interface Responsiva**: Design moderno com animações de transição e tema escuro (*Dark Mode*).
* **Renderização Markdown**: As respostas da IA são formatadas via biblioteca `Showdown.js` para facilitar a leitura.

---

## Tecnologias Utilizadas

* **HTML5 & CSS3**: Estrutura e estilização com foco em UI/UX e animações via `@keyframes`.
* **JavaScript (ES6+)**: Lógica de manipulação de DOM e integração com API assíncrona (`fetch`).
* **Google Gemini API (v1beta)**: Utilização do modelo `gemini-2.5-flash` para geração de conteúdo.
* **Showdown.js**: Biblioteca para conversão dinâmica de Markdown para HTML no navegador.

---

## Estrutura de Arquivos

* `index.html`: Estrutura principal, incluindo o formulário de entrada e a importação do Showdown.js.
* `style.css`: Estilização completa, incluindo o gradiente de bordas e efeitos de carregamento.
* `script.js`: Lógica principal contendo o prompt do sistema, regras de resposta e chamada para a API.

---

## Como Configurar

1.  **Obtenha uma API Key**: Acesse o [Google AI Studio](https://aistudio.google.com/) para gerar sua chave de acesso.
2.  **Clone ou Baixe os arquivos**: Certifique-se de manter a estrutura de pastas para que o CSS e o JS sejam carregados corretamente.
3.  **Execução**: Abra o arquivo `index.html` no seu navegador de preferência.
4.  **Uso**: Insira sua chave no campo **API KEY**, selecione o jogo e envie sua pergunta.

---

## Observações Importantes

> [!IMPORTANT]
> O script está configurado para o modelo `gemini-2.5-flash`. A regra de negócio definida no prompt limita as respostas a no máximo **500 caracteres** para garantir que a informação seja direta e objetiva. O sistema também está instruído a responder "Não sei" caso não possua informações confirmadas sobre o patch atual ou se a pergunta não for relacionada ao jogo.
