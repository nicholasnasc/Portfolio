<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '../../lib/i18n';

	interface Skill {
		name: string;
		category: string;
		level: number;
		icon: string;
		color: string;
		experience: string;
	}

	let skills: Skill[] = [
		{ name: 'Node.js', category: 'Backend', level: 95, icon: '⬢', color: '#339933', experience: '5+ years' },
		{ name: 'TypeScript', category: 'Language', level: 90, icon: 'TS', color: '#3178c6', experience: '4+ years' },
		{ name: 'Flutter', category: 'Mobile', level: 85, icon: '◈', color: '#02569B', experience: '3+ years' },
		{ name: 'Dart', category: 'Language', level: 85, icon: '🎯', color: '#0175C2', experience: '3+ years' },
		{ name: 'Kotlin', category: 'Language', level: 80, icon: 'K', color: '#7F52FF', experience: '2+ years' },
		{ name: 'Python', category: 'Language', level: 88, icon: '🐍', color: '#3776AB', experience: '4+ years' },
		{ name: 'React', category: 'Frontend', level: 82, icon: '⚛', color: '#61DAFB', experience: '3+ years' },
		{ name: 'MongoDB', category: 'Database', level: 85, icon: '🍃', color: '#47A248', experience: '4+ years' },
		{ name: 'PostgreSQL', category: 'Database', level: 78, icon: '🐘', color: '#336791', experience: '2+ years' },
		{ name: 'Docker', category: 'DevOps', level: 82, icon: '🐳', color: '#2496ED', experience: '3+ years' },
		{ name: 'AWS', category: 'Cloud', level: 75, icon: '☁', color: '#FF9900', experience: '2+ years' },
		{ name: 'Redis', category: 'Database', level: 80, icon: '◊', color: '#DC382D', experience: '2+ years' }
	];

	let categories = [...new Set(skills.map(skill => skill.category))];
	let activeCategory = 'All';
	let filteredSkills = skills;
	let animatedSkills: boolean[] = [];

	function filterSkills(category: string) {
		activeCategory = category;
		if (category === 'All') {
			filteredSkills = skills;
		} else {
			filteredSkills = skills.filter(skill => skill.category === category);
		}
		// Reset animations
		animatedSkills = new Array(filteredSkills.length).fill(false);
		// Trigger animations with delay
		setTimeout(() => {
			filteredSkills.forEach((_, index) => {
				setTimeout(() => {
					animatedSkills[index] = true;
				}, index * 100);
			});
		}, 50);
	}

	onMount(() => {
		filterSkills('All');
	});
</script>

<section id="skills" class="wrapper">
	<div class="title">
		<h2><span>tech</span>:stack</h2>
	</div>
	
	<div class="filter-tabs">
		<button 
			class="filter-tab {activeCategory === 'All' ? 'active' : ''}"
			on:click={() => filterSkills('All')}
		>
			{$t('skills.all')}
		</button>
		{#each categories as category}
			<button 
				class="filter-tab {activeCategory === category ? 'active' : ''}"
				on:click={() => filterSkills(category)}
			>
				{$t(`skills.${category.toLowerCase()}`) || category}
			</button>
		{/each}
	</div>

	<div class="skills-grid">
		{#each filteredSkills as skill, index}
			<div class="skill-card {animatedSkills[index] ? 'animated' : ''}" style="--delay: {index * 0.1}s">
				<div class="skill-header">
					<div class="skill-icon" style="color: {skill.color}">
						{skill.icon}
					</div>
					<div class="skill-info">
						<h4>{skill.name}</h4>
						<span class="category-badge" style="background: {skill.color}33; color: {skill.color}">
							{skill.category}
						</span>
					</div>
					<div class="skill-level">
						{skill.level}%
					</div>
				</div>
				
				<div class="skill-progress">
					<div class="progress-bar">
						<div 
							class="progress-fill {animatedSkills[index] ? 'animate' : ''}" 
							style="--target-width: {skill.level}%; --color: {skill.color}"
						></div>
					</div>
				</div>
				
				<div class="skill-experience">
					<span>{skill.experience} experience</span>
				</div>
			</div>
		{/each}
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
			@include outlineText($content: '{ }', $translateX: -90%, $translateY: -50%, $fontSize: 120px, $opacity: 0.15);
		}
	}

	.filter-tabs {
		display: flex;
		gap: 1rem;
		margin-bottom: 3rem;
		flex-wrap: wrap;
	}

	.filter-tab {
		background: var(--elevation-one);
		border: 1px solid var(--elevation-four);
		color: var(--text-secondary);
		padding: 0.75rem 1.5rem;
		border-radius: 25px;
		cursor: pointer;
		transition: all 0.3s var(--bezier-one);
		font-family: var(--font-two);
		font-size: 0.9rem;

		&:hover {
			border-color: var(--accent);
			color: var(--accent);
		}

		&.active {
			background: var(--accent);
			color: var(--bg-color);
			border-color: var(--accent);
		}
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1.5rem;
	}

	.skill-card {
		background: var(--elevation-one);
		border-radius: 16px;
		padding: 1.5rem;
		transition: all 0.4s var(--bezier-one);
		border: 1px solid transparent;
		opacity: 0;
		transform: translateY(30px);

		&.animated {
			opacity: 1;
			transform: translateY(0);
			animation: slideUp 0.6s var(--bezier-one) forwards;
			animation-delay: var(--delay);
		}

		&:hover {
			transform: translateY(-4px);
			border-color: var(--accent);
			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
		}
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.skill-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.skill-icon {
		font-size: 2rem;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--elevation-three);
		border-radius: 12px;
		font-weight: bold;
	}

	.skill-info {
		flex: 1;

		h4 {
			margin: 0;
			color: var(--text-primary);
			font-size: 1.2rem;
			margin-bottom: 0.25rem;
		}
	}

	.category-badge {
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 0.8rem;
		font-family: var(--font-two);
		font-weight: 500;
	}

	.skill-level {
		font-family: var(--font-two);
		font-weight: 600;
		font-size: 1.1rem;
		color: var(--accent);
	}

	.skill-progress {
		margin-bottom: 1rem;
	}

	.progress-bar {
		height: 8px;
		background: var(--elevation-three);
		border-radius: 4px;
		overflow: hidden;
		position: relative;
	}

	.progress-fill {
		height: 100%;
		background: var(--color);
		border-radius: 4px;
		width: 0;
		transition: width 1.5s var(--bezier-one);
		position: relative;
		overflow: hidden;

		&.animate {
			width: var(--target-width);
		}

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(
				90deg, 
				transparent, 
				rgba(255, 255, 255, 0.3), 
				transparent
			);
			transform: translateX(-100%);
			animation: shimmer 2s ease-in-out infinite;
		}
	}

	@keyframes shimmer {
		0% { transform: translateX(-100%); }
		50% { transform: translateX(0%); }
		100% { transform: translateX(100%); }
	}

	.skill-experience {
		font-family: var(--font-two);
		font-size: 0.85rem;
		color: var(--text-secondary);
		text-align: right;
	}

	@media screen and (max-width: 768px) {
		.skills-grid {
			grid-template-columns: 1fr;
		}
		
		.filter-tabs {
			justify-content: center;
		}
		
		.title h2::before {
			@include outlineText($content: '{ }', $translateX: -70%, $translateY: -50%, $fontSize: 80px, $opacity: 0.1);
		}
		
		.skill-card {
			padding: 1.25rem;
		}
	}
</style>
