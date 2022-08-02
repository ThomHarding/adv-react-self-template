import { useEffect, useRef, useState } from 'react';
import { useMonsterActions } from '../../state/hooks/monster';
import { InputControl } from '../Forms/FormControls';
import styles from './Monster.css';

export default function Monster({ monster }) {
  const { update } = useMonsterActions();
  const componentRef = useRef();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(monster.Name);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleEdit = async () => {
    setEditing(false);
    if (name === monster.Name) return;
    await update(name, monster);
  };

  useEffect(() => {
    if (editing) componentRef.current.focus();
  }, [editing]);

  const handleKeyUp = (e) => {
    if (e.code === 'Enter') handleEdit();
  };

  return (
    <section className={styles.Monster}>
      <span className={styles.Monster}>
        {editing ? (
          <InputControl
            ref={componentRef}
            name="name"
            value={name}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            onBlur={handleEdit}
          />
        ) : (
          <p onDoubleClick={handleDoubleClick}>
            {
              [monster.Name,
                '\nAC:' + monster.AC,
                '\nCR: ' + monster.CR,
                '\nHP: ' + monster.HP]
            }
          </p>
        )}
      </span>
    </section>
  );
}
