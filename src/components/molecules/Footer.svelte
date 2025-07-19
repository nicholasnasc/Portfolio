<script>
	import Tooltip from '../atoms/Tooltip.svelte';
	import Socials from './Socials.svelte';
	import LanguageSelector from '../atoms/LanguageSelector.svelte';
	import { t } from '../../lib/i18n';
</script>

<hr />
<footer class="wrapper">
	<Socials />
	<div class="center-content">
		<LanguageSelector />
	</div>
	<h6>
		{@html $t('footer.madeWith')}
		<Tooltip tip={$t('footer.youreHere')}><span>nickzin.dev</span></Tooltip>
		<Tooltip tip={$t('footer.personalBlog')}>
			<a href="https://v1.afn.im/" target="_blank" rel="noreferrer">blog.nickzin.dev</a>
		</Tooltip>
	</h6>
</footer>

<style lang="scss">
	hr {
		background-color: var(--elevation-one);
		height: 1px;
		border: 0;
		width: 100%;
		margin-bottom: 2rem;

		@media screen and (max-width: 768px) {
			margin-bottom: 1.5rem;
		}
	}

	footer {
		padding-bottom: 2.4rem;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: 2rem;

		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr;
			gap: 1.5rem;
			text-align: center;
		}
	}

	.center-content {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h6 {
		text-align: center;
		line-height: 2.5rem;
		margin-top: 0;
	}

	span {
		font-family: var(--font-two);
		background-color: var(--elevation-one);
		border-radius: 7px;
		padding: 0.15rem 0.5rem 0.15rem;
		width: fit-content;
		margin-left: 1rem;
		margin-right: 0.4rem;
	}

	a {
		transition: 0.3s var(--bezier-one);
		font-family: var(--font-two);
		text-decoration: none;
		color: var(--text-secondary);
		font-size: 0.9rem;
		border-radius: 7px;
		padding: 0.15rem 0.5rem 0.15rem;

		&:hover {
			font-weight: 400;
			background-color: var(--accent);
			color: var(--elevation-one);
			border-radius: 7px;
			width: fit-content;
		}
	}
</style>
