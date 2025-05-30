import db from '$lib/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const book = await db.getBook(params.book_id);
  const genres = await db.getGenres();
  const series = await db.getSeries();

  return {
    book,
    genres,
    series
  };
}

export const actions = {
  default: async ({ request, params }) => {
    const data = Object.fromEntries(await request.formData());

    const updated = {
      title: data.title,
      author: data.author,
      status: data.status,
      rating: Number(data.rating),
      genre_id: Number(data.genre_id),
      series_id: Number(data.series_id)
    };

    await db.updateBook(params.book_id, updated);
    return { success: true };
  }
};

