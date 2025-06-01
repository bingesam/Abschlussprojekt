import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("MiniBibliothekDB"); // select database

// Get all books
async function getBooks() {
  let books = [];
  try {
    const collection = db.collection("books");
    const query = {};

    // Get all objects that match the query
    books = await collection.find(query).toArray();
    books.forEach((book) => {
      book._id = book._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return books;
}

// Get book by id
async function getBook(id) {
  let book = null;
  try {
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) }; // filter by id
    book = await collection.findOne(query);

    if (!book) {
      console.log("No book with id " + id);
    } else {
      book._id = book._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    console.log(book.message);
  }
  return book;
}


//crete book
async function createBook(book) {
  const genreId = Number(book.genre_id);

  const genreImages = {
    1: "/crime2.png",
    2: "/mystery2.png",
    3: "/science2.png",
    4: "/romance2.png"
  };

  book.image = genreImages[genreId] ?? "/default.png";

  try {
    const collection = db.collection("books");
    const result = await collection.insertOne(book);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }

  return null;
}



//delete book by id
async function deleteBook(id) {
  try {
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No book with id " + id);
    } else {
      console.log("Book with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}


// Get all series
async function getSeries() {
  let series = [];
  try {
    const collection = db.collection("series");
    const query = {};
    series = await collection.find(query).toArray();
  } catch (error) {
    console.log("Fehler beim Laden der Serien:", error);
  }
  return series;
}


// Get serie by id
async function getSerie(id) {
  let serie = null;
  try {
    const collection = db.collection("series");
    const query = { _id: parseInt(id) }; // statt: new ObjectId(id)

    serie = await collection.findOne(query);

    if (!serie) {
      console.log("No serie with id " + id);
    } else {
      serie._id = serie._id.toString(); //convert
    }
  } catch (error) {
    console.log(serie.message);
  }
  return serie;
}


// Get all genres
async function getGenres() {
  let genres = [];
  try {
    const collection = db.collection("genres");
    const query = {};
    genres = await collection.find(query).toArray();
  } catch (error) {
    console.log("Fehler beim Laden der Genren:", error);
  }
  return genres;
}

// Get genre by id
async function getGenre(id) {
  let genre = null;
  try {
    const collection = db.collection("genres");
    const query = { _id: parseInt(id) }; // statt new ObjectId(id)

    genre = await collection.findOne(query);

    if (!genre) {
      console.log("No genre with id " + id);
    } else {
      genre._id = genre._id.toString(); // convert
    }
  } catch (error) {
    console.log(genre.message);
  }
  return genre;
}


// counter for books by genre
function getImageByGenreId(genre_id) {
  const genres = {
    "1": "romance",
    "2": "mystery",
    "3": "crime",
    "4": "science"
  };

  const genre = genres[genre_id]; // bleibt ein String
  const images = {
    crime: "/crime1.png",
    mystery: "/mystery1.png",
    romance: "/romance1.png",
    science: "/science1.png"
  };

  return images[genre] || "/default.jpg";
}


// Get books by rating
async function getBooksByRating(stars) {
  const books = await db.collection('books')
    .find({ rating: stars })
    .toArray();

  return books.map(book => ({
    ...book,
    _id: book._id.toString()
  }));
}

// update book by id
async function updateBook(id, updatedData) {
  try {
    const collection = db.collection("books");
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );

    if (result.modifiedCount === 0) {
      console.log("No changes made to book with id " + id);
    } else {
      console.log("Book with id " + id + " has been updated.");
    }

    return result;
  } catch (error) {
    console.log("Update error:", error.message);
    return null;
  }
}


export default{
    getBooks,
    getBook,
    createBook,
    deleteBook,
    getSeries,
    getSerie,
    getGenres,
    getGenre,
    getBooksByRating,
    updateBook
};