import db from '$lib/db';

export async function load({ params }) {
  const book = await db.getBook(params.book_id);
  const genre = await db.getGenre(book.genre_id);
  const series = await db.getSerie(book.series_id);

  return { book, genre, series };
}
