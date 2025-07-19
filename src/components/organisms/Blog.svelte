<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '../../lib/i18n';
	// Removendo imports problemáticos temporariamente
	// import { EyeIcon } from '@indaco/svelte-iconoir/eye';
	// import { CalendarIcon } from '@indaco/svelte-iconoir/calendar';
	// import { TagIcon } from '@indaco/svelte-iconoir/tag';

	interface BlogPost {
		id: string;
		title: string;
		excerpt: string;
		date: string;
		tags: string[];
		readTime: string;
		views: number;
	}

	let posts: BlogPost[] = [
		{
			id: '1',
			title: 'Building Scalable Node.js Applications',
			excerpt: 'Deep dive into creating robust and scalable backend systems with Node.js, covering architecture patterns, performance optimization, and best practices.',
			date: '2024-01-15',
			tags: ['Node.js', 'Backend', 'Architecture'],
			readTime: '8 min',
			views: 1247
		},
		{
			id: '2',
			title: 'Modern Flutter Development Techniques',
			excerpt: 'Exploring advanced Flutter patterns, state management solutions, and performance optimization techniques for mobile app development.',
			date: '2024-01-10',
			tags: ['Flutter', 'Dart', 'Mobile'],
			readTime: '12 min',
			views: 892
		},
		{
			id: '3',
			title: 'Microservices with Kotlin and Spring Boot',
			excerpt: 'Learn how to build distributed systems using Kotlin and Spring Boot, including service discovery, load balancing, and monitoring.',
			date: '2024-01-05',
			tags: ['Kotlin', 'Microservices', 'Spring'],
			readTime: '15 min',
			views: 2103
		}
	];

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<section id="blog" class="wrapper">
	<div class="title">
		<h2><span>dev</span>:{$t('blog.title')}</h2>
	</div>
	<div class="blog-grid">
		{#each posts as post}
			<article class="post-card">
				<div class="post-header">
					<div class="post-meta">
						<div class="meta-item">
							<span class="icon">📅</span>
							<span>{formatDate(post.date)}</span>
						</div>
						<div class="meta-item">
							<span class="icon">👁</span>
							<span>{post.views} {$t('blog.views')}</span>
						</div>
						<div class="meta-item">
							<span class="read-time">{post.readTime} {$t('blog.readTime')}</span>
						</div>
					</div>
				</div>
				<div class="post-content">
					<h3>{post.title}</h3>
					<p>{post.excerpt}</p>
					<div class="tags">
						{#each post.tags as tag}
							<span class="tag">
								<span class="icon">🏷</span>
								{tag}
							</span>
						{/each}
					</div>
				</div>
				<div class="post-footer">
					<button class="read-more">{$t('blog.readArticle')}</button>
				</div>
			</article>
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
			@include outlineText($content: '</>', $translateX: -90%, $translateY: -50%, $fontSize: 120px, $opacity: 0.15);
		}
	}

	.blog-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	.post-card {
		background: var(--elevation-one);
		border-radius: 16px;
		padding: 2rem;
		transition: all 0.3s var(--bezier-one);
		border: 1px solid transparent;
		position: relative;
		overflow: hidden;
		
		&:hover {
			transform: translateY(-4px);
			border-color: var(--accent);
			box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 3px;
			background: linear-gradient(90deg, var(--accent), var(--accent-opacity));
		}
	}

	.post-header {
		margin-bottom: 1.5rem;
	}

	.post-meta {
		display: flex;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.meta-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
		color: var(--text-secondary);
		font-family: var(--font-two);
		
		.icon {
			font-size: 1rem;
		}
	}

	.read-time {
		color: var(--accent) !important;
		font-weight: 500;
	}

	.post-content {
		h3 {
			margin-bottom: 1rem;
			color: var(--text-primary);
			line-height: 1.3;
		}

		p {
			margin-bottom: 1.5rem;
			line-height: 1.6;
		}
	}

	.tags {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		margin-bottom: 2rem;
	}

	.tag {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		background: var(--elevation-three);
		padding: 0.4rem 0.8rem;
		border-radius: 20px;
		font-size: 0.8rem;
		color: var(--text-secondary);
		font-family: var(--font-two);
		border: 1px solid var(--elevation-four);
		transition: all 0.2s ease;

		.icon {
			font-size: 0.7rem;
		}

		&:hover {
			background: var(--accent-opacity);
			color: var(--accent);
		}
	}

	.post-footer {
		display: flex;
		justify-content: flex-end;
	}

	.read-more {
		background: transparent;
		border: 1px solid var(--accent);
		color: var(--accent);
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-family: var(--font-two);
		font-size: 0.9rem;
		cursor: pointer;
		transition: all 0.3s var(--bezier-one);

		&:hover {
			background: var(--accent);
			color: var(--bg-color);
			transform: translateX(4px);
		}
	}

	@media screen and (max-width: 768px) {
		.blog-grid {
			grid-template-columns: 1fr;
		}
		
		.post-card {
			padding: 1.5rem;
		}
		
		.post-meta {
			flex-direction: column;
			gap: 0.75rem;
		}
		
		.title h2::before {
			@include outlineText($content: '</>', $translateX: -70%, $translateY: -50%, $fontSize: 80px, $opacity: 0.1);
		}
	}
</style>
