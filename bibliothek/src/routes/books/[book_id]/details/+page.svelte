<script>
    const { data } = $props();
    const { book, genre, serie } = data;
</script>

<h3>{book.title}</h3>
<img src={book.image} alt={book.title} class="img-fluid book-image" />


<ul>
    <li><strong>Autor:</strong> {book.author}</li>
    <li><strong>Status:</strong> {book.status}</li>
    <li><strong>Bewertung:</strong> {book.rating} Sterne</li>
    <li><strong>Genre:</strong> {genre?.name ?? "–"}</li>
    <!--Nullish Coalescing Operators (??) in JS, falls es nicht existiert oder NULL ist wird ein Strich angezeigt-->
    <li><strong>Serie:</strong> {serie?.name ?? "–"}</li>
</ul>

<div class="d-flex gap-2 mt-4">
    <a class="btn btn-warning uniform-btn w-100" href={`/books/${book._id}`}>Update</a>
    <a class="btn btn-secondary uniform-btn w-100" href="/books">Zurück</a>
</div>

<style>
    .book-image {
        max-width: 300px;
        height: auto;
        display: block;
        margin: 1rem auto;
    }
    li {
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
    }

    h3 {
        text-align: center;
        margin-bottom: 1rem;
        color: white;
    }

    .uniform-btn {
        height: 42px; 
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
    }

    .btn-secondary {
        margin-top: 0;
    }
</style>
