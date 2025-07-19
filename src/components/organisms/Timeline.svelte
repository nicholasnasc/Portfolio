<script lang="ts">
	import { onMount } from 'svelte';

	interface TimelineEvent {
		id: string;
		title: string;
		company: string;
		period: string;
		type: 'work' | 'education' | 'project';
		description: string;
		technologies: string[];
		achievements: string[];
	}

	let events: TimelineEvent[] = [
		{
			id: '1',
			title: 'Systems Analyst & Data Management Specialist',
			company: 'Discloud',
			period: '2022 - Present',
			type: 'work',
			description: 'Leading the development of scalable cloud hosting solutions serving over 60,000 simultaneous users and 110,000 hosted applications.',
			technologies: ['Node.js', 'Docker', 'MongoDB', 'Redis', 'AWS'],
			achievements: [
				'Architected microservices handling 60K+ concurrent users',
				'Optimized database performance by 300%',
				'Led team of 5 developers',
				'Implemented CI/CD pipelines reducing deployment time by 80%'
			]
		},
		{
			id: '2',
			title: 'Full Stack Developer',
			company: 'Freelance',
			period: '2020 - 2022',
			type: 'work',
			description: 'Developed custom web and mobile applications for various clients, focusing on modern technologies and best practices.',
			technologies: ['React', 'Flutter', 'Node.js', 'PostgreSQL', 'TypeScript'],
			achievements: [
				'Delivered 20+ successful projects',
				'Maintained 98% client satisfaction rate',
				'Built e-commerce platforms handling $100K+ monthly transactions'
			]
		},
		{
			id: '3',
			title: 'Mobile App Developer',
			company: 'Tech Startup',
			period: '2019 - 2020',
			type: 'work',
			description: 'Specialized in Flutter development, creating cross-platform mobile applications with focus on performance and user experience.',
			technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'REST APIs'],
			achievements: [
				'Published 5 apps with 50K+ downloads',
				'Reduced app crash rate to < 0.1%',
				'Implemented real-time features for social apps'
			]
		},
		{
			id: '4',
			title: 'Computer Science',
			company: 'Universidade Federal do Ceará',
			period: '2022 - Present',
			type: 'education',
			description: 'Currently pursuing Computer Science degree, focusing on algorithms, data structures, and software engineering principles.',
			technologies: ['Python', 'Java', 'C++', 'Algorithms', 'Data Structures'],
			achievements: [
				'GPA: 8.5/10',
				'Active member of programming competitive team',
				'Teaching assistant for Data Structures course'
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
		<h2><span>career</span>:timeline</h2>
	</div>
	
	<div class="timeline">
		<div class="timeline-line"></div>
		{#each events as event, index}
			<div class="timeline-item {visibleEvents[index] ? 'visible' : ''} {event.type}" style="--delay: {index * 0.2}s">
				<div class="timeline-marker">
					<div class="marker-icon">
						{#if event.type === 'work'}
							💼
						{:else if event.type === 'education'}
							🎓
						{:else}
							🚀
						{/if}
					</div>
				</div>
				
				<div class="timeline-content">
					<div class="content-header">
						<div class="event-info">
							<h3>{event.title}</h3>
							<h4>{event.company}</h4>
							<span class="period">{event.period}</span>
						</div>
						<div class="event-type {event.type}">
							{event.type}
						</div>
					</div>
					
					<p>{event.description}</p>
					
					<div class="technologies">
						{#each event.technologies as tech}
							<span class="tech-tag">{tech}</span>
						{/each}
					</div>
					
					<div class="achievements">
						<h5>Key Achievements:</h5>
						<ul>
							{#each event.achievements as achievement}
								<li>{achievement}</li>
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
		
		&.work {
			background: #4CAF5033;
			color: #4CAF50;
		}
		
		&.education {
			background: #2196F333;
			color: #2196F3;
		}
		
		&.project {
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
