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
        <p><strong>Titel:  </strong> {book.title}</p>
      </div>
      <div class="author">
        <p><strong>Autor: </strong> {book.author}</p>
      </div>
      <div class="status">
        <p><strong>Status: </strong> {book.status}</p>
      </div>
    </div>
  </div>
  <form method="post" action="?/delete">
    <input type="hidden" name="id" value={book._id} />
    <input type="hidden" name="books" value="books" />
    <button class="btn btn-danger">Delete</button>
  </form>
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
  .book-card {
    height: 100%;
    background-color: #444;
    color: white;
    border-radius: 10px;
    flex-direction: column;
  }

  .img-fluid {
    width: 100%;
    height: 330px;
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

  .btn-danger {
    margin: 15px;
  }

  .btn-danger:hover {
    background-color: #912530;
  }

  p {
    margin: 0.2em 0;
  }
</style>
