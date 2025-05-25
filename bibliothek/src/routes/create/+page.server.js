/* import db from "$lib/db";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const book = {
      title: data.get("title"),
      author: data.get("author"),
      
    };

    await db.createBook(book);

    return {
      success: true
    };
  }
}; */

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

function getRandomSeriesId() {
  return Math.floor(Math.random() * 99) + 1; // beliebige ID
}

export const actions = {
  create: async ({ request }) => {
    try {
      const data = await request.formData();

      const genre = data.get("genre");
      const isSeries = data.get("series") === "yes";

      const book = {
        title: data.get("title"),
        author: data.get("author"),
        status: data.get("status"),
        genre: genre,
        image: getImageByGenre(genre),
        series_id: isSeries ? getRandomSeriesId() : null
      };

      await db.createBook(book);

      return { success: true };
    } catch (error) {
      console.error("CreateBook error:", error);
      return { success: false, error };
    }
  }
};
