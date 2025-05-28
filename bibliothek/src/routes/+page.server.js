import db from '$lib/db';

export async function load() {
  const books = await db.getBooks();

  const stats = {
    'read': 0, //wird auf 0 gesetzt für den anfang, da dies ein zähler ist
    'currently reading': 0,
    'on hold': 0,
    'wanna read': 0
  };

  for (const book of books) {
    const status = book.status; 
    if (status in stats) { 
      stats[status]++; //zähler erhöhen
    }
  }

  return { stats };
}


