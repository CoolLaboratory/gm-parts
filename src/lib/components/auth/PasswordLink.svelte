<script>
  import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
  import isEmail from "$lib/utils/isEmail";


  
  import {fade} from 'svelte/transition'
  import { goto } from "$app/navigation";

  /**
   * @readonly
   * @enum {(string|Error})} */
   const FormState = {
    "IDLE": "idle",
    "SUBMITTING": "submitting",
    "SUCCESS": "success",
    "ERROR": Error
  }


  let state = FormState.IDLE
  let email = 'angelos.koulouris0@gmail.com'
  let helpMessage = ''

  $: is_email = isEmail(email)

  async function sendLink() {

    const uri = `${location.origin}/auth/finishSignUp`
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: uri, //'https://www.example.com/finishSignUp?cartId=1234',
      // This must be true.
      handleCodeInApp: true,
    };

    const auth = getAuth(getClientApp());

    try {
      state = FormState.SUBMITTING
      await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      localStorage.setItem('validation_email', email)
      state = FormState.SUCCESS

      goto('/auth/thx')
    } catch (error) {
      state = error
    }




  }




</script>

{state}
{#if state == FormState.IDLE}

<div 
  class="password-form"
  out:fade={{duration: .3}}
>
  <input type="email" placeholder="Email" bind:value={email}>
  <button 
    disabled={!is_email || state == FormState.SUBMITTING}
    on:click={sendLink}
  >Συνέχεια</button>
  <p class="helper">
    {helpMessage}
  </p>
  <p class="subtitle">
    Βρίσκομαι σε κοινόχρηστο υπολογιστή
  </p>
</div>

{:else if state == FormState.SUCCESS}
  <p in:fade={{delay: .3}}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem magni illum blanditiis minima! Quibusdam voluptates ipsam reiciendis. Ad autem accusamus, adipisci expedita aliquam blanditiis. In eveniet reprehenderit saepe optio?</p>
{:else if state == FormState.Error}
  <p in:fade={{delay: .3}}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem magni illum blanditiis minima! Quibusdam voluptates ipsam reiciendis. Ad autem accusamus, adipisci expedita aliquam blanditiis. In eveniet reprehenderit saepe optio?</p>
{/if}

<style>
  

  .password-form {
    display: grid;
    gap: 1.25rem;
  }

  .helper { margin: 0; }

  .password-form input, 
  .password-form button {
    font-size: 1.1rem;
    padding: .75rem 2rem;
  }
</style>