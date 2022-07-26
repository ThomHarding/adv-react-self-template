import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <nav className={styles.Navigation}>
        <Link to="/">Home</Link>
        <Link to="other">Other</Link>
    </nav>
    </header>
  );
}