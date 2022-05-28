<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from "$lib/components/Counter.svelte";
	import Toast from "$lib/toast";

	export let categories;

	/**@type {HTMLAudioElement}*/
	let audioEl;
	let currentTime;
	let paused;

	$: {
		// audioEl && audioEl.play()
	}

	const castSpell = () => {
		Toast("Hi mam...! I am a TAOST");
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="carusel" />
</section>

<section class="categories">
	<h2>Κατηγορίες προϊόντων</h2>

	<div class="list snap-x snap-mandatory pb-2">
		{#each categories as category}
			<div class="small-card snap-start">
				<span>
					{category.name}
				</span>

				<br /><br />

				{#each category.subcategories as sub}
					<div class="item">{sub.name}</div>
				{/each}
			</div>
		{/each}
	</div>
</section>

<section>
	<h2>Προϊόντα σε προσφορά</h2>

	<div class="prosfores-outer" style="">
		<div class="prosfores-greed">
			<h4>Πτώσεις τιμών</h4>
			<p style="font-size:.9rem;">
				Όλες οι προσφορές συγκεντρωμένες σε μία σελίδα!
			</p>
			<button>Δες όλες τις προσφορές</button>
		</div>

		<div class="prosfores-list snap-x snap-mandatory">
			<div class="prosfores-item">
				<header><span>-25%</span></header>
			</div>
			<div class="prosfores-item">
				<header><span>-25%</span></header>
			</div>
			<div class="prosfores-item">
				<header><span>-25%</span></header>
			</div>
			<div class="prosfores-item">
				<header><span>-25%</span></header>
			</div>
		</div>
	</div>
</section>

<section style="display:flex; flex-wrap:wrap; gap:1rem;">
	<div
		style="flex-grow:1; background-color:rebeccapurple; block-size: 40ch; border-radius:20px;"
	/>

	<div
		style="flex-grow:1; background-color:royalblue; block-size: 40ch; border-radius:20px;"
	/>
</section>

<footer>
	<div class="row mb-8">
		<section>
			<header>
				<h4>Συνεργάτες</h4>
			</header>
			<div class="grid gap-1 mt-6">
				<a href="/sinergates" class="text-black/60 dark:text-white/50">Έχεις συνεργείο;</a>
				<a href="#/" class="text-black/60 dark:text-white/50">Είσαι προγραμματιστής;</a>
			</div>
		</section>

		<!-- -------------------------------- -->

		<section>
			<header>
				<h4>Αγορά μέσω e-shop</h4>
			</header>
			<div class="grid gap-1  mt-6">
				<a href="#/" class="text-black/60 dark:text-white/50">Πλεονεκτήματα</a>
				<a href="#/" class="text-black/60 dark:text-white/50">Ασφάλεια αγορών</a>
				<a href="#/" class="text-black/60 dark:text-white/50">Πολιτική επιστροφών</a>
			</div>
		</section>

		<!-- -------------------------------- -->

		<section>
			<header>
				<h4>Βοήθεια & Επικοινωνία</h4>
			</header>
			<div class="grid gap-1  mt-6">
				<a href="#/" class="text-black/60 dark:text-white/50 text-overflow">Η παραγγελία μου μέσω Skroutz</a>
				<a href="#/" class="text-black/60 dark:text-white/50 text-overflow">Επιστροφές</a>
				<a href="#/" class="text-black/60 dark:text-white/50 text-overflow"
					>Χρειάζεσαι περισσότερη βοήθεια;</a
				>
			</div>
		</section>

		<!-- -------------------------------- -->

		<section>
			<header>
				<h4>Εταιρεία</h4>
			</header>
			<div class="text-white/50 grid gap-1  mt-6" />
		</section>
	</div>

	<div class="row">
		<p class="my-6">
			© 2022 GMParts Ο.Ε. All Rights and Lefts reserved. <a href="#/">FAQ</a> -
			<a href="#/">Όροι χρήσης</a> <a href="#/">Πολιτική Απορρήτου</a> | <a href="#/">Cookies</a>
		</p>
	</div>
</footer>

<style>
	.text-overflow {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	section {
		/* display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1; */
		inline-size: 95vw;
		margin: 0 auto 5rem;
	}

	section > h2 {
		margin-bottom: 2rem;
	}

	.carusel {
		/* aspect-ratio:16/5; */
		background-color: #cf1717;
		inline-size: calc(100%);
		/* max-inline-size: 1200px; */
		block-size: clamp(30ch, 50vw, 45ch);
		border-radius: 2rem;
	}

	.categories .list {
		display: flex;
		/* display: grid;
		grid-template-columns: repeat(auto-fit, minmax(22ch, 1fr)); */
		gap: 1rem;
		overflow-x: auto;
	}
	.small-card {
		flex-shrink: 0;
		background-color: hsl(0, 15%, 20%);
		color: hsl(0, 0%, 88%);
		inline-size: 24ch;
		block-size: 33ch;
		border-radius: 10px;
		padding: 1rem;
	}
	/* .small-card:nth-child(1) { background-color: #0d6b5b; }
	.small-card:nth-child(2) { background-color: #2e0d6b; }
	.small-card:nth-child(3) { background-color: #0d6b1a; }
	.small-card:nth-child(4) { background-color: #6b0d2c; }
	.small-card:nth-child(5) { background-color: #626b0d; }
	.small-card:nth-child(6) { background-color: #6b1b0d; } */
	.item {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.prosfores-outer {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: grey;
		border-radius: 10px;
		padding: 1rem;
		min-block-size: 35ch;
	}

	.prosfores-greed {
		flex: 1;
		min-inline-size: 40ch;
		text-align: center;
		margin-block: 4rem;
	}
	.prosfores-list {
		display: flex;
		overflow-x: auto;
		/* flex-wrap: wrap; */
		flex-direction: row;
		inline-size: 100%;
		gap: 1rem;
	}
	.prosfores-item {
		scroll-snap-align: start;
		flex-grow: 1;
		block-size: 36ch;
		min-inline-size: 20ch;
		max-inline-size: 26ch;
		background-color: white;
		color: black;
		border-radius: 20px;
		padding: 0.5rem 1rem;
	}

	footer {
		padding-inline: 2rem;
	}
	footer .row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14ch, 1fr));
		gap: 1.5rem;
	}

	footer .row section {
		inline-size: fit-content;
		margin: 0;
	}

	@media (max-width: 817px) {
		.prosfores-outer {
			flex-direction: column;
		}
		.prosfores-greed {
			min-inline-size: 0;
			margin-block: 2rem;
		}

		footer .row {
			grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
		}
	}
</style>
