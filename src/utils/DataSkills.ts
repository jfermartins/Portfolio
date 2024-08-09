type SkillType = {
    src: string;
    name: string;
    description: string;
  };
  
  type SkillsType = {
    front: SkillType[];
    back: SkillType[];
    others: SkillType[];
  };
  
  export const Skills: SkillsType = {
    front: [
      {
        src: './skills-logo/html.svg',
        name: 'HTML 5',
        description:
          'O HTML5 é a quinta versão da linguagem de marcação HTML, usada para estruturar e exibir conteúdo na web. Introduz novas tags e APIs, oferecendo suporte a recursos multimídia, gráficos e interatividade sem a necessidade de plugins. O HTML5 promove uma web mais dinâmica e acessível.',
      },
      {
        src: './skills-logo/css.svg',
        name: 'CSS 3',
        description:
          'O CSS3 é a terceira versão das Folhas de Estilo em Cascata (CSS), usadas para estilizar páginas web. Introduz recursos avançados como sombras, gradientes, transições e animações, permitindo designs mais sofisticados e responsivos. O CSS3 facilita a criação de interfaces atraentes e modernas na web.',
      },
      {
        src: './skills-logo/javascript.svg',
        name: 'JavaScript',
        description:
          'JavaScript é uma linguagem de programação amplamente utilizada para criar interatividade em páginas web. Ele permite a manipulação dinâmica do conteúdo da página, interações do usuário e comunicação com servidores. JavaScript é essencial para o desenvolvimento front-end e também é usado em aplicações back-end com o Node.js.',
      },
      {
        src: './skills-logo/react.svg',
        name: 'React',
        description:
          'O React é uma biblioteca JavaScript para construir interfaces de usuário interativas em aplicações web. Baseado em componentes reutilizáveis, usa um Virtual DOM para otimizar atualizações de UI. Sua abordagem declarativa simplifica o desenvolvimento, tornando-o eficiente e organizado. É amplamente utilizado e mantido pelo Facebook.',
      },
      {
        src: './skills-logo/storybook.svg',
        name: 'Storybook',
        description:
          'O Storybook é uma ferramenta de desenvolvimento para criar, testar e documentar componentes de interface de usuário de forma isolada. Permite visualizar e interagir com os componentes em vários estados, simplificando o processo de desenvolvimento e documentação de maneira eficiente.',
      },
      {
        src: './skills-logo/styled-components.svg',
        name: 'Styled Components',
        description:
          'Styled Components é uma biblioteca para React e React Native que permite escrever estilos CSS diretamente nos componentes JavaScript, usando uma sintaxe de template literal. Isso promove o desenvolvimento de aplicações mais organizadas, escaláveis e fáceis de manter, encapsulando estilos junto com a lógica dos componentes.',
      },
      {
        src: './skills-logo/tailwind.svg',
        name: 'Tailwind',
        description:
          'O Tailwind CSS é uma estrutura de estilo utilitário para o desenvolvimento de interfaces web. Ao contrário das abordagens tradicionais de CSS, o Tailwind permite a criação rápida e consistente de estilos por meio de classes utilitárias pré-definidas, facilitando a construção de designs flexíveis e responsivos de maneira eficiente.',
      },
    ],
    back: [
      {
        src: './skills-logo/python.svg',
        name: 'Python',
        description:
          'Python é uma linguagem de programação de alto nível, conhecida por sua sintaxe simples e legibilidade. Versátil, é empregada em diversas áreas, como desenvolvimento web, automação, análise de dados e inteligência artificial. Sua vasta biblioteca padrão e comunidade ativa a tornam uma escolha popular entre os desenvolvedores.',
      },
      {
        src: './skills-logo/nodejs.svg',
        name: 'Node js',
        description:
          'Node.js é uma plataforma de desenvolvimento server-side baseada em JavaScript. Utilizando o motor V8 do Chrome, permite criar aplicações web escaláveis e eficientes. Amplamente utilizado para construir APIs, aplicações em tempo real e microsserviços, facilita o desenvolvimento com JavaScript em ambientes server-side.',
      },
      {
        src: './skills-logo/typescript.svg',
        name: 'Type Script',
        description:
          'TypeScript é um superconjunto tipado de JavaScript desenvolvido pela Microsoft. Ele adiciona tipagem estática opcional e outros recursos, como interfaces e enums, ao JavaScript, tornando-o mais robusto e escalável. TypeScript é amplamente utilizado em grandes projetos devido à sua capacidade de detectar erros de código em tempo de compilação.',
      },
      {
        src: './skills-logo/mongodb.svg',
        name: 'MongoDB',
        description:
          'O MongoDB é um banco de dados NoSQL de alta performance, orientado a documentos. Ele oferece flexibilidade e escalabilidade, permitindo armazenar e consultar dados não estruturados. Amplamente utilizado em aplicações web modernas, o MongoDB é conhecido por sua facilidade de uso e escalabilidade horizontal.',
      },
      {
        src: './skills-logo/postgresql.svg',
        name: 'Postgresql',
        description:
          'O PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto. Conhecido por sua confiabilidade e recursos avançados, como suporte a transações ACID e procedimentos armazenados, é amplamente usado em aplicações web e corporativas, além de análise de dados.',
      },
      {
        src: './skills-logo/docker.svg',
        name: 'Docker',
        description:
          'Docker é uma plataforma de virtualização de contêineres que simplifica a implantação de aplicativos. Oferece ambientes isolados, garantindo consistência na execução de software em diferentes plataformas. Amplamente usado no desenvolvimento moderno devido à sua portabilidade e eficiência.',
      },
      {
        src: './skills-logo/scraper.svg',
        name: 'Web Scraping',
        description:
          'O Web scraping é o processo de extrair dados de páginas da web de forma automatizada. Os desenvolvedores usam bibliotecas e ferramentas para acessar e analisar o conteúdo de páginas da web, coletando informações estruturadas para uso em diversos fins, como análise de mercado, monitoramento de preços e pesquisa.',
      },
    ],
    others: [
      {
        src: './skills-logo/git.svg',
        name: 'Git',
        description:
          'O Git é um sistema de controle de versão distribuído usado para rastrear alterações no código fonte durante o desenvolvimento de software. Ele permite que várias pessoas colaborem em um projeto, mantendo um histórico detalhado das alterações, facilitando o gerenciamento de código, o trabalho em equipe e a reversão de alterações indesejadas.',
      },
      {
        src: './skills-logo/solid.svg',
        name: 'Princípios SOLID',
        description:
          'Os princípios SOLID são um conjunto de diretrizes para escrever software mais flexível, escalável e fácil de manter. Eles incluem: Single Responsibility (SRP), Open/Closed (OCP), Liskov Substitution (LSP), Interface Segregation (ISP) e Dependency Inversion (DIP). Juntos, promovem código modular, de baixo acoplamento e alta coesão.',
      },
    ],
  };