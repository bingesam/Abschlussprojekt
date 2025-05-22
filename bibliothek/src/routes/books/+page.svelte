<script>
  //export let data;
  //export let book;
  import BookCard from "$lib/components/BookCard.svelte";
  let {data} = $props();
</script>

<h2>Library</h2>
<!--<button type="button" class="btn btn-primary"><a href="/create">Add Book</a></button>-->
<div class="row">
  {#each data.books as book}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <BookCard book={book}/>
<!--       <form action="?/delete" method="POST">
        <input type="hidden" name="id" value={book._id}>
        <button class="btn btn-danger">Delete</button>
      </form> -->
    </div>
  {/each}
</div>

<style>
/*   button {
    margin: 1rem;
  }
  button a{
    color: white;
    text-decoration: none;
  } */
</style>