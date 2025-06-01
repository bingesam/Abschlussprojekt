<script>
  import BookCard from "$lib/components/BookCard.svelte";
  const { data } = $props();
  let searchQuery = $state("");

  //Suchfunktion
  function filterBooks(books, query) {
    if (!query) return books;
    return books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  }
</script>


<h3>Alle Bücher in deiner Bibliothek</h3>
<p><i>Data is from Mockaroo, Images generated with ChatGPT and DALL-E</i></p>

<input type="text" class="form-control mb-4" placeholder="Buchtitel suchen..." bind:value={searchQuery}/>

<div class="row">
  {#each filterBooks(data.books, searchQuery) as book}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <BookCard {book} />
    </div>
  {/each}
</div>


<style>
  input.form-control {
    max-width: 400px;
    margin-bottom: 1rem;
  }
</style>
