<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '../../lib/i18n';

	interface TimelineEvent {
		id: string;
		titleKey: string;
		companyKey: string;
		periodKey: string;
		type: 'remote' | 'onSite' | 'hybrid';
		descriptionKey: string;
		technologies: string[];
		achievementKeys: string[];
	}

	let events: TimelineEvent[] = [
		{
			id: '1',
			titleKey: 'timeline.job1.title',
			companyKey: 'timeline.job1.company',
			periodKey: 'timeline.job1.period',
			type: 'remote',
			descriptionKey: 'timeline.job1.description',
			technologies: ['Node.js', 'Docker', 'SQL', 'Svelte', 'AWS', 'MongoDB', 'DevOps'],
			achievementKeys: [
				'timeline.job1.achievement1',
				'timeline.job1.achievement2',
				'timeline.job1.achievement3',
				'timeline.job1.achievement4',
				'timeline.job1.achievement5'
			]
		},
		{
			id: '2',
			titleKey: 'timeline.job2.title',
			companyKey: 'timeline.job2.company',
			periodKey: 'timeline.job2.period',
			type: 'onSite',
			descriptionKey: 'timeline.job2.description',
			technologies: ['Java', 'SQL', 'JBoss', 'Firebird', 'ERP'],
			achievementKeys: [
				'timeline.job2.achievement1',
				'timeline.job2.achievement2',
				'timeline.job2.achievement3',
				'timeline.job2.achievement4',
				'timeline.job2.achievement5'
			]
		},
		{
			id: '3',
			titleKey: 'timeline.job3.title',
			companyKey: 'timeline.job3.company',
			periodKey: 'timeline.job3.period',
			type: 'hybrid',
			descriptionKey: 'timeline.job3.description',
			technologies: ['tech.systemsAnalysis', 'tech.processAutomation', 'Java', 'SQL', 'tech.softwareQuality', 'tech.automatedTesting', 'tech.informationSystems'],
			achievementKeys: [
				'timeline.job3.achievement1',
				'timeline.job3.achievement2',
				'timeline.job3.achievement3',
				'timeline.job3.achievement4',
				'timeline.job3.achievement5'
			]
		},
		{
			id: '4',
			titleKey: 'timeline.job4.title',
			companyKey: 'timeline.job4.company',
			periodKey: 'timeline.job4.period',
			type: 'remote',
			descriptionKey: 'timeline.job4.description',
			technologies: ['Node.js', 'EJS', 'MySQL', 'Tailwind CSS', 'Java', 'Kotlin'],
			achievementKeys: [
				'timeline.job4.achievement1',
				'timeline.job4.achievement2',
				'timeline.job4.achievement3',
				'timeline.job4.achievement4',
				'timeline.job4.achievement5',
				'timeline.job4.achievement6'
			]
		}
	];

	let visibleEvents: boolean[] = [];

	function scrollHandler() {
		const timelineItems = document.querySelectorAll('.timeline-item');
		timelineItems.forEach((item, index) => {
			const rect = item.getBoundingClientRect();
			const isVisible = rect.top < window.innerHeight * 0.8;
			if (isVisible && !visibleEvents[index]) {
				visibleEvents[index] = true;
			}
		});
	}

	onMount(() => {
		visibleEvents = new Array(events.length).fill(false);
		
		// Initial check
		setTimeout(() => {
			scrollHandler();
		}, 100);

		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	});
</script>

