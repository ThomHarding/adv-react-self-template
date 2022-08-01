import { useContext, useEffect, useState } from 'react';
import { MonsterContext } from '../context/monsterContext.jsx';
import {
  getMonsters,
} from '../services/monster-service.js';
// import { showSuccess, showError } from '../services/toaster.js';

export function useMonsters() {
  const [error, setError] = useState(null);
  const { monsters, monsterDispatch } = useContext(MonsterContext);

  useEffect(() => {
    if (monsters) return;
    let ignore = false;

    const fetch = async () => {
      const { data, error } = await getMonsters();
      if (ignore) return;

      if (error) {
        setError(error);
      }
      if (data) {
        monsterDispatch({ type: 'load', payload: data });
      }
    };

    fetch();
    return () => (ignore = true);
  }, []);

  return { monsters, error };
}
