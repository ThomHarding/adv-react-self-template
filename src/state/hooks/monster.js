import { useContext, useEffect, useState } from 'react';
import { MonsterContext } from '../context/monsterContext.jsx';
import {
  getMonsters,
  addMonster,
  updateMonster,
  removeMonster,
} from '../services/monster-service.js';
import { showSuccess, showError } from '../services/toaster.js';

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

function createDispatchActions(dispatch) {
  return function createAction({ service, type, success }) {
    return async (...args) => {
      const { data, error } = await service(...args);

      if (error) showError(error.message);

      if (data) {
        dispatch({ type, payload: data });
        const successMessage = success(data);
        showSuccess(successMessage);
      }
    };
  };
}

export function useMonsterActions() {
  const { monsterDispatch } = useContext(MonsterContext);

  const createAction = createDispatchActions(monsterDispatch);

  const add = createAction({
    service: addMonster,
    type: 'add',
    success: (data) => `Added ${data.Name}`,
  });

  const update = createAction({
    service: updateMonster,
    type: 'update',
    success: (data) => `Updated ${data.Name}`,
  });

  const remove = createAction({
    service: removeMonster,
    type: 'remove',
    success: (data) => `Removed ${data.Name}`,
  });
  return { add, update, remove };
}
