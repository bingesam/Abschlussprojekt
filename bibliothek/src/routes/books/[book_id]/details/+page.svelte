<script>
  const { data } = $props();
  const { book, genre, series } = data;
</script>

<h1>{book.title}</h1>

<ul>
  <li><strong>Autor:</strong> {book.author}</li>
  <li><strong>Status:</strong> {book.status}</li>
  <li><strong>Bewertung:</strong> {book.rating}</li>
  <li><strong>Genre:</strong> {genre?.name}</li>
  <li><strong>Serie:</strong> {series?.name}</li>
</ul>

<a class="btn btn-secondary" href="/books">Zurück</a>
