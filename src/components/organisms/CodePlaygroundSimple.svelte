<script lang="ts">
	import { onMount } from 'svelte';

	interface CodeSnippet {
		id: string;
		title: string;
		language: string;
		code: string;
		description: string;
	}

	let activeSnippet = 0;
	let output = '';
	let isRunning = false;

	const snippets: CodeSnippet[] = [
		{
			id: '1',
			title: 'Node.js Express Server',
			language: 'javascript',
			description: 'Basic REST API with Express.js',
			code: `const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Nicholas', role: 'Developer' },
    { id: 2, name: 'Alice', role: 'Designer' }
  ]);
});

app.listen(port, () => {
  console.log('Server running on port 3000');
});`
		},
		{
			id: '2',
			title: 'Flutter StatefulWidget',
			language: 'dart',
			description: 'Custom animated Flutter widget',
			code: `class AnimatedCard extends StatefulWidget {
  final String title;
  final String subtitle;
  
  const AnimatedCard({
    Key? key,
    required this.title,
    required this.subtitle,
  }) : super(key: key);

  @override
  _AnimatedCardState createState() => _AnimatedCardState();
}

class _AnimatedCardState extends State<AnimatedCard>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => _controller.forward(),
      child: Container(
        padding: EdgeInsets.all(16),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12),
          color: Theme.of(context).cardColor,
        ),
        child: Text(widget.title),
      ),
    );
  }
}`
		},
		{
			id: '3',
			title: 'Python Data Analysis',
			language: 'python',
			description: 'Data processing with pandas',
			code: `import pandas as pd
import matplotlib.pyplot as plt

def analyze_data(file_path):
    # Load and clean data
    df = pd.read_csv(file_path)
    df = df.dropna()
    
    # Calculate metrics
    monthly_sales = df.groupby('month')['sales'].sum()
    avg_sales = df['sales'].mean()
    
    # Create visualization
    plt.figure(figsize=(10, 6))
    monthly_sales.plot(kind='bar')
    plt.title('Monthly Sales')
    plt.show()
    
    return {
        'total': df['sales'].sum(),
        'average': avg_sales,
        'best_month': monthly_sales.idxmax()
    }

results = analyze_data('sales.csv')
print(f"Total: {results['total']}")
print(f"Average: {results['average']}")
print(f"Best month: {results['best_month']}")`
		}
	];

	let typingAnimation: ReturnType<typeof setInterval>;
	let displayedCode = '';

	function typeCode(code: string) {
		displayedCode = '';
		let i = 0;
		
		if (typingAnimation) clearInterval(typingAnimation);
		
		typingAnimation = setInterval(() => {
			if (i < code.length) {
				displayedCode += code[i];
				i++;
			} else {
				clearInterval(typingAnimation);
			}
		}, 20);
	}

	function selectSnippet(index: number) {
		activeSnippet = index;
		typeCode(snippets[index].code);
	}

	function copyCode() {
		navigator.clipboard.writeText(snippets[activeSnippet].code);
	}

	function runCode() {
		isRunning = true;
		output = '> Running code...';
		
		setTimeout(() => {
			const snippet = snippets[activeSnippet];
			switch (snippet.language) {
				case 'javascript':
					output = `> Server running on port 3000
> API endpoint created
> Ready to accept requests`;
					break;
				case 'dart':
					output = `> Flutter widget compiled
> Animation controller initialized
> Widget ready to render`;
					break;
				case 'python':
					output = `> Data loaded successfully
> Analysis complete
> Total: $125,847.50
> Charts generated`;
					break;
			}
			isRunning = false;
		}, 2000);
	}

	onMount(() => {
		typeCode(snippets[0].code);
	});
</script>

