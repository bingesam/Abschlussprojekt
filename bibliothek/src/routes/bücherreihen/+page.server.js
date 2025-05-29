import db from '$lib/db';

/* export async function load() {
  const series = await db.getSeries();
  return { series };
} */


export async function load() {
  return {
    books: await db.getSeries()
  };
}