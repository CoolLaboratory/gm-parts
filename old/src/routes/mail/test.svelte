<script>
  import { enhance } from "$lib/form"

  export let error
  export let message = 'enter recipients email address and press <strong>enter</strong>'
</script>


<svelte:head>
	<title>Mail test</title>
</svelte:head>

<h1>Mail test</h1>

{#if error}
we have an error 
<br>
{error}
{/if}

<form action="/mail/test" method="post" use:enhance={{
  result: async ({ data, form, response }) => {
    error = false
    const res = await response.json()
    message = res.message
  },
  error: async ({ data, form, error: e, response }) => {
    console.log('We have an ERROR')
    error = true
    if(!e) {
      const res = await response.json()
      
      console.log(res)

      message = res.error
    }
  }
}}>

  <div class="input-control"
      class:hasError={!!error}>
    <input id="emailInput" type="email" name="to" placeholder=" ">
    <label for="emailInput">Email <span>*</span></label>
    <div>
      <p style="
          block-size: 18px;
          margin: 0 0 4px 0;
          color: var(--text-secondary);
      ">{@html message || error}</p>
    </div>
  </div>

</form>

<style>
  .input-control {
    display: grid;
    grid-template-areas: "label" "input" "helper";
    gap: 0.5rem;
    background-color: var(--surface-1);
    padding: .5rem 1rem;
  }

  .input-control input {
    grid-area: input;
    font-size: 1.1rem;
    padding: .5rem 1.5rem;
  }
  .input-control label {
    display: inline-block;
    grid-area: label;
    font-size: 1.1rem;
    color: var(--text-secondary);
    inline-size: fit-content;
    transform: translate(27px, 38px) scale(1);
    transition: transform .3s ease-in-out;
  }



  .input-control:focus-within >  label, 
  .input-control input:not(:placeholder-shown) ~ label {
    color: var(--text-on-surface-1);
    transform: translate(0, 0) scale(.9);
  }
</style>