<script>
  const { genres, count } = $props();
  const backgroundImage = `/` + genres.name.toLowerCase().replace(/\s+/g, '_') + `_background.png`;
</script>

<div class="card" style="background-image: url({backgroundImage});">
  <div class="genres-card">
    <div class="details">
      <div class="name">
        <h3>{genres.name}</h3>
        <p>{genres.count} Bücher</p>
      </div>
    </div>
  </div>
</div>

<style>
  .card {
    height: 280px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    border: none;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.3s;
    margin-bottom: 1rem;
    position: relative;
  }

  .card:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .genres-card {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* halbtransparentes Overlay */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .name h3 {
    font-weight: bold;
    font-size: 3rem;
    margin: 0;
    color: #fff;
  }

  .name p {
    margin: 0;
    font-size: 1rem;
    color: #ddd;
  }
</style>
