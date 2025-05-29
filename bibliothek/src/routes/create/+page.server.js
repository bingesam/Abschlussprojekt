import db from "$lib/db";

function getImageByGenre(genre) {
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

      const genre = data.get("genre");

      const book = {
        title: data.get("title"),
        author: data.get("author"),
        status: data.get("status"),
        genre: genre,
        image: getImageByGenre(genre),
        series_id: data.get("series_id") || null // Optional: Nur setzen, wenn vorhanden
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
  return { series };
}


