const {
  getMonsters,
  addMonster
} = require('../src/state/services/monster-service');

const mockMonster = {
  Name: 'Animated Egg',
  CR: 0,
  HP: 4,
  AC: 25,
  Speed: '30 ft.',
  Size: 'Medium',
  RA: 'humanoid, Any Alignment',
};

it('get a list of monsters', async () => {
  const resp = await getMonsters();
  expect(resp.status).toEqual(200);
  expect(resp.body[0]).toEqual({
    id: expect.any(Number),
    Name: expect.any(String),
    HP: expect.any(Number),
    AC: expect.any(Number),
    CR: expect.any(Number)
  });
});

it('create a new monster', async () => {
  const resp = await addMonster(mockMonster);
  expect(resp.status).toEqual(201);
  expect(resp.body).toEqual({
    id: expect.any(Number),
    Name: expect.any(String),
    HP: expect.any(Number),
    AC: expect.any(Number),
    CR: expect.any(Number),
    RA: expect.any(String),
    Size: expect.any(String),
    Speed: expect.any(String),
  });
  
});
