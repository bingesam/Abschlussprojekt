<script>
    const {data} = $props();
    const book = data.book;
</script>

<h1>Book</h1>
<a href="/books">Back</a>

<p>ID: {data.book._id}</p>
<p>Titel: {data.book.title}</p>