<section id="experience" class="wrapper">
	<div class="title">
		<h2><span>{$t('timeline.career')}</span>:{$t('timeline.title')}</h2>
	</div>
	
	<div class="timeline">
		<div class="timeline-line"></div>
		{#each events as event, index}
			<div class="timeline-item {visibleEvents[index] ? 'visible' : ''} {event.type}" style="--delay: {index * 0.2}s">
				<div class="timeline-marker">
					<div class="marker-icon">
						{#if event.type === 'onSite'}
							💼
						{:else if event.type === 'remote'}
							🎓
						{:else}
							🚀
						{/if}
					</div>
				</div>
				
				<div class="timeline-content">
					<div class="content-header">
						<div class="event-info">
							<h3>{$t(event.titleKey)}</h3>
							<h4>{$t(event.companyKey)}</h4>
							<span class="period">{$t(event.periodKey)}</span>
						</div>
						<div class="event-type {event.type}">
							{$t(`timeline.workType.${event.type.replace('-', '')}`)}
						</div>
					</div>
					
					<p>{$t(event.descriptionKey)}</p>
					
					<div class="technologies">
						{#each event.technologies as tech}
							<span class="tech-tag">
								{tech.startsWith('tech.') ? $t(tech) : tech}
							</span>
						{/each}
					</div>
					
					<div class="achievements">
						<h5>{$t('timeline.keyAchievements')}</h5>
						<ul>
							{#each event.achievementKeys as achievementKey}
								<li>{$t(achievementKey)}</li>
							{/each}
						</ul>
					</div>
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
		margin-bottom: 4rem;
		
		h2 {
			position: relative;
			
			span {
				color: var(--accent);
			}
		}

		h2::before {
			@include outlineText($content: '>>>', $translateX: -90%, $translateY: -50%, $fontSize: 120px, $opacity: 0.15);
		}
	}

	.timeline {
		position: relative;
		padding-left: 2rem;
	}

	.timeline-line {
		position: absolute;
		left: 1.5rem;
		top: 0;
		bottom: 0;
		width: 2px;
		background: linear-gradient(
			to bottom,
			var(--accent),
			var(--accent-opacity),
			var(--accent)
		);
		
		&::before,
		&::after {
			content: '';
			position: absolute;
			left: 50%;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background: var(--accent);
			transform: translateX(-50%);
		}
		
		&::before {
			top: 0;
		}
		
		&::after {
			bottom: 0;
		}
	}

	.timeline-item {
		position: relative;
		margin-bottom: 4rem;
		opacity: 0;
		transform: translateX(-50px);
		transition: all 0.8s var(--bezier-one);

		&.visible {
			opacity: 1;
			transform: translateX(0);
			animation: slideInLeft 0.8s var(--bezier-one);
			animation-delay: var(--delay);
		}

		&:last-child {
			margin-bottom: 0;
		}
	}

	@keyframes slideInLeft {
		from {
			opacity: 0;
			transform: translateX(-50px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.timeline-marker {
		position: absolute;
		left: -2.75rem;
		top: 0;
		width: 3.5rem;
		height: 3.5rem;
		background: var(--elevation-one);
		border-radius: 50%;
		border: 3px solid var(--accent);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	.marker-icon {
		font-size: 1.5rem;
	}

	.timeline-content {
		background: var(--elevation-one);
		border-radius: 16px;
		padding: 2rem;
		margin-left: 2rem;
		border: 1px solid transparent;
		transition: all 0.3s var(--bezier-one);
		position: relative;

		&::before {
			content: '';
			position: absolute;
			left: -12px;
			top: 1rem;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 12px 12px 12px 0;
			border-color: transparent var(--elevation-one) transparent transparent;
		}

		&:hover {
			border-color: var(--accent);
			transform: translateY(-4px);
			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
		}
	}

	.content-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1.5rem;
		gap: 1rem;
	}

	.event-info {
		h3 {
			margin: 0 0 0.5rem 0;
			color: var(--text-primary);
			font-size: 1.4rem;
		}

		h4 {
			margin: 0 0 0.5rem 0;
			color: var(--accent);
			font-weight: 500;
		}
	}

	.period {
		font-family: var(--font-two);
		font-size: 0.9rem;
		color: var(--text-secondary);
		background: var(--elevation-three);
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
	}

	.event-type {
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-family: var(--font-two);
		font-weight: 500;
		text-transform: uppercase;
		
		&.onSite {
			background: #4CAF5033;
			color: #4CAF50;
		}
		
		&.remote {
			background: #2196F333;
			color: #2196F3;
		}
		
		&.hybrid {
			background: #FF980033;
			color: #FF9800;
		}
	}

	.timeline-content p {
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	.technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 2rem;
	}

	.tech-tag {
		background: var(--elevation-three);
		color: var(--text-secondary);
		padding: 0.4rem 0.8rem;
		border-radius: 16px;
		font-size: 0.8rem;
		font-family: var(--font-two);
		border: 1px solid var(--elevation-four);
		transition: all 0.2s ease;

		&:hover {
			background: var(--accent-opacity);
			color: var(--accent);
			border-color: var(--accent);
		}
	}

	.achievements {
		h5 {
			color: var(--text-primary);
			margin: 0 0 1rem 0;
			font-size: 1rem;
		}

		ul {
			list-style: none;
			padding: 0;
			margin: 0;

			li {
				position: relative;
				padding-left: 1.5rem;
				margin-bottom: 0.5rem;
				color: var(--text-secondary);
				line-height: 1.5;

				&::before {
					content: '▸';
					position: absolute;
					left: 0;
					color: var(--accent);
					font-weight: bold;
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		.timeline {
			padding-left: 1.5rem;
		}
		
		.timeline-marker {
			left: -2.25rem;
			width: 3rem;
			height: 3rem;
		}
		
		.marker-icon {
			font-size: 1.25rem;
		}
		
		.timeline-content {
			margin-left: 1.5rem;
			padding: 1.5rem;
		}
		
		.content-header {
			flex-direction: column;
			align-items: flex-start;
		}
		
		.title h2::before {
			@include outlineText($content: '>>>', $translateX: -70%, $translateY: -50%, $fontSize: 80px, $opacity: 0.1);
		}
	}
</style>
