<script>  
  import LoginProviders from '$lib/components/auth/LoginProviders.svelte';
  import PasswordLink from '$lib/components/auth/PasswordLink.svelte'
  import Divider from '$lib/components/Divider.svelte';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' });
  }
</script>


<svelte:head>
  <title>GMParts | Sign In</title>
</svelte:head>


<div class="card">
  <h1 class="title">Συνέχεια με το λογαριασμό σου</h1>
  <div>
    <p class="subtitle">
      Κάνε σύνδεση ή εγγραφή με έναν από τους παρακάτω τρόπους.
    </p>
    <LoginProviders />
    <Divider text={'ή συνέχεια με το email σου'} />
    <PasswordLink />

    <div class="subtitle">
      <p>
        Με τη σύνδεση ή εγγραφή σου αποδέχεσαι ότι συμφωνείς με τους <a href="#/">Όρους Χρήσης</a> και την <a href="#/">Πολιτική Απορρήτου</a>.
      </p>
    </div>
  </div>
</div>



<style>
  

  .card {
    min-block-size: 100vh;
    max-inline-size: 480px;
    inline-size: 100%;
    background-color: var(--surface-1);
    color: var(--on-surface-1);
    margin: 0 auto;
    padding: clamp(35px, 10vw, 88px) clamp(16px, 5vw, 56px) 24px;
    box-sizing: border-box;
  }

  .card .title {
    font-size: clamp(14px, 5vw, 20px);
    font-weight: bold;
  }
  .card .subtitle {
    font-size: clamp(12px, 3vw, 15px);
    color: var(--text-secondary);
    text-align: center;
    margin: 2rem 0 1.5rem;
  }
  
</style>
