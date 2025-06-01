<script>
  const { form, data } = $props();
  const { series, genres } = data;
</script>

<h3>Buch hinzufügen</h3>

<form method="POST" action="?/create">
  <div class="row g-3">
    <div class="col">
      <label for="title" class="form-label">Titel</label>
      <input name="title" type="text" class="form-control" placeholder="Titel eingeben" required />
    </div>
    <div class="col">
      <label for="author" class="form-label">Autor</label>
      <input name="author" type="text" class="form-control" placeholder="Autor eingeben" required />
    </div>
  </div>

  <div class="row g-3">
    <div class="col">
      <label for="status" class="form-label">Status</label>
      <select name="status" class="form-control" required>
        <option value="" disabled selected>Wähle den Status...</option>
        <option value="read">read</option>
        <option value="currently reading">currently reading</option>
        <option value="on hold">on hold</option>
        <option value="wanna read">wanna read</option>
      </select>
    </div>

    <div class="col">
      <label for="genre_id" class="form-label">Genre</label>
      <select name="genre_id" class="form-control" required>
        <option value="" disabled selected>Wähle das Genre...</option>
        {#each genres as g}
          <option value={g._id}>{g.name}</option>
        {/each}
      </select>
    </div>
  </div>

  <div class="row g-3">
    <div class="col">
      <label for="series_id" class="form-label">Teil welcher Serie?</label>
      <select name="series_id" class="form-control">
        <option value="" disabled selected>Wähle die Bücherreihe...</option>
        {#each series as s}
          <option value={s._id}>{s.name}</option>
        {/each}
      </select>
    </div>

    <div class="col">
      <label for="rating" class="form-label">Bewertung</label>
      <select name="rating" class="form-control">
        <option value="" disabled selected>Wähle deine Bewertung...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  </div>

  <button type="submit" class="btn btn-primary mt-3">Speichern</button>
</form>

{#if form?.success}
  <div class="alert alert-success mt-3">Buch erfolgreich hinzugefügt!</div>
{:else if form?.error}
  <div class="alert alert-danger mt-3">{form.error.message}</div>
{/if}

<style>
  .form-label {
    margin-top: 1rem;
  }
</style>
