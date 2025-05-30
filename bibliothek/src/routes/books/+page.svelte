<script>
  import BookCard from "$lib/components/BookCard.svelte";
  const {data} = $props();
  let searchQuery = $state('');
</script>

<h3>Alle Bücher in deiner Bibliothek</h3>
<p><i>Data is from Mockaroo, Images generated with ChatGPT and DALL-E</i></p>


<div style="margin-bottom: 20px;">
  <input
    type="text"
    class="form-control"
    placeholder="Search..."
    bind:value={searchQuery}
  />
</div>


<div class="row">
  {#each data.books as book}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <BookCard book={book}/>
    </div>
  {/each}
</div>

<style>
</style>