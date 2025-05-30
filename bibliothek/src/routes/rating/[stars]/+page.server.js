import db from '$lib/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const stars = Number(params.stars);
  const books = await db.getBooksByRating(stars); // z. B. filter in deiner DB-Funktion

  return {
    stars,
    books
  };
}
