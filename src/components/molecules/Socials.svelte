<script>
	import Social from '../atoms/Social.svelte';
	import { user } from '../../util/discord';

	import { GitHubIcon } from '@indaco/svelte-iconoir/github';
	import { DiscordIcon } from '@indaco/svelte-iconoir/discord';
	import { MailIcon } from '@indaco/svelte-iconoir/mail';
	import { CoffeeCupIcon } from '@indaco/svelte-iconoir/coffee-cup';
</script>

<div class="socials-container">
	<Social tip="nicholasnasc" link="https://github.com/nicholasnasc">
		<GitHubIcon color="var(--accent)" />
	</Social>

	<Social tip={user.username} link={`https://discord.com/users/${user.id}`}>
		<DiscordIcon color="var(--accent)" />
	</Social>

	<Social tip="hey@nickzin.dev" link="mailto:hey@nickzin.dev">
		<MailIcon color="var(--accent)" />
	</Social>

	<Social tip="mcpack" link="https://ko-fi.com/mcpack">
		<CoffeeCupIcon color="var(--accent)" />
	</Social>
</div>

<style>
	.socials-container {
		display: flex;
		gap: 0.75rem;
	}
</style>
