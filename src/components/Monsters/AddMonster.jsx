import { useState } from 'react';
import { useMonsterActions } from '../../state/hooks/monster.js';
import { InputControl, FormButton } from '../Forms/FormControls.jsx';
import styles from './AddMonster.css';

export default function AddMonster() {
  const { add } = useMonsterActions();
  const [Name, setName] = useState('Bean Elemental');
  const [CR, setCR] = useState(14);
  const [HP, setHP] = useState(150);
  const [AC, setAC] = useState(18);
  const handleName = ({ target }) => setName(target.value);
  const handleCR = ({ target }) => setCR(target.value);
  const handleHP = ({ target }) => setHP(target.value);
  const handleAC = ({ target }) => setAC(target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await add({ Name, CR, HP, AC });
    setName('Bean Elemental');
    setCR(14);
    setHP(150);
    setAC(18);
  };

  return (
    <form className={styles.AddMonster} onSubmit={handleSubmit}>
      <InputControl
        label="add a monster"
        name="Bean Elemental"
        value={Name}
        onChange={handleName}
      />
      <InputControl
        type={'number'}
        label={'monster CR'}
        value={CR}
        onChange={handleCR}
      />
      <InputControl
        type={'number'}
        label={'monster HP'}
        value={HP}
        onChange={handleHP}
      />
      <InputControl
        type={'number'}
        label={'monster AC'}
        value={AC}
        onChange={handleAC}
      />
      
      <FormButton>Add</FormButton>
    </form>
  );
}
