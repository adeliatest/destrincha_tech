<div align="center">
  <img src="logo.svg" alt="Logo DestrinchaTech" width="84" height="84" />
  <h1>DestrinchaTech</h1>
  <p><strong>Estude com foco e consolide explicando em voz alta.</strong></p>
  <p>Um gerador de desafios de estudo sobre tecnologia com cronômetros de aprendizado e explicação inspirados na Técnica Feynman.</p>
</div>

---

## 💡 Sobre o projeto

Sabe aqueles dias em que você quer estudar um assunto novo na área de tecnologia, mas perde mais tempo escolhendo *o que* estudar do que estudando de fato?

O **DestrinchaTech** foi criado para resolver esse problema de forma prática e divertida:
1. Você escolhe uma **área de tecnologia** (ou deixa em *"Todas as áreas"* para um desafio surpresa).
2. Ao clicar em **"Gerar assunto"**, a aplicação sorteia um tópico técnico relevante acompanhado de uma descrição clara e 4 pontos-chave para guiar sua pesquisa.
3. Você define **em quanto tempo quer aprender** (de 10 minutos até 5 horas).
4. O sistema calcula automaticamente o **tempo sugerido para falar sobre o assunto** e disponibiliza dois cronômetros independentes para você estudar e, em seguida, explicar o tema com suas próprias palavras (sem gravação de áudio ou vídeo, apenas como guia de tempo).

---

## ✨ Funcionalidades principais

- 🎲 **Mais de 420 assuntos curados em 12 trilhas de tecnologia:**
  - 💻 Desenvolvimento
  - 📊 Dados e analytics
  - 🧪 QA e testes
  - ☁️ DevOps e cloud
  - 🛡️ Cibersegurança
  - 🤖 IA e machine learning
  - 🏛️ Arquitetura e design
  - 🔄 Agilidade e Scrum
  - 🧭 Produto (PM / PO)
  - 🎨 UX / UI design
  - 📱 Mobile
  - 🌐 Redes e sistemas
- ⏱️ **Cálculo automático do tempo de fala:**
  - Seleção de estudo entre `10 min`, `15 min`, `30 min`, `1h`, `2h`, `3h`, `4h` e `5h`, exibindo automaticamente a sugestão proporcional para a fase de explicação:

| Tempo para aprender | Tempo sugerido para falar |
| :---: | :---: |
| **10 min** | **5 min** |
| **15 min** | **8 min** |
| **30 min** | **15 min** |
| **1h** | **20 min** |
| **2h** | **22 min** |
| **3h** | **28 min** |
| **4h** | **32 min** |
| **5h** | **36 min** |

- 🎯 **Roteiro de estudo integrado:** Cada tópico traz pontos-chave essenciais para direcionar a leitura e estruturar a explicação.
- 🔔 **Alertas visuais e sonoros nativos:** Aviso ao final de cada cronômetro utilizando a **Web Audio API** (sem necessidade de arquivos de áudio externos) e atualização em tempo real na aba do navegador.
- 📚 **Histórico de estudos persistente:** Registro automático das sessões concluídas no navegador via `localStorage`.
- 🧊 **Identidade visual em SVG:** Logo e anéis de progresso vetoriais com animações suaves em CSS.

---

## 🛠️ Tecnologias utilizadas

O projeto foi construído sem dependências externas pesadas para garantir carregamento instantâneo, facilidade de manutenção e funcionamento 100% offline:

- **HTML5 Semântico** (com atributos de acessibilidade `ARIA`).
- **CSS3 Moderno** (`CSS Variables`, `Flexbox`, `CSS Grid`, animações vetoriais em `SVG` e layout responsivo).
- **JavaScript Vanilla (ES6+)** estruturado de forma desacoplada.
- **Web Audio API** (síntese nativa de acordes sonoros ao finalizar os timers).
- **Web Storage API (`localStorage`)** (persistência local do histórico de estudos).

---

## 📂 Estrutura de arquivos

```text
├── index.html   # Estrutura principal da aplicação, cards, cronômetros e modais
├── style.css    # Estilização em dark mode (tons de azul), responsividade e animações SVG
├── app.js       # Lógica de estado, sorteio, cálculo de tempos, cronômetros e histórico
├── topics.js    # Banco de dados local com 424 assuntos divididos em 12 áreas de tecnologia
├── logo.svg     # Ícone vetorial do "Cubo Destrinchado" (usado no header e como favicon)
└── README.md    # Documentação do projeto
```

---

## 🚀 Como executar localmente

Como o projeto utiliza apenas tecnologias nativas da web, não é necessário instalar pacotes (`npm`) ou configurar servidores complexos:

1. Clone este repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/destrincha-tech.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd destrincha-tech
   ```
3. Abra o arquivo `index.html` diretamente no seu navegador de preferência (ou utilize a extensão *Live Server* no VS Code).

---

## 🔮 Próximos passos (Roadmap)

- [ ] Integração opcional com API de IA Generativa (Gemini / OpenAI) para geração infinita de novos tópicos sob demanda.
- [ ] Filtro por nível de dificuldade (*Iniciante*, *Intermediário* e *Avançado*).
- [ ] Bloco de rascunho/notas rápidas durante a fase de estudo (com opção de ocultar na hora da fala).
- [ ] Estatísticas de estudo e ofensiva diária (*streak*).

---

## 🤝 Contribuições

Sugestões de melhorias, novas trilhas ou novos assuntos são muito bem-vindas! Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.
