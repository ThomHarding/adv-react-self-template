import { client } from './client.js';

export async function getMonsters() {
  const response = await client.from('Monsters').select(`
    id,
    Name,
    HP,
    AC,
    CR
  `).order('CR');

  return response;
}

export async function addMonster(monster) {
  const response = await client
    .from('Monsters')
    .insert(monster)
    .single();
  return response;
}
