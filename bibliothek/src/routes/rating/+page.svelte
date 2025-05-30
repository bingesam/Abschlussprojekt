<script>
  const { data } = $props();
</script>

<h3>Bewertungen</h3>

<div class="grid">
  {#each data.ratings as rating}
    <a class="card" href={`/rating/${rating.stars}`}>
      <h3>{rating.stars} Sterne</h3>
      <p>{rating.count} Bücher</p>
    </a>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .card {
    background-color: #444;
    color: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    transition: transform 0.2s;
  }

  .card:hover {
    transform: scale(1.05);
  }
</style>
