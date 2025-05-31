import db from '$lib/db.js';

export async function load({ params }) {
  const stars = Number(params.stars);
  const books = await db.getBooksByRating(stars);

  return {
    stars,
    books
  };
}
