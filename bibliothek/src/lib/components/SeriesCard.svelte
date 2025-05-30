<script>
  const { series } = $props();
</script>

<div class="card">
  <div class="series-card">
    <div class="details">
      <div class="name">
        <h3>{series.name}</h3>
      </div>
      <div class="description">
        <p>{series.description}</p>
      </div>
    </div>
  </div>
</div>

<style>
  .card {
    height: 280px;
    background-color: darkgreen;
    transition:
      transform 0.2s,
      box-shadow 0.3s;
    border: none;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .card:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .series-card {
    height: 100%;
    background-color: darkgreen;
    color: white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .details {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
  }

  .name h3 {
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0;
    color: #fff;
    line-height: 1.3;
    word-wrap: break-word;
  }

  .description p {
    margin: 0;
    font-size: 0.95rem;
    color: #ccc;
    line-height: 1.4;
    overflow: hidden;
  }
</style>
