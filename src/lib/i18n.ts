import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

export type Language = 'en' | 'pt' | 'fr' | 'es' | 'ja';

interface Translations {
	[key: string]: {
		[K in Language]: string;
	};
}

export const translations: Translations = {
	// Navigation
	'nav.home': {
		en: 'Home',
		pt: 'Início',
		fr: 'Accueil',
		es: 'Inicio',
		ja: 'ホーム'
	},
	'nav.about': {
		en: 'About',
		pt: 'Sobre',
		fr: 'À propos',
		es: 'Acerca de',
		ja: 'について'
	},
	'nav.skills': {
		en: 'Skills',
		pt: 'Habilidades',
		fr: 'Compétences',
		es: 'Habilidades',
		ja: 'スキル'
	},
	'nav.blog': {
		en: 'Blog',
		pt: 'Blog',
		fr: 'Blog',
		es: 'Blog',
		ja: 'ブログ'
	},
	'nav.playground': {
		en: 'Playground',
		pt: 'Playground',
		fr: 'Terrain de jeu',
		es: 'Playground',
		ja: 'プレイグラウンド'
	},
	'nav.terminal': {
		en: 'Terminal',
		pt: 'Terminal',
		fr: 'Terminal',
		es: 'Terminal',
		ja: 'ターミナル'
	},
	'nav.timeline': {
		en: 'Timeline',
		pt: 'Timeline',
		fr: 'Chronologie',
		es: 'Cronología',
		ja: 'タイムライン'
	},
	'nav.repos': {
		en: 'Projects',
		pt: 'Projetos',
		fr: 'Projets',
		es: 'Proyectos',
		ja: 'プロジェクト'
	},

	// Hero Section
	'hero.greeting': {
		en: 'Hey there! I\'m',
		pt: 'Olá! Eu sou o',
		fr: 'Salut ! Je suis',
		es: '¡Hola! Soy',
		ja: 'こんにちは！私は'
	},
	'hero.description': {
		en: 'Full-stack developer passionate about creating amazing digital experiences',
		pt: 'Desenvolvedor full-stack apaixonado por criar experiências digitais incríveis',
		fr: 'Développeur full-stack passionné par la création d\'expériences numériques extraordinaires',
		es: 'Desarrollador full-stack apasionado por crear experiencias digitales increíbles',
		ja: '素晴らしいデジタル体験を創造することに情熱を注ぐフルスタック開発者'
	},

	// About Section
	'about.title': {
		en: 'about',
		pt: 'sobre',
		fr: 'à propos',
		es: 'acerca de',
		ja: 'について'
	},
	'about.text1': {
		en: 'I\'m a passionate full-stack developer with experience in modern web technologies. I love creating efficient, scalable, and user-friendly applications.',
		pt: 'Sou um desenvolvedor full-stack apaixonado com experiência em tecnologias web modernas. Adoro criar aplicações eficientes, escaláveis e amigáveis ao usuário.',
		fr: 'Je suis un développeur full-stack passionné avec de l\'expérience dans les technologies web modernes. J\'adore créer des applications efficaces, évolutives et conviviales.',
		es: 'Soy un desarrollador full-stack apasionado con experiencia en tecnologías web modernas. Me encanta crear aplicaciones eficientes, escalables y fáciles de usar.',
		ja: 'モダンなウェブ技術に経験を持つ情熱的なフルスタック開発者です。効率的でスケーラブル、ユーザーフレンドリーなアプリケーションを作ることが大好きです。'
	},
	'about.text2': {
		en: 'When I\'m not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee while planning my next project.',
		pt: 'Quando não estou programando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos open source, ou tomando um bom café enquanto planejo meu próximo projeto.',
		fr: 'Quand je ne code pas, vous pouvez me trouver en train d\'explorer de nouvelles technologies, de contribuer à des projets open source, ou de savourer une bonne tasse de café en planifiant mon prochain projet.',
		es: 'Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a proyectos de código abierto, o disfrutando de una buena taza de café mientras planifico mi próximo proyecto.',
		ja: 'コーディングをしていない時は、新しい技術を探求したり、オープンソースプロジェクトに貢献したり、次のプロジェクトを計画しながら美味しいコーヒーを楽しんでいます。'
	},

	// Skills Section
	'skills.title': {
		en: 'skills',
		pt: 'habilidades',
		fr: 'compétences',
		es: 'habilidades',
		ja: 'スキル'
	},
	'skills.frontend': {
		en: 'Frontend',
		pt: 'Frontend',
		fr: 'Frontend',
		es: 'Frontend',
		ja: 'フロントエンド'
	},
	'skills.backend': {
		en: 'Backend',
		pt: 'Backend',
		fr: 'Backend',
		es: 'Backend',
		ja: 'バックエンド'
	},
	'skills.mobile': {
		en: 'Mobile',
		pt: 'Mobile',
		fr: 'Mobile',
		es: 'Móvil',
		ja: 'モバイル'
	},
	'skills.language': {
		en: 'Language',
		pt: 'Linguagem',
		fr: 'Langage',
		es: 'Idioma',
		ja: '言語'
	},
	'skills.database': {
		en: 'Database',
		pt: 'Banco de Dados',
		fr: 'Base de données',
		es: 'Base de datos',
		ja: 'データベース'
	},
	'skills.devops': {
		en: 'DevOps',
		pt: 'DevOps',
		fr: 'DevOps',
		es: 'DevOps',
		ja: 'DevOps'
	},
	'skills.cloud': {
		en: 'Cloud',
		pt: 'Nuvem',
		fr: 'Cloud',
		es: 'Nube',
		ja: 'クラウド'
	},
	'skills.tools': {
		en: 'Tools',
		pt: 'Ferramentas',
		fr: 'Outils',
		es: 'Herramientas',
		ja: 'ツール'
	},
	'skills.all': {
		en: 'All',
		pt: 'Todas',
		fr: 'Toutes',
		es: 'Todas',
		ja: 'すべて'
	},
	'skills.experience': {
		en: 'experience',
		pt: 'experiência',
		fr: 'expérience',
		es: 'experiencia',
		ja: '経験'
	},

	// Timeline Section
	'timeline.title': {
		en: 'timeline',
		pt: 'cronologia',
		fr: 'chronologie',
		es: 'cronología',
		ja: 'タイムライン'
	},
	'timeline.present': {
		en: 'Present',
		pt: 'Presente',
		fr: 'Présent',
		es: 'Presente',
		ja: '現在'
	},

	// Blog Section
	'blog.title': {
		en: 'blog',
		pt: 'blog',
		fr: 'blog',
		es: 'blog',
		ja: 'ブログ'
	},
	'blog.readArticle': {
		en: 'Read Article →',
		pt: 'Ler Artigo →',
		fr: 'Lire l\'article →',
		es: 'Leer artículo →',
		ja: '記事を読む →'
	},
	'blog.readTime': {
		en: 'read',
		pt: 'leitura',
		fr: 'lecture',
		es: 'lectura',
		ja: '読書'
	},
	'blog.views': {
		en: 'views',
		pt: 'visualizações',
		fr: 'vues',
		es: 'vistas',
		ja: '表示'
	},

	// Code Playground Section
	'playground.title': {
		en: 'playground',
		pt: 'playground',
		fr: 'terrain de jeu',
		es: 'playground',
		ja: 'プレイグラウンド'
	},
	'playground.snippets': {
		en: 'Snippets',
		pt: 'Snippets',
		fr: 'Extraits',
		es: 'Fragmentos',
		ja: 'スニペット'
	},
	'playground.output': {
		en: 'Output',
		pt: 'Saída',
		fr: 'Sortie',
		es: 'Salida',
		ja: '出力'
	},
	'playground.run': {
		en: 'Run',
		pt: 'Executar',
		fr: 'Exécuter',
		es: 'Ejecutar',
		ja: '実行'
	},
	'playground.running': {
		en: 'Running...',
		pt: 'Executando...',
		fr: 'En cours...',
		es: 'Ejecutando...',
		ja: '実行中...'
	},

	// Terminal Section
	'terminal.title': {
		en: 'terminal',
		pt: 'terminal',
		fr: 'terminal',
		es: 'terminal',
		ja: 'ターミナル'
	},
	'terminal.welcome': {
		en: 'Welcome to Nicholas Terminal! Type "help" to see available commands.',
		pt: 'Bem-vindo ao Terminal do Nicholas! Digite "help" para ver os comandos disponíveis.',
		fr: 'Bienvenue dans le Terminal de Nicholas ! Tapez "help" pour voir les commandes disponibles.',
		es: '¡Bienvenido al Terminal de Nicholas! Escribe "help" para ver los comandos disponibles.',
		ja: 'Nicholas ターミナルへようこそ！利用可能なコマンドを見るには "help" と入力してください。'
	},

	// Projects Section
	'projects.title': {
		en: 'projects',
		pt: 'projetos',
		fr: 'projets',
		es: 'proyectos',
		ja: 'プロジェクト'
	},
	'projects.viewOnGithub': {
		en: 'View on GitHub',
		pt: 'Ver no GitHub',
		fr: 'Voir sur GitHub',
		es: 'Ver en GitHub',
		ja: 'GitHubで見る'
	},
	'projects.stars': {
		en: 'stars',
		pt: 'estrelas',
		fr: 'étoiles',
		es: 'estrellas',
		ja: 'スター'
	},
	'projects.forks': {
		en: 'forks',
		pt: 'forks',
		fr: 'forks',
		es: 'forks',
		ja: 'フォーク'
	},

	// Footer
	'footer.madeWith': {
		en: 'Made with açaí. <3',
		pt: 'Feito com açaí. <3',
		fr: 'Fait avec açaí. <3',
		es: 'Hecho con açaí. <3',
		ja: 'açaíで作られました。<3'
	},
	'footer.youreHere': {
		en: 'you\'re here',
		pt: 'você está aqui',
		fr: 'vous êtes ici',
		es: 'estás aquí',
		ja: 'あなたはここにいます'
	},
	'footer.personalBlog': {
		en: 'My personal blog',
		pt: 'Meu blog pessoal',
		fr: 'Mon blog personnel',
		es: 'Mi blog personal',
		ja: '私の個人ブログ'
	},

	// Language Selector
	'language.select': {
		en: 'Select Language',
		pt: 'Selecionar Idioma',
		fr: 'Choisir la langue',
		es: 'Seleccionar idioma',
		ja: '言語を選択'
	},

	// Timeline specific translations
	'timeline.career': {
		en: 'career',
		pt: 'carreira',
		fr: 'carrière',
		es: 'carrera',
		ja: 'キャリア'
	},
	'timeline.keyAchievements': {
		en: 'Key Achievements:',
		pt: 'Principais Conquistas:',
		fr: 'Réalisations clés :',
		es: 'Logros clave:',
		ja: '主な成果：'
	},
	'timeline.workType.onSite': {
		en: 'on-site',
		pt: 'presencial',
		fr: 'sur site',
		es: 'presencial',
		ja: '現地勤務'
	},
	'timeline.workType.remote': {
		en: 'remote',
		pt: 'remoto',
		fr: 'à distance',
		es: 'remoto',
		ja: 'リモート'
	},
	'timeline.workType.hybrid': {
		en: 'hybrid',
		pt: 'híbrido',
		fr: 'hybride',
		es: 'híbrido',
		ja: 'ハイブリッド'
	},

	// Job 1 - Discloud
	'timeline.job1.title': {
		en: 'Mid-Level Software Developer',
		pt: 'Desenvolvedor de Software Pleno',
		fr: 'Développeur logiciel intermédiaire',
		es: 'Desarrollador de Software Semi-Senior',
		ja: 'ミドルレベルソフトウェア開発者'
	},
	'timeline.job1.company': {
		en: 'Discloud',
		pt: 'Discloud',
		fr: 'Discloud',
		es: 'Discloud',
		ja: 'Discloud'
	},
	'timeline.job1.period': {
		en: '2022 - 2025',
		pt: '2022 - 2025',
		fr: '2022 - 2025',
		es: '2022 - 2025',
		ja: '2022 - 2025'
	},
	'timeline.job1.description': {
		en: 'Acting as developer and platform manager for the non-profit hosting platform for modern applications integrated with WhatsApp, Telegram, Discord, websites and other interfaces, with over 100,000 users and 150,000 hosted applications.',
		pt: 'Atuação como desenvolvedor e gerente da plataforma de hospedagem sem fins lucrativos para aplicações modernas integradas como WhatsApp, Telegram, Discord, Sites e outras interfaces, com mais de 100 mil usuários e 150 mil aplicações hospedadas.',
		fr: 'Agir en tant que développeur et gestionnaire de plateforme pour la plateforme d\'hébergement à but non lucratif pour les applications modernes intégrées avec WhatsApp, Telegram, Discord, sites web et autres interfaces, avec plus de 100 000 utilisateurs et 150 000 applications hébergées.',
		es: 'Actuando como desarrollador y gerente de la plataforma de hosting sin fines de lucro para aplicaciones modernas integradas con WhatsApp, Telegram, Discord, sitios web y otras interfaces, con más de 100,000 usuarios y 150,000 aplicaciones alojadas.',
		ja: 'WhatsApp、Telegram、Discord、ウェブサイト、その他のインターフェースと統合された現代的なアプリケーション向けの非営利ホスティングプラットフォームの開発者およびプラットフォームマネージャーとして活動。10万人以上のユーザーと15万のホストされたアプリケーションを持つ。'
	},
	'timeline.job1.achievement1': {
		en: 'Software development focused on infrastructure and Data Center solutions',
		pt: 'Desenvolvimento de software voltado para infraestrutura e soluções em Data Center',
		fr: 'Développement de logiciels axés sur les infrastructures et les solutions de centre de données',
		es: 'Desarrollo de software enfocado en infraestructura y soluciones de Data Center',
		ja: 'インフラストラクチャとデータセンターソリューションに焦点を当てたソフトウェア開発'
	},
	'timeline.job1.achievement2': {
		en: 'Database management and optimization in high availability environments',
		pt: 'Gerenciamento e otimização de banco de dados em ambiente de alta disponibilidade',
		fr: 'Gestion et optimisation de bases de données dans des environnements haute disponibilité',
		es: 'Gestión y optimización de bases de datos en entornos de alta disponibilidad',
		ja: '高可用性環境でのデータベース管理と最適化'
	},
	'timeline.job1.achievement3': {
		en: 'Use of Docker containers for application orchestration',
		pt: 'Utilização de containers Docker para orquestração de aplicações',
		fr: 'Utilisation de conteneurs Docker pour l\'orchestration d\'applications',
		es: 'Utilización de contenedores Docker para orquestación de aplicaciones',
		ja: 'アプリケーションオーケストレーションのためのDockerコンテナの使用'
	},
	'timeline.job1.achievement4': {
		en: 'Development of systems and interfaces using Rust, Node.js and Svelte',
		pt: 'Desenvolvimento de sistemas e interfaces utilizando Rust, Node.js e Svelte',
		fr: 'Développement de systèmes et d\'interfaces utilisant Rust, Node.js et Svelte',
		es: 'Desarrollo de sistemas e interfaces utilizando Rust, Node.js y Svelte',
		ja: 'Rust、Node.js、Svelteを使用したシステムとインターフェースの開発'
	},
	'timeline.job1.achievement5': {
		en: 'Implementation of scalable and high-performance solutions, focusing on user experience and platform stability',
		pt: 'Implementação de soluções escaláveis e de alto desempenho, com foco na experiência do usuário e estabilidade da plataforma',
		fr: 'Mise en œuvre de solutions évolutives et performantes, en se concentrant sur l\'expérience utilisateur et la stabilité de la plateforme',
		es: 'Implementación de soluciones escalables y de alto rendimiento, con enfoque en la experiencia del usuario y estabilidad de la plataforma',
		ja: 'ユーザーエクスペリエンスとプラットフォームの安定性に焦点を当てた、スケーラブルで高性能なソリューションの実装'
	},

	// Job 2 - Fiorilli Software
	'timeline.job2.title': {
		en: 'Technical Support Engineer',
		pt: 'Engenheiro de Suporte Técnico',
		fr: 'Ingénieur de support technique',
		es: 'Ingeniero de Soporte Técnico',
		ja: 'テクニカルサポートエンジニア'
	},
	'timeline.job2.company': {
		en: 'Fiorilli Software',
		pt: 'Fiorilli Software',
		fr: 'Fiorilli Software',
		es: 'Fiorilli Software',
		ja: 'Fiorilli Software'
	},
	'timeline.job2.period': {
		en: '2021 - 2025',
		pt: '2021 - 2025',
		fr: '2021 - 2025',
		es: '2021 - 2025',
		ja: '2021 - 2025'
	},
	'timeline.job2.description': {
		en: 'Working at one of the leading technology solutions companies for the public sector, focusing on the development and support of systems for municipalities, such as: Revenue Collection, Payroll, Accounting and Public Health (hospitals and care units).',
		pt: 'Atuação em uma das principais empresas de soluções tecnológicas para o setor público, com foco no desenvolvimento e suporte de sistemas voltados para prefeituras, como: Arrecadação, Folha de Pagamento, Contabilidade e Saúde Pública (hospitais e unidades de atendimento).',
		fr: 'Travail dans l\'une des principales entreprises de solutions technologiques pour le secteur public, en se concentrant sur le développement et le support de systèmes pour les municipalités, tels que : perception des revenus, paie, comptabilité et santé publique (hôpitaux et unités de soins).',
		es: 'Trabajando en una de las principales empresas de soluciones tecnológicas para el sector público, enfocándose en el desarrollo y soporte de sistemas para municipalidades, como: Recaudación, Nómina, Contabilidad y Salud Pública (hospitales y unidades de atención).',
		ja: '公共部門向けの主要なテクノロジーソリューション企業の1つで、自治体向けのシステムの開発とサポートに焦点を当てて活動。収益徴収、給与、会計、公衆衛生（病院とケアユニット）などのシステム。'
	},
	'timeline.job2.achievement1': {
		en: 'Technical consulting on public systems, providing specialized service and guidance to clients (municipalities and public agencies)',
		pt: 'Consultoria técnica em sistemas públicos, realizando atendimento especializado e orientações para clientes (prefeituras e órgãos públicos)',
		fr: 'Conseil technique sur les systèmes publics, fournissant un service spécialisé et des conseils aux clients (municipalités et agences publiques)',
		es: 'Consultoría técnica en sistemas públicos, brindando servicio especializado y orientación a clientes (municipalidades y organismos públicos)',
		ja: '公共システムに関する技術コンサルティング、クライアント（自治体および公的機関）への専門的なサービスとガイダンスの提供'
	},
	'timeline.job2.achievement2': {
		en: 'Analysis and correction of data in production systems, ensuring integrity and compliance in information',
		pt: 'Análise e correção de dados em sistemas de produção, garantindo integridade e conformidade nas informações',
		fr: 'Analyse et correction des données dans les systèmes de production, garantissant l\'intégrité et la conformité des informations',
		es: 'Análisis y corrección de datos en sistemas de producción, garantizando integridad y conformidad en la información',
		ja: '本番システムでのデータの分析と修正、情報の整合性と準拠性の確保'
	},
	'timeline.job2.achievement3': {
		en: 'Identification and delivery of solutions for technical failures and systemic inconsistencies',
		pt: 'Identificação e entrega de soluções para falhas técnicas e inconsistências sistêmicas',
		fr: 'Identification et livraison de solutions pour les défaillances techniques et les incohérences systémiques',
		es: 'Identificación y entrega de soluciones para fallas técnicas e inconsistencias sistémicas',
		ja: '技術的な障害とシステムの不整合に対するソリューションの特定と提供'
	},
	'timeline.job2.achievement4': {
		en: 'SQL database management, focusing on performance, data recovery and maintenance of critical systems',
		pt: 'Gerenciamento de banco de dados SQL, com foco em performance, recuperação de dados e manutenção de sistemas críticos',
		fr: 'Gestion de bases de données SQL, en se concentrant sur les performances, la récupération de données et la maintenance des systèmes critiques',
		es: 'Gestión de bases de datos SQL, con enfoque en rendimiento, recuperación de datos y mantenimiento de sistemas críticos',
		ja: 'SQLデータベース管理、パフォーマンス、データ復旧、重要システムの保守に焦点'
	},
	'timeline.job2.achievement5': {
		en: 'Installation and configuration of systems using JBoss and Java environments, working directly on system implementation and updates for clients',
		pt: 'Instalação e configuração de sistemas utilizando JBoss e ambientes em Java, atuando diretamente na implantação e atualização dos sistemas para os clientes',
		fr: 'Installation et configuration de systèmes utilisant JBoss et des environnements Java, travaillant directement sur l\'implémentation et les mises à jour des systèmes pour les clients',
		es: 'Instalación y configuración de sistemas utilizando JBoss y entornos Java, trabajando directamente en la implementación y actualización de sistemas para clientes',
		ja: 'JBossとJava環境を使用したシステムのインストールと設定、クライアント向けのシステム実装とアップデートに直接従事'
	},

	// Job 3 - Bálsamo Software
	'timeline.job3.title': {
		en: 'Mid-Level Systems Analyst',
		pt: 'Analista de Sistemas Pleno',
		fr: 'Analyste de systèmes intermédiaire',
		es: 'Analista de Sistemas Semi-Senior',
		ja: 'ミドルレベルシステムアナリスト'
	},
	'timeline.job3.company': {
		en: 'Bálsamo Software',
		pt: 'Bálsamo Software',
		fr: 'Bálsamo Software',
		es: 'Bálsamo Software',
		ja: 'Bálsamo Software'
	},
	'timeline.job3.period': {
		en: '2021 - 2024',
		pt: '2021 - 2024',
		fr: '2021 - 2024',
		es: '2021 - 2024',
		ja: '2021 - 2024'
	},
	'timeline.job3.description': {
		en: 'Acting as Systems Analyst in a company specialized in developing solutions for process management (FlowDocs), focusing on the private sector and also serving the public sector.',
		pt: 'Atuação como Analista de Sistemas em empresa especializada no desenvolvimento de soluções para gestão de processos (FlowDocs), com foco no setor privado e também atendimento ao setor público.',
		fr: 'Agir en tant qu\'analyste de systèmes dans une entreprise spécialisée dans le développement de solutions de gestion de processus (FlowDocs), en se concentrant sur le secteur privé et en servant également le secteur public.',
		es: 'Actuando como Analista de Sistemas en empresa especializada en el desarrollo de soluciones para gestión de procesos (FlowDocs), con enfoque en el sector privado y también atendiendo al sector público.',
		ja: 'プロセス管理ソリューション（FlowDocs）の開発を専門とする企業でシステムアナリストとして活動、民間部門に焦点を当て、公共部門へのサービスも提供。'
	},

	// Job 3 - Technology translations
	'tech.systemsAnalysis': {
		en: 'Systems Analysis',
		pt: 'Análise de sistemas',
		fr: 'Analyse de systèmes',
		es: 'Análisis de sistemas',
		ja: 'システム分析'
	},
	'tech.processAutomation': {
		en: 'Process Automation',
		pt: 'Automação de processos',
		fr: 'Automatisation des processus',
		es: 'Automatización de procesos',
		ja: 'プロセス自動化'
	},
	'tech.softwareQuality': {
		en: 'Software Quality',
		pt: 'Qualidade de software',
		fr: 'Qualité logicielle',
		es: 'Calidad de software',
		ja: 'ソフトウェア品質'
	},
	'tech.automatedTesting': {
		en: 'Automated Testing',
		pt: 'Testes automatizados',
		fr: 'Tests automatisés',
		es: 'Pruebas automatizadas',
		ja: '自動テスト'
	},
	'tech.informationSystems': {
		en: 'Information Systems',
		pt: 'Sistemas de informação computacionais',
		fr: 'Systèmes d\'information informatiques',
		es: 'Sistemas de información computacionales',
		ja: 'コンピュータ情報システム'
	},
	'timeline.job3.achievement1': {
		en: 'Participation in the development and maintenance of a 100% web and responsive system, with portability for mobile devices',
		pt: 'Participação no desenvolvimento e manutenção de um sistema 100% web e responsivo, com portabilidade para dispositivos móveis',
		fr: 'Participation au développement et à la maintenance d\'un système 100% web et réactif, avec portabilité pour les appareils mobiles',
		es: 'Participación en el desarrollo y mantenimiento de un sistema 100% web y responsivo, con portabilidad para dispositivos móviles',
		ja: 'モバイルデバイス向けの移植性を持つ100％ウェブとレスポンシブシステムの開発と保守への参加'
	},
	'timeline.job3.achievement2': {
		en: 'Development of interfaces and applications using Flutter/Dart for mobile',
		pt: 'Desenvolvimento de interfaces e aplicativos utilizando Flutter/Dart para mobile',
		fr: 'Développement d\'interfaces et d\'applications utilisant Flutter/Dart pour mobile',
		es: 'Desarrollo de interfaces y aplicaciones utilizando Flutter/Dart para móvil',
		ja: 'モバイル用のFlutter/Dartを使用したインターフェースとアプリケーションの開発'
	},
	'timeline.job3.achievement3': {
		en: 'Backend support and service integration using Kotlin for web and API creation',
		pt: 'Apoio no backend e integração de serviços utilizando Kotlin para web e criação de APIs',
		fr: 'Support backend et intégration de services utilisant Kotlin pour le web et la création d\'API',
		es: 'Apoyo en backend e integración de servicios utilizando Kotlin para web y creación de APIs',
		ja: 'ウェブとAPI作成のためのKotlinを使用したバックエンドサポートとサービス統合'
	},
	'timeline.job3.achievement4': {
		en: 'Service to corporate clients focusing on automation and digitization of administrative processes',
		pt: 'Atendimento a clientes corporativos com foco em automação e digitalização de processos administrativos',
		fr: 'Service aux clients d\'entreprise en se concentrant sur l\'automatisation et la numérisation des processus administratifs',
		es: 'Atención a clientes corporativos con enfoque en automatización y digitalización de procesos administrativos',
		ja: '管理プロセスの自動化とデジタル化に焦点を当てた企業クライアントへのサービス'
	},
	'timeline.job3.achievement5': {
		en: 'Work in analysis, testing, continuous improvements and functional technical support of the system',
		pt: 'Atuação em análise, testes, melhorias contínuas e suporte técnico funcional do sistema',
		fr: 'Travail dans l\'analyse, les tests, les améliorations continues et le support technique fonctionnel du système',
		es: 'Actuación en análisis, pruebas, mejoras continuas y soporte técnico funcional del sistema',
		ja: 'システムの分析、テスト、継続的改善、機能的技術サポートでの作業'
	},

	// Job 4 - Hylex Inc.
	'timeline.job4.title': {
		en: 'Full Stack Developer',
		pt: 'Desenvolvedor Full Stack',
		fr: 'Développeur Full Stack',
		es: 'Desarrollador Full Stack',
		ja: 'フルスタック開発者'
	},
	'timeline.job4.company': {
		en: 'Hylex Inc.',
		pt: 'Hylex Inc.',
		fr: 'Hylex Inc.',
		es: 'Hylex Inc.',
		ja: 'Hylex Inc.'
	},
	'timeline.job4.period': {
		en: '2020 - 2022',
		pt: '2020 - 2022',
		fr: '2020 - 2022',
		es: '2020 - 2022',
		ja: '2020 - 2022'
	},
	'timeline.job4.description': {
		en: 'Responsible for the complete development of the e-commerce platform, focused on selling digital products. The platform was designed to be lightweight, fast and scalable, focusing on user experience.',
		pt: 'Responsável pelo desenvolvimento completo da plataforma de e-commerce, voltada para a venda de produtos digitais. A plataforma foi projetada para ser leve, rápida e escalável, com foco na experiência do usuário.',
		fr: 'Responsable du développement complet de la plateforme e-commerce, axée sur la vente de produits numériques. La plateforme a été conçue pour être légère, rapide et évolutive, en se concentrant sur l\'expérience utilisateur.',
		es: 'Responsable del desarrollo completo de la plataforma de e-commerce, enfocada en la venta de productos digitales. La plataforma fue diseñada para ser ligera, rápida y escalable, con enfoque en la experiencia del usuario.',
		ja: 'デジタル製品の販売に焦点を当てたeコマースプラットフォームの完全な開発を担当。プラットフォームは軽量、高速、スケーラブルに設計され、ユーザーエクスペリエンスに焦点を当てた。'
	},
	'timeline.job4.achievement1': {
		en: 'Store interface development using HTMX and EJS',
		pt: 'Desenvolvimento da interface da loja utilizando HTMX e EJS',
		fr: 'Développement de l\'interface du magasin utilisant HTMX et EJS',
		es: 'Desarrollo de la interfaz de la tienda utilizando HTMX y EJS',
		ja: 'HTMXとEJSを使用したストアインターフェースの開発'
	},
	'timeline.job4.achievement2': {
		en: 'Responsive styling with Tailwind CSS and interaction logic structuring with JavaScript',
		pt: 'Estilização responsiva com Tailwind CSS e estruturação da lógica de interação com JavaScript',
		fr: 'Style réactif avec Tailwind CSS et structuration de la logique d\'interaction avec JavaScript',
		es: 'Estilización responsiva con Tailwind CSS y estructuración de la lógica de interacción con JavaScript',
		ja: 'Tailwind CSSによるレスポンシブスタイリングとJavaScriptによるインタラクションロジックの構造化'
	},
	'timeline.job4.achievement3': {
		en: 'Backend implementation with Node.js and TypeScript, focused on purchase control, sales and product management',
		pt: 'Implementação do backend com Node.js e TypeScript, focado no controle de compras, vendas e gerenciamento de produtos',
		fr: 'Implémentation du backend avec Node.js et TypeScript, axée sur le contrôle des achats, les ventes et la gestion des produits',
		es: 'Implementación del backend con Node.js y TypeScript, enfocado en control de compras, ventas y gestión de productos',
		ja: 'Node.jsとTypeScriptによるバックエンド実装、購入制御、販売、製品管理に焦点'
	},
	'timeline.job4.achievement4': {
		en: 'Creation of REST APIs for communication between frontend, administrative panel and internal digital delivery systems',
		pt: 'Criação de APIs REST para comunicação entre frontend, painel administrativo e sistemas internos de entrega digital',
		fr: 'Création d\'API REST pour la communication entre le frontend, le panneau administratif et les systèmes internes de livraison numérique',
		es: 'Creación de APIs REST para comunicación entre frontend, panel administrativo y sistemas internos de entrega digital',
		ja: 'フロントエンド、管理パネル、内部デジタル配信システム間の通信のためのREST API作成'
	},
	'timeline.job4.achievement5': {
		en: 'Security and scalability guarantee in integration with Minecraft servers and automatic payment systems, compatibility with JAVA plugins for receiving digital products',
		pt: 'Garantia de segurança e escalabilidade na integração com servidores de Minecraft e sistemas de pagamento automático, compatibilidade com plugins JAVA para recebimento de produtos digitais',
		fr: 'Garantie de sécurité et d\'évolutivité dans l\'intégration avec les serveurs Minecraft et les systèmes de paiement automatique, compatibilité avec les plugins JAVA pour la réception de produits numériques',
		es: 'Garantía de seguridad y escalabilidad en la integración con servidores de Minecraft y sistemas de pago automático, compatibilidad con plugins JAVA para recepción de productos digitales',
		ja: 'Minecraftサーバーと自動支払いシステムとの統合におけるセキュリティとスケーラビリティの保証、デジタル製品受信のためのJAVAプラグインとの互換性'
	},
	'timeline.job4.achievement6': {
		en: 'Development of mobile applications using Kotlin for Android and Java for iOS, ensuring a smooth and integrated shopping experience across mobile devices and desktop',
		pt: 'Desenvolvimento de aplicativos móveis utilizando Kotlin para Android e Java para iOS, garantindo uma experiência de compra fluida e integrada entre dispositivos móveis e desktop',
		fr: 'Développement d\'applications mobiles utilisant Kotlin pour Android et Java pour iOS, garantissant une expérience d\'achat fluide et intégrée entre les appareils mobiles et de bureau',
		es: 'Desarrollo de aplicaciones móviles utilizando Kotlin para Android y Java para iOS, garantizando una experiencia de compra fluida e integrada entre dispositivos móviles y desktop',
		ja: 'AndroidにはKotlin、iOSにはJavaを使用したモバイルアプリケーション開発、モバイルデバイスとデスクトップ間でのスムーズで統合されたショッピング体験を保証'
	}
};

