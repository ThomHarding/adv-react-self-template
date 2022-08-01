// import { useEffect, useRef, useState } from 'react';
import {
  useMonsters,
  // useMonsterActions,
} from '../../state/hooks/monster.js';
// import { InputControl } from '../Forms/FormControls.jsx';
import Monster from './Monster.jsx';
import styles from './MonsterList.css';

export default function MonsterList() {
  const { monsters } = useMonsters();
  if (!monsters) return null;

  return (
    <ul className={styles.MonsterList}>
      {monsters.map((monster) => (
        <Monster key={monster.id} monster={monster} />
      ))}
    </ul>
  );
}
