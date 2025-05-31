<script>
  const { book } = $props();
</script>

<div class="card">
  <div class="book-card">
    <div>
      <img class="img-fluid" src={book.image} alt={book.title} />
    </div>
    <div class="details">
      <div class="title">
        <!--<a href={"TODO" + book._id}>{book.title}</a>-->
        <p>
          <strong>Titel: </strong>
          <a href={`/books/${book._id}`} class="book-title-link">{book.title}</a
          >
        </p>
      </div>
      <div class="author">
        <p><strong>Autor: </strong> {book.author}</p>
      </div>
      <div class="status">
        <p><strong>Status: </strong> {book.status}</p>
      </div>
      <div class="rating">
        <p><strong>Stars: </strong> {book.rating}</p>
      </div>
    </div>
  </div>
  <div class="button-row">
    <!-- Delete -->
    <form method="post" action="?/delete" class="button-form">
      <input type="hidden" name="id" value={book._id} />
      <input type="hidden" name="books" value="books" />
      <button type="submit" class="btn btn-danger w-100">Delete</button>
    </form>

    <!-- Update -->
    <form method="get" action={`/books/${book._id}`} class="button-form">
      <button type="submit" class="btn btn-warning w-100">Update</button>
    </form>
  </div>
</div>

<style>
  .card {
    height: 570px;
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
  .book-card {
    height: 100%;
    background-color: #444;
    color: white;
    border-radius: 10px;
    flex-direction: column;
  }

  .img-fluid {
    width: 100%;
    height: 320px;
    object-fit: cover;
    background-color: #302f2f;
  }
  .details {
    padding: 1em;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 0.2em;
  }

  .btn-danger:hover {
    background-color: #912530;
  }

  p {
    margin: 0.2em 0;
  }
  
  .book-title-link {
    color: #fff;
    text-decoration: underline;
  }

  .book-title-link:hover {
    color: #f2c94c;
  }

  .button-row {
    display: flex;
    gap: 0.5rem; /*abstand zwischen buttons */
    padding: 0 0.8em 0.8em;
  }

  .button-form {
    flex: 1;
  }

  .btn-danger:hover {
    background-color: #912530;
  }

  .btn-warning:hover {
    background-color: #b57a00;
  }
</style>
