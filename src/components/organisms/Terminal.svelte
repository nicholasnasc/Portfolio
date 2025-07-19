<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '../../lib/i18n';

	let input = '';
	let output: string[] = [];
	let currentDirectory = '~/portfolio';
	let isTyping = false;
	let terminalElement: HTMLElement;

	const commands = {
		help: () => [
			'Available commands:',
			'  help      - Show this help message',
			'  about     - About Nicholas Nascimento',
			'  skills    - List technical skills',
			'  projects  - Show recent projects',
			'  contact   - Get contact information',
			'  resume    - Download resume',
			'  clear     - Clear terminal',
			'  whoami    - Display current user',
			'  ls        - List directory contents',
			'  cat       - Display file contents',
			'  pwd       - Print working directory',
			'  history   - Show command history',
			'  theme     - Change terminal theme'
		],
		about: () => [
			'Nicholas Nascimento - Software Engineer',
			'',
			'Age: 20 years old',
			'Location: Fortaleza, CE, Brazil',
			'Experience: 7+ years in software development',
			'Current: Systems Analyst & Data Management at Discloud',
			'',
			'Passionate about building scalable distributed systems',
			'and modern applications that serve thousands of users.'
		],
		skills: () => [
			'Technical Skills:',
			'',
			'Languages:',
			'  • Node.js     ████████████████████ 95%',
			'  • TypeScript  ██████████████████   90%',
			'  • Python      ██████████████████   88%',
			'  • Dart        █████████████████    85%',
			'  • Kotlin      ████████████████     80%',
			'',
			'Frameworks:',
			'  • Flutter     █████████████████    85%',
			'  • React       ████████████████     82%',
			'  • Express.js  ████████████████████ 95%',
			'',
			'Databases:',
			'  • MongoDB     █████████████████    85%',
			'  • PostgreSQL  ████████████████     78%',
			'  • Redis       ████████████████     80%'
		],
		projects: () => [
			'Recent Projects:',
			'',
			'🌐 Discloud Platform',
			'   Cloud hosting solution serving 60K+ users',
			'   Tech: Node.js, Docker, MongoDB, AWS',
			'',
			'📱 Flutter E-commerce App',
			'   Cross-platform mobile app with real-time features',
			'   Tech: Flutter, Dart, Firebase, SQLite',
			'',
			'⚡ Microservices Architecture',
			'   Distributed system with auto-scaling capabilities',
			'   Tech: Kubernetes, Docker, Redis, PostgreSQL',
			'',
			'🤖 Discord Bot Framework',
			'   Scalable bot framework used by 1000+ servers',
			'   Tech: Node.js, TypeScript, Discord.js'
		],
		contact: () => [
			'Contact Information:',
			'',
			'📧 Email: nicholas@example.com',
			'🐙 GitHub: github.com/nicholasnasc',
			'💼 LinkedIn: linkedin.com/in/nicholasnasc',
			'🐦 Twitter: @nickzin_dev',
			'🌐 Website: nicholasnasc.dev',
			'',
			'Feel free to reach out for collaborations!'
		],
		resume: () => [
			'Resume download initiated...',
			'📄 nicholas_nascimento_resume.pdf',
			'',
			'Note: This is a demo terminal. In a real implementation,',
			'this would trigger a download of the actual resume.'
		],
		whoami: () => ['nicholas'],
		pwd: () => [currentDirectory],
		ls: () => [
			'projects/',
			'skills.txt',
			'about.md',
			'contact.json',
			'resume.pdf',
			'certificates/',
			'.env'
		],
		cat: (args: string[]) => {
			const file = args[0];
			switch (file) {
				case 'skills.txt':
					return commands.skills();
				case 'about.md':
					return commands.about();
				case 'contact.json':
					return [
						'{',
						'  "name": "Nicholas Nascimento",',
						'  "role": "Software Engineer",',
						'  "email": "nicholas@example.com",',
						'  "github": "nicholasnasc",',
						'  "location": "Fortaleza, CE"',
						'}'
					];
				default:
					return [`cat: ${file}: No such file or directory`];
			}
		},
		history: () => [
			'  1  help',
			'  2  about',
			'  3  skills',
			'  4  ls',
			'  5  history'
		],
		theme: () => [
			'Terminal themes:',
			'  • matrix    - Green on black (current)',
			'  • dracula   - Dark purple theme',
			'  • monokai   - Dark theme with vibrant colors',
			'  • solarized - Light/dark balanced theme',
			'',
			'Usage: theme <name> (feature coming soon)'
		],
		clear: () => null
	};

	function processCommand(cmd: string) {
		const [command, ...args] = cmd.trim().toLowerCase().split(' ');
		
		if (command === 'clear') {
			output = [];
			return;
		}

		const commandFunction = commands[command as keyof typeof commands];
		if (commandFunction) {
			let result: string[] | null;
			if (typeof commandFunction === 'function') {
				result = commandFunction(args);
			} else {
				result = [];
			}
			
			if (result) {
				output = [...output, `${currentDirectory} $ ${cmd}`, ...result, ''];
			}
		} else if (command === '') {
			output = [...output, `${currentDirectory} $ `];
		} else {
			output = [...output, `${currentDirectory} $ ${cmd}`, `Command '${command}' not found. Type 'help' for available commands.`, ''];
		}
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			processCommand(input);
			input = '';
			setTimeout(() => {
				if (terminalElement) {
					terminalElement.scrollTop = terminalElement.scrollHeight;
				}
			}, 10);
		}
	}

	function typeWelcomeMessage() {
		const welcomeLines = [
			'Welcome to Nicholas Terminal v1.0.0',
			'Type "help" to see available commands.',
			''
		];
		
		let lineIndex = 0;
		let charIndex = 0;
		isTyping = true;

		function typeNextChar() {
			if (lineIndex < welcomeLines.length) {
				const currentLine = welcomeLines[lineIndex];
				
				if (charIndex < currentLine.length) {
					const currentOutput = [...output];
					if (currentOutput[lineIndex] === undefined) {
						currentOutput[lineIndex] = '';
					}
					currentOutput[lineIndex] += currentLine[charIndex];
					output = currentOutput;
					charIndex++;
					setTimeout(typeNextChar, 50);
				} else {
					lineIndex++;
					charIndex = 0;
					if (lineIndex < welcomeLines.length) {
						output = [...output, ''];
					}
					setTimeout(typeNextChar, 200);
				}
			} else {
				isTyping = false;
			}
		}

		typeNextChar();
	}

	onMount(() => {
		typeWelcomeMessage();
	});
