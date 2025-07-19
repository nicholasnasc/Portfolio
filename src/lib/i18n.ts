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
