<h1>Hier kommen Bücherreihen hin</h1>
<script>
  import SeriesCard from "$lib/components/SeriesCard.svelte";
  const {data} = $props();
</script>

<h2>Bücherreihe</h2>
<div class="row">
  {#each data.series as serie}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <BookCard serie={serie}/>
    </div>
  {/each}
</div>

<style>
/*   .series-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }

  .series-card {
    background-color: #222;
    padding: 1rem;
    border-radius: 10px;
    color: white;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
  }

  .series-card h2 {
    margin-top: 0;
    font-size: 1.3rem;
  }

  .series-card p {
    margin: 0.5rem 0 0;
    font-size: 0.95rem;
    color: #ccc;
  } */
</style>
