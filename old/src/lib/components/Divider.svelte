<script>
  export let text
</script>

<div class="divider">
  <hr>
  <span>{text}</span>
  <hr>
</div>

<style>
  .divider {
    display: inline-flex;
    align-items: center;
    gap: .75rem;
    font-size: clamp(11px, 3vw, 14px);
    color: var(--text-secondary);
    inline-size: 100%;
    margin: 2rem 0;
  }
  .divider hr { 
    flex: 1;
    border-bottom: none;
    border-top: none;
    border-style: solid;
    border-color: currentColor;
    border-width: 0.5px;
  }
</style>