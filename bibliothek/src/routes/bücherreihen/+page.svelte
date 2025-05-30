<script>
  import SeriesCard from "$lib/components/SeriesCard.svelte";
  const { data } = $props();
</script>

<div class="container">
  <div class="header">
    <h1>Bücherreihen</h1>
    <p class="subtitle">{data.series.length} Bücherreihen in der Bibliothek</p>
  </div>

  <div class="row g-4">
    {#each data.series as serie}
      <div class="col-12 col-sm-6 col-md-4">
        <SeriesCard series={serie} />
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
  }
  .header {
    text-align: center;
    margin-bottom: 3rem;
  }
  .header h1 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  .subtitle {
    color: #ccc;
    font-size: 1.1rem;
    margin: 0;
  }
</style>
