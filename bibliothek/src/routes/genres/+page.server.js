import db from '$lib/db.js';

export async function load() {
  const genres = await db.getGenres();

  // get book counts per genre_id
  const genreCounts = await db.getBookCountsByGenre();

  // merge counts into genres
  const enrichedGenres = genres.map((genre) => ({
    ...genre, //ursprüngliche genre felder
    count: genreCounts[genre._id] || 0 //fallback auf 0
  }));

  return {
    genres: enrichedGenres
  };
}