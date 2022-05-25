<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/components/Counter.svelte';
	import Toast from "$lib/toast";


	/**@type {HTMLAudioElement}*/
	let audioEl
	let currentTime
	let paused

	$: {
		// audioEl && audioEl.play()
	}

	const castSpell = () => {
		Toast('Hi mam...! I am a TAOST')
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="carusel">
	</div>
</section>

<section>
	<h1>
		<span class="target">to your new<br />SvelteKit app</span>
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>
	
	<hr>

	<audio 
		bind:this={audioEl}
		bind:currentTime 
		bind:paused
		src="/sounds/telephone-ring.mp3" controls ></audio>
	
	<div>
		<p>{paused}</p>
	</div>

	<div>
		<button on:click={() => castSpell()}>Cast spell</button>
	</div>

	<hr>	
	<Counter />
</section>

<style>

	section {
		/* display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1; */
		margin: 0 auto;
	}

	.carusel {
		aspect-ratio: var(--ratio-ultrawide);
		background-color: #cf1717;
		inline-size: calc(100vw - 64px);
    max-inline-size: 1200px;
		block-size: 45vh;
		border-radius: 2rem;
	}

	h1 {
		width: 100%;
	}
</style>
