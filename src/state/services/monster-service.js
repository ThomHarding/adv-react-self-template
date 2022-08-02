import { client } from './client.js';

export async function getMonsters() {
  const response = await client
    .from('Monsters')
    .select(`
            id,
            Name,
            HP,
            AC,
            CR
            `)
    .order('CR');
  return response;
}

export async function addMonster(monster) {
  const response = await client
    .from('Monsters')
    .insert(monster)
    .single();
  return response;
}

export async function updateMonster(newName, monster) {
  const id = monster.id;
  const updatedMonster = { ...monster, Name: newName };
  const response = await client
    .from('Monsters')
    .update(updatedMonster)
    .match({ id })
    .single();
  return response;
}

export async function removeMonster(id) {
  const response = await client
    .from('Monsters')
    .delete()
    .eq('id', id)
    .single();
  return response;
}