<section id="playground" class="wrapper">
	<div class="title">
		<h2><span>code</span>:playground</h2>
	</div>
	
	<div class="playground-container">
		<div class="sidebar">
			<h4>Code Snippets</h4>
			<div class="snippet-list">
				{#each snippets as snippet, index}
					<button 
						class="snippet-item {activeSnippet === index ? 'active' : ''}"
						on:click={() => selectSnippet(index)}
					>
						<div class="snippet-header">
							<span class="language-badge {snippet.language}">{snippet.language}</span>
							<h5>{snippet.title}</h5>
						</div>
						<p>{snippet.description}</p>
					</button>
				{/each}
			</div>
		</div>
		
		<div class="code-area">
			<div class="code-header">
				<div class="window-controls">
					<span class="control red"></span>
					<span class="control yellow"></span>
					<span class="control green"></span>
				</div>
				<div class="file-name">{snippets[activeSnippet].title}</div>
				<div class="actions">
					<button class="action-btn" on:click={copyCode} title="Copy code">
						<span class="icon">📋</span>
					</button>
					<button class="action-btn" on:click={() => typeCode(snippets[activeSnippet].code)} title="Retype">
						<span class="icon">🔄</span>
					</button>
					<button class="run-btn" on:click={runCode} disabled={isRunning}>
						<span class="icon">{isRunning ? '⏳' : '▶'}</span>
						{isRunning ? 'Running...' : 'Run'}
					</button>
				</div>
			</div>
			
			<div class="code-content">
				<pre><code class="language-{snippets[activeSnippet].language}">{displayedCode}<span class="cursor">|</span></code></pre>
			</div>
			
			{#if output}
				<div class="output-area">
					<div class="output-header">
						<h6>Output</h6>
					</div>
					<pre class="output-content">{output}</pre>
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
			@include outlineText($content: '{;}', $translateX: -90%, $translateY: -50%, $fontSize: 120px, $opacity: 0.15);
		}
	}

	.playground-container {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 2rem;
		height: 600px;
	}

	.sidebar {
		background: var(--elevation-one);
		border-radius: 12px;
		padding: 1.5rem;
		overflow-y: auto;

		h4 {
			margin-bottom: 1rem;
			color: var(--text-primary);
		}
	}

	.snippet-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.snippet-item {
		background: var(--elevation-three);
		border: 1px solid transparent;
		border-radius: 8px;
		padding: 1rem;
		cursor: pointer;
		transition: all 0.2s ease;
		text-align: left;

		&:hover {
			border-color: var(--accent);
			background: var(--elevation-two);
		}

		&.active {
			border-color: var(--accent);
			background: var(--accent-opacity);
		}
	}

	.snippet-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.5rem;

		h5 {
			margin: 0;
			font-size: 0.9rem;
			color: var(--text-primary);
		}
	}

	.language-badge {
		padding: 0.25rem 0.5rem;
		border-radius: 12px;
		font-size: 0.7rem;
		font-family: var(--font-two);
		font-weight: 500;

		&.javascript {
			background: #f7df1e33;
			color: #f7df1e;
		}

		&.dart {
			background: #0175c233;
			color: #0175c2;
		}

		&.python {
			background: #3776ab33;
			color: #3776ab;
		}
	}

	.snippet-item p {
		font-size: 0.8rem;
		margin: 0;
		opacity: 0.8;
	}

	.code-area {
		background: var(--elevation-one);
		border-radius: 12px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.code-header {
		background: var(--elevation-three);
		padding: 1rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--elevation-four);
	}

	.window-controls {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.control {
		width: 12px;
		height: 12px;
		border-radius: 50%;

		&.red { background: #ff5f56; }
		&.yellow { background: #ffbd2e; }
		&.green { background: #27ca3f; }
	}

	.file-name {
		font-family: var(--font-two);
		color: var(--text-primary);
		font-size: 0.9rem;
	}

	.actions {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.action-btn {
		background: transparent;
		border: none;
		padding: 0.5rem;
		border-radius: 6px;
		cursor: pointer;
		transition: background 0.2s ease;

		.icon {
			font-size: 1rem;
			color: var(--text-secondary);
		}

		&:hover {
			background: var(--elevation-four);
		}
	}

	.run-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--accent-opacity);
		border: 1px solid var(--accent);
		color: var(--accent);
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-family: var(--font-two);
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s ease;

		.icon {
			color: inherit;
		}

		&:hover:not(:disabled) {
			background: var(--accent);
			color: var(--bg-color);
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	}

	.code-content {
		flex: 1;
		padding: 1.5rem;
		overflow-y: auto;
		font-family: var(--font-two);
		font-size: 0.9rem;
		line-height: 1.5;

		pre {
			margin: 0;
			white-space: pre-wrap;
			color: var(--text-secondary);
		}

		code {
			color: var(--text-secondary);
		}
	}

	.cursor {
		color: var(--accent);
		animation: blink 1s infinite;
	}

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}

	.output-area {
		border-top: 1px solid var(--elevation-four);
		background: var(--elevation-three);
	}

	.output-header {
		padding: 0.75rem 1.5rem;
		border-bottom: 1px solid var(--elevation-four);

		h6 {
			margin: 0;
			color: var(--text-primary);
		}
	}

	.output-content {
		padding: 1rem 1.5rem;
		font-family: var(--font-two);
		font-size: 0.85rem;
		color: var(--accent);
		margin: 0;
		white-space: pre-wrap;
		max-height: 150px;
		overflow-y: auto;
	}

	@media screen and (max-width: 1024px) {
		.playground-container {
			grid-template-columns: 1fr;
			height: auto;
		}

		.sidebar {
			order: 2;
			height: auto;
		}

		.code-area {
			order: 1;
			height: 400px;
		}
	}

	@media screen and (max-width: 768px) {
		.title h2::before {
			@include outlineText($content: '{;}', $translateX: -70%, $translateY: -50%, $fontSize: 80px, $opacity: 0.1);
		}
		
		.code-header {
			padding: 0.75rem 1rem;
		}

		.file-name {
			display: none;
		}
	}
</style>
