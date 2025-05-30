import db from '$lib/db.js';

export async function load() {
  const books = await db.getBooks();

  const ratingCounts = [1, 2, 3, 4, 5].map((stars) => {
    const count = books.filter((b) => b.rating === stars).length;
    return { stars, count };
  });

  return {
    ratings: ratingCounts
  };
}
