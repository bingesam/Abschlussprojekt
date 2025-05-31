<script>
  const { data, form } = $props();
  const { book, genres, series } = data;
</script>

<h1>Buch bearbeiten</h1>

<form method="POST">
  <label>
    Titel:
    <input name="title" type="text" value={book.title} required />
  </label>

  <label>
    Autor:
    <input name="author" type="text" value={book.author} required />
  </label>

  <label>
    Status:
    <select name="status" required>
      <option value="read" selected={book.status === "read"}>read</option>
      <option value="on hold" selected={book.status === "on hold"}>on hold</option>
      <option value="currently reading" selected={book.status === "currently reading"}>currently reading</option>
      <option value="wanna read" selected={book.status === "wanna read"}>wanna read</option>
    </select>
  </label>

  <label>
    Rating:
    <input name="rating" type="number" min="1" max="5" value={book.rating} required />
  </label>

  <label>
    Genre:
    <select name="genre_id" required>
      {#each genres as g}
        <option value={g._id} selected={Number(g._id) === Number(book.genre_id)}>{g.name}</option>
      {/each}
    </select>
  </label>

  <label>
    Series:
    <select name="series_id">
      {#each series as s}
        <option value={s._id} selected={Number(s._id) === Number(book.series_id)}>{s.name}</option>
      {/each}
    </select>
  </label>

  <button type="submit" class="btn btn-primary mt-3">Speichern</button>
  <a href="/books" class="btn btn-secondary w-100 mt-3">Zurück</a>
</form>

{#if form?.success}
  <div class="alert alert-success mt-3">Buch erfolgreich geändert!</div>
{:else if form?.error}
  <div class="alert alert-danger mt-3">{form.error.message}</div>
{/if}

<style>
  form {
    max-width: 600px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
  }

  input,
  select {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  label {
    display: flex;
    flex-direction: column;
  }
</style>
