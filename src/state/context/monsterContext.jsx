import { createContext, useReducer } from 'react';

export const MonsterContext = createContext();

function reducer(list, { type, payload }) {
  switch (type) {
    case 'load':
      return payload;
    case 'add':
      return [...list, payload];
    case 'update':
      return list.map((f) => (f.id === payload.id ? payload : f));
    case 'remove':
      return list.filter((f) => f.id !== payload.id);
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

export default function MonsterProvider({ children }) {
  const [monsters, monsterDispatch] = useReducer(reducer, null);

  const value = {
    monsters,
    monsterDispatch
  };

  return (
    <MonsterContext.Provider value={value}>
      {children}
    </MonsterContext.Provider>
  );
}
