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

	<div class="list">
		{#each categories as category}
			<div class="small-card">
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

	<div class="prosfores-outer"
		style="display:flex; align-items:center; gap:1rem; background:grey; border-radius:10px; padding:1rem; min-block-size: 35ch;"
	>
		<div style="margin-bottom: 5rem; text-align:center; flex:1;">
			<h4>Πτώσεις τιμών</h4>
			<p style="font-size:.9rem;">Όλες οι προσφορές συγκεντρωμένες σε μία σελίδα!</p>
			<button>Δες όλες τις προσφορές</button>
		</div>

		<div class="prosfores-list">
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

	<div style="flex-grow:1; background-color:rebeccapurple; block-size: 40ch; border-radius:20px;"></div>

	<div style="flex-grow:1; background-color:royalblue; block-size: 40ch; border-radius:20px;"></div>
</section>

<footer>
	<div class="row">
		<div>
			<header>
				<h4>Συνεργάτες</h4>
			</header>
			<div>
				<p>Έχεις συνεργείο;</p>
				<p>Είσαι προγραμματιστής;</p>
			</div>
		</div>

		<!-- -------------------------------- -->

		<div>
			<header>
				<h4>Αγορά μέσω e-shop</h4>
			</header>
			<div>
				<p>Πλεονεκτήματα</p>
				<p>Ασφάλεια αγορών</p>
				<p>Πολιτική επιστροφών</p>
			</div>
		</div>

		<!-- -------------------------------- -->

		<div>
			<header>
				<h4>Βοήθεια & Επικοινωνία</h4>
			</header>
			<div>
				<p class="text-overflow">Η παραγγελία μου μέσω Skroutz</p>
				<p class="text-overflow">Επιστροφές</p>
				<p class="text-overflow">Χρειάζεσαι περισσότερη βοήθεια;</p>
			</div>
		</div>

		<!-- -------------------------------- -->

		<div>
			<header>
				<h4>Εταιρεία</h4>
			</header>
		</div>
	</div>

	<div class="row" />
	<p>
		© 2022 GMParts Α.Ε. All Rights and Lefts reserved. <a>FAQ</a> -
		<a>Όροι χρήσης</a>
		| <a>Πολιτική Απορρήτου</a> | <a>Cookies</a>
	</p>
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

	.carusel {
		/* aspect-ratio:16/5; */
		background-color: #cf1717;
		inline-size: calc(100%);
		/* max-inline-size: 1200px; */
		block-size: clamp(30ch, 50vw, 45ch);
		border-radius: 2rem;
	}

	h1 {
		width: 100%;
	}

	.categories .list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(22ch, 1fr));
		gap: 1rem;
	}
	.small-card {
		background-color: #cf1717;
		/* inline-size: fit-content; */
		block-size: 20ch;
		border-radius: 10px;
		padding: 1rem;
	}
	.item {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}



	.prosfores-list {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		gap: 1rem;
	}
	.prosfores-item {
		flex-grow: 1;
		block-size: 36ch;
		min-inline-size: 14ch;
		max-inline-size: 26ch;
		background-color: white;
		color: black;
		border-radius: 20px;
		padding: .5rem 1rem;
	}

	footer {
		padding-inline: 2rem;
	}
	footer .row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(10ch, 1fr));
	}

	@media (max-width: 580px) {
		.prosfores-outer { flex-direction: column; }
	}
</style>
