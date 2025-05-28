import db from "$lib/db.js";

export async function load() {
  return {
    books: await db.getBooks()
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    await db.deleteBook(data.get("id"));
  }
};