<script>
  import BookCard from "$lib/components/BookCard.svelte";
  const {data} = $props();
</script>

<h2>Library</h2>
<div class="row">
  {#each data.books as book}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <BookCard book={book}/>
    </div>
  {/each}
</div>

<style>
</style>