import db from "$lib/db";

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
};
