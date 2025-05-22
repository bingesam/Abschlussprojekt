import db from "$lib/db.js";

export async function load() {
  return {
    books: await db.getBooks()
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    console.log(data.get("id"));
    let id = data.get("id");
    await db.deleteBook(id);
  }
};