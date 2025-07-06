---
title: 'gear.ts'
description: 'Explore my hardware and software setup. From a powerful computer with an i5-10400F, 16GB of RAM, RTX 3060, and more, to a Macbook Air M2 for work on the go. My favorite tools include NeoVIM, Tmux, iTerm, and Oh my zsh. I hosts my website and projects on Vercel. Discover my tech world!'
---

```ts
const hardware = {
	computers: [
		{
			name: 'Macbook Pro M3',
			desc: 'The sidekick I take on adventures (aka coffee shops). Sleek, powerful, and always ready to roll.',
			tags: ['Laptop']
		},
		{
			name: 'Logitech MX Keys Mini',
			desc: 'My classy compact 65% keyboard – perfect for keeping things stylish and minimal.',
			tags: ['Keyboard']
		},
		{
			name: 'Noir Z1',
			desc: 'My compact 65% layout keyboard',
			tags: ['Keyboard']
		},
		{
			name: 'Logitech MX Master 3S',
			desc: 'The all-rounder mouse I use for everything... except pwning noobs in games. 😅',
			tags: ['Mouse']
		}
	],
	monitors: [
		{
			name: 'Xiaomi Mi Curved Gaming Monitor 34',
			desc: 'The big boss on my desk! A 34" 1440p 144Hz curved beauty that makes everything look amazing.',
			tags: ['Monitor']
		}
	],
	audio: [
		{
			name: 'Steelseries Arctis 7',
			desc: 'A comfy wireless headset with awesome sound. No more cable tangles, and the chat mix feature is a total game-changer!',
			tags: ['Headphone']
		},
		{
			name: 'Redmi Buds 3 Pro',
			desc: 'The multitasker of my audio gear – noise canceling, dual Bluetooth connections, and perfect for on-the-go jams.',
			tags: ['Earbuds']
		}
	]
};

const software = [
	{
		name: 'Neovim',
		desc: 'My Swiss Army knife for everything text-related – from coding to taking notes. Neovim is life!',
		tags: ['Editor']
	},
	{
		name: 'Tmux',
		desc: 'Terminal multitasking wizardry – because tabs are too mainstream.',
		tags: ['Terminal']
	},
	{
		name: 'Ghostty',
		desc: 'A lightning-fast terminal emulator that’s as cool as it sounds, with GPU acceleration and all the bells and whistles.',
		tags: ['Terminal']
	},
	{
		name: 'Oh my zsh',
		desc: 'My shell of choice, spiced up with the awesome powerlevel10k theme.',
		tags: ['Terminal']
	}
];

const hosting = [
	{
		name: 'Vercel',
		desc: "Deploys so fast, it's practically magic! Git push, and voilà – my website is live.",
		tags: ['Hosting']
	}
];
```
