import {
  useMonsters,
} from '../../state/hooks/monster.js';
import AddMonster from './AddMonster.jsx';
import Monster from './Monster.jsx';
import styles from './MonsterList.css';

export default function MonsterList() {
  const { monsters } = useMonsters();
  if (!monsters) return null;

  return (
    <span>
      <AddMonster />
      <ul className={styles.MonsterList}>
        {monsters.map((monster) => (
          <Monster key={monster.id} monster={monster} />
        ))}
      </ul>
    </span>
  );
}
