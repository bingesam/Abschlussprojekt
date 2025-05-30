<script>
  const { data } = $props();
</script>

<h3>Bücher mit {data.stars} Sternen</h3>

{#if data.books.length === 0}
  <p>Keine Bücher mit dieser Bewertung.</p>
{:else}
  <div class="grid">
    {#each data.books as book}
      <div class="book-card">
        <h3>{book.title}</h3>
        <p>von {book.author}</p>
      </div>
    {/each}
  </div>
{/if}

<div class="text-center mt-5">
  <a href="/rating" class="btn btn-outline-light">Zurück zur Übersicht</a>
</div>

<style>
  h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: white;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding: 0 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .book-card {
    background-color: #222;
    padding: 2rem;
    border-radius: 12px;
    color: white;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    transition: transform 0.2s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .book-card:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
  }

  .book-card h3 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
  }

  .book-card p {
    margin: 0;
    font-size: 0.95rem;
    color: #ccc;
  }
  .btn-outline-light:hover {
    background-color: darkgreen;
  }
</style>
