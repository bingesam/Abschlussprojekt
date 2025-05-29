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
        series: data.get("series"),
        image: getImageByGenre(genre)
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
  console.log("Anzahl der geladenen Serien:", series.length); // Füge dies hinzu
  console.log("Geladene Serien (erste 5):", series.slice(0, 5)); // Füge dies hinzu
  return { series };
}


