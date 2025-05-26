<script>
  let { children } = $props();
</script>

<title>MiniBibliothek</title>

<nav
  class="navbar navbar-expand-lg navbar-dark bg-black"
  style="padding-left: 130px;"
>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">MiniBibliothek</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/books">Bücher</a>
      </div>
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/create">Hinzufügen</a>
      </div>
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/bücherreihen">Bücherreihen</a>
      </div>
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/genres">Genres</a>
      </div>
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/rating">Rating</a>
      </div>
    </div>
  </div>
</nav>

<div class="container">
  {@render children()}
</div>

<style>
  :global(body) {
    background-color: black;
    color: white;
  }
</style>
