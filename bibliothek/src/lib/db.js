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
      // TODO: error handling
    } else {
      book._id = book._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: error handling
    console.log(book.message);
  }
  return book;
}

//create new book entry
async function createBook(book) {
  book.image = "/TODO";
  try {
    const collection = db.collection("books");
    const result = await collection.insertOne(book);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: error handling
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
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

export default{
    getBooks,
    getBook,
    createBook
};