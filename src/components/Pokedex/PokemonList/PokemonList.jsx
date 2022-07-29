import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './PokemonList.css';

export default function PokemonList({ pokedex, onLoadNext }) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    onLoadNext();
  }, [inView]);
  return (
    (pokedex.length !== 0 ? <ul className={styles.PokemonList}>
      {pokedex.map((pokemon, i) => (
        <Card
          key={pokemon._id}
          pokemon={pokemon}
          loadRef={i === pokedex.length - 3 ? ref : null}
        />
      ))}
    </ul> : <p>No results were found for your search.</p>)
  );
}

function Card({ pokemon, loadRef }) {
  const { pokemon: pokemonName } = pokemon;
  //i'd love to just use the pokemon object for all of this
  //but the fact the property is called 'name' does bad things to the display

  return (
    <li className={styles.Card} ref={loadRef}>
      <img src={pokemon.url_image} alt={pokemonName} />

      <h2 className={styles.Header} title={pokemonName}>
        {pokemonName}
      </h2>

      <div className={styles.Types}>
        <Type type={pokemon.type_1} />/<Type type={pokemon.type_2} />
      </div>
    </li>
  );
}

function Type({ type }) {
  return type === 'NA' ? null : <span>{type}</span>;
}
