import db from '$lib/db.js';

export async function load() {
  const genres = await db.getGenres();

  // get book counts per genre_id
  const genreCounts = await db.getBookCountsByGenre();

  // merge counts into genres
  const enrichedGenres = genres.map((genre) => ({
    ...genre,
    count: genreCounts[genre._id] || 0
  }));

  return {
    genres: enrichedGenres
  };
}