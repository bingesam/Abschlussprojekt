<script>
    const { series } = $props();
</script>

<div class="card">
  <div class="series-card">
    <div class="details">
      <div class="name">
        <p><strong>Name:  </strong> {series.name}</p>
      </div>
      <div class="description">
        <p><strong>Beschreibung: </strong> {series.description}</p>
      </div>
    </div>
  </div>
</div>

<style>
  .card {
    height: 550px;
    background-color: #444;

    transition:
      transform 0.2s,
      box-shadow 0.3s;
    border: none;
    border-radius: 15px;
    overflow: hidden;
  }
  .card:hover {
    transform: scale(1.025);
    /*box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);*/
  }
  .series-card {
    height: 100%;
    background-color: #444;
    color: white;
    border-radius: 10px;
    flex-direction: column;
  }
  .details {
    padding: 1em;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .name {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 0.2em;
  }

  p {
    margin: 0.2em 0;
  }
</style>
