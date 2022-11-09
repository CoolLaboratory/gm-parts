<ul class="login-options">
  <li>
    <form action="/login" method="post" class="login-option google">
      <input
        type="hidden"
        name="authenticity_token"
        value="M1jmE485vhBg/fxLMZPflSV6cYtzkpj79NXhygj4nVDvx+kxcoUTTSjdl2dCv4fzA1wijLZQpZJffZwBRlFTeQ=="
      /><input type="hidden" name="google" value="yes" /><button
        class="icon"
        type="submit">Συνέχεια με Google</button
      >
    </form>
  </li>
  <li>
    <form action="/login" method="post" class="login-option facebook">
      <input
        type="hidden"
        name="authenticity_token"
        value="M1jmE485vhBg/fxLMZPflSV6cYtzkpj79NXhygj4nVDvx+kxcoUTTSjdl2dCv4fzA1wijLZQpZJffZwBRlFTeQ=="
      /><input type="hidden" name="facebook" value="yes" /><button
        class="icon"
        type="submit">Συνέχεια με Facebook</button
      >
    </form>
  </li>
  <li>
    <form action="/login" method="post" class="login-option apple">
      <input
        type="hidden"
        name="authenticity_token"
        value="M1jmE485vhBg/fxLMZPflSV6cYtzkpj79NXhygj4nVDvx+kxcoUTTSjdl2dCv4fzA1wijLZQpZJffZwBRlFTeQ=="
      /><input type="hidden" name="apple" value="yes" /><button
        class="icon"
        type="submit">Συνέχεια με Apple</button
      >
    </form>
  </li>
</ul>

<style>
  .login-options {
    display: grid;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1rem;
  }

  .login-options button {
    inline-size: 100%;
    padding: .75rem 2rem;
  }
</style>