/**
 * Banco de Dados Local de Assuntos de Tecnologia — DestrinchaTech
 * Total: 424 assuntos distribuídos em 12 áreas de tecnologia (35+ por área)
 * Padrão de texto: Sentence case (apenas primeira letra e nomes próprios/siglas em maiúsculo)
 */

const TECH_TOPICS = {
  "desenvolvimento": {
    "label": "Desenvolvimento",
    "icon": "💻",
    "color": "#2563eb",
    "topics": [
      {
        "title": "Event loop no JavaScript",
        "description": "Como o motor V8 executa código assíncrono sendo single-threaded, dividindo call stack, microtasks e macrotasks.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de event loop no javascript",
          "Principais componentes técnicos: como o motor V8 executa código assíncrono sendo single-threaded, dividindo call stack, microtasks e macrotasks",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Princípios SOLID",
        "description": "Os 5 princípios de design orientado a objetos e código limpo aplicados ao desenvolvimento no dia a dia.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de princípios solid",
          "Principais componentes técnicos: os 5 princípios de design orientado a objetos e código limpo aplicados ao desenvolvimento no dia a dia",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "REST vs GraphQL vs gRPC",
        "description": "Comparação arquitetural entre os três principais padrões de comunicação entre APIs e serviços.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de rest vs graphql vs grpc",
          "Principais componentes técnicos: comparação arquitetural entre os três principais padrões de comunicação entre APIs e serviços",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Sessões, JWT e OAuth 2.0",
        "description": "Estratégias modernas para autenticar usuários e autorizar permissões com segurança na web.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de sessões, jwt e oauth 2.0",
          "Principais componentes técnicos: estratégias modernas para autenticar usuários e autorizar permissões com segurança na web",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Core Web Vitals",
        "description": "Métricas essenciais do Google (LCP, INP e CLS) para medir performance e experiência real do usuário.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de core web vitals",
          "Principais componentes técnicos: métricas essenciais do Google (LCP, INP e CLS) para medir performance e experiência real do usuário",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Garbage collection e memória",
        "description": "Como linguagens gerenciam alocação na stack e no heap, coletam lixo e evitam memory leaks.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de garbage collection e memória",
          "Principais componentes técnicos: como linguagens gerenciam alocação na stack e no heap, coletam lixo e evitam memory leaks",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Concorrência vs paralelismo",
        "description": "Execução de múltiplas tarefas simultâneas, threads, workers e prevenção de condições de corrida.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de concorrência vs paralelismo",
          "Principais componentes técnicos: execução de múltiplas tarefas simultâneas, threads, workers e prevenção de condições de corrida",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Closures e escopo léxico",
        "description": "Como funções lembram o escopo onde foram criadas e aplicações práticas em encapsulamento.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de closures e escopo léxico",
          "Principais componentes técnicos: como funções lembram o escopo onde foram criadas e aplicações práticas em encapsulamento",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Promises e async/await",
        "description": "Programação assíncrona moderna, encadeamento, tratamento de falhas e execução paralela com Promise.all.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de promises e async/await",
          "Principais componentes técnicos: programação assíncrona moderna, encadeamento, tratamento de falhas e execução paralela com Promise.all",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Web Workers no navegador",
        "description": "Execução de processamento pesado em segundo plano sem travar a thread principal da interface.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de web workers no navegador",
          "Principais componentes técnicos: execução de processamento pesado em segundo plano sem travar a thread principal da interface",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "DOM virtual vs DOM real",
        "description": "Como bibliotecas reativas calculam diferenças em memória (reconciliação) para atualizar a tela rápido.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de dom virtual vs dom real",
          "Principais componentes técnicos: como bibliotecas reativas calculam diferenças em memória (reconciliação) para atualizar a tela rápido",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Server-side rendering (SSR)",
        "description": "Renderização de páginas no servidor para acelerar o carregamento inicial e otimizar o SEO.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de server-side rendering (ssr)",
          "Principais componentes técnicos: renderização de páginas no servidor para acelerar o carregamento inicial e otimizar o SEO",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Static site generation (SSG)",
        "description": "Pré-renderização de páginas em tempo de build combinada com regeneração estática incremental (ISR).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de static site generation (ssg)",
          "Principais componentes técnicos: pré-renderização de páginas em tempo de build combinada com regeneração estática incremental (ISR)",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Web Components e Shadow DOM",
        "description": "Criação de componentes HTML customizados, reutilizáveis e com estilo isolado de forma nativa.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de web components e shadow dom",
          "Principais componentes técnicos: criação de componentes HTML customizados, reutilizáveis e com estilo isolado de forma nativa",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Progressive Web Apps (PWA)",
        "description": "Uso de service workers e cache estratégico para oferecer funcionamento offline e instalação.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de progressive web apps (pwa)",
          "Principais componentes técnicos: uso de service workers e cache estratégico para oferecer funcionamento offline e instalação",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "CORS e política de mesma origem",
        "description": "Por que os navegadores restringem requisições entre domínios e como configurar cabeçalhos seguros.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de cors e política de mesma origem",
          "Principais componentes técnicos: por que os navegadores restringem requisições entre domínios e como configurar cabeçalhos seguros",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Cookies, localStorage e IndexedDB",
        "description": "Comparação de capacidade, segurança (HttpOnly) e persistência no armazenamento do navegador.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de cookies, localstorage e indexeddb",
          "Principais componentes técnicos: comparação de capacidade, segurança (HttpOnly) e persistência no armazenamento do navegador",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Debouncing e throttling",
        "description": "Técnicas para controlar a frequência de disparo de eventos intensos como digitação, scroll e resize.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de debouncing e throttling",
          "Principais componentes técnicos: técnicas para controlar a frequência de disparo de eventos intensos como digitação, scroll e resize",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Programação funcional",
        "description": "Aplicação de funções puras, imutabilidade, composição e ausência de efeitos colaterais no código.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de programação funcional",
          "Principais componentes técnicos: aplicação de funções puras, imutabilidade, composição e ausência de efeitos colaterais no código",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Injeção de dependência (DI)",
        "description": "Inversão de controle para desacoplar módulos e facilitar testes unitários e manutenção.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de injeção de dependência (di)",
          "Principais componentes técnicos: inversão de controle para desacoplar módulos e facilitar testes unitários e manutenção",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Padrões de projeto (Design patterns)",
        "description": "Uso prático de padrões criacionais, estruturais e comportamentais como Factory, Strategy e Observer.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de padrões de projeto (design patterns)",
          "Principais componentes técnicos: uso prático de padrões criacionais, estruturais e comportamentais como Factory, Strategy e Observer",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Clean code e refatoração",
        "description": "Boas práticas de legibilidade, funções enxutas, nomes claros e eliminação contínua de code smells.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de clean code e refatoração",
          "Principais componentes técnicos: boas práticas de legibilidade, funções enxutas, nomes claros e eliminação contínua de code smells",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Tipagem estática e Generics",
        "description": "Uso do sistema de tipos do TypeScript e linguagens tipadas para prevenir bugs em tempo de compilação.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de tipagem estática e generics",
          "Principais componentes técnicos: uso do sistema de tipos do TypeScript e linguagens tipadas para prevenir bugs em tempo de compilação",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Estruturas de dados essenciais",
        "description": "Quando usar arrays, listas ligadas, pilhas, filas, árvores ou tabelas hash (hash maps) no código.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de estruturas de dados essenciais",
          "Principais componentes técnicos: quando usar arrays, listas ligadas, pilhas, filas, árvores ou tabelas hash (hash maps) no código",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Complexidade de algoritmos (Big O)",
        "description": "Análise de escalabilidade de tempo e memória (O(1), O(log n), O(n), O(n²)) em funções e buscas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de complexidade de algoritmos (big o)",
          "Principais componentes técnicos: análise de escalabilidade de tempo e memória (O(1), O(log n), O(n), O(n²)) em funções e buscas",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Expressões regulares (Regex)",
        "description": "Criação de padrões eficientes para validação, busca e extração de textos sem causar lentidão.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de expressões regulares (regex)",
          "Principais componentes técnicos: criação de padrões eficientes para validação, busca e extração de textos sem causar lentidão",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Ponto flutuante e cálculos monetários",
        "description": "Por que decimais binários geram imprecisão (0.1 + 0.2) e como tratar dinheiro com inteiros ou Decimal.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de ponto flutuante e cálculos monetários",
          "Principais componentes técnicos: por que decimais binários geram imprecisão (0.1 + 0.2) e como tratar dinheiro com inteiros ou Decimal",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Fuso horário, UTC e ISO 8601",
        "description": "Boas práticas para salvar datas em UTC no banco e exibir no fuso local do usuário sem erros.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de fuso horário, utc e iso 8601",
          "Principais componentes técnicos: boas práticas para salvar datas em UTC no banco e exibir no fuso local do usuário sem erros",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "CSS Grid vs Flexbox",
        "description": "Domínio de layouts unidimensionais e bidimensionais responsivos na construção de interfaces modernas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de css grid vs flexbox",
          "Principais componentes técnicos: domínio de layouts unidimensionais e bidimensionais responsivos na construção de interfaces modernas",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Bundlers, tree-shaking e code splitting",
        "description": "Como ferramentas como Vite e Webpack empacotam, minificam e dividem o código sob demanda.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de bundlers, tree-shaking e code splitting",
          "Principais componentes técnicos: como ferramentas como Vite e Webpack empacotam, minificam e dividem o código sob demanda",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Git avançado: rebase, cherry-pick e bisect",
        "description": "Estratégias para manter o histórico de commits limpo e isolar rapidamente a origem de regressões.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de git avançado: rebase, cherry-pick e bisect",
          "Principais componentes técnicos: estratégias para manter o histórico de commits limpo e isolar rapidamente a origem de regressões",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "ORMs vs SQL puro e N+1 queries",
        "description": "Trade-offs de produtividade e como evitar que loops de código disparem centenas de consultas ao banco.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de orms vs sql puro e n+1 queries",
          "Principais componentes técnicos: trade-offs de produtividade e como evitar que loops de código disparem centenas de consultas ao banco",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Paginação: offset vs cursor",
        "description": "Por que a paginação baseada em cursor mantém performance constante em tabelas com milhões de linhas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de paginação: offset vs cursor",
          "Principais componentes técnicos: por que a paginação baseada em cursor mantém performance constante em tabelas com milhões de linhas",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Idempotência em APIs",
        "description": "Como garantir que requisições repetidas por falha de rede não dupliquem pagamentos ou registros.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de idempotência em apis",
          "Principais componentes técnicos: como garantir que requisições repetidas por falha de rede não dupliquem pagamentos ou registros",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Gerenciamento de estado no front-end",
        "description": "Critérios para escolher entre estado local, Context, stores globais e cache de estado do servidor.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de gerenciamento de estado no front-end",
          "Principais componentes técnicos: critérios para escolher entre estado local, Context, stores globais e cache de estado do servidor",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "WebAssembly (Wasm)",
        "description": "Execução de código de baixo nível no navegador com performance próxima à nativa para tarefas intensas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de webassembly (wasm)",
          "Principais componentes técnicos: execução de código de baixo nível no navegador com performance próxima à nativa para tarefas intensas",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Graceful shutdown e health checks",
        "description": "Como encerrar servidores sem derrubar requisições ativas e sinalizar saúde para o balanceador.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de graceful shutdown e health checks",
          "Principais componentes técnicos: como encerrar servidores sem derrubar requisições ativas e sinalizar saúde para o balanceador",
          "Boas práticas, trade-offs e armadilhas comuns na área de desenvolvimento",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      }
    ]
  },
  "dados": {
    "label": "Dados e analytics",
    "icon": "📊",
    "color": "#10b981",
    "topics": [
      {
        "title": "Modelagem dimensional",
        "description": "Estruturação de dados em star schema e snowflake schema para otimizar consultas de BI.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de modelagem dimensional",
          "Principais componentes técnicos: estruturação de dados em star schema e snowflake schema para otimizar consultas de BI",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "ETL, ELT e arquitetura medallion",
        "description": "Organização de pipelines de dados modernos nas camadas bronze, silver e gold.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de etl, elt e arquitetura medallion",
          "Principais componentes técnicos: organização de pipelines de dados modernos nas camadas bronze, silver e gold",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Índices e otimização SQL",
        "description": "Funcionamento de estruturas B-Tree, leitura de EXPLAIN ANALYZE e prevenção de full table scans.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de índices e otimização sql",
          "Principais componentes técnicos: funcionamento de estruturas B-Tree, leitura de EXPLAIN ANALYZE e prevenção de full table scans",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Batch vs streaming",
        "description": "Quando processar grandes volumes em janelas programadas e quando reagir a eventos em tempo real.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de batch vs streaming",
          "Principais componentes técnicos: quando processar grandes volumes em janelas programadas e quando reagir a eventos em tempo real",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "ACID vs teorema CAP",
        "description": "Garantias transacionais de bancos relacionais comparadas aos trade-offs de bancos distribuídos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de acid vs teorema cap",
          "Principais componentes técnicos: garantias transacionais de bancos relacionais comparadas aos trade-offs de bancos distribuídos",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Governança e linhagem de dados",
        "description": "Como garantir qualidade, rastreabilidade (data lineage), catálogo e conformidade com a LGPD.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de governança e linhagem de dados",
          "Principais componentes técnicos: como garantir qualidade, rastreabilidade (data lineage), catálogo e conformidade com a LGPD",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "OLTP vs OLAP",
        "description": "Diferenças de arquitetura entre bancos transacionais de operação e bancos analíticos de consulta.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de oltp vs olap",
          "Principais componentes técnicos: diferenças de arquitetura entre bancos transacionais de operação e bancos analíticos de consulta",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Tabelas fato e dimensão",
        "description": "Separação entre métricas numéricas de eventos e atributos de contexto no data warehouse.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de tabelas fato e dimensão",
          "Principais componentes técnicos: separação entre métricas numéricas de eventos e atributos de contexto no data warehouse",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Slowly changing dimensions (SCD)",
        "description": "Estratégias (tipos 1, 2 e 3) para preservar ou sobrescrever o histórico de alterações cadastrais.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de slowly changing dimensions (scd)",
          "Principais componentes técnicos: estratégias (tipos 1, 2 e 3) para preservar ou sobrescrever o histórico de alterações cadastrais",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Data warehouse, data lake e lakehouse",
        "description": "Evolução do armazenamento analítico combinando flexibilidade de arquivos abertos e transações ACID.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de data warehouse, data lake e lakehouse",
          "Principais componentes técnicos: evolução do armazenamento analítico combinando flexibilidade de arquivos abertos e transações ACID",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Formatos colunares: Parquet e ORC",
        "description": "Por que o armazenamento por coluna comprime muito melhor e acelera leituras analíticas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de formatos colunares: parquet e orc",
          "Principais componentes técnicos: por que o armazenamento por coluna comprime muito melhor e acelera leituras analíticas",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Table formats: Delta Lake e Iceberg",
        "description": "Camadas de metadados que trazem time travel, evolução de schema e transações para data lakes.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de table formats: delta lake e iceberg",
          "Principais componentes técnicos: camadas de metadados que trazem time travel, evolução de schema e transações para data lakes",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Particionamento e clustering",
        "description": "Organização física de tabelas gigantes para pular leituras desnecessárias (partition pruning).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de particionamento e clustering",
          "Principais componentes técnicos: organização física de tabelas gigantes para pular leituras desnecessárias (partition pruning)",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Window functions no SQL",
        "description": "Cálculos avançados com ROW_NUMBER, RANK, LAG, LEAD e médias móveis sem colapsar linhas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de window functions no sql",
          "Principais componentes técnicos: cálculos avançados com ROW_NUMBER, RANK, LAG, LEAD e médias móveis sem colapsar linhas",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "CTEs vs subqueries e views materializadas",
        "description": "Organização de código SQL legível e persistência de resultados pré-computados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de ctes vs subqueries e views materializadas",
          "Principais componentes técnicos: organização de código SQL legível e persistência de resultados pré-computados",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Normalização vs desnormalização",
        "description": "Quando aplicar as formas normais para evitar redundância e quando desnormalizar por performance.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de normalização vs desnormalização",
          "Principais componentes técnicos: quando aplicar as formas normais para evitar redundância e quando desnormalizar por performance",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Níveis de isolamento no banco",
        "description": "Prevenção de dirty reads, non-repeatable reads e phantom reads em transações concorrentes.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de níveis de isolamento no banco",
          "Principais componentes técnicos: prevenção de dirty reads, non-repeatable reads e phantom reads em transações concorrentes",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Sharding e replicação de bancos",
        "description": "Como dividir dados horizontalmente entre servidores e escalar leituras com réplicas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de sharding e replicação de bancos",
          "Principais componentes técnicos: como dividir dados horizontalmente entre servidores e escalar leituras com réplicas",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Bancos NoSQL: documento, chave-valor e colunar",
        "description": "Critérios práticos para escolher entre MongoDB, Redis, DynamoDB e Cassandra.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de bancos nosql: documento, chave-valor e colunar",
          "Principais componentes técnicos: critérios práticos para escolher entre MongoDB, Redis, DynamoDB e Cassandra",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Bancos de grafos e séries temporais",
        "description": "Casos de uso especializados para conexões complexas (Neo4j) e métricas contínuas (InfluxDB).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de bancos de grafos e séries temporais",
          "Principais componentes técnicos: casos de uso especializados para conexões complexas (Neo4j) e métricas contínuas (InfluxDB)",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Bancos de dados vetoriais",
        "description": "Armazenamento de embeddings e busca por similaridade semântica para sistemas de IA e recomendação.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de bancos de dados vetoriais",
          "Principais componentes técnicos: armazenamento de embeddings e busca por similaridade semântica para sistemas de IA e recomendação",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Orquestração com Apache Airflow",
        "description": "Construção de DAGs, agendamento, retentativas, sensores e gestão de dependências em pipelines.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de orquestração com apache airflow",
          "Principais componentes técnicos: construção de DAGs, agendamento, retentativas, sensores e gestão de dependências em pipelines",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Engenharia analítica com dbt",
        "description": "Transformação de dados em SQL aplicando versionamento, testes de qualidade e documentação.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de engenharia analítica com dbt",
          "Principais componentes técnicos: transformação de dados em SQL aplicando versionamento, testes de qualidade e documentação",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Processamento distribuído com Spark",
        "description": "Arquitetura cluster, lazy evaluation, particionamento em memória e prevenção de data skew.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de processamento distribuído com spark",
          "Principais componentes técnicos: arquitetura cluster, lazy evaluation, particionamento em memória e prevenção de data skew",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Change data capture (CDC)",
        "description": "Captura de inserções e atualizações direto do log binário do banco em tempo real (ex: Debezium).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de change data capture (cdc)",
          "Principais componentes técnicos: captura de inserções e atualizações direto do log binário do banco em tempo real (ex: Debezium)",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Streaming com Apache Kafka",
        "description": "Funcionamento de tópicos, partições, consumer groups e retenção de eventos distribuídos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de streaming com apache kafka",
          "Principais componentes técnicos: funcionamento de tópicos, partições, consumer groups e retenção de eventos distribuídos",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Janelas de tempo e watermarks no streaming",
        "description": "Como agregar fluxos contínuos em janelas fixas ou deslizantes lidando com eventos atrasados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de janelas de tempo e watermarks no streaming",
          "Principais componentes técnicos: como agregar fluxos contínuos em janelas fixas ou deslizantes lidando com eventos atrasados",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Contratos de dados (Data contracts)",
        "description": "Acordos formais de schema e semântica entre equipes de engenharia de software e times de dados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de contratos de dados (data contracts)",
          "Principais componentes técnicos: acordos formais de schema e semântica entre equipes de engenharia de software e times de dados",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Arquitetura Data Mesh",
        "description": "Descentralização de dados orientada a domínios, tratando dados como produto com plataforma self-service.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de arquitetura data mesh",
          "Principais componentes técnicos: descentralização de dados orientada a domínios, tratando dados como produto com plataforma self-service",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Observabilidade e testes de dados",
        "description": "Monitoramento automatizado de frescor, volume, anomalias e integridade referencial.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de observabilidade e testes de dados",
          "Principais componentes técnicos: monitoramento automatizado de frescor, volume, anomalias e integridade referencial",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Anonimização e mascaramento (PII)",
        "description": "Proteção de dados sensíveis de clientes em ambientes analíticos usando hash, tokenização e máscara.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de anonimização e mascaramento (pii)",
          "Principais componentes técnicos: proteção de dados sensíveis de clientes em ambientes analíticos usando hash, tokenização e máscara",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Reverse ETL (ETL reverso)",
        "description": "Envio de indicadores calculados no warehouse de volta para ferramentas de CRM e operação.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de reverse etl (etl reverso)",
          "Principais componentes técnicos: envio de indicadores calculados no warehouse de volta para ferramentas de CRM e operação",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Data storytelling e visualização",
        "description": "Como construir dashboards claros que destacam insights acionáveis sem poluição visual.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de data storytelling e visualização",
          "Principais componentes técnicos: como construir dashboards claros que destacam insights acionáveis sem poluição visual",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Análise de coorte e funil",
        "description": "Mensuração de retenção ao longo do tempo e identificação de gargalos na conversão de usuários.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de análise de coorte e funil",
          "Principais componentes técnicos: mensuração de retenção ao longo do tempo e identificação de gargalos na conversão de usuários",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Estatística prática: média, mediana e percentis",
        "description": "Como analisar distribuições reais sem ser enganado por valores extremos (outliers).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de estatística prática: média, mediana e percentis",
          "Principais componentes técnicos: como analisar distribuições reais sem ser enganado por valores extremos (outliers)",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Correlação vs causalidade e testes de hipótese",
        "description": "Fundamentos científicos para validar experimentos com p-valor, tamanho amostral e significância.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de correlação vs causalidade e testes de hipótese",
          "Principais componentes técnicos: fundamentos científicos para validar experimentos com p-valor, tamanho amostral e significância",
          "Boas práticas, trade-offs e armadilhas comuns na área de dados e analytics",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      }
    ]
  },
  "qa": {
    "label": "QA e testes",
    "icon": "🧪",
    "color": "#f59e0b",
    "topics": [
      {
        "title": "Pirâmide de testes",
        "description": "Como equilibrar testes unitários, de integração e E2E para ter feedback rápido e baixo custo.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de pirâmide de testes",
          "Principais componentes técnicos: como equilibrar testes unitários, de integração e E2E para ter feedback rápido e baixo custo",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Flaky tests (testes instáveis)",
        "description": "Causas de falhas intermitentes na esteira de CI e técnicas para tornar testes determinísticos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de flaky tests (testes instáveis)",
          "Principais componentes técnicos: causas de falhas intermitentes na esteira de CI e técnicas para tornar testes determinísticos",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "TDD e BDD na prática",
        "description": "Ciclo Red-Green-Refactor e alinhamento de regras de negócio através de exemplos executáveis.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de tdd e bdd na prática",
          "Principais componentes técnicos: ciclo Red-Green-Refactor e alinhamento de regras de negócio através de exemplos executáveis",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Testes de performance",
        "description": "Validação de escalabilidade com testes de carga, estresse, pico (spike) e resistência (soak).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de testes de performance",
          "Principais componentes técnicos: validação de escalabilidade com testes de carga, estresse, pico (spike) e resistência (soak)",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Testes de contrato",
        "description": "Garantia de comunicação entre microsserviços independentes usando contratos (ex: Pact).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de testes de contrato",
          "Principais componentes técnicos: garantia de comunicação entre microsserviços independentes usando contratos (ex: Pact)",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Shift-left e testes exploratórios",
        "description": "Prevenção de defeitos na concepção da história combinada com sessões exploratórias estruturadas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de shift-left e testes exploratórios",
          "Principais componentes técnicos: prevenção de defeitos na concepção da história combinada com sessões exploratórias estruturadas",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Particionamento de equivalência e valor limite",
        "description": "Técnicas de design caixa-preta para testar cenários críticos com o menor número de casos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de particionamento de equivalência e valor limite",
          "Principais componentes técnicos: técnicas de design caixa-preta para testar cenários críticos com o menor número de casos",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Tabelas de decisão e transição de estados",
        "description": "Modelagem de testes para sistemas com regras condicionais complexas e fluxos de status.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de tabelas de decisão e transição de estados",
          "Principais componentes técnicos: modelagem de testes para sistemas com regras condicionais complexas e fluxos de status",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Mocks, stubs, spies e fakes",
        "description": "Como isolar dependências externas nos testes sem criar cenários irreais que mascaram falhas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de mocks, stubs, spies e fakes",
          "Principais componentes técnicos: como isolar dependências externas nos testes sem criar cenários irreais que mascaram falhas",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Padrão AAA e escrita de Gherkin",
        "description": "Estruturação limpa de asserções (Arrange, Act, Assert) e cenários Dado/Quando/Então focados no domínio.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de padrão aaa e escrita de gherkin",
          "Principais componentes técnicos: estruturação limpa de asserções (Arrange, Act, Assert) e cenários Dado/Quando/Então focados no domínio",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Page Object Model vs Screenplay",
        "description": "Padrões de arquitetura para organizar suítes de automação E2E evitando código duplicado.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de page object model vs screenplay",
          "Principais componentes técnicos: padrões de arquitetura para organizar suítes de automação E2E evitando código duplicado",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Seletores resilientes e auto-wait",
        "description": "Boas práticas no Playwright e Cypress usando roles de acessibilidade e esperas baseadas em estado.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de seletores resilientes e auto-wait",
          "Principais componentes técnicos: boas práticas no Playwright e Cypress usando roles de acessibilidade e esperas baseadas em estado",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Mock e interceptação de rede no E2E",
        "description": "Como simular erros HTTP 500, lentidão e casos de borda interceptando chamadas no navegador.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de mock e interceptação de rede no e2e",
          "Principais componentes técnicos: como simular erros HTTP 500, lentidão e casos de borda interceptando chamadas no navegador",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Testes de regressão visual",
        "description": "Detecção automática de quebras indesejadas de CSS através da comparação inteligente de snapshots.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de testes de regressão visual",
          "Principais componentes técnicos: detecção automática de quebras indesejadas de CSS através da comparação inteligente de snapshots",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Testes de acessibilidade (A11y)",
        "description": "Validação automatizada e manual de leitores de tela, contraste e navegação por teclado.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de testes de acessibilidade (a11y)",
          "Principais componentes técnicos: validação automatizada e manual de leitores de tela, contraste e navegação por teclado",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Automação de testes de API REST e GraphQL",
        "description": "Verificação de status codes, schemas JSON, headers, autenticação e regras de negócio no backend.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de automação de testes de api rest e graphql",
          "Principais componentes técnicos: verificação de status codes, schemas JSON, headers, autenticação e regras de negócio no backend",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Gestão de massa de dados de teste",
        "description": "Criação de dados isolados com factories, seeds dinâmicos e limpeza pós-execução.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de gestão de massa de dados de teste",
          "Principais componentes técnicos: criação de dados isolados com factories, seeds dinâmicos e limpeza pós-execução",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Ambientes efêmeros com Testcontainers",
        "description": "Execução de testes de integração contra bancos de dados reais rodando em containers descartáveis.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de ambientes efêmeros com testcontainers",
          "Principais componentes técnicos: execução de testes de integração contra bancos de dados reais rodando em containers descartáveis",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Cobertura de código vs teste de mutação",
        "description": "Por que medir linhas executadas não basta e como mutantes validam a eficácia real das asserções.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de cobertura de código vs teste de mutação",
          "Principais componentes técnicos: por que medir linhas executadas não basta e como mutantes validam a eficácia real das asserções",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Property-based testing e fuzzing",
        "description": "Geração automatizada de entradas aleatórias e malformadas para descobrir falhas ocultas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de property-based testing e fuzzing",
          "Principais componentes técnicos: geração automatizada de entradas aleatórias e malformadas para descobrir falhas ocultas",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Testes mobile: emuladores vs device farms",
        "description": "Estratégias para validar aplicativos iOS e Android em múltiplos tamanhos de tela e hardwares reais.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de testes mobile: emuladores vs device farms",
          "Principais componentes técnicos: estratégias para validar aplicativos iOS e Android em múltiplos tamanhos de tela e hardwares reais",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Testes de condições adversas no mobile",
        "description": "Validação de comportamento sob rede 3G instável, modo offline, bateria fraca e interrupções.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de testes de condições adversas no mobile",
          "Principais componentes técnicos: validação de comportamento sob rede 3G instável, modo offline, bateria fraca e interrupções",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Performance como código com k6",
        "description": "Criação de scripts de carga versionados com limites (thresholds) de percentil p95 e p99 no CI.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de performance como código com k6",
          "Principais componentes técnicos: criação de scripts de carga versionados com limites (thresholds) de percentil p95 e p99 no CI",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "A dinâmica dos 3 amigos e Example Mapping",
        "description": "Colaboração entre PO, dev e QA no refinamento para eliminar ambiguidades antes do código.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de a dinâmica dos 3 amigos e example mapping",
          "Principais componentes técnicos: colaboração entre PO, dev e QA no refinamento para eliminar ambiguidades antes do código",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Session-based test management (SBTM)",
        "description": "Organização de testes exploratórios com charters, tempo focado (timebox) e debriefing.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de session-based test management (sbtm)",
          "Principais componentes técnicos: organização de testes exploratórios com charters, tempo focado (timebox) e debriefing",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Reporte e triagem eficiente de bugs",
        "description": "Como documentar passos de reprodução, evidências, severidade técnica e prioridade de negócio.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de reporte e triagem eficiente de bugs",
          "Principais componentes técnicos: como documentar passos de reprodução, evidências, severidade técnica e prioridade de negócio",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Análise de causa raiz (5 porquês)",
        "description": "Investigação pós-incidente para atuar na origem sistêmica do defeito e prevenir reincidência.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de análise de causa raiz (5 porquês)",
          "Principais componentes técnicos: investigação pós-incidente para atuar na origem sistêmica do defeito e prevenir reincidência",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Shift-right e testes em produção",
        "description": "Uso de monitoramento sintético, canary releases e feature flags para validar o sistema ao vivo.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de shift-right e testes em produção",
          "Principais componentes técnicos: uso de monitoramento sintético, canary releases e feature flags para validar o sistema ao vivo",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Engenharia do caos (Chaos engineering)",
        "description": "Injeção controlada de falhas na infraestrutura para testar a autorrecuperação do sistema.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de engenharia do caos (chaos engineering)",
          "Principais componentes técnicos: injeção controlada de falhas na infraestrutura para testar a autorrecuperação do sistema",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Testes de segurança para QAs",
        "description": "Verificação prática de quebras de autorização (IDOR), injeções, rate limiting e vazamento de dados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de testes de segurança para qas",
          "Principais componentes técnicos: verificação prática de quebras de autorização (IDOR), injeções, rate limiting e vazamento de dados",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Testes de migração de banco de dados",
        "description": "Validação de scripts de evolução de schema garantindo integridade e compatibilidade sem downtime.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de testes de migração de banco de dados",
          "Principais componentes técnicos: validação de scripts de evolução de schema garantindo integridade e compatibilidade sem downtime",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Testes em sistemas assíncronos e filas",
        "description": "Como testar publicação e consumo de eventos, retentativas e filas de mensagens mortas (DLQ).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de testes em sistemas assíncronos e filas",
          "Principais componentes técnicos: como testar publicação e consumo de eventos, retentativas e filas de mensagens mortas (DLQ)",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Avaliação e testes de LLMs (AI evals)",
        "description": "Como testar alucinações, precisão, segurança e regressão em funcionalidades baseadas em IA.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de avaliação e testes de llms (ai evals)",
          "Principais componentes técnicos: como testar alucinações, precisão, segurança e regressão em funcionalidades baseadas em IA",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Paralelização e sharding de testes no CI",
        "description": "Como dividir suítes pesadas em dezenas de processos paralelos para ter feedback em poucos minutos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de paralelização e sharding de testes no ci",
          "Principais componentes técnicos: como dividir suítes pesadas em dezenas de processos paralelos para ter feedback em poucos minutos",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Métricas de qualidade e cultura QE",
        "description": "Acompanhamento de defect escape rate, MTTR e evolução do papel de QA para engenharia de qualidade.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de métricas de qualidade e cultura qe",
          "Principais componentes técnicos: acompanhamento de defect escape rate, MTTR e evolução do papel de QA para engenharia de qualidade",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Testes em sistemas legados (Golden Master)",
        "description": "Criação de testes de caracterização para proteger comportamentos atuais antes de grandes refatorações.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de testes em sistemas legados (golden master)",
          "Principais componentes técnicos: criação de testes de caracterização para proteger comportamentos atuais antes de grandes refatorações",
          "Boas práticas, trade-offs e armadilhas comuns na área de qa e testes",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      }
    ]
  },
  "devops": {
    "label": "DevOps e cloud",
    "icon": "☁️",
    "color": "#0ea5e9",
    "topics": [
      {
        "title": "Containers vs VMs (Docker)",
        "description": "Isolamento de processos via namespaces e cgroups comparado à virtualização completa de hardware.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de containers vs vms (docker)",
          "Principais componentes técnicos: isolamento de processos via namespaces e cgroups comparado à virtualização completa de hardware",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Estratégias de deploy",
        "description": "Execução de atualizações sem queda usando rolling update, blue-green deployment e canary release.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de estratégias de deploy",
          "Principais componentes técnicos: execução de atualizações sem queda usando rolling update, blue-green deployment e canary release",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Pilares da observabilidade",
        "description": "Diferença entre monitoramento tradicional e observabilidade profunda com logs, métricas e traces.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de pilares da observabilidade",
          "Principais componentes técnicos: diferença entre monitoramento tradicional e observabilidade profunda com logs, métricas e traces",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Infraestrutura como código (IaC)",
        "description": "Provisionamento declarativo e versionado de recursos em nuvem usando ferramentas como Terraform.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de infraestrutura como código (iac)",
          "Principais componentes técnicos: provisionamento declarativo e versionado de recursos em nuvem usando ferramentas como Terraform",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Fundamentos de Kubernetes",
        "description": "Arquitetura de control plane, worker nodes, pods, deployments, services e reconciliação de estado.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de fundamentos de kubernetes",
          "Principais componentes técnicos: arquitetura de control plane, worker nodes, pods, deployments, services e reconciliação de estado",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Otimização de Dockerfile e multi-stage builds",
        "description": "Redução drástica do tamanho e da superfície de ataque de imagens usando camadas em cache e distroless.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de otimização de dockerfile e multi-stage builds",
          "Principais componentes técnicos: redução drástica do tamanho e da superfície de ataque de imagens usando camadas em cache e distroless",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Redes no Kubernetes: Services, Ingress e CNI",
        "description": "Como o tráfego roteia dentro do cluster (ClusterIP, NodePort, LoadBalancer) e chega aos pods.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de redes no kubernetes: services, ingress e cni",
          "Principais componentes técnicos: como o tráfego roteia dentro do cluster (ClusterIP, NodePort, LoadBalancer) e chega aos pods",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "ConfigMaps, Secrets e variáveis no K8s",
        "description": "Injeção segura de configurações e credenciais em containers sem acoplar dados sensíveis na imagem.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de configmaps, secrets e variáveis no k8s",
          "Principais componentes técnicos: injeção segura de configurações e credenciais em containers sem acoplar dados sensíveis na imagem",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Auto-scaling no Kubernetes (HPA, VPA e Karpenter)",
        "description": "Escalabilidade automática de pods e nós de infraestrutura com base em CPU, memória ou métricas customizadas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de auto-scaling no kubernetes (hpa, vpa e karpenter)",
          "Principais componentes técnicos: escalabilidade automática de pods e nós de infraestrutura com base em CPU, memória ou métricas customizadas",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Helm Charts e Kustomize",
        "description": "Empacotamento, parametrização e gestão de manifestos Kubernetes para múltiplos ambientes.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de helm charts e kustomize",
          "Principais componentes técnicos: empacotamento, parametrização e gestão de manifestos Kubernetes para múltiplos ambientes",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Service Mesh (Istio e Linkerd)",
        "description": "Camada dedicada para mTLS automático, observabilidade de tráfego e retentativas entre microsserviços.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de service mesh (istio e linkerd)",
          "Principais componentes técnicos: camada dedicada para mTLS automático, observabilidade de tráfego e retentativas entre microsserviços",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "GitOps com ArgoCD e Flux",
        "description": "Sincronização contínua e automatizada onde o repositório Git é a única fonte da verdade do cluster.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de gitops com argocd e flux",
          "Principais componentes técnicos: sincronização contínua e automatizada onde o repositório Git é a única fonte da verdade do cluster",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Pipelines de CI/CD modernos",
        "description": "Automação de build, lint, testes, análise de segurança e artefatos no GitHub Actions ou GitLab CI.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de pipelines de ci/cd modernos",
          "Principais componentes técnicos: automação de build, lint, testes, análise de segurança e artefatos no GitHub Actions ou GitLab CI",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Gerenciamento de estado no Terraform",
        "description": "Funcionamento do state file remoto, state locking, módulos reutilizáveis e detecção de configuration drift.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de gerenciamento de estado no terraform",
          "Principais componentes técnicos: funcionamento do state file remoto, state locking, módulos reutilizáveis e detecção de configuration drift",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Gerenciamento de configuração com Ansible",
        "description": "Automação imperativa/declarativa sem agente (agentless) via SSH para configurar servidores.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de gerenciamento de configuração com ansible",
          "Principais componentes técnicos: automação imperativa/declarativa sem agente (agentless) via SSH para configurar servidores",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Imutabilidade de infraestrutura",
        "description": "Por que substituir servidores inteiros a cada versão (cattle) é mais confiável do que atualizá-los manualmente (pets).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de imutabilidade de infraestrutura",
          "Principais componentes técnicos: por que substituir servidores inteiros a cada versão (cattle) é mais confiável do que atualizá-los manualmente (pets)",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Redes na nuvem: VPC, Subnets, NAT e Peering",
        "description": "Desenho de redes isoladas com sub-redes públicas e privadas, tabelas de roteamento e gateways.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de redes na nuvem: vpc, subnets, nat e peering",
          "Principais componentes técnicos: desenho de redes isoladas com sub-redes públicas e privadas, tabelas de roteamento e gateways",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "IAM e princípio do menor privilégio na nuvem",
        "description": "Gestão granular de políticas, roles temporárias e identidades federadas na AWS, GCP ou Azure.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de iam e princípio do menor privilégio na nuvem",
          "Principais componentes técnicos: gestão granular de políticas, roles temporárias e identidades federadas na AWS, GCP ou Azure",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Armazenamento em nuvem: Object, Block e File",
        "description": "Quando usar S3 (objetos), EBS (bloco de baixa latência) ou EFS (sistema de arquivos compartilhado).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de armazenamento em nuvem: object, block e file",
          "Principais componentes técnicos: quando usar S3 (objetos), EBS (bloco de baixa latência) ou EFS (sistema de arquivos compartilhado)",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Serverless e Function as a Service (FaaS)",
        "description": "Execução orientada a eventos (AWS Lambda, Cloud Run), escalabilidade a zero e impacto do cold start.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de serverless e function as a service (faas)",
          "Principais componentes técnicos: execução orientada a eventos (AWS Lambda, Cloud Run), escalabilidade a zero e impacto do cold start",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Monitoramento com Prometheus e Grafana",
        "description": "Coleta time-series via pull/scraping, linguagem PromQL e criação de dashboards operacionais.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de monitoramento com prometheus e grafana",
          "Principais componentes técnicos: coleta time-series via pull/scraping, linguagem PromQL e criação de dashboards operacionais",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Rastreamento distribuído com OpenTelemetry",
        "description": "Padronização da coleta de spans e traces para encontrar gargalos de latência entre microsserviços.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de rastreamento distribuído com opentelemetry",
          "Principais componentes técnicos: padronização da coleta de spans e traces para encontrar gargalos de latência entre microsserviços",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Centralização de logs (ELK Stack e Loki)",
        "description": "Agregação, indexação e busca rápida em milhões de linhas de log geradas por containers.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de centralização de logs (elk stack e loki)",
          "Principais componentes técnicos: agregação, indexação e busca rápida em milhões de linhas de log geradas por containers",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "SLIs, SLOs, SLAs e Error Budgets",
        "description": "Práticas de SRE (Site Reliability Engineering) para medir confiabilidade e equilibrar velocidade com estabilidade.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de slis, slos, slas e error budgets",
          "Principais componentes técnicos: práticas de SRE (Site Reliability Engineering) para medir confiabilidade e equilibrar velocidade com estabilidade",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Gestão de incidentes, On-Call e Runbooks",
        "description": "Como organizar plantões saudáveis, responder a quedas críticas, mitigar impactos e evitar fadiga de alertas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de gestão de incidentes, on-call e runbooks",
          "Principais componentes técnicos: como organizar plantões saudáveis, responder a quedas críticas, mitigar impactos e evitar fadiga de alertas",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Disaster Recovery: RPO e RTO",
        "description": "Estratégias de backup, multi-AZ e multi-região baseadas no tempo máximo de recuperação e perda de dados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de disaster recovery: rpo e rto",
          "Principais componentes técnicos: estratégias de backup, multi-AZ e multi-região baseadas no tempo máximo de recuperação e perda de dados",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "FinOps: otimização de custos em nuvem",
        "description": "Visibilidade de gastos, rightsizing de máquinas, instâncias Spot e reservas (Savings Plans).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de finops: otimização de custos em nuvem",
          "Principais componentes técnicos: visibilidade de gastos, rightsizing de máquinas, instâncias Spot e reservas (Savings Plans)",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Internal Developer Platforms (IDP) e Platform Engineering",
        "description": "Construção de caminhos dourados (golden paths) self-service para reduzir a carga cognitiva dos desenvolvedores.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de internal developer platforms (idp) e platform engineering",
          "Principais componentes técnicos: construção de caminhos dourados (golden paths) self-service para reduzir a carga cognitiva dos desenvolvedores",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Segurança de containers e supply chain",
        "description": "Assinatura de imagens (Cosign), SBOM e escaneamento de vulnerabilidades com Trivy no pipeline.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de segurança de containers e supply chain",
          "Principais componentes técnicos: assinatura de imagens (Cosign), SBOM e escaneamento de vulnerabilidades com Trivy no pipeline",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Certificados TLS automatizados e Let's Encrypt",
        "description": "Renovação automática de HTTPS em clusters e balanceadores usando Cert-Manager e protocolo ACME.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de certificados tls automatizados e let's encrypt",
          "Principais componentes técnicos: renovação automática de HTTPS em clusters e balanceadores usando Cert-Manager e protocolo ACME",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "API Gateways e gerenciamento de tráfego",
        "description": "Roteamento centralizado, autenticação na borda, rate limiting e transformação de requisições.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de api gateways e gerenciamento de tráfego",
          "Principais componentes técnicos: roteamento centralizado, autenticação na borda, rate limiting e transformação de requisições",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "CDN, Edge Computing e cache na borda",
        "description": "Distribuição global de conteúdo estático e execução de lógica próxima ao usuário (Cloudflare Workers, CloudFront).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de cdn, edge computing e cache na borda",
          "Principais componentes técnicos: distribuição global de conteúdo estático e execução de lógica próxima ao usuário (Cloudflare Workers, CloudFront)",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Bancos de dados gerenciados (RDS, Cloud SQL)",
        "description": "Operação de bancos na nuvem com failover automático, read replicas e backups point-in-time.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de bancos de dados gerenciados (rds, cloud sql)",
          "Principais componentes técnicos: operação de bancos na nuvem com failover automático, read replicas e backups point-in-time",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Ambientes de Preview (Preview Environments)",
        "description": "Criação automática de um ambiente completo e isolado para cada Pull Request aberto pelo time.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de ambientes de preview (preview environments)",
          "Principais componentes técnicos: criação automática de um ambiente completo e isolado para cada Pull Request aberto pelo time",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Linux performance tuning e eBPF",
        "description": "Observabilidade profunda e segurança no nível do kernel Linux com mínimo overhead.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de linux performance tuning e ebpf",
          "Principais componentes técnicos: observabilidade profunda e segurança no nível do kernel Linux com mínimo overhead",
          "Boas práticas, trade-offs e armadilhas comuns na área de devops e cloud",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      }
    ]
  },
  "seguranca": {
    "label": "Cibersegurança",
    "icon": "🛡️",
    "color": "#ef4444",
    "topics": [
      {
        "title": "OWASP Top 10",
        "description": "As dez vulnerabilidades mais críticas em aplicações web e como prevenir cada uma no código.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de owasp top 10",
          "Principais componentes técnicos: as dez vulnerabilidades mais críticas em aplicações web e como prevenir cada uma no código",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Criptografia e hashing",
        "description": "Diferenças práticas entre codificação, hashing com salt (Argon2/bcrypt) e criptografia simétrica/assimétrica.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de criptografia e hashing",
          "Principais componentes técnicos: diferenças práticas entre codificação, hashing com salt (Argon2/bcrypt) e criptografia simétrica/assimétrica",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "DevSecOps no CI/CD",
        "description": "Automação de segurança na esteira com ferramentas SAST, DAST, SCA e detecção de segredos vazados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de devsecops no ci/cd",
          "Principais componentes técnicos: automação de segurança na esteira com ferramentas SAST, DAST, SCA e detecção de segredos vazados",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Arquitetura Zero Trust",
        "description": "Modelo de segurança baseado em verificação contínua de identidade e contexto ('nunca confie, sempre verifique').",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de arquitetura zero trust",
          "Principais componentes técnicos: modelo de segurança baseado em verificação contínua de identidade e contexto ('nunca confie, sempre verifique')",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "SQL Injection e Command Injection",
        "description": "Como atacantes injetam comandos maliciosos e por que prepared statements e parametrização eliminam o risco.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de sql injection e command injection",
          "Principais componentes técnicos: como atacantes injetam comandos maliciosos e por que prepared statements e parametrização eliminam o risco",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Cross-Site Scripting (XSS) e CSP",
        "description": "Execução de scripts maliciosos no navegador da vítima e defesa com sanitização e Content Security Policy.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de cross-site scripting (xss) e csp",
          "Principais componentes técnicos: execução de scripts maliciosos no navegador da vítima e defesa com sanitização e Content Security Policy",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Cross-Site Request Forgery (CSRF)",
        "description": "Como ataques forjam requisições autenticadas e como proteger com atributos SameSite e tokens anti-CSRF.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de cross-site request forgery (csrf)",
          "Principais componentes técnicos: como ataques forjam requisições autenticadas e como proteger com atributos SameSite e tokens anti-CSRF",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Broken Access Control e IDOR",
        "description": "Prevenção da falha mais comum da web: usuários acessando ou editando dados de outros apenas trocando IDs.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de broken access control e idor",
          "Principais componentes técnicos: prevenção da falha mais comum da web: usuários acessando ou editando dados de outros apenas trocando IDs",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Server-Side Request Forgery (SSRF)",
        "description": "Como impedir que um servidor seja enganado para fazer requisições à infraestrutura interna e metadados da nuvem.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de server-side request forgery (ssrf)",
          "Principais componentes técnicos: como impedir que um servidor seja enganado para fazer requisições à infraestrutura interna e metadados da nuvem",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Segurança em tokens JWT",
        "description": "Riscos de algoritmos fracos, roubo via XSS, invalidação de sessão, rotação de refresh tokens e tempo de expiração curto.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de segurança em tokens jwt",
          "Principais componentes técnicos: riscos de algoritmos fracos, roubo via XSS, invalidação de sessão, rotação de refresh tokens e tempo de expiração curto",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Autenticação multifator (MFA) e Passkeys",
        "description": "Funcionamento de TOTP, chaves físicas FIDO2/WebAuthn e proteção contra ataques de phishing.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de autenticação multifator (mfa) e passkeys",
          "Principais componentes técnicos: funcionamento de TOTP, chaves físicas FIDO2/WebAuthn e proteção contra ataques de phishing",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "OAuth 2.0, OIDC e PKCE",
        "description": "Fluxos seguros de autorização delegada e por que o PKCE é essencial para aplicações mobile e SPAs.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de oauth 2.0, oidc e pkce",
          "Principais componentes técnicos: fluxos seguros de autorização delegada e por que o PKCE é essencial para aplicações mobile e SPAs",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Protocolo TLS/HTTPS e certificados digitais",
        "description": "Funcionamento do handshake TLS, autoridades certificadoras (CA), HSTS e mTLS (TLS mútuo).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de protocolo tls/https e certificados digitais",
          "Principais componentes técnicos: funcionamento do handshake TLS, autoridades certificadoras (CA), HSTS e mTLS (TLS mútuo)",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Cabeçalhos de segurança HTTP",
        "description": "Configuração de Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options e Permissions-Policy.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de cabeçalhos de segurança http",
          "Principais componentes técnicos: configuração de Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options e Permissions-Policy",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Gestão de segredos e chaves (Vault / KMS)",
        "description": "Como armazenar chaves de API, senhas de banco e certificados com rotação automática e auditoria.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de gestão de segredos e chaves (vault / kms)",
          "Principais componentes técnicos: como armazenar chaves de API, senhas de banco e certificados com rotação automática e auditoria",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Ataques de negação de serviço (DoS e DDoS)",
        "description": "Mitigação de ataques volumétricos e de camada de aplicação com WAF, CDN, anycast e rate limiting.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de ataques de negação de serviço (dos e ddos)",
          "Principais componentes técnicos: mitigação de ataques volumétricos e de camada de aplicação com WAF, CDN, anycast e rate limiting",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Ataques de força bruta e Credential Stuffing",
        "description": "Proteção de telas de login contra listas de senhas vazadas usando bloqueio progressivo, captcha e alertas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de ataques de força bruta e credential stuffing",
          "Principais componentes técnicos: proteção de telas de login contra listas de senhas vazadas usando bloqueio progressivo, captcha e alertas",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Segurança na cadeia de suprimentos (Supply Chain)",
        "description": "Prevenção contra pacotes maliciosos (typosquatting), dependency confusion e auditoria via SBOM.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de segurança na cadeia de suprimentos (supply chain)",
          "Principais componentes técnicos: prevenção contra pacotes maliciosos (typosquatting), dependency confusion e auditoria via SBOM",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Modelagem de ameaças (Threat Modeling - STRIDE)",
        "description": "Identificação proativa de riscos arquiteturais durante a fase de design de uma nova funcionalidade.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de modelagem de ameaças (threat modeling - stride)",
          "Principais componentes técnicos: identificação proativa de riscos arquiteturais durante a fase de design de uma nova funcionalidade",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Pentest (Teste de intrusão) e Bug Bounty",
        "description": "Fases de reconhecimento, exploração e relatório em testes éticos (black-box, white-box e programas de recompensa).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de pentest (teste de intrusão) e bug bounty",
          "Principais componentes técnicos: fases de reconhecimento, exploração e relatório em testes éticos (black-box, white-box e programas de recompensa)",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Engenharia social e Phishing",
        "description": "Como atacantes exploram o fator humano (spear phishing, pretexting) e como criar camadas técnicas de defesa.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de engenharia social e phishing",
          "Principais componentes técnicos: como atacantes exploram o fator humano (spear phishing, pretexting) e como criar camadas técnicas de defesa",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Segurança em APIs (OWASP API Security Top 10)",
        "description": "Mitigação de mass assignment, exposição excessiva de propriedades, falta de rate limit e BOLA.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de segurança em apis (owasp api security top 10)",
          "Principais componentes técnicos: mitigação de mass assignment, exposição excessiva de propriedades, falta de rate limit e BOLA",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Segurança em containers e Kubernetes",
        "description": "Execução com usuário não-root, filesystem read-only, Network Policies e restrição de capabilities do Linux.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de segurança em containers e kubernetes",
          "Principais componentes técnicos: execução com usuário não-root, filesystem read-only, Network Policies e restrição de capabilities do Linux",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Segurança em nuvem (CSPM e IAM)",
        "description": "Prevenção de buckets públicos, chaves IAM vazadas, movimentação lateral e isolamento de contas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de segurança em nuvem (cspm e iam)",
          "Principais componentes técnicos: prevenção de buckets públicos, chaves IAM vazadas, movimentação lateral e isolamento de contas",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "SIEM, SOC e detecção de incidentes",
        "description": "Coleta centralizada de eventos de segurança, correlação de alertas e resposta rápida a invasões.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de siem, soc e detecção de incidentes",
          "Principais componentes técnicos: coleta centralizada de eventos de segurança, correlação de alertas e resposta rápida a invasões",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Resposta a incidentes e Forense Digital",
        "description": "Etapas de preparação, identificação, contenção, erradicação, recuperação e preservação de evidências.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de resposta a incidentes e forense digital",
          "Principais componentes técnicos: etapas de preparação, identificação, contenção, erradicação, recuperação e preservação de evidências",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Ransomware: funcionamento e prevenção",
        "description": "Como malwares de sequestro de dados operam e a importância de backups imutáveis e segmentação de rede.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de ransomware: funcionamento e prevenção",
          "Principais componentes técnicos: como malwares de sequestro de dados operam e a importância de backups imutáveis e segmentação de rede",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Segurança em LLMs e Prompt Injection",
        "description": "Prevenção contra manipulação de instruções, vazamento de prompt de sistema e execução indevida em agentes de IA.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de segurança em llms e prompt injection",
          "Principais componentes técnicos: prevenção contra manipulação de instruções, vazamento de prompt de sistema e execução indevida em agentes de IA",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Desserialização insegura e Prototype Pollution",
        "description": "Como objetos manipulados pelo cliente podem alterar propriedades internas ou executar código remoto.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de desserialização insegura e prototype pollution",
          "Principais componentes técnicos: como objetos manipulados pelo cliente podem alterar propriedades internas ou executar código remoto",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Upload seguro de arquivos",
        "description": "Validação de assinatura binária (magic bytes), isolamento em domínio separado e prevenção de path traversal.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de upload seguro de arquivos",
          "Principais componentes técnicos: validação de assinatura binária (magic bytes), isolamento em domínio separado e prevenção de path traversal",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Auditoria de logs e não-repúdio",
        "description": "Como registrar trilhas de auditoria imutáveis sem vazar senhas, tokens ou dados pessoais nos arquivos de log.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de auditoria de logs e não-repúdio",
          "Principais componentes técnicos: como registrar trilhas de auditoria imutáveis sem vazar senhas, tokens ou dados pessoais nos arquivos de log",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Conformidade, LGPD, ISO 27001 e SOC 2",
        "description": "Controles técnicos e organizacionais exigidos por padrões internacionais de segurança e privacidade.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de conformidade, lgpd, iso 27001 e soc 2",
          "Principais componentes técnicos: controles técnicos e organizacionais exigidos por padrões internacionais de segurança e privacidade",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "WAF (Web Application Firewall)",
        "description": "Funcionamento de regras gerenciadas, bloqueio de bots maliciosos e proteção virtual (virtual patching) na borda.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de waf (web application firewall)",
          "Principais componentes técnicos: funcionamento de regras gerenciadas, bloqueio de bots maliciosos e proteção virtual (virtual patching) na borda",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Segurança em redes Wi-Fi, VPN e WireGuard",
        "description": "Tunelamento criptografado moderno, segmentação de rede corporativa e acesso remoto seguro (ZTNA).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de segurança em redes wi-fi, vpn e wireguard",
          "Principais componentes técnicos: tunelamento criptografado moderno, segmentação de rede corporativa e acesso remoto seguro (ZTNA)",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Desenvolvimento seguro (Secure SDLC)",
        "description": "Integração de requisitos de segurança, revisão de código focada em ameaças e treinamento contínuo da equipe.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de desenvolvimento seguro (secure sdlc)",
          "Principais componentes técnicos: integração de requisitos de segurança, revisão de código focada em ameaças e treinamento contínuo da equipe",
          "Boas práticas, trade-offs e armadilhas comuns na área de cibersegurança",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      }
    ]
  },
  "ia": {
    "label": "IA e machine learning",
    "icon": "🤖",
    "color": "#38bdf8",
    "topics": [
      {
        "title": "LLMs e arquitetura Transformer",
        "description": "Funcionamento de tokens, embeddings, mecanismo de self-attention e geração probabilística de texto.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de llms e arquitetura transformer",
          "Principais componentes técnicos: funcionamento de tokens, embeddings, mecanismo de self-attention e geração probabilística de texto",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "RAG vs fine-tuning",
        "description": "Quando conectar o modelo a uma base externa em tempo real (RAG) e quando ajustar seus pesos internos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de rag vs fine-tuning",
          "Principais componentes técnicos: quando conectar o modelo a uma base externa em tempo real (RAG) e quando ajustar seus pesos internos",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Overfitting e underfitting",
        "description": "Equilíbrio entre viés e variância, regularização e validação cruzada para criar modelos que generalizam.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de overfitting e underfitting",
          "Principais componentes técnicos: equilíbrio entre viés e variância, regularização e validação cruzada para criar modelos que generalizam",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Agentes de IA e tool use",
        "description": "Como LLMs planejam etapas, executam funções externas (function calling) e seguem o ciclo ReAct.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de agentes de ia e tool use",
          "Principais componentes técnicos: como LLMs planejam etapas, executam funções externas (function calling) e seguem o ciclo ReAct",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Aprendizado supervisionado, não supervisionado e por reforço",
        "description": "Diferenças fundamentais entre os três paradigmas clássicos de machine learning.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de aprendizado supervisionado, não supervisionado e por reforço",
          "Principais componentes técnicos: diferenças fundamentais entre os três paradigmas clássicos de machine learning",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Regressão vs classificação",
        "description": "Modelos para prever valores numéricos contínuos (preços, demanda) vs categorias discretas (fraude, spam).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de regressão vs classificação",
          "Principais componentes técnicos: modelos para prever valores numéricos contínuos (preços, demanda) vs categorias discretas (fraude, spam)",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Árvores de decisão, Random Forest e Gradient Boosting",
        "description": "Por que algoritmos como XGBoost e LightGBM dominam problemas com dados tabulares estruturados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de árvores de decisão, random forest e gradient boosting",
          "Principais componentes técnicos: por que algoritmos como XGBoost e LightGBM dominam problemas com dados tabulares estruturados",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Clusterização: K-Means, DBSCAN e redução de dimensionalidade",
        "description": "Descoberta de padrões ocultos e agrupamentos sem rótulos prévios (PCA, t-SNE, UMAP).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de clusterização: k-means, dbscan e redução de dimensionalidade",
          "Principais componentes técnicos: descoberta de padrões ocultos e agrupamentos sem rótulos prévios (PCA, t-SNE, UMAP)",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Métricas de avaliação: Precisão, Recall, F1 e ROC-AUC",
        "description": "Como avaliar classificadores em datasets desbalanceados onde a acurácia simples engana.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de métricas de avaliação: precisão, recall, f1 e roc-auc",
          "Principais componentes técnicos: como avaliar classificadores em datasets desbalanceados onde a acurácia simples engana",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Engenharia de atributos (Feature engineering)",
        "description": "Transformação de variáveis brutas, encoding categórico, normalização e criação de sinais preditivos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de engenharia de atributos (feature engineering)",
          "Principais componentes técnicos: transformação de variáveis brutas, encoding categórico, normalização e criação de sinais preditivos",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Prevenção de Data Leakage (Vazamento de dados)",
        "description": "Como impedir que informações do futuro ou do conjunto de teste contaminem o treinamento do modelo.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de prevenção de data leakage (vazamento de dados)",
          "Principais componentes técnicos: como impedir que informações do futuro ou do conjunto de teste contaminem o treinamento do modelo",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Redes neurais, função de ativação e Backpropagation",
        "description": "Como neurônios artificiais ajustam pesos através de gradiente descendente e funções de perda.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de redes neurais, função de ativação e backpropagation",
          "Principais componentes técnicos: como neurônios artificiais ajustam pesos através de gradiente descendente e funções de perda",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Redes Neurais Convolucionais (CNNs) e Visão Computacional",
        "description": "Detecção de objetos, segmentação e classificação de imagens através de filtros convolucionais.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de redes neurais convolucionais (cnns) e visão computacional",
          "Principais componentes técnicos: detecção de objetos, segmentação e classificação de imagens através de filtros convolucionais",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Embeddings e busca semântica",
        "description": "Representação de textos, imagens e produtos como vetores densos em espaços multidimensionais.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de embeddings e busca semântica",
          "Principais componentes técnicos: representação de textos, imagens e produtos como vetores densos em espaços multidimensionais",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Estratégias de Chunking no RAG",
        "description": "Como dividir documentos longos preservando contexto semântico para melhorar a recuperação de informações.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de estratégias de chunking no rag",
          "Principais componentes técnicos: como dividir documentos longos preservando contexto semântico para melhorar a recuperação de informações",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Busca híbrida (BM25 + Vetorial) e Reranking",
        "description": "Combinação de busca exata por palavras-chave com busca semântica e reordenação por relevância.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de busca híbrida (bm25 + vetorial) e reranking",
          "Principais componentes técnicos: combinação de busca exata por palavras-chave com busca semântica e reordenação por relevância",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Engenharia de prompt avançada",
        "description": "Técnicas de system prompts estruturados, few-shot prompting, chain-of-thought e saídas estruturadas (JSON).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de engenharia de prompt avançada",
          "Principais componentes técnicos: técnicas de system prompts estruturados, few-shot prompting, chain-of-thought e saídas estruturadas (JSON)",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Parâmetros de inferência: Temperatura, Top-K e Top-P",
        "description": "Controle de criatividade, determinismo e diversidade na geração de respostas em LLMs.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de parâmetros de inferência: temperatura, top-k e top-p",
          "Principais componentes técnicos: controle de criatividade, determinismo e diversidade na geração de respostas em LLMs",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Alucinações em IA generativa: causas e mitigação",
        "description": "Por que modelos inventam fatos com confiança e como usar grounding, citações e validação.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de alucinações em ia generativa: causas e mitigação",
          "Principais componentes técnicos: por que modelos inventam fatos com confiança e como usar grounding, citações e validação",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Fine-tuning eficiente com LoRA e QLoRA",
        "description": "Adaptação de grandes modelos de linguagem atualizando apenas uma fração mínima de parâmetros.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de fine-tuning eficiente com lora e qlora",
          "Principais componentes técnicos: adaptação de grandes modelos de linguagem atualizando apenas uma fração mínima de parâmetros",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Quantização de modelos (FP16, INT8, INT4)",
        "description": "Redução do consumo de VRAM e aceleração da inferência comprimindo a precisão dos pesos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de quantização de modelos (fp16, int8, int4)",
          "Principais componentes técnicos: redução do consumo de VRAM e aceleração da inferência comprimindo a precisão dos pesos",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Execução de LLMs locais e open-weights",
        "description": "Uso de modelos abertos (Llama, Mistral, Qwen, Gemma) com motores como vLLM e Ollama.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de execução de llms locais e open-weights",
          "Principais componentes técnicos: uso de modelos abertos (Llama, Mistral, Qwen, Gemma) com motores como vLLM e Ollama",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Sistemas Multi-Agentes (Multi-agent workflows)",
        "description": "Orquestração de agentes especializados que colaboram, revisam e delegam subtarefas complexas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de sistemas multi-agentes (multi-agent workflows)",
          "Principais componentes técnicos: orquestração de agentes especializados que colaboram, revisam e delegam subtarefas complexas",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Model Context Protocol (MCP) e integração de ferramentas",
        "description": "Padronização da conexão segura entre assistentes de IA, fontes de dados locais e APIs corporativas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de model context protocol (mcp) e integração de ferramentas",
          "Principais componentes técnicos: padronização da conexão segura entre assistentes de IA, fontes de dados locais e APIs corporativas",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Memória de curto e longo prazo em aplicações de IA",
        "description": "Gerenciamento da janela de contexto, sumarização progressiva e memória episódica/semântica.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de memória de curto e longo prazo em aplicações de ia",
          "Principais componentes técnicos: gerenciamento da janela de contexto, sumarização progressiva e memória episódica/semântica",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Avaliação sistemática de IA (LLM-as-a-Judge e Evals)",
        "description": "Criação de datasets de referência e métricas automatizadas de fidelidade, relevância e segurança.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de avaliação sistemática de ia (llm-as-a-judge e evals)",
          "Principais componentes técnicos: criação de datasets de referência e métricas automatizadas de fidelidade, relevância e segurança",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Guardrails e segurança em IA generativa",
        "description": "Filtros de entrada e saída para bloquear prompt injection, toxicidade, vazamento de PII e tópicos proibidos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de guardrails e segurança em ia generativa",
          "Principais componentes técnicos: filtros de entrada e saída para bloquear prompt injection, toxicidade, vazamento de PII e tópicos proibidos",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "MLOps: ciclo de vida e deploy de modelos",
        "description": "Versionamento de dados e modelos (MLflow), pipelines de treinamento contínuo e serviço de inferência.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de mlops: ciclo de vida e deploy de modelos",
          "Principais componentes técnicos: versionamento de dados e modelos (MLflow), pipelines de treinamento contínuo e serviço de inferência",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Data Drift e Concept Drift em produção",
        "description": "Detecção de quando o comportamento do mundo real muda e degrada a precisão do modelo ao longo do tempo.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de data drift e concept drift em produção",
          "Principais componentes técnicos: detecção de quando o comportamento do mundo real muda e degrada a precisão do modelo ao longo do tempo",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Otimização de latência e custos em APIs de LLM",
        "description": "Uso de prompt caching, semantic caching, roteamento para modelos menores e processamento em batch.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de otimização de latência e custos em apis de llm",
          "Principais componentes técnicos: uso de prompt caching, semantic caching, roteamento para modelos menores e processamento em batch",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Modelos Multimodais (Texto, Imagem, Áudio e Vídeo)",
        "description": "Arquiteturas capazes de compreender e gerar diferentes modalidades de mídia simultaneamente.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de modelos multimodais (texto, imagem, áudio e vídeo)",
          "Principais componentes técnicos: arquiteturas capazes de compreender e gerar diferentes modalidades de mídia simultaneamente",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Speech-to-Text (STT) e Text-to-Speech (TTS) neural",
        "description": "Transcrição de áudio de alta precisão e síntese de voz natural em tempo real.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de speech-to-text (stt) e text-to-speech (tts) neural",
          "Principais componentes técnicos: transcrição de áudio de alta precisão e síntese de voz natural em tempo real",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Sistemas de recomendação (Filtragem colaborativa e conteúdo)",
        "description": "Como plataformas de streaming e e-commerce personalizam vitrines para cada perfil de usuário.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de sistemas de recomendação (filtragem colaborativa e conteúdo)",
          "Principais componentes técnicos: como plataformas de streaming e e-commerce personalizam vitrines para cada perfil de usuário",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Explicabilidade de modelos (XAI - SHAP e LIME)",
        "description": "Como abrir a 'caixa-preta' do modelo para explicar por que uma decisão específica de crédito ou saúde foi tomada.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de explicabilidade de modelos (xai - shap e lime)",
          "Principais componentes técnicos: como abrir a 'caixa-preta' do modelo para explicar por que uma decisão específica de crédito ou saúde foi tomada",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "IA responsável, ética, direitos autorais e viés",
        "description": "Mitigação de vieses históricos nos dados de treino, transparência e governança no uso de IA.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de ia responsável, ética, direitos autorais e viés",
          "Principais componentes técnicos: mitigação de vieses históricos nos dados de treino, transparência e governança no uso de IA",
          "Boas práticas, trade-offs e armadilhas comuns na área de ia e machine learning",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      }
    ]
  },
  "arquitetura": {
    "label": "Arquitetura e design",
    "icon": "🏛️",
    "color": "#ec4899",
    "topics": [
      {
        "title": "Monólito vs microsserviços",
        "description": "Trade-offs reais entre simplicidade operacional de um monólito modular e autonomia de microsserviços.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de monólito vs microsserviços",
          "Principais componentes técnicos: trade-offs reais entre simplicidade operacional de um monólito modular e autonomia de microsserviços",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Estratégias de cache e CDN",
        "description": "Padrões Cache-Aside, Read/Write-Through, invalidação (TTL/LRU) e prevenção de cache stampede.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de estratégias de cache e cdn",
          "Principais componentes técnicos: padrões Cache-Aside, Read/Write-Through, invalidação (TTL/LRU) e prevenção de cache stampede",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Filas, mensageria e pub/sub",
        "description": "Desacoplamento assíncrono, absorção de picos de tráfego, retentativas e Dead Letter Queues (DLQ).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de filas, mensageria e pub/sub",
          "Principais componentes técnicos: desacoplamento assíncrono, absorção de picos de tráfego, retentativas e Dead Letter Queues (DLQ)",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Clean architecture e hexagonal",
        "description": "Isolamento das regras de negócio no centro da aplicação usando Ports and Adapters.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de clean architecture e hexagonal",
          "Principais componentes técnicos: isolamento das regras de negócio no centro da aplicação usando Ports and Adapters",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Resiliência e circuit breaker",
        "description": "Prevenção de falhas em cascata com timeouts, circuit breakers, bulkheads e exponential backoff com jitter.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de resiliência e circuit breaker",
          "Principais componentes técnicos: prevenção de falhas em cascata com timeouts, circuit breakers, bulkheads e exponential backoff com jitter",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Domain-Driven Design (DDD): tático e estratégico",
        "description": "Linguagem ubíqua, Bounded Contexts, Context Maps, Entidades, Value Objects e Agregados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de domain-driven design (ddd): tático e estratégico",
          "Principais componentes técnicos: linguagem ubíqua, Bounded Contexts, Context Maps, Entidades, Value Objects e Agregados",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Monólito modular (Modulith)",
        "description": "Como estruturar um único deploy com fronteiras rígidas entre módulos internos antes de precisar de microsserviços.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de monólito modular (modulith)",
          "Principais componentes técnicos: como estruturar um único deploy com fronteiras rígidas entre módulos internos antes de precisar de microsserviços",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Padrão CQRS (Command Query Responsibility Segregation)",
        "description": "Separação entre modelos de escrita (comandos de negócio) e modelos otimizados para leitura (queries).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de padrão cqrs (command query responsibility segregation)",
          "Principais componentes técnicos: separação entre modelos de escrita (comandos de negócio) e modelos otimizados para leitura (queries)",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Event Sourcing",
        "description": "Persistência do estado da aplicação como uma sequência imutável de eventos de domínio em vez de sobrescrever linhas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de event sourcing",
          "Principais componentes técnicos: persistência do estado da aplicação como uma sequência imutável de eventos de domínio em vez de sobrescrever linhas",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Padrão Saga em transações distribuídas",
        "description": "Como manter consistência eventual entre microsserviços usando coreografia ou orquestração e ações compensatórias.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de padrão saga em transações distribuídas",
          "Principais componentes técnicos: como manter consistência eventual entre microsserviços usando coreografia ou orquestração e ações compensatórias",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Transactional Outbox Pattern",
        "description": "Como salvar no banco de dados e publicar um evento na fila com garantia atômica sem perder mensagens.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de transactional outbox pattern",
          "Principais componentes técnicos: como salvar no banco de dados e publicar um evento na fila com garantia atômica sem perder mensagens",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "API Gateway vs Backend for Frontend (BFF)",
        "description": "Roteamento transversal na borda comparado a camadas de agregação específicas por experiência (mobile/web).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de api gateway vs backend for frontend (bff)",
          "Principais componentes técnicos: roteamento transversal na borda comparado a camadas de agregação específicas por experiência (mobile/web)",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Escalabilidade vertical vs horizontal",
        "description": "Limites de aumentar o tamanho da máquina (scale up) vs adicionar múltiplas instâncias sem estado (scale out).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de escalabilidade vertical vs horizontal",
          "Principais componentes técnicos: limites de aumentar o tamanho da máquina (scale up) vs adicionar múltiplas instâncias sem estado (scale out)",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Aplicações Stateless vs Stateful",
        "description": "Por que remover estado de sessão da memória do servidor é o segredo para escalar horizontalmente com facilidade.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de aplicações stateless vs stateful",
          "Principais componentes técnicos: por que remover estado de sessão da memória do servidor é o segredo para escalar horizontalmente com facilidade",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Teorema CAP e PACELC na prática",
        "description": "Como arquitetos escolhem entre consistência imediata e disponibilidade durante partições de rede e operação normal.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de teorema cap e pacelc na prática",
          "Principais componentes técnicos: como arquitetos escolhem entre consistência imediata e disponibilidade durante partições de rede e operação normal",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Consistência eventual e conflitos de escrita",
        "description": "Como projetar produtos e interfaces que lidam naturalmente com atrasos de sincronização distribuída.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de consistência eventual e conflitos de escrita",
          "Principais componentes técnicos: como projetar produtos e interfaces que lidam naturalmente com atrasos de sincronização distribuída",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Strangler Fig Pattern (Estrangulamento de legado)",
        "description": "Migração gradual e segura de sistemas legados críticos substituindo rota por rota sem reescrita big-bang.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de strangler fig pattern (estrangulamento de legado)",
          "Principais componentes técnicos: migração gradual e segura de sistemas legados críticos substituindo rota por rota sem reescrita big-bang",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Anti-Corruption Layer (Camada anticorrupção)",
        "description": "Tradução e isolamento entre um sistema novo bem modelado e um sistema externo ou legado confuso.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de anti-corruption layer (camada anticorrupção)",
          "Principais componentes técnicos: tradução e isolamento entre um sistema novo bem modelado e um sistema externo ou legado confuso",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Arquitetura orientada a eventos (EDA)",
        "description": "Notificação de eventos, transferência de estado carregada por evento e desacoplamento temporal.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de arquitetura orientada a eventos (eda)",
          "Principais componentes técnicos: notificação de eventos, transferência de estado carregada por evento e desacoplamento temporal",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Arquitetura Serverless e Event-Driven",
        "description": "Composição de sistemas escaláveis usando funções efêmeras, filas gerenciadas e bancos serverless.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de arquitetura serverless e event-driven",
          "Principais componentes técnicos: composição de sistemas escaláveis usando funções efêmeras, filas gerenciadas e bancos serverless",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Arquitetura Multi-Tenant (SaaS)",
        "description": "Isolamento de dados de clientes via banco separado, schema separado ou coluna tenant_id (Row-Level Security).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de arquitetura multi-tenant (saas)",
          "Principais componentes técnicos: isolamento de dados de clientes via banco separado, schema separado ou coluna tenant_id (Row-Level Security)",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Sistemas distribuídos: falácias da rede",
        "description": "Por que a rede não é confiável, a latência não é zero e a largura de banda não é infinita.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de sistemas distribuídos: falácias da rede",
          "Principais componentes técnicos: por que a rede não é confiável, a latência não é zero e a largura de banda não é infinita",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Consenso distribuído (Raft e Paxos) e Leader Election",
        "description": "Como múltiplos nós concordam sobre um valor ou elegem um líder único sem sofrer split-brain.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de consenso distribuído (raft e paxos) e leader election",
          "Principais componentes técnicos: como múltiplos nós concordam sobre um valor ou elegem um líder único sem sofrer split-brain",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Consistent Hashing (Espalhamento consistente)",
        "description": "Distribuição equilibrada de chaves entre servidores de cache ou banco minimizando redistribuição ao escalar.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de consistent hashing (espalhamento consistente)",
          "Principais componentes técnicos: distribuição equilibrada de chaves entre servidores de cache ou banco minimizando redistribuição ao escalar",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Rate Limiting e Load Shedding",
        "description": "Como proteger a saúde do sistema descartando excesso de carga de forma controlada em momentos extremos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de rate limiting e load shedding",
          "Principais componentes técnicos: como proteger a saúde do sistema descartando excesso de carga de forma controlada em momentos extremos",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Backpressure (Contrapressão)",
        "description": "Mecanismos para evitar que um produtor rápido afogue um consumidor mais lento em fluxos de dados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de backpressure (contrapressão)",
          "Principais componentes técnicos: mecanismos para evitar que um produtor rápido afogue um consumidor mais lento em fluxos de dados",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Design de sistemas: encurtador de URL e gerador de IDs",
        "description": "Arquitetura clássica de alta leitura, geração de IDs únicos distribuídos (Snowflake/UUIDv7) e redirecionamento.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de design de sistemas: encurtador de url e gerador de ids",
          "Principais componentes técnicos: arquitetura clássica de alta leitura, geração de IDs únicos distribuídos (Snowflake/UUIDv7) e redirecionamento",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Design de sistemas: feed de notícias e timeline",
        "description": "Estratégias Fan-out on Write (push) vs Fan-out on Read (pull) para usuários comuns e celebridades.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de design de sistemas: feed de notícias e timeline",
          "Principais componentes técnicos: estratégias Fan-out on Write (push) vs Fan-out on Read (pull) para usuários comuns e celebridades",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Design de sistemas: chat em tempo real e presença",
        "description": "Gerenciamento de milhões de conexões WebSocket, histórico de mensagens e status online/offline.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de design de sistemas: chat em tempo real e presença",
          "Principais componentes técnicos: gerenciamento de milhões de conexões WebSocket, histórico de mensagens e status online/offline",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Design de sistemas: notificações em larga escala",
        "description": "Arquitetura resiliente para despachar milhões de pushes, e-mails e SMS com deduplicação e preferências.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de design de sistemas: notificações em larga escala",
          "Principais componentes técnicos: arquitetura resiliente para despachar milhões de pushes, e-mails e SMS com deduplicação e preferências",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Architecture Decision Records (ADRs)",
        "description": "Documentação leve e histórica do contexto, alternativas avaliadas e consequências das decisões técnicas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de architecture decision records (adrs)",
          "Principais componentes técnicos: documentação leve e histórica do contexto, alternativas avaliadas e consequências das decisões técnicas",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "C4 Model para diagramas de arquitetura",
        "description": "Visualização clara de software em 4 níveis de zoom: Contexto, Containers, Componentes e Código.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de c4 model para diagramas de arquitetura",
          "Principais componentes técnicos: visualização clara de software em 4 níveis de zoom: Contexto, Containers, Componentes e Código",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "A Lei de Conway e topologia de times",
        "description": "Como a estrutura de comunicação da empresa molda diretamente a arquitetura do software produzido.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de a lei de conway e topologia de times",
          "Principais componentes técnicos: como a estrutura de comunicação da empresa molda diretamente a arquitetura do software produzido",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Fitness Functions e arquitetura evolutiva",
        "description": "Testes automatizados que garantem que regras arquiteturais (ex: ciclos de dependência, latência) não se degradem.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de fitness functions e arquitetura evolutiva",
          "Principais componentes técnicos: testes automatizados que garantem que regras arquiteturais (ex: ciclos de dependência, latência) não se degradem",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Trade-offs em arquitetura: não existe bala de prata",
        "description": "Como analisar acoplamento, coesão, custo, complexidade cognitiva e time-to-market em cada decisão.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de trade-offs em arquitetura: não existe bala de prata",
          "Principais componentes técnicos: como analisar acoplamento, coesão, custo, complexidade cognitiva e time-to-market em cada decisão",
          "Boas práticas, trade-offs e armadilhas comuns na área de arquitetura e design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      }
    ]
  },
  "agilidade": {
    "label": "Agilidade e Scrum",
    "icon": "🔄",
    "color": "#14b8a6",
    "topics": [
      {
        "title": "Pilares e eventos do Scrum",
        "description": "Transparência, inspeção e adaptação aplicadas na Sprint Planning, Daily, Review e Retrospective.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de pilares e eventos do scrum",
          "Principais componentes técnicos: transparência, inspeção e adaptação aplicadas na Sprint Planning, Daily, Review e Retrospective",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Kanban e fluxo contínuo",
        "description": "Gestão visual do trabalho, sistema puxado, políticas explícitas e limitação do trabalho em progresso (WIP).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de kanban e fluxo contínuo",
          "Principais componentes técnicos: gestão visual do trabalho, sistema puxado, políticas explícitas e limitação do trabalho em progresso (WIP)",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Métricas ágeis de fluxo",
        "description": "Medição de previsibilidade com Lead Time, Cycle Time, Throughput e Diagrama de Fluxo Cumulativo (CFD).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de métricas ágeis de fluxo",
          "Principais componentes técnicos: medição de previsibilidade com Lead Time, Cycle Time, Throughput e Diagrama de Fluxo Cumulativo (CFD)",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Refinamento e estimativas ágeis",
        "description": "Quebra de épicos em histórias menores (INVEST), Planning Poker, Story Points e critérios de aceite.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de refinamento e estimativas ágeis",
          "Principais componentes técnicos: quebra de épicos em histórias menores (INVEST), Planning Poker, Story Points e critérios de aceite",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Agilidade em escala",
        "description": "Coordenação de múltiplos times usando Squads/Tribos, Scrum of Scrums, LeSS, Nexus ou SAFe.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de agilidade em escala",
          "Principais componentes técnicos: coordenação de múltiplos times usando Squads/Tribos, Scrum of Scrums, LeSS, Nexus ou SAFe",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Manifesto Ágil: 4 valores e 12 princípios",
        "description": "A essência da mentalidade ágil focada em entregas contínuas de valor, colaboração e resposta a mudanças.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de manifesto ágil: 4 valores e 12 princípios",
          "Principais componentes técnicos: a essência da mentalidade ágil focada em entregas contínuas de valor, colaboração e resposta a mudanças",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Papéis no Scrum: PO, Scrum Master e Developers",
        "description": "Responsabilidades reais de cada papel e como evitar anti-padrões como 'Scrum Master secretário' ou 'PO chefe'.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de papéis no scrum: po, scrum master e developers",
          "Principais componentes técnicos: responsabilidades reais de cada papel e como evitar anti-padrões como 'Scrum Master secretário' ou 'PO chefe'",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Sprint Goal (Meta da Sprint)",
        "description": "Por que comprometer-se com um objetivo de negócio gera muito mais foco e flexibilidade do que apenas fechar tickets.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de sprint goal (meta da sprint)",
          "Principais componentes técnicos: por que comprometer-se com um objetivo de negócio gera muito mais foco e flexibilidade do que apenas fechar tickets",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Definition of Ready (DoR) vs Definition of Done (DoD)",
        "description": "Alinhamento claro sobre quando um item está pronto para entrar na Sprint e quando está realmente concluído.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de definition of ready (dor) vs definition of done (dod)",
          "Principais componentes técnicos: alinhamento claro sobre quando um item está pronto para entrar na Sprint e quando está realmente concluído",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Sprint Review eficaz",
        "description": "Como transformar a Review em uma sessão colaborativa de feedback sobre o produto e não apenas uma apresentação.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de sprint review eficaz",
          "Principais componentes técnicos: como transformar a Review em uma sessão colaborativa de feedback sobre o produto e não apenas uma apresentação",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Retrospectivas engajadoras e acionáveis",
        "description": "Formatos criativos para fugir da rotina, criar segurança psicológica e gerar planos de ação que realmente acontecem.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de retrospectivas engajadoras e acionáveis",
          "Principais componentes técnicos: formatos criativos para fugir da rotina, criar segurança psicológica e gerar planos de ação que realmente acontecem",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Daily Scrum sem microgerenciamento",
        "description": "Como fazer reuniões diárias de 15 minutos focadas em sincronizar o plano do time em vez de prestar contas ao chefe.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de daily scrum sem microgerenciamento",
          "Principais componentes técnicos: como fazer reuniões diárias de 15 minutos focadas em sincronizar o plano do time em vez de prestar contas ao chefe",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Lei de Little aplicada ao Kanban",
        "description": "A relação matemática entre Work In Progress (WIP), Throughput e Lead Time na eficiência do fluxo.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de lei de little aplicada ao kanban",
          "Principais componentes técnicos: a relação matemática entre Work In Progress (WIP), Throughput e Lead Time na eficiência do fluxo",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Classes de serviço no Kanban",
        "description": "Como priorizar itens urgentes (Expedite), data fixa, padrão e intangíveis sem destruir a previsibilidade.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de classes de serviço no kanban",
          "Principais componentes técnicos: como priorizar itens urgentes (Expedite), data fixa, padrão e intangíveis sem destruir a previsibilidade",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Burndown vs Burnup Chart",
        "description": "Como visualizar o progresso da Sprint ou release e identificar rapidamente mudanças de escopo (scope creep).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de burndown vs burnup chart",
          "Principais componentes técnicos: como visualizar o progresso da Sprint ou release e identificar rapidamente mudanças de escopo (scope creep)",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Velocidade (Velocity): uso correto e armadilhas",
        "description": "Por que a velocidade serve apenas para planejamento interno do time e nunca para comparar equipes diferentes.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de velocidade (velocity): uso correto e armadilhas",
          "Principais componentes técnicos: por que a velocidade serve apenas para planejamento interno do time e nunca para comparar equipes diferentes",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Previsibilidade com Simulação de Monte Carlo",
        "description": "Como responder 'quando vai ficar pronto?' usando probabilidades estatísticas baseadas no histórico real de entregas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de previsibilidade com simulação de monte carlo",
          "Principais componentes técnicos: como responder 'quando vai ficar pronto?' usando probabilidades estatísticas baseadas no histórico real de entregas",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Movimento #NoEstimates",
        "description": "Foco em fatiar histórias em tamanhos similares e medir vazão (throughput) em vez de gastar horas estimando pontos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de movimento #noestimates",
          "Principais componentes técnicos: foco em fatiar histórias em tamanhos similares e medir vazão (throughput) em vez de gastar horas estimando pontos",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "User Story Mapping (Mapeamento de histórias)",
        "description": "Construção visual da jornada do usuário para planejar releases e definir o corte ideal do MVP.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de user story mapping (mapeamento de histórias)",
          "Principais componentes técnicos: construção visual da jornada do usuário para planejar releases e definir o corte ideal do MVP",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Fatiamento vertical vs horizontal de histórias",
        "description": "Por que entregar uma fatia fina de ponta a ponta gera valor imediato comparado a separar tarefas por camada técnica.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de fatiamento vertical vs horizontal de histórias",
          "Principais componentes técnicos: por que entregar uma fatia fina de ponta a ponta gera valor imediato comparado a separar tarefas por camada técnica",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Extreme Programming (XP) e agilidade técnica",
        "description": "Como práticas como TDD, programação em par, integração contínua e design simples sustentam a agilidade.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de extreme programming (xp) e agilidade técnica",
          "Principais componentes técnicos: como práticas como TDD, programação em par, integração contínua e design simples sustentam a agilidade",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Scrumban: combinando Scrum e Kanban",
        "description": "Como unir as cadências de planejamento e reflexão do Scrum com a fluidez e limites de WIP do Kanban.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de scrumban: combinando scrum e kanban",
          "Principais componentes técnicos: como unir as cadências de planejamento e reflexão do Scrum com a fluidez e limites de WIP do Kanban",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Gestão de dependências entre times",
        "description": "Como identificar, mapear e reduzir bloqueios externos que travam o fluxo de entrega das squads.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de gestão de dependências entre times",
          "Principais componentes técnicos: como identificar, mapear e reduzir bloqueios externos que travam o fluxo de entrega das squads",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Segurança psicológica em equipes ágeis",
        "description": "O conceito de Amy Edmondson sobre criar um ambiente onde pessoas podem admitir erros, pedir ajuda e questionar ideias.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de segurança psicológica em equipes ágeis",
          "Principais componentes técnicos: o conceito de Amy Edmondson sobre criar um ambiente onde pessoas podem admitir erros, pedir ajuda e questionar ideias",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Estágios de desenvolvimento de equipe (Tuckman)",
        "description": "Forming, Storming, Norming e Performing: como liderar e apoiar o time em cada fase de maturidade.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de estágios de desenvolvimento de equipe (tuckman)",
          "Principais componentes técnicos: forming, Storming, Norming e Performing: como liderar e apoiar o time em cada fase de maturidade",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Liderança servidora e facilitação",
        "description": "Técnicas para conduzir discussões difíceis, tomar decisões em grupo e remover impedimentos organizacionais.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de liderança servidora e facilitação",
          "Principais componentes técnicos: técnicas para conduzir discussões difíceis, tomar decisões em grupo e remover impedimentos organizacionais",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Gestão de mudanças e método ADKAR",
        "description": "Como apoiar pessoas e organizações na transição cultural para novos processos e formas de trabalho.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de gestão de mudanças e método adkar",
          "Principais componentes técnicos: como apoiar pessoas e organizações na transição cultural para novos processos e formas de trabalho",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Práticas do Management 3.0",
        "description": "Moving Motivators, Delegation Poker, Matriz de Competências e Kudo Cards para engajamento e autonomia.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de práticas do management 3.0",
          "Principais componentes técnicos: moving Motivators, Delegation Poker, Matriz de Competências e Kudo Cards para engajamento e autonomia",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Acordos de time (Working agreements)",
        "description": "Construção coletiva de regras de convivência, horários, comunicação assíncrona e revisão de código.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de acordos de time (working agreements)",
          "Principais componentes técnicos: construção coletiva de regras de convivência, horários, comunicação assíncrona e revisão de código",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Dívida técnica no planejamento ágil",
        "description": "Como negociar capacidade contínua da Sprint para refatoração e saúde da plataforma junto com produto.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de dívida técnica no planejamento ágil",
          "Principais componentes técnicos: como negociar capacidade contínua da Sprint para refatoração e saúde da plataforma junto com produto",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Métricas DORA e eficiência de engenharia",
        "description": "Deployment Frequency, Lead Time for Changes, Change Failure Rate e MTTR como termômetros de alta performance.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de métricas dora e eficiência de engenharia",
          "Principais componentes técnicos: deployment Frequency, Lead Time for Changes, Change Failure Rate e MTTR como termômetros de alta performance",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Shape Up (Metodologia Basecamp)",
        "description": "Ciclos de 6 semanas, apostas (bets) em vez de backlogs infinitos, apetite de tempo e autonomia de escopo.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de shape up (metodologia basecamp)",
          "Principais componentes técnicos: ciclos de 6 semanas, apostas (bets) em vez de backlogs infinitos, apetite de tempo e autonomia de escopo",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Combate ao Ágil Teatro (Cargo Cult Agile)",
        "description": "Como identificar quando uma empresa apenas mudou o nome das reuniões mas continua operando em cascata (Waterfall).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de combate ao ágil teatro (cargo cult agile)",
          "Principais componentes técnicos: como identificar quando uma empresa apenas mudou o nome das reuniões mas continua operando em cascata (Waterfall)",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Comunicação assíncrona em times remotos",
        "description": "Boas práticas de documentação enxuta, handoffs claros e redução de reuniões desnecessárias.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de comunicação assíncrona em times remotos",
          "Principais componentes técnicos: boas práticas de documentação enxuta, handoffs claros e redução de reuniões desnecessárias",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Fluxo de valor (Value Stream Mapping)",
        "description": "Mapeamento de ponta a ponta desde a ideia até o cliente para eliminar desperdícios (Lean Thinking).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de fluxo de valor (value stream mapping)",
          "Principais componentes técnicos: mapeamento de ponta a ponta desde a ideia até o cliente para eliminar desperdícios (Lean Thinking)",
          "Boas práticas, trade-offs e armadilhas comuns na área de agilidade e scrum",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      }
    ]
  },
  "produto": {
    "label": "Produto (PM / PO)",
    "icon": "🧭",
    "color": "#3b82f6",
    "topics": [
      {
        "title": "Product discovery contínuo",
        "description": "Mitigação dos 4 riscos de produto (valor, usabilidade, viabilidade e negócio) antes de construir.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de product discovery contínuo",
          "Principais componentes técnicos: mitigação dos 4 riscos de produto (valor, usabilidade, viabilidade e negócio) antes de construir",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Priorização de backlog",
        "description": "Uso prático dos frameworks RICE, MoSCoW, Kano e matriz esforço x impacto para tomar decisões.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de priorização de backlog",
          "Principais componentes técnicos: uso prático dos frameworks RICE, MoSCoW, Kano e matriz esforço x impacto para tomar decisões",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "OKRs e métricas de produto",
        "description": "Alinhamento estratégico focado em resultados de negócio (outcomes) e não apenas em volume de entregas (outputs).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de okrs e métricas de produto",
          "Principais componentes técnicos: alinhamento estratégico focado em resultados de negócio (outcomes) e não apenas em volume de entregas (outputs)",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "MVP vs MMP e experimentação",
        "description": "Validação rápida de hipóteses no mercado com mínimo esforço e aprendizado guiado por testes A/B.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de mvp vs mmp e experimentação",
          "Principais componentes técnicos: validação rápida de hipóteses no mercado com mínimo esforço e aprendizado guiado por testes A/B",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Opportunity Solution Tree (Árvore de oportunidades)",
        "description": "Framework visual de Teresa Torres para conectar resultados desejados, dores reais dos clientes e experimentos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de opportunity solution tree (árvore de oportunidades)",
          "Principais componentes técnicos: framework visual de Teresa Torres para conectar resultados desejados, dores reais dos clientes e experimentos",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Jobs to Be Done (JTBD)",
        "description": "Como entender o 'progresso' que o cliente está tentando alcançar ao contratar um produto em vez de olhar só demografia.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de jobs to be done (jtbd)",
          "Principais componentes técnicos: como entender o 'progresso' que o cliente está tentando alcançar ao contratar um produto em vez de olhar só demografia",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Entrevistas com usuários (The Mom Test)",
        "description": "Como fazer perguntas sobre comportamentos reais do passado sem induzir elogios falsos sobre sua ideia.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de entrevistas com usuários (the mom test)",
          "Principais componentes técnicos: como fazer perguntas sobre comportamentos reais do passado sem induzir elogios falsos sobre sua ideia",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Product-Market Fit (PMF)",
        "description": "Como medir se o seu produto realmente resolve uma dor urgente de um mercado e gera retenção orgânica.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de product-market fit (pmf)",
          "Principais componentes técnicos: como medir se o seu produto realmente resolve uma dor urgente de um mercado e gera retenção orgânica",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "North Star Metric (Métrica estrela guia)",
        "description": "Como definir o indicador único que melhor captura a entrega de valor central do produto para o cliente.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de north star metric (métrica estrela guia)",
          "Principais componentes técnicos: como definir o indicador único que melhor captura a entrega de valor central do produto para o cliente",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Funil Pirata (AARRR)",
        "description": "Análise das etapas de Aquisição, Ativação, Retenção, Receita e Recomendação (Referral).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de funil pirata (aarrr)",
          "Principais componentes técnicos: análise das etapas de Aquisição, Ativação, Retenção, Receita e Recomendação (Referral)",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Product-Led Growth (PLG) vs Sales-Led",
        "description": "Como usar o próprio produto (freemium, self-service, viralidade) como principal motor de aquisição e expansão.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de product-led growth (plg) vs sales-led",
          "Principais componentes técnicos: como usar o próprio produto (freemium, self-service, viralidade) como principal motor de aquisição e expansão",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Onboarding e Time to Value (TTV)",
        "description": "Como reduzir o tempo até o 'Momento Aha!' onde o novo usuário percebe o valor real da ferramenta.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de onboarding e time to value (ttv)",
          "Principais componentes técnicos: como reduzir o tempo até o 'Momento Aha!' onde o novo usuário percebe o valor real da ferramenta",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Economia unitária: CAC, LTV e Payback",
        "description": "Saúde financeira do produto: quanto custa adquirir um cliente vs quanto valor ele gera ao longo do tempo.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de economia unitária: cac, ltv e payback",
          "Principais componentes técnicos: saúde financeira do produto: quanto custa adquirir um cliente vs quanto valor ele gera ao longo do tempo",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Análise de Churn e curvas de retenção",
        "description": "Diferença entre churn voluntário e involuntário, análise de coortes e estratégias de engajamento.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de análise de churn e curvas de retenção",
          "Principais componentes técnicos: diferença entre churn voluntário e involuntário, análise de coortes e estratégias de engajamento",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Roadmaps baseados em resultados (Now, Next, Later)",
        "description": "Por que substituir cronogramas rígidos de datas e features por problemas a serem resolvidos traz mais agilidade.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de roadmaps baseados em resultados (now, next, later)",
          "Principais componentes técnicos: por que substituir cronogramas rígidos de datas e features por problemas a serem resolvidos traz mais agilidade",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Visão e estratégia de produto",
        "description": "Como conectar onde a empresa quer estar em 3 anos com as escolhas táticas do trimestre atual.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de visão e estratégia de produto",
          "Principais componentes técnicos: como conectar onde a empresa quer estar em 3 anos com as escolhas táticas do trimestre atual",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Gestão de stakeholders e saber dizer 'não'",
        "description": "Como alinhar expectativas de diretores, vendas e suporte usando dados, transparência e objetivos compartilhados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de gestão de stakeholders e saber dizer 'não'",
          "Principais componentes técnicos: como alinhar expectativas de diretores, vendas e suporte usando dados, transparência e objetivos compartilhados",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Escrita de PRDs (Product Requirements Documents)",
        "description": "Como criar especificações enxutas que dão contexto claro do problema sem engessar a solução técnica.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de escrita de prds (product requirements documents)",
          "Principais componentes técnicos: como criar especificações enxutas que dão contexto claro do problema sem engessar a solução técnica",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Testes de fumaça (Fake Door / Smoke Tests)",
        "description": "Validação de demanda real por uma funcionalidade antes mesmo de escrever uma única linha de código.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de testes de fumaça (fake door / smoke tests)",
          "Principais componentes técnicos: validação de demanda real por uma funcionalidade antes mesmo de escrever uma única linha de código",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Precificação (Pricing) e empacotamento SaaS",
        "description": "Estratégias de cobrança baseadas em valor, assentos, uso (usage-based) e psicologia de planos (tiers).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de precificação (pricing) e empacotamento saas",
          "Principais componentes técnicos: estratégias de cobrança baseadas em valor, assentos, uso (usage-based) e psicologia de planos (tiers)",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Análise competitiva e posicionamento",
        "description": "Como mapear concorrentes diretos e indiretos, encontrar diferenciais defensáveis (moats) e posicionar o produto.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de análise competitiva e posicionamento",
          "Principais componentes técnicos: como mapear concorrentes diretos e indiretos, encontrar diferenciais defensáveis (moats) e posicionar o produto",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Go-To-Market (GTM) e lançamento de features",
        "description": "Coordenação entre produto, marketing, vendas e suporte para garantir adoção real após o deploy.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de go-to-market (gtm) e lançamento de features",
          "Principais componentes técnicos: coordenação entre produto, marketing, vendas e suporte para garantir adoção real após o deploy",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Loops de crescimento (Growth Loops)",
        "description": "Como criar ciclos autossustentáveis onde a ação de um usuário atrai ou gera valor para o próximo usuário.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de loops de crescimento (growth loops)",
          "Principais componentes técnicos: como criar ciclos autossustentáveis onde a ação de um usuário atrai ou gera valor para o próximo usuário",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Psicologia do produto e formação de hábitos (Hooked)",
        "description": "Gatilhos, ação, recompensa variável e investimento aplicados com ética para engajar usuários.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de psicologia do produto e formação de hábitos (hooked)",
          "Principais componentes técnicos: gatilhos, ação, recompensa variável e investimento aplicados com ética para engajar usuários",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Gestão de produtos de plataforma e APIs",
        "description": "Como atuar como PM quando seus usuários são outros desenvolvedores internos ou parceiros integradores.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de gestão de produtos de plataforma e apis",
          "Principais componentes técnicos: como atuar como PM quando seus usuários são outros desenvolvedores internos ou parceiros integradores",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Gestão de produtos de IA (AI Product Management)",
        "description": "Como lidar com sistemas probabilísticos, custo por token, latência, confiança do usuário e avaliação contínua.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de gestão de produtos de ia (ai product management)",
          "Principais componentes técnicos: como lidar com sistemas probabilísticos, custo por token, latência, confiança do usuário e avaliação contínua",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Monetização, conversão e otimização de checkout",
        "description": "Identificação e remoção de atritos no momento do pagamento e upgrade de conta.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de monetização, conversão e otimização de checkout",
          "Principais componentes técnicos: identificação e remoção de atritos no momento do pagamento e upgrade de conta",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Feedback loops: NPS, CSAT, CES e escuta ativa",
        "description": "Como combinar pesquisas quantitativas de satisfação com análise qualitativa de chamados e reviews.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de feedback loops: nps, csat, ces e escuta ativa",
          "Principais componentes técnicos: como combinar pesquisas quantitativas de satisfação com análise qualitativa de chamados e reviews",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Sunset de funcionalidades (Descontinuando features)",
        "description": "Como identificar recursos pouco usados que geram alto custo de manutenção e removê-los sem frustrar clientes.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de sunset de funcionalidades (descontinuando features)",
          "Principais componentes técnicos: como identificar recursos pouco usados que geram alto custo de manutenção e removê-los sem frustrar clientes",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Tríade de produto (PM, Product Designer e Tech Lead)",
        "description": "Como dividir responsabilidades e colaborar diariamente sem trabalhar em silos isolados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de tríade de produto (pm, product designer e tech lead)",
          "Principais componentes técnicos: como dividir responsabilidades e colaborar diariamente sem trabalhar em silos isolados",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Cost of Delay (Custo do atraso) e WSJF",
        "description": "Quantificação financeira do impacto de adiar uma entrega para priorizar com racionalidade econômica.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de cost of delay (custo do atraso) e wsjf",
          "Principais componentes técnicos: quantificação financeira do impacto de adiar uma entrega para priorizar com racionalidade econômica",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Efeitos de rede e produtos de Marketplace",
        "description": "Como resolver o problema do 'ovo e da galinha' equilibrando oferta e demanda em plataformas de dois lados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de efeitos de rede e produtos de marketplace",
          "Principais componentes técnicos: como resolver o problema do 'ovo e da galinha' equilibrando oferta e demanda em plataformas de dois lados",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Internacionalização e expansão de produto",
        "description": "Desafios culturais, regulatórios, meios de pagamento locais e adaptação de proposta de valor para novos países.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de internacionalização e expansão de produto",
          "Principais componentes técnicos: desafios culturais, regulatórios, meios de pagamento locais e adaptação de proposta de valor para novos países",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Ética em produto e prevenção de Dark Patterns",
        "description": "Como atingir metas de negócio respeitando a autonomia, privacidade e confiança de longo prazo do usuário.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de ética em produto e prevenção de dark patterns",
          "Principais componentes técnicos: como atingir metas de negócio respeitando a autonomia, privacidade e confiança de longo prazo do usuário",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Métricas de engajamento: DAU, WAU, MAU e Stickiness",
        "description": "Como medir a frequência natural de uso do produto e identificar usuários engajados (power users).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de métricas de engajamento: dau, wau, mau e stickiness",
          "Principais componentes técnicos: como medir a frequência natural de uso do produto e identificar usuários engajados (power users)",
          "Boas práticas, trade-offs e armadilhas comuns na área de produto (pm / po)",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      }
    ]
  },
  "uxui": {
    "label": "UX / UI design",
    "icon": "🎨",
    "color": "#06b6d4",
    "topics": [
      {
        "title": "Design systems e tokens",
        "description": "Escalabilidade visual e técnica através de componentes reutilizáveis, documentação e design tokens.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de design systems e tokens",
          "Principais componentes técnicos: escalabilidade visual e técnica através de componentes reutilizáveis, documentação e design tokens",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Heurísticas de Nielsen",
        "description": "As 10 regras fundamentais para avaliar usabilidade e prevenir erros na interação humano-computador.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de heurísticas de nielsen",
          "Principais componentes técnicos: as 10 regras fundamentais para avaliar usabilidade e prevenir erros na interação humano-computador",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Acessibilidade digital (WCAG)",
        "description": "Princípios POUR, contraste adequado, foco de teclado e inclusão para leitores de tela.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de acessibilidade digital (wcag)",
          "Principais componentes técnicos: princípios POUR, contraste adequado, foco de teclado e inclusão para leitores de tela",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Pesquisa de UX e usabilidade",
        "description": "Métodos qualitativos e quantitativos para investigar dores reais e validar protótipos com usuários.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de pesquisa de ux e usabilidade",
          "Principais componentes técnicos: métodos qualitativos e quantitativos para investigar dores reais e validar protótipos com usuários",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Atomic Design (Design atômico)",
        "description": "Organização modular de interfaces em átomos, moléculas, organismos, templates e páginas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de atomic design (design atômico)",
          "Principais componentes técnicos: organização modular de interfaces em átomos, moléculas, organismos, templates e páginas",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Hierarquia visual e escaneabilidade",
        "description": "Uso de tamanho, peso, cor, contraste e espaçamento para guiar o olhar do usuário sem esforço.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de hierarquia visual e escaneabilidade",
          "Principais componentes técnicos: uso de tamanho, peso, cor, contraste e espaçamento para guiar o olhar do usuário sem esforço",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Tipografia em interfaces digitais",
        "description": "Escolha de fontes, escala tipográfica, altura de linha (line-height), largura de leitura e legibilidade.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de tipografia em interfaces digitais",
          "Principais componentes técnicos: escolha de fontes, escala tipográfica, altura de linha (line-height), largura de leitura e legibilidade",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Teoria das cores e criação de Dark Mode",
        "description": "Psicologia das cores, paletas semânticas (sucesso, alerta, erro) e cuidados ao adaptar telas para o modo escuro.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de teoria das cores e criação de dark mode",
          "Principais componentes técnicos: psicologia das cores, paletas semânticas (sucesso, alerta, erro) e cuidados ao adaptar telas para o modo escuro",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Sistemas de Grid, espaçamento e ritmo espacial",
        "description": "Uso de múltiplos de 4px/8px, colunas responsivas e áreas de respiro (whitespace) no layout.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de sistemas de grid, espaçamento e ritmo espacial",
          "Principais componentes técnicos: uso de múltiplos de 4px/8px, colunas responsivas e áreas de respiro (whitespace) no layout",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Leis de UX: Lei de Hick e Lei de Fitts",
        "description": "Como o número de opções afeta o tempo de decisão e como a distância/tamanho do botão afeta o clique.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de leis de ux: lei de hick e lei de fitts",
          "Principais componentes técnicos: como o número de opções afeta o tempo de decisão e como a distância/tamanho do botão afeta o clique",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Lei de Jakob e modelos mentais",
        "description": "Por que os usuários preferem que seu site funcione de forma parecida com os outros sites que eles já conhecem.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de lei de jakob e modelos mentais",
          "Principais componentes técnicos: por que os usuários preferem que seu site funcione de forma parecida com os outros sites que eles já conhecem",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Carga cognitiva e Efeito de Posição Serial",
        "description": "Como reduzir o esforço mental exigido em cada tela e posicionar ações principais com inteligência.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de carga cognitiva e efeito de posição serial",
          "Principais componentes técnicos: como reduzir o esforço mental exigido em cada tela e posicionar ações principais com inteligência",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Arquitetura da informação e Card Sorting",
        "description": "Organização lógica de menus, categorias e navegação baseada em como os próprios usuários agrupam conceitos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de arquitetura da informação e card sorting",
          "Principais componentes técnicos: organização lógica de menus, categorias e navegação baseada em como os próprios usuários agrupam conceitos",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Mapeamento de jornada do usuário (User Journey Map)",
        "description": "Visualização das etapas, ações, pensamentos, emoções e pontos de dor do cliente ao longo do tempo.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de mapeamento de jornada do usuário (user journey map)",
          "Principais componentes técnicos: visualização das etapas, ações, pensamentos, emoções e pontos de dor do cliente ao longo do tempo",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Service Blueprint (Desenho de serviço)",
        "description": "Conexão entre a experiência visível do usuário (frontstage) e os processos internos/sistemas (backstage).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de service blueprint (desenho de serviço)",
          "Principais componentes técnicos: conexão entre a experiência visível do usuário (frontstage) e os processos internos/sistemas (backstage)",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Wireframes, protótipos de baixa e alta fidelidade",
        "description": "Quando rabiscar fluxos rápidos para explorar ideias e quando criar protótipos interativos realistas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de wireframes, protótipos de baixa e alta fidelidade",
          "Principais componentes técnicos: quando rabiscar fluxos rápidos para explorar ideias e quando criar protótipos interativos realistas",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Auto Layout, Variantes e Component Properties no Figma",
        "description": "Construção de componentes flexíveis que espelham o comportamento real do Flexbox/CSS no código.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de auto layout, variantes e component properties no figma",
          "Principais componentes técnicos: construção de componentes flexíveis que espelham o comportamento real do Flexbox/CSS no código",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "UX Writing e Microcopy",
        "description": "Como escrever botões, estados vazios (empty states), tooltips e mensagens de erro claras, humanas e úteis.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de ux writing e microcopy",
          "Principais componentes técnicos: como escrever botões, estados vazios (empty states), tooltips e mensagens de erro claras, humanas e úteis",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Design de formulários de alta conversão",
        "description": "Validação inline gentil, redução de campos, máscaras de entrada e prevenção de fadiga no preenchimento.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de design de formulários de alta conversão",
          "Principais componentes técnicos: validação inline gentil, redução de campos, máscaras de entrada e prevenção de fadiga no preenchimento",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Empty States, Skeleton Screens e estados de carregamento",
        "description": "Como projetar momentos de espera, listas vazias e telas de erro para nunca deixar o usuário perdido.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de empty states, skeleton screens e estados de carregamento",
          "Principais componentes técnicos: como projetar momentos de espera, listas vazias e telas de erro para nunca deixar o usuário perdido",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Microinterações e feedback visual",
        "description": "Pequenas animações funcionais que confirmam ações, explicam transições de estado e encantam o usuário.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de microinterações e feedback visual",
          "Principais componentes técnicos: pequenas animações funcionais que confirmam ações, explicam transições de estado e encantam o usuário",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Design responsivo e abordagem Mobile-First",
        "description": "Adaptação fluida de componentes e navegação desde telas pequenas de celular até monitores ultrawide.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de design responsivo e abordagem mobile-first",
          "Principais componentes técnicos: adaptação fluida de componentes e navegação desde telas pequenas de celular até monitores ultrawide",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Padrões de navegação mobile vs desktop",
        "description": "Tab bars, bottom sheets, gestos, áreas de alcance do polegar (thumb zone) vs sidebars e breadcrumbs.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de padrões de navegação mobile vs desktop",
          "Principais componentes técnicos: tab bars, bottom sheets, gestos, áreas de alcance do polegar (thumb zone) vs sidebars e breadcrumbs",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Handoff entre Design e Desenvolvimento",
        "description": "Como documentar estados (hover, focus, disabled, error), tokens e regras de borda para uma implementação fiel.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de handoff entre design e desenvolvimento",
          "Principais componentes técnicos: como documentar estados (hover, focus, disabled, error), tokens e regras de borda para uma implementação fiel",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Testes de usabilidade moderados vs não-moderados",
        "description": "Como criar roteiros de tarefas neutros, observar onde o usuário trava e sintetizar aprendizados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de testes de usabilidade moderados vs não-moderados",
          "Principais componentes técnicos: como criar roteiros de tarefas neutros, observar onde o usuário trava e sintetizar aprendizados",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Mapas de calor (Heatmaps) e gravação de sessões",
        "description": "Uso de ferramentas como Hotjar e Clarity para identificar cliques de raiva (rage clicks) e áreas ignoradas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de mapas de calor (heatmaps) e gravação de sessões",
          "Principais componentes técnicos: uso de ferramentas como Hotjar e Clarity para identificar cliques de raiva (rage clicks) e áreas ignoradas",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Double Diamond (Duplo Diamante do Design)",
        "description": "As quatro fases do processo de design: Descobrir, Definir, Desenvolver e Entregar (divergir e convergir).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de double diamond (duplo diamante do design)",
          "Principais componentes técnicos: as quatro fases do processo de design: Descobrir, Definir, Desenvolver e Entregar (divergir e convergir)",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Design Sprint (5 dias)",
        "description": "Metodologia intensiva para mapear um desafio crítico, prototipar uma solução e testar com usuários reais em uma semana.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de design sprint (5 dias)",
          "Principais componentes técnicos: metodologia intensiva para mapear um desafio crítico, prototipar uma solução e testar com usuários reais em uma semana",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Design de interfaces conversacionais e IA (Generative UI)",
        "description": "Padrões de UX para prompts, streaming de respostas, transparência de fontes, edição colaborativa e tratamento de erros da IA.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de design de interfaces conversacionais e ia (generative ui)",
          "Principais componentes técnicos: padrões de UX para prompts, streaming de respostas, transparência de fontes, edição colaborativa e tratamento de erros da IA",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Design emocional e efeito Estética-Usabilidade",
        "description": "Por que interfaces bonitas são percebidas como mais fáceis de usar e geram maior tolerância a pequenas falhas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de design emocional e efeito estética-usabilidade",
          "Principais componentes técnicos: por que interfaces bonitas são percebidas como mais fáceis de usar e geram maior tolerância a pequenas falhas",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Design inclusivo e neurodiversidade",
        "description": "Como criar experiências calmas, previsíveis e configuráveis para pessoas com TDAH, dislexia, autismo ou baixa visão.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de design inclusivo e neurodiversidade",
          "Principais componentes técnicos: como criar experiências calmas, previsíveis e configuráveis para pessoas com TDAH, dislexia, autismo ou baixa visão",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Auditoria de UX e avaliação heurística",
        "description": "Passo a passo para inspecionar um produto existente, classificar problemas de usabilidade e priorizar melhorias.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de auditoria de ux e avaliação heurística",
          "Principais componentes técnicos: passo a passo para inspecionar um produto existente, classificar problemas de usabilidade e priorizar melhorias",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Métricas de UX: SUS, HEART Framework e taxa de sucesso",
        "description": "Como mensurar numericamente a evolução da usabilidade, adoção e conclusão de tarefas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de métricas de ux: sus, heart framework e taxa de sucesso",
          "Principais componentes técnicos: como mensurar numericamente a evolução da usabilidade, adoção e conclusão de tarefas",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Design Ops e governança de Design System",
        "description": "Processos para escalar times de design, versionar bibliotecas de componentes e medir adoção no código.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de design ops e governança de design system",
          "Principais componentes técnicos: processos para escalar times de design, versionar bibliotecas de componentes e medir adoção no código",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Visualização de dados e design de tabelas complexas",
        "description": "Como projetar filtros, paginação, ordenação e gráficos legíveis em sistemas B2B densos em informação.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de visualização de dados e design de tabelas complexas",
          "Principais componentes técnicos: como projetar filtros, paginação, ordenação e gráficos legíveis em sistemas B2B densos em informação",
          "Boas práticas, trade-offs e armadilhas comuns na área de ux / ui design",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      }
    ]
  },
  "mobile": {
    "label": "Mobile",
    "icon": "📱",
    "color": "#0284c7",
    "topics": [
      {
        "title": "Nativo vs cross-platform",
        "description": "Comparação entre Swift/Kotlin nativos e frameworks multiplataforma como Flutter e React Native.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de nativo vs cross-platform",
          "Principais componentes técnicos: comparação entre Swift/Kotlin nativos e frameworks multiplataforma como Flutter e React Native",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Offline-first e sincronização",
        "description": "Arquitetura com banco local, filas de mutação otimistas e resolução de conflitos ao reconectar.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de offline-first e sincronização",
          "Principais componentes técnicos: arquitetura com banco local, filas de mutação otimistas e resolução de conflitos ao reconectar",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Ciclo de vida e memória mobile",
        "description": "Como iOS e Android gerenciam estados em background, matam processos e preservam estado de tela.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de ciclo de vida e memória mobile",
          "Principais componentes técnicos: como iOS e Android gerenciam estados em background, matam processos e preservam estado de tela",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Publicação, stores e OTA",
        "description": "Assinatura de apps, revisão na App Store/Google Play, staged rollouts e atualizações Over-The-Air.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de publicação, stores e ota",
          "Principais componentes técnicos: assinatura de apps, revisão na App Store/Google Play, staged rollouts e atualizações Over-The-Air",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Nova arquitetura do React Native (JSI, Fabric e TurboModules)",
        "description": "Comunicação síncrona direta entre JavaScript e C++ eliminando o gargalo da antiga Bridge assíncrona.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de nova arquitetura do react native (jsi, fabric e turbomodules)",
          "Principais componentes técnicos: comunicação síncrona direta entre JavaScript e C++ eliminando o gargalo da antiga Bridge assíncrona",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Arquitetura do Flutter ( Dart, Widget Tree, Element Tree e Impeller)",
        "description": "Como o Flutter desenha cada pixel direto na GPU garantindo 60/120 FPS consistentes em qualquer plataforma.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de arquitetura do flutter ( dart, widget tree, element tree e impeller)",
          "Principais componentes técnicos: como o Flutter desenha cada pixel direto na GPU garantindo 60/120 FPS consistentes em qualquer plataforma",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "UI declarativa nativa: SwiftUI e Jetpack Compose",
        "description": "A transição dos antigos layouts imperativos (XML/UIKit) para componentes declarativos reativos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de ui declarativa nativa: swiftui e jetpack compose",
          "Principais componentes técnicos: a transição dos antigos layouts imperativos (XML/UIKit) para componentes declarativos reativos",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Kotlin Multiplatform (KMP)",
        "description": "Compartilhamento de regras de negócio, rede e banco de dados mantendo a interface 100% nativa em cada sistema.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de kotlin multiplatform (kmp)",
          "Principais componentes técnicos: compartilhamento de regras de negócio, rede e banco de dados mantendo a interface 100% nativa em cada sistema",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Armazenamento seguro no dispositivo (Keychain e Keystore)",
        "description": "Onde guardar tokens de autenticação e chaves criptográficas protegidas por hardware (Secure Enclave).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de armazenamento seguro no dispositivo (keychain e keystore)",
          "Principais componentes técnicos: onde guardar tokens de autenticação e chaves criptográficas protegidas por hardware (Secure Enclave)",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Bancos de dados locais no mobile",
        "description": "Critérios de escolha e performance entre SQLite, Room, CoreData, SwiftData, Realm e MMKV.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de bancos de dados locais no mobile",
          "Principais componentes técnicos: critérios de escolha e performance entre SQLite, Room, CoreData, SwiftData, Realm e MMKV",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Deep Linking, Universal Links e App Links",
        "description": "Como abrir telas específicas dentro do aplicativo a partir de links web, e-mails ou campanhas de marketing.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de deep linking, universal links e app links",
          "Principais componentes técnicos: como abrir telas específicas dentro do aplicativo a partir de links web, e-mails ou campanhas de marketing",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Notificações Push (APNs e FCM)",
        "description": "Arquitetura de registro de tokens, payloads silenciosos (background push), rich notifications e canais do Android.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de notificações push (apns e fcm)",
          "Principais componentes técnicos: arquitetura de registro de tokens, payloads silenciosos (background push), rich notifications e canais do Android",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Gerenciamento de permissões em tempo de execução",
        "description": "Boas práticas de UX e código para solicitar câmera, localização e notificações no momento certo (Efeito Priming).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de gerenciamento de permissões em tempo de execução",
          "Principais componentes técnicos: boas práticas de UX e código para solicitar câmera, localização e notificações no momento certo (Efeito Priming)",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Performance de listas longas e reciclagem de views",
        "description": "Funcionamento de FlatList, FlashList, RecyclerView e LazyColumn para rolar milhares de itens sem travar.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de performance de listas longas e reciclagem de views",
          "Principais componentes técnicos: funcionamento de FlatList, FlashList, RecyclerView e LazyColumn para rolar milhares de itens sem travar",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Prevenção de Jank, ANR e bloqueio da Main Thread",
        "description": "Como manter a UI thread livre delegando parsing de JSON, criptografia e I/O para threads de background.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de prevenção de jank, anr e bloqueio da main thread",
          "Principais componentes técnicos: como manter a UI thread livre delegando parsing de JSON, criptografia e I/O para threads de background",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Otimização de consumo de bateria e dados móveis",
        "description": "Agrupamento de chamadas de rede, compressão de imagens, cache agressivo e cuidado com GPS contínuo.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de otimização de consumo de bateria e dados móveis",
          "Principais componentes técnicos: agrupamento de chamadas de rede, compressão de imagens, cache agressivo e cuidado com GPS contínuo",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Redução do tamanho do pacote (App Bundle / IPA)",
        "description": "Remoção de recursos não usados, compressão WebP/AVIF, ProGuard/R8 e entrega modular sob demanda.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de redução do tamanho do pacote (app bundle / ipa)",
          "Principais componentes técnicos: remoção de recursos não usados, compressão WebP/AVIF, ProGuard/R8 e entrega modular sob demanda",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Autenticação biométrica (FaceID e TouchID / BiometricPrompt)",
        "description": "Integração segura da biometria do aparelho associada a chaves criptográficas no cofre do sistema.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de autenticação biométrica (faceid e touchid / biometricprompt)",
          "Principais componentes técnicos: integração segura da biometria do aparelho associada a chaves criptográficas no cofre do sistema",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Segurança mobile: SSL Pinning e proteção contra engenharia reversa",
        "description": "Como dificultar interceptação de tráfego (MITM), ofuscar código e detectar aparelhos com Root/Jailbreak.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de segurança mobile: ssl pinning e proteção contra engenharia reversa",
          "Principais componentes técnicos: como dificultar interceptação de tráfego (MITM), ofuscar código e detectar aparelhos com Root/Jailbreak",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Background Tasks e WorkManager / BGTaskScheduler",
        "description": "Execução confiável de uploads e sincronizações quando o aplicativo está fechado respeitando limites do sistema.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de background tasks e workmanager / bgtaskscheduler",
          "Principais componentes técnicos: execução confiável de uploads e sincronizações quando o aplicativo está fechado respeitando limites do sistema",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Animações fluidas a 120Hz (ProMotion)",
        "description": "Uso de Reanimated, Lottie, Rive e APIs nativas rodando direto na thread de interface.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de animações fluidas a 120hz (promotion)",
          "Principais componentes técnicos: uso de Reanimated, Lottie, Rive e APIs nativas rodando direto na thread de interface",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Acessibilidade em aplicativos móveis (VoiceOver e TalkBack)",
        "description": "Agrupamento de elementos focáveis, rótulos semânticos, tamanhos mínimos de toque (44x44pt / 48x48dp) e fontes dinâmicas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de acessibilidade em aplicativos móveis (voiceover e talkback)",
          "Principais componentes técnicos: agrupamento de elementos focáveis, rótulos semânticos, tamanhos mínimos de toque (44x44pt / 48x48dp) e fontes dinâmicas",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Navegação mobile: Stacks, Tabs, Modals e preservação de estado",
        "description": "Gerenciamento de pilhas de telas, botão voltar do sistema, gestos de swipe e restauração pós-morte do processo.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de navegação mobile: stacks, tabs, modals e preservação de estado",
          "Principais componentes técnicos: gerenciamento de pilhas de telas, botão voltar do sistema, gestos de swipe e restauração pós-morte do processo",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Modularização de super-apps e grandes projetos mobile",
        "description": "Divisão do aplicativo em múltiplos módulos independentes para acelerar o tempo de build e escalar times.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de modularização de super-apps e grandes projetos mobile",
          "Principais componentes técnicos: divisão do aplicativo em múltiplos módulos independentes para acelerar o tempo de build e escalar times",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "CI/CD para Mobile com Fastlane, GitHub Actions e Codemagic",
        "description": "Automação de certificados, screenshots, incremento de versão, distribuição para TestFlight/Firebase e deploy.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de ci/cd para mobile com fastlane, github actions e codemagic",
          "Principais componentes técnicos: automação de certificados, screenshots, incremento de versão, distribuição para TestFlight/Firebase e deploy",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Monitoramento de Crashes e ANRs (Crashlytics e Sentry)",
        "description": "Uso de arquivos de símbolos (dSYM / ProGuard mapping) para ler stack traces ofuscados em produção.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de monitoramento de crashes e anrs (crashlytics e sentry)",
          "Principais componentes técnicos: uso de arquivos de símbolos (dSYM / ProGuard mapping) para ler stack traces ofuscados em produção",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Feature Flags e Remote Config no mobile",
        "description": "Por que desligar uma funcionalidade quebrada remotamente é vital quando uma atualização na loja demora dias.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de feature flags e remote config no mobile",
          "Principais componentes técnicos: por que desligar uma funcionalidade quebrada remotamente é vital quando uma atualização na loja demora dias",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "In-App Purchases e assinaturas (StoreKit e Google Play Billing)",
        "description": "Implementação de compras dentro do app, validação de recibos no servidor e tratamento de renovações.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de in-app purchases e assinaturas (storekit e google play billing)",
          "Principais componentes técnicos: implementação de compras dentro do app, validação de recibos no servidor e tratamento de renovações",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Integração com sensores, Bluetooth (BLE), NFC e Câmera",
        "description": "Comunicação de baixo nível com hardware do smartphone e dispositivos IoT próximos.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de integração com sensores, bluetooth (ble), nfc e câmera",
          "Principais componentes técnicos: comunicação de baixo nível com hardware do smartphone e dispositivos IoT próximos",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Geolocalização em tempo real e Geofencing",
        "description": "Rastreamento eficiente de rotas em segundo plano para apps de entrega, transporte e fitness.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de geolocalização em tempo real e geofencing",
          "Principais componentes técnicos: rastreamento eficiente de rotas em segundo plano para apps de entrega, transporte e fitness",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Testes automatizados no mobile: Unitários, Snapshot e UI",
        "description": "Pirâmide de testes aplicada a apps usando XCTest, Espresso, Maestro ou Detox.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de testes automatizados no mobile: unitários, snapshot e ui",
          "Principais componentes técnicos: pirâmide de testes aplicada a apps usando XCTest, Espresso, Maestro ou Detox",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Estratégias de versionamento e Force Update",
        "description": "Como gerenciar usuários em versões antigas do app e forçar atualização de forma elegante quando a API muda.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de estratégias de versionamento e force update",
          "Principais componentes técnicos: como gerenciar usuários em versões antigas do app e forçar atualização de forma elegante quando a API muda",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Server-Driven UI (Interface guiada pelo servidor)",
        "description": "Renderização dinâmica de telas e fluxos nativos a partir de schemas JSON enviados pelo backend sem passar pela loja.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de server-driven ui (interface guiada pelo servidor)",
          "Principais componentes técnicos: renderização dinâmica de telas e fluxos nativos a partir de schemas JSON enviados pelo backend sem passar pela loja",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Widgets de tela inicial, Live Activities e App Clips",
        "description": "Extensões modernas do iOS e Android para engajar o usuário fora do aplicativo principal.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de widgets de tela inicial, live activities e app clips",
          "Principais componentes técnicos: extensões modernas do iOS e Android para engajar o usuário fora do aplicativo principal",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Cold Start vs Warm Start: otimizando a abertura do app",
        "description": "Como reduzir o tempo desde o toque no ícone até a primeira tela interativa aparecer para menos de 1 segundo.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de cold start vs warm start: otimizando a abertura do app",
          "Principais componentes técnicos: como reduzir o tempo desde o toque no ícone até a primeira tela interativa aparecer para menos de 1 segundo",
          "Boas práticas, trade-offs e armadilhas comuns na área de mobile",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      }
    ]
  },
  "redes": {
    "label": "Redes e sistemas",
    "icon": "🌐",
    "color": "#64748b",
    "topics": [
      {
        "title": "DNS, HTTP/3 e funcionamento da web",
        "description": "Jornada completa de um pacote desde a resolução de nomes no DNS até a renderização no navegador.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de dns, http/3 e funcionamento da web",
          "Principais componentes técnicos: jornada completa de um pacote desde a resolução de nomes no DNS até a renderização no navegador",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Load balancers e reverse proxy",
        "description": "Distribuição de tráfego nas camadas 4 e 7, health checks, terminação SSL e algoritmos de balanceamento.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de load balancers e reverse proxy",
          "Principais componentes técnicos: distribuição de tráfego nas camadas 4 e 7, health checks, terminação SSL e algoritmos de balanceamento",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "WebSockets, SSE e polling",
        "description": "Protocolos de comunicação em tempo real entre cliente e servidor e como escalá-los horizontalmente.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de websockets, sse e polling",
          "Principais componentes técnicos: protocolos de comunicação em tempo real entre cliente e servidor e como escalá-los horizontalmente",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Linux, processos e permissões",
        "description": "Gerenciamento de processos, sinais (SIGTERM/SIGKILL), permissões rwx, systemd e diagnóstico de servidor.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de linux, processos e permissões",
          "Principais componentes técnicos: gerenciamento de processos, sinais (SIGTERM/SIGKILL), permissões rwx, systemd e diagnóstico de servidor",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Modelo OSI vs Arquitetura TCP/IP",
        "description": "O papel prático de cada camada (Física, Enlace, Rede, Transporte e Aplicação) no tráfego da internet.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de modelo osi vs arquitetura tcp/ip",
          "Principais componentes técnicos: o papel prático de cada camada (Física, Enlace, Rede, Transporte e Aplicação) no tráfego da internet",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "TCP vs UDP: confiabilidade vs velocidade",
        "description": "Three-way handshake, controle de congestionamento e retransmissão do TCP comparados à leveza do UDP.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de tcp vs udp: confiabilidade vs velocidade",
          "Principais componentes técnicos: three-way handshake, controle de congestionamento e retransmissão do TCP comparados à leveza do UDP",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Evolução do HTTP: HTTP/1.1, HTTP/2 e HTTP/3 (QUIC)",
        "description": "Como a multiplexação, compressão de headers e o protocolo QUIC sobre UDP resolveram o Head-of-Line Blocking.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de evolução do http: http/1.1, http/2 e http/3 (quic)",
          "Principais componentes técnicos: como a multiplexação, compressão de headers e o protocolo QUIC sobre UDP resolveram o Head-of-Line Blocking",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Endereçamento IPv4, IPv6, máscaras de sub-rede e CIDR",
        "description": "Cálculo de faixas de IP (ex: /24, /16), IPs privados (RFC 1918) e a transição para o IPv6.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de endereçamento ipv4, ipv6, máscaras de sub-rede e cidr",
          "Principais componentes técnicos: cálculo de faixas de IP (ex: /24, /16), IPs privados (RFC 1918) e a transição para o IPv6",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "NAT (Network Address Translation) e Port Forwarding",
        "description": "Como roteadores permitem que centenas de máquinas privadas compartilhem um único IP público na internet.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de nat (network address translation) e port forwarding",
          "Principais componentes técnicos: como roteadores permitem que centenas de máquinas privadas compartilhem um único IP público na internet",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Registros DNS: A, AAAA, CNAME, MX, TXT e NS",
        "description": "Para que serve cada tipo de registro DNS, como funciona o TTL e a propagação de cache global.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de registros dns: a, aaaa, cname, mx, txt e ns",
          "Principais componentes técnicos: para que serve cada tipo de registro DNS, como funciona o TTL e a propagação de cache global",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Anycast Routing e BGP (Border Gateway Protocol)",
        "description": "Como a internet descobre rotas entre provedores autônomos (AS) e como CDNs roteiam para o servidor mais próximo.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de anycast routing e bgp (border gateway protocol)",
          "Principais componentes técnicos: como a internet descobre rotas entre provedores autônomos (AS) e como CDNs roteiam para o servidor mais próximo",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "TLS 1.3 Handshake em detalhes",
        "description": "Como cliente e servidor negociam chaves criptográficas em apenas um round-trip (1-RTT ou 0-RTT).",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de tls 1.3 handshake em detalhes",
          "Principais componentes técnicos: como cliente e servidor negociam chaves criptográficas em apenas um round-trip (1-RTT ou 0-RTT)",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "mTLS (Mutual TLS) em redes de microsserviços",
        "description": "Autenticação criptográfica de mão dupla onde tanto o cliente quanto o servidor validam seus certificados.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de mtls (mutual tls) em redes de microsserviços",
          "Principais componentes técnicos: autenticação criptográfica de mão dupla onde tanto o cliente quanto o servidor validam seus certificados",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "VPNs tradicionais (IPsec/OpenVPN) vs WireGuard e Mesh",
        "description": "Como túneis criptografados conectam redes privadas com alta performance e chaves modernas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de vpns tradicionais (ipsec/openvpn) vs wireguard e mesh",
          "Principais componentes técnicos: como túneis criptografados conectam redes privadas com alta performance e chaves modernas",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Firewalls, Security Groups, NACLs e iptables/nftables",
        "description": "Filtragem de pacotes stateful vs stateless para controlar portas de entrada e saída em servidores.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de firewalls, security groups, nacls e iptables/nftables",
          "Principais componentes técnicos: filtragem de pacotes stateful vs stateless para controlar portas de entrada e saída em servidores",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Protocolo SSH, chaves assimétricas e Bastion Hosts",
        "description": "Acesso remoto seguro a servidores, encaminhamento de portas (SSH tunneling) e eliminação de senhas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de protocolo ssh, chaves assimétricas e bastion hosts",
          "Principais componentes técnicos: acesso remoto seguro a servidores, encaminhamento de portas (SSH tunneling) e eliminação de senhas",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Diagnóstico de rede no Linux (ping, traceroute, dig, netstat, tcpdump)",
        "description": "Uso de ferramentas de linha de comando para investigar perda de pacotes, DNS quebrado e portas ocupadas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de diagnóstico de rede no linux (ping, traceroute, dig, netstat, tcpdump)",
          "Principais componentes técnicos: uso de ferramentas de linha de comando para investigar perda de pacotes, DNS quebrado e portas ocupadas",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Análise de pacotes com Wireshark",
        "description": "Inspeção profunda de tráfego de rede para depurar handshakes falhos, latência oculta e protocolos binários.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de análise de pacotes com wireshark",
          "Principais componentes técnicos: inspeção profunda de tráfego de rede para depurar handshakes falhos, latência oculta e protocolos binários",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Sockets, File Descriptors e limites do sistema (ulimit)",
        "description": "Por que no Linux 'tudo é um arquivo' e como configurar o sistema para suportar centenas de milhares de conexões.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de sockets, file descriptors e limites do sistema (ulimit)",
          "Principais componentes técnicos: por que no Linux 'tudo é um arquivo' e como configurar o sistema para suportar centenas de milhares de conexões",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "I/O Síncrono, Não-bloqueante e Multiplexação (epoll / kqueue)",
        "description": "A base do sistema operacional que permite que servidores como Nginx e Node.js atendam milhares de conexões em uma thread.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de i/o síncrono, não-bloqueante e multiplexação (epoll / kqueue)",
          "Principais componentes técnicos: a base do sistema operacional que permite que servidores como Nginx e Node.js atendam milhares de conexões em uma thread",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Memória virtual, Paginação, Swap e OOM Killer",
        "description": "Como o kernel Linux gerencia a RAM e por que o Out-Of-Memory Killer encerra processos repentinamente.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de memória virtual, paginação, swap e oom killer",
          "Principais componentes técnicos: como o kernel Linux gerencia a RAM e por que o Out-Of-Memory Killer encerra processos repentinamente",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Sistemas de arquivos (ext4, XFS, ZFS), Inodes e I/O de disco",
        "description": "Funcionamento de blocos, inodes, links simbólicos vs hard links e monitoramento de IOPS e latência de disco.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de sistemas de arquivos (ext4, xfs, zfs), inodes e i/o de disco",
          "Principais componentes técnicos: funcionamento de blocos, inodes, links simbólicos vs hard links e monitoramento de IOPS e latência de disco",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "CPU Load Average, Context Switching e escalonamento",
        "description": "O que os três números do Load Average realmente significam e como identificar contenção de CPU ou I/O wait.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de cpu load average, context switching e escalonamento",
          "Principais componentes técnicos: o que os três números do Load Average realmente significam e como identificar contenção de CPU ou I/O wait",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Systemd, Journals e criação de Daemons no Linux",
        "description": "Como transformar uma aplicação em um serviço gerenciado que inicia no boot e reinicia sozinho se cair.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de systemd, journals e criação de daemons no linux",
          "Principais componentes técnicos: como transformar uma aplicação em um serviço gerenciado que inicia no boot e reinicia sozinho se cair",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "Cron jobs e systemd timers",
        "description": "Agendamento confiável de scripts de manutenção, backups e rotinas periódicas em servidores.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de cron jobs e systemd timers",
          "Principais componentes técnicos: agendamento confiável de scripts de manutenção, backups e rotinas periódicas em servidores",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Sincronização de tempo com NTP (Network Time Protocol)",
        "description": "Por que relógios dessincronizados (clock skew) quebram bancos distribuídos, certificados TLS e tokens JWT.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de sincronização de tempo com ntp (network time protocol)",
          "Principais componentes técnicos: por que relógios dessincronizados (clock skew) quebram bancos distribuídos, certificados TLS e tokens JWT",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Conexões persistentes (Keep-Alive) e Connection Pooling",
        "description": "Como evitar o custo de abrir e fechar handshakes TCP/TLS a cada nova requisição HTTP.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de conexões persistentes (keep-alive) e connection pooling",
          "Principais componentes técnicos: como evitar o custo de abrir e fechar handshakes TCP/TLS a cada nova requisição HTTP",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Compressão na rede: Brotli, Gzip e Zstd",
        "description": "Redução drástica do tráfego de rede em respostas de API e assets estáticos via negociação Content-Encoding.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de compressão na rede: brotli, gzip e zstd",
          "Principais componentes técnicos: redução drástica do tráfego de rede em respostas de API e assets estáticos via negociação Content-Encoding",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante / intermediário"
      },
      {
        "title": "CORS, Preflight Requests (OPTIONS) e cabeçalhos de cache",
        "description": "Como ETag, Cache-Control e Last-Modified economizam banda evitando baixar o mesmo recurso duas vezes.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de cors, preflight requests (options) e cabeçalhos de cache",
          "Principais componentes técnicos: como ETag, Cache-Control e Last-Modified economizam banda evitando baixar o mesmo recurso duas vezes",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Arquitetura do Nginx vs HAProxy vs Envoy",
        "description": "Comparação entre os principais servidores web, proxies reversos e balanceadores de carga de alta performance.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de arquitetura do nginx vs haproxy vs envoy",
          "Principais componentes técnicos: comparação entre os principais servidores web, proxies reversos e balanceadores de carga de alta performance",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário / avançado"
      },
      {
        "title": "Protocolos de e-mail: SMTP,SPF, DKIM e DMARC",
        "description": "Como funciona o envio de e-mails na internet e como configurar registros DNS para não cair na caixa de spam.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de protocolos de e-mail: smtp,spf, dkim e dmarc",
          "Principais componentes técnicos: como funciona o envio de e-mails na internet e como configurar registros DNS para não cair na caixa de spam",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Redes para tempo real: WebRTC, STUN, TURN e ICE",
        "description": "Como atravessar roteadores NAT (NAT traversal) para estabelecer chamadas de vídeo e áudio ponto a ponto.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de redes para tempo real: webrtc, stun, turn e ice",
          "Principais componentes técnicos: como atravessar roteadores NAT (NAT traversal) para estabelecer chamadas de vídeo e áudio ponto a ponto",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Avançado"
      },
      {
        "title": "Protocolos para IoT: MQTT e CoAP",
        "description": "Comunicação ultraleve para dispositivos com bateria restrita e redes instáveis de baixa largura de banda.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de protocolos para iot: mqtt e coap",
          "Principais componentes técnicos: comunicação ultraleve para dispositivos com bateria restrita e redes instáveis de baixa largura de banda",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      },
      {
        "title": "Latência vs Largura de Banda (Bandwidth) e Throughput",
        "description": "Por que uma internet de 1 Gbps ainda pode ser lenta se o Round-Trip Time (RTT) físico entre países for alto.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de latência vs largura de banda (bandwidth) e throughput",
          "Principais componentes técnicos: por que uma internet de 1 Gbps ainda pode ser lenta se o Round-Trip Time (RTT) físico entre países for alto",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Iniciante"
      },
      {
        "title": "Hardening de servidores Linux",
        "description": "Checklist essencial para blindar um servidor recém-criado: atualizações automáticas, fail2ban, SSH seguro e portas mínimas.",
        "keyPoints": [
          "Conceito fundamental e funcionamento prático de hardening de servidores linux",
          "Principais componentes técnicos: checklist essencial para blindar um servidor recém-criado: atualizações automáticas, fail2ban, SSH seguro e portas mínimas",
          "Boas práticas, trade-offs e armadilhas comuns na área de redes e sistemas",
          "Exemplos reais de aplicação no dia a dia e como explicar o tema com clareza"
        ],
        "level": "Intermediário"
      }
    ]
  }
};
