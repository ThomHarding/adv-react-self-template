import { useState, useEffect } from 'react';
import { useSearch } from '../../../state/hooks/url.js';
import { useTypes } from '../../../state/hooks/pokedex.js';
import {
  InputControl,
  SelectControl,
  FormButton,
} from '../../Forms/FormControls.jsx';
import styles from './Search.css';

export default function Search() {
  const { types } = useTypes();
  const { params, setParams } = useSearch();
  const [formData, setFormData] = useState({ pokemon: '', type: '' });
  const { pokemon, type } = params;

  useEffect(() => {
    //any time the search form is updated, update state
    setFormData({ pokemon, type });
  }, [pokemon, type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //when the form is finally submitted, save that state in the url params
    setParams(formData);
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <form className={styles.Search} onSubmit={handleSubmit}>
      <InputControl
        label="pokémon"
        name="pokemon"
        value={(formData.pokemon ? formData.pokemon : '')}
        //otherwise the console gets mad that the state is going from
        //uncontrolled to controlled aka undefined to a real string
        onChange={handleChange}
      />

      <SelectControl
        label="type"
        name="type"
        value={formData.type}
        onChange={handleChange}
      >
        <option value={''}>all types</option>
        {types.map(({ type, count }) => (
          //each option fetched from the api becomes a <TypeOption>
          <TypeOption key={type} type={type} count={count} />
        ))}
      </SelectControl>

      <FormButton>Go</FormButton>
    </form>
  );
}

function TypeOption({ type, count }) {
  return <option value={type}>{`${type} (${count})`}</option>;
}
