<script lang="ts">
	import { onMount } from 'svelte';

	let matrixRef: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let drops: number[] = [];
	let animationId: number;

	const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}01010101";
	const fontSize = 16;

	function draw() {
		if (!ctx || !matrixRef) return;

		ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
		ctx.fillRect(0, 0, matrixRef.width, matrixRef.height);
		
		ctx.fillStyle = 'var(--accent)';
		ctx.font = fontSize + 'px var(--font-two)';

		for (let i = 0; i < drops.length; i++) {
			const text = matrix[Math.floor(Math.random() * matrix.length)];
			ctx.fillText(text, i * fontSize, drops[i] * fontSize);
			
			if (drops[i] * fontSize > matrixRef.height && Math.random() > 0.975) {
				drops[i] = 0;
			}
			drops[i]++;
		}
	}

	function animate() {
		draw();
		animationId = requestAnimationFrame(animate);
	}

	function initMatrix() {
		if (!matrixRef) return;
		
		ctx = matrixRef.getContext('2d');
		if (!ctx) return;

		matrixRef.width = matrixRef.offsetWidth;
		matrixRef.height = matrixRef.offsetHeight;

		const columns = Math.floor(matrixRef.width / fontSize);
		drops.length = 0;
		
		for (let x = 0; x < columns; x++) {
			drops[x] = 1;
		}

		animate();
	}

	function handleResize() {
		if (matrixRef) {
			matrixRef.width = matrixRef.offsetWidth;
			matrixRef.height = matrixRef.offsetHeight;
		}
	}

	onMount(() => {
		initMatrix();
		window.addEventListener('resize', handleResize);
		
		return () => {
			if (animationId) cancelAnimationFrame(animationId);
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<section id="matrix-effect" class="wrapper">
	<div class="effect-container">
		<canvas bind:this={matrixRef} class="matrix-canvas"></canvas>
		<div class="overlay-content">
			<div class="text-content">
				<h2><span>Code</span> is Art</h2>
				<p>
					Every line of code tells a story. From algorithms that solve complex problems 
					to user interfaces that connect people, programming is a creative process 
					that transforms ideas into reality.
				</p>
				<div class="code-stats">
					<div class="stat">
						<h4>1M+</h4>
						<span>Lines of Code</span>
					</div>
					<div class="stat">
						<h4>50+</h4>
						<span>Projects Built</span>
					</div>
					<div class="stat">
						<h4>7+</h4>
						<span>Years Experience</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	section {
		margin-bottom: 6rem;
	}

	.effect-container {
		position: relative;
		height: 400px;
		border-radius: 16px;
		overflow: hidden;
		background: #000;
		border: 1px solid var(--elevation-three);
	}

	.matrix-canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.8;
	}

	.overlay-content {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(2px);
	}

	.text-content {
		text-align: center;
		max-width: 600px;
		padding: 2rem;
		
		h2 {
			font-size: 3rem;
			margin-bottom: 1rem;
			color: var(--text-primary);
			
			span {
				color: var(--accent);
				text-shadow: 0 0 20px var(--accent);
			}
		}

		p {
			font-size: 1.2rem;
			margin-bottom: 2rem;
			color: var(--text-secondary);
			line-height: 1.6;
		}
	}

	.code-stats {
		display: flex;
		justify-content: space-around;
		margin-top: 2rem;
	}

	.stat {
		text-align: center;
		
		h4 {
			font-size: 2rem;
			color: var(--accent);
			margin-bottom: 0.5rem;
			text-shadow: 0 0 10px var(--accent);
		}
		
		span {
			font-family: var(--font-two);
			color: var(--text-secondary);
			font-size: 0.9rem;
		}
	}

	@media screen and (max-width: 768px) {
		.effect-container {
			height: 300px;
		}
		
		.text-content {
			padding: 1.5rem;
			
			h2 {
				font-size: 2rem;
			}
			
			p {
				font-size: 1rem;
			}
		}
		
		.code-stats {
			flex-direction: column;
			gap: 1rem;
		}
		
		.stat h4 {
			font-size: 1.5rem;
		}
	}
</style>
