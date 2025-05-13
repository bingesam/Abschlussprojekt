<script>
  //let { books } = $props();
  export let books;
</script>

<div class="card">
<div class="books-card">
  <div>
    <img class="img-fluid" src={books.image} alt={books.title} />
  </div>
  <div class="details">
    <div class="title">
      <a href={"TODO" + books._id}>{books.title}</a>
    </div>
  </div>
  </div>
  <form method="post" action="?/delete">
    <input type="hidden" name="id" value={books._id} />
    <input type="hidden" name="collection" value="books" />
    <button class="btn btn-danger">Delete</button>
  </form>
</div>

<style>
  .card {
    height: 550px;
    background-color: #444;

    transition:
      transform 0.3s,
      box-shadow 0.3s;
    border: none;
    border-radius: 10px;
    overflow: hidden;
  }
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  .books-card {
    height: 100%;
    background-color: #444;
    color: white;
    border-radius: 10px;
    flex-direction: column;
    }

  .img-fluid {
    width: 100%;
    height: 200px;
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
    margin-bottom: 0.5em;
  }
  .title a {
    color: #f8d210;
    text-decoration: none;
  }
  .title a:hover {
    text-decoration: underline;
  }


 
.btn-danger {
  margin: 15px;
}

.btn-danger:hover {
  background-color: #912530;
}

</style>