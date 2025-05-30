<script>
  import BookCard from "$lib/components/BookCard.svelte";

  const { data } = $props();

  let search = $state(""); // Suchtext (zustand)
  
  const filteredBooks = $derived.by(() =>
    data.books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    )
  );
</script>


<h3>Alle Bücher in deiner Bibliothek</h3>
<p><i>Data is from Mockaroo, Images generated with ChatGPT and DALL-E</i></p>

<input
  class="form-control mb-4"
  placeholder="Buchtitel durchsuchen..."
  bind:value={$search}
/>


<div class="row">
  {#each $filteredBooks as book}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <BookCard book={book}/>
    </div>
  {/each}
</div>


<style>
  input {
    max-width: 400px;
  }
</style>