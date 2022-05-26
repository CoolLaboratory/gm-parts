<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`
      }
    };
  }
</script>

<script>
  export let title;
</script>

<h1>{title}</h1>

<h1>Dashboard error</h1>
<p>Αυτό που ψάχνεις δεν υπάρχει εδώ.</p>