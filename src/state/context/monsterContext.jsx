import { createContext, useReducer } from 'react';

export const MonsterContext = createContext();

function reducer(list, { type, payload }) {
  switch (type) {
    case 'load':
      return payload;
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
