<script>
  import { props, state } from 'svelte';

  const { form, series } = props();
  const selectedSeries = state("");
</script>

<h1>Buch hinzufügen</h1>

<form method="POST" action="?/create">
  <div class="row g-3">
    <div class="col">
      <label for="title" class="form-label">Titel</label>
      <input
        name="title"
        type="text"
        class="form-control"
        placeholder="Titel eingeben"
        required
      />
    </div>
    <div class="col">
      <label for="author" class="form-label">Autor</label>
      <input
        name="author"
        type="text"
        class="form-control"
        placeholder="Autor eingeben"
        required
      />
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
      <label for="genre" class="form-label">Genre</label>
      <select name="genre" class="form-control" required>
        <option value="" disabled selected>Wähle die Genre...</option>
        <option value="crime">Crime</option>
        <option value="mistery">Mistery</option>
        <option value="romance">Romance</option>
        <option value="science">Science</option>
      </select>
    </div>
  </div>

  <div class="row g-3">
    <div class="col">
      <label for="series" class="form-label">Teil einer Serie?</label>
      <select
        bind:value={$selectedSeries}
        class="form-control"
        name="series_id"
      >
        <option value="" disabled selected>Wähle eine Buchreihe...</option>
        {#each series as s}
          <option value={s._id}>{s.name}</option>
        {/each}
      </select>
    </div>
  </div>

  {#if selectedSeries === "yes"}
    <div class="row g-3 mt-2">
      <div class="col">
        <label for="series_id" class="form-label">Welche Serie?</label>
        <select name="series_id" class="form-control">
          <option value="" disabled selected>Wähle eine Bücherreihe...</option>
          {#each series as s}
            <option value={s._id}>{s.name}</option>
          {/each}
        </select>
      </div>
    </div>
  {/if}

  <button type="submit" class="btn btn-primary mt-3">Speichern</button>
</form>

{#if form?.success}
  <div class="alert alert-success mt-3">Buch erfolgreich hinzugefügt!</div>
{:else if form?.error}
  <div class="alert alert-danger mt-3">{form.error.message}</div>
{/if}
