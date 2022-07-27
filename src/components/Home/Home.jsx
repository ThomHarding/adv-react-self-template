import { Link } from 'react-router-dom';
import styles from './Home.css';
import '../Layout/reset.css';
import '../Layout/global.css';

export default function Home() {
  return (
    <div className={styles.Home}>
      <p>Home page goes here. before you redirect anywhere else</p>
      <p><Link to="other">Other</Link></p>
    </div>
  );
}
