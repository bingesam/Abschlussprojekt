import db from '$lib/db';

export async function load({ params }) {
  const book = await db.getBook(params.book_id);
  const genre = book.genre_id ? await db.getGenre(book.genre_id) : null;
  const series = book.series_id ? await db.getSerie(book.series_id) : null;

  return { book, genre, series };
}
