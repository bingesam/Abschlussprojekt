<script>
  export let form;
</script>

<h2>Neues Buch hinzufügen</h2>

<form method="POST">
  <label for="title" class="form-label">Titel</label>
  <input type="text" name="title" id="title" class="form-control" required />

  <label for="author" class="form-label">Autor</label>
  <input type="text" id="author" name="author" class="form-control" required />

  <button type="submit" class="btn btn-primary mt-3">Buch speichern</button>
</form>

{#if form?.success}
  <p class="text-success mt-3">Buch wurde erfolgreich hinzugefügt!</p>
{/if}
