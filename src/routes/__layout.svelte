<script>
	import { page } from '$app/stores';
	// import Header from '$lib/components/header/Header.svelte';
	import '../app.css';
</script>

<!-- <Header /> -->
<header class="auth-header">
  <a href="/" class="logo-link">
    <span class="text-hidden">geroutsis.gr</span>
  </a>

	{#if $page.url.pathname == '/' }
	<form action="">
		<input type="search" name="" id="">
	</form>
	{/if}
	
</header>

<main>
	<slot />
</main>



<style>
	.auth-header {
    display: grid;
		gap: 3.5rem;
    min-block-size: clamp(14rem, 51vw, 25rem);
    align-content: center;
    justify-items: center;
  }

	.auth-header input {
		/* transform: translateY(35px); */
    padding: 0.75rem 1.5rem;
    max-inline-size: 78vw;
    inline-size: 450px;
	}

  .logo-link {
    display: block;
    aspect-ratio: 310/50;
    inline-size: clamp(13rem, 51vw, 18rem);
    background-image: url("/GMParts-logo.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .logo-link .text-hidden {
    opacity: 0;
  }
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
	}

	/* footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	} */

	/* footer a {
		font-weight: bold;
	} */

	@media (min-width: 480px) {
		/* footer {
			padding: 40px 0;
		} */
	}
</style>
