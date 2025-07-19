<script lang="ts">
	import { currentLanguage, setLanguage, languageNames, t, type Language } from '../../lib/i18n';
	import { onMount } from 'svelte';
	
	let isOpen = false;
	let buttonRef: HTMLButtonElement;
	
	function toggleDropdown() {
		isOpen = !isOpen;
	}
	
	function selectLanguage(lang: Language) {
		setLanguage(lang);
		isOpen = false;
	}
	
	function handleClickOutside(event: MouseEvent) {
		if (buttonRef && !buttonRef.contains(event.target as Node)) {
			isOpen = false;
		}
	}
	
	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});

	const flags: { [K in Language]: string } = {
		en: '🇺🇸',
		pt: '🇧🇷', 
		fr: '🇫🇷',
		es: '🇪🇸',
		ja: '🇯🇵'
	};
</script>

<div class="language-selector">
	<button 
		bind:this={buttonRef}
		class="language-button"
		on:click={toggleDropdown}
		aria-label={$t('language.select')}
	>
		<span class="flag">{flags[$currentLanguage]}</span>
		<span class="language-name">{languageNames[$currentLanguage]}</span>
		<span class="arrow" class:rotated={isOpen}>
			<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
				<path d="M2.5 4.5L6 8L9.5 4.5"/>
			</svg>
		</span>
	</button>
	
	{#if isOpen}
		<div class="dropdown">
			{#each Object.entries(languageNames) as [lang, name]}
				<button
					class="dropdown-item"
					class:active={$currentLanguage === lang}
					on:click={() => selectLanguage(lang)}
				>
					<span class="flag">{flags[lang]}</span>
					<span class="language-name">{name}</span>
				</button>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.language-selector {
		position: relative;
		z-index: 1000;
	}

	.language-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		background: var(--elevation-one);
		border: 1px solid var(--elevation-two);
		border-radius: 8px;
		color: var(--text-primary);
		font-family: var(--font-two);
		font-size: 0.9rem;
		cursor: pointer;
		transition: all 0.2s ease;

		&:hover {
			background: var(--elevation-two);
			border-color: var(--accent);
		}
	}

	.flag {
		font-size: 1.1rem;
		line-height: 1;
	}

	.language-name {
		font-weight: 400;
		white-space: nowrap;

		@media screen and (max-width: 768px) {
			display: none;
		}
	}

	.arrow {
		display: flex;
		align-items: center;
		transition: transform 0.2s ease;
		color: var(--text-secondary);

		&.rotated {
			transform: rotate(180deg);
		}
	}

	.dropdown {
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: 0.5rem;
		background: var(--elevation-one);
		border: 1px solid var(--elevation-two);
		border-radius: 8px;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
		overflow: hidden;
		min-width: 140px;
		animation: fadeInUp 0.2s ease;
	}

	.dropdown-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		padding: 0.75rem;
		background: transparent;
		border: none;
		color: var(--text-primary);
		font-family: var(--font-two);
		font-size: 0.9rem;
		cursor: pointer;
		transition: all 0.2s ease;
		text-align: left;

		&:hover {
			background: var(--elevation-two);
		}

		&.active {
			background: var(--accent-opacity);
			color: var(--accent);
			font-weight: 500;
		}

		.flag {
			font-size: 1.1rem;
		}

		.language-name {
			font-weight: 400;
		}
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateX(-50%) translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
		}
	}

	@media screen and (max-width: 768px) {
		.language-button {
			padding: 0.4rem 0.6rem;
			font-size: 0.8rem;
		}

		.dropdown {
			min-width: 120px;
		}
	}
</style>
