<script>
  const { data } = $props();
  const { book, genre, serie } = data;
</script>

<h3>{book.title}</h3>
<img src={`/${book.image}`} alt={book.title} class="img-fluid book-image" />

<ul>
  <li><strong>Autor:</strong> {book.author}</li>
  <li><strong>Status:</strong> {book.status}</li>
  <li><strong>Bewertung:</strong> {book.rating} Sterne</li>
  <li><strong>Genre:</strong> {genre?.name ?? '–'}</li><!--Nullish Coalescing Operators (??) in JS, falls es nicht existiert oder NULL ist wird ein Strich angezeigt-->
  <li><strong>Serie:</strong> {serie?.name ?? '–'}</li> 
</ul>


<a class="btn btn-secondary" href="/books">Zurück</a>


<style>
  .book-image {
    max-width: 300px;
    height: auto;
    display: block;
    margin: 1rem auto;
  }
  li {
    margin-bottom: 0.5rem;
  }

  h3 {
    text-align: center;
    margin-bottom: 1rem;
    color: white;
  }
</style>