import db from '$lib/db.js';

export async function load() {
  return {
    series: await db.getSeries() 
  };
}