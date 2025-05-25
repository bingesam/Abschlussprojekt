import db from '$lib/db';

export async function load() {
  const books = await db.getBooks();

  const stats = {
    read: 0,
    'currently reading': 0,
    'on hold': 0,
    'wanna read': 0
  };

  for (const book of books) {
    const status = book.status; 
    if (stats.hasOwnProperty(status)) {
      stats[status]++;
    }
  }

  return { stats };
}
