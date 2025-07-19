<script>
	import NavHost from '../components/molecules/NavHost.svelte';
	import Hero from '../components/organisms/Hero.svelte';
	import About from '../components/organisms/About.svelte';
	import Skills from '../components/organisms/Skills.svelte';
	import Timeline from '../components/organisms/Timeline.svelte';
	import CodePlaygroundSimple from '../components/organisms/CodePlaygroundSimple.svelte';
	import Blog from '../components/organisms/Blog.svelte';
	import MatrixEffect from '../components/organisms/MatrixEffect.svelte';
	import Terminal from '../components/organisms/Terminal.svelte';
	import Repos from '../components/organisms/Repos.svelte';
	import Supporters from '../components/organisms/Supporters.svelte';
	import Footer from '../components/molecules/Footer.svelte';
</script>

<NavHost />
<main>
	<Hero/>
	<About/>
	<Skills/>
	<Timeline/>
	<CodePlaygroundSimple/>
	<Blog/>
	<MatrixEffect/>
	<Terminal/>
	<Repos/>
	<Footer/>
</main>
