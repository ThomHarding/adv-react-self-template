import { Link } from 'react-router-dom';
import styles from './Header.css';
import '../Layout/reset.css';
import '../Layout/global.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <nav className={styles.Navigation}>
        <Link to="/">Home</Link>
        <Link to="forms">Form Inputs</Link>
        <h1 className={styles.centerItem}>My App</h1>
        <Link to="other">Other</Link>
        <Link to="pokedex">Pokédex</Link>
      </nav>
    </header>
  );
}
