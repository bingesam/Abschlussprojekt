import db from "$lib/db";

//hilfsfunktion zur bildauswahl basierend auf genreID
function getImageByGenreId(genre_id) {
  const genres = {
    1: "romance",
    2: "mystery",
    3: "crime",
    4: "science"
  };

  const genre = genres[genre_id];
  const images = {
    crime: "/crime1.png",
    mystery: "/mystery1.png",
    romance: "/romance1.png",
    science: "/science1.png"
  };

  return images[genre] || "/default.jpg";
}

export const actions = {
  create: async ({ request }) => {
    try {
      const data = await request.formData();
      const genre_id = Number(data.get("genre_id"));
      const series_id = Number(data.get("series_id"));

      const book = {
        title: data.get("title"),
        author: data.get("author"),
        status: data.get("status"),
        rating: Number(data.get("rating")),
        genre_id,
        series_id,
        image: getImageByGenreId(genre_id)
      };

      await db.createBook(book);

      return { success: true };
    } catch (error) {
      console.error("CreateBook error:", error);
      return { success: false, error };
    }
  }
};


export async function load() {
  const series = await db.getSeries();
  const genres = await db.getGenres();
  return { series, genres };
}