</script>

<section id="terminal" class="wrapper">
	<div class="title">
		<h2><span>dev</span>:{$t('terminal.title')}</h2>
	</div>
	
	<div class="terminal-container" bind:this={terminalElement}>
		<div class="terminal-header">
			<div class="terminal-controls">
				<span class="control red"></span>
				<span class="control yellow"></span>
				<span class="control green"></span>
			</div>
			<div class="terminal-title">nicholas@portfolio:~</div>
			<div class="terminal-actions">
				<button class="minimize">_</button>
				<button class="maximize">□</button>
				<button class="close">×</button>
			</div>
		</div>
		
		<div class="terminal-body">
			<div class="output">
				{#each output as line}
					<div class="output-line">{line}</div>
				{/each}
			</div>
			
			{#if !isTyping}
				<div class="input-line">
					<span class="prompt">{currentDirectory} $</span>
					<input 
						bind:value={input}
						on:keypress={handleKeyPress}
						class="terminal-input"
						placeholder="Type a command..."
					/>
					<span class="cursor">|</span>
				</div>
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	section {
		margin-bottom: 6rem;
	}

	.title {
		margin-bottom: 3rem;
		
		h2 {
			position: relative;
			
			span {
				color: var(--accent);
			}
		}

		h2::before {
			@include outlineText($content: '~$_', $translateX: -90%, $translateY: -50%, $fontSize: 120px, $opacity: 0.15);
		}
	}

	.terminal-container {
		background: #0f0f0f;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
		border: 1px solid #333;
		max-height: 500px;
		display: flex;
		flex-direction: column;
	}

	.terminal-header {
		background: #1a1a1a;
		padding: 0.75rem 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #333;
	}

	.terminal-controls {
		display: flex;
		gap: 0.5rem;
	}

	.control {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		cursor: pointer;

		&.red { 
			background: #ff5f56; 
			&:hover { background: #ff4743; }
		}
		&.yellow { 
			background: #ffbd2e; 
			&:hover { background: #ffab00; }
		}
		&.green { 
			background: #27ca3f; 
			&:hover { background: #1eb832; }
		}
	}

	.terminal-title {
		color: #888;
		font-family: var(--font-two);
		font-size: 0.9rem;
		font-weight: 500;
	}

	.terminal-actions {
		display: flex;
		gap: 0.5rem;

		button {
			background: transparent;
			border: none;
			color: #666;
			font-size: 1rem;
			width: 20px;
			height: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			border-radius: 3px;

			&:hover {
				background: #333;
				color: #999;
			}
		}
	}

	.terminal-body {
		flex: 1;
		padding: 1rem;
		overflow-y: auto;
		font-family: var(--font-two);
		font-size: 0.9rem;
		line-height: 1.4;
		background: #0a0a0a;
	}

	.output-line {
		color: #00ff41;
		margin-bottom: 0.2rem;
		word-wrap: break-word;

		&:empty {
			height: 1.2rem;
		}
	}

	.input-line {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #00ff41;
	}

	.prompt {
		color: #00ccff;
		font-weight: 500;
		white-space: nowrap;
	}

	.terminal-input {
		flex: 1;
		background: transparent;
		border: none;
		color: #00ff41;
		font-family: var(--font-two);
		font-size: 0.9rem;
		outline: none;

		&::placeholder {
			color: #555;
		}
	}

	.cursor {
		color: #00ff41;
		animation: blink 1s infinite;
		font-weight: bold;
	}

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}

	@media screen and (max-width: 768px) {
		.terminal-container {
			max-height: 400px;
		}
		
		.terminal-body {
			padding: 0.75rem;
			font-size: 0.8rem;
		}
		
		.terminal-title {
			display: none;
		}
		
		.title h2::before {
			@include outlineText($content: '~$_', $translateX: -70%, $translateY: -50%, $fontSize: 80px, $opacity: 0.1);
		}
	}

	/* Custom scrollbar for terminal */
	.terminal-body::-webkit-scrollbar {
		width: 8px;
	}

	.terminal-body::-webkit-scrollbar-track {
		background: #1a1a1a;
	}

	.terminal-body::-webkit-scrollbar-thumb {
		background: #333;
		border-radius: 4px;

		&:hover {
			background: #444;
		}
	}
</style>
