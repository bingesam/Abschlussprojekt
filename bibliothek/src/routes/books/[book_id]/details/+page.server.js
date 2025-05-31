import db from '$lib/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const book = await db.getBook(params.book_id);

  const genre = book.genre_id ? await db.getGenre(book.genre_id) : null;
  const serie = book.series_id ? await db.getSerie(book.series_id) : null;

  return {book, genre, serie};
}