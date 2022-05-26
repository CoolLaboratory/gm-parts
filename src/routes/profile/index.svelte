<script>
  let user = {
    fullname: 'Angelos Koulouris',
    email: 'aggelos.koulouris0@gmail.com',
    type: 'Simple User'
  }
</script>



<div class="profile-header">

  <div class="row">
    <section>
      <div class="user-image">
        <div class="avatar">
          <span class="initials">{'AK'}</span>
        </div>
      </div>

      <div class="user-info">
        <span class="msg">Welcome back,</span>
        <span class="name">{user.fullname}</span>
        <span class="type">{user.type}</span>
      </div>      
    </section>

    <section>
      <button style="color: red;" class="icon-button outlined">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      </button>
    </section>
  </div>



</div>
<h2>Profile Page</h2>
<span>{user.email}</span>



<style lang="postcss">

  .profile-header {
    background-color: var(--surface-1);
    border-radius: 8pt;
    /* block-size: 10rem; */
    margin: 1.25rem 2rem;
    padding: 1.25rem 2rem;
  }

  .row {
    display: flex;
    /* block-size: 100%; */
  }
  .row section:first-of-type {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 2rem;
    /* margin: 1.25rem 0 2rem; */
  }



  .avatar {
    aspect-ratio: 1/1;
    display: grid;
    block-size: 4rem;
    place-items: center;
    background-color: teal;
    color: #fff;
    border-radius: 50%;
  }
  .avatar .initials {
    font-size: 18px;
  }
  .user-info {
    display: inline-grid;
    gap: .75rem;

  }
  .name {font-size: 2rem;}
  .msg, .type {
    color: var(--text-secondary);
  }
</style>