// Get initial language from localStorage or browser
function getInitialLanguage(): Language {
	if (browser) {
		// Try localStorage first
		const stored = localStorage.getItem('language') as Language;
		if (stored && ['en', 'pt', 'fr', 'es', 'ja'].includes(stored)) {
			return stored;
		}

		// Fallback to browser language
		const browserLang = navigator.language.toLowerCase();
		if (browserLang.startsWith('pt')) return 'pt';
		if (browserLang.startsWith('fr')) return 'fr';
		if (browserLang.startsWith('es')) return 'es';
		if (browserLang.startsWith('ja')) return 'ja';
	}
	return 'en'; // Default to English
}

// Create the language store
export const currentLanguage = writable<Language>(getInitialLanguage());

// Save language to localStorage when it changes
if (browser) {
	currentLanguage.subscribe((lang) => {
		localStorage.setItem('language', lang);
	});
}

// Helper function to get translation
export const t = derived(currentLanguage, ($currentLanguage) => {
	return (key: string): string => {
		return translations[key]?.[$currentLanguage] || key;
	};
});

// Language names for the selector
export const languageNames: { [K in Language]: string } = {
	en: 'English',
	pt: 'Português',
	fr: 'Français',
	es: 'Español',
	ja: '日本語'
};

// Function to change language
export function setLanguage(lang: Language) {
	currentLanguage.set(lang);
}
