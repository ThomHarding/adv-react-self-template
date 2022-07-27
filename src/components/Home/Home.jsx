import styles from './Home.css';
import '../Layout/reset.css';
import '../Layout/global.css';

export default function Home() {
  return (
    <div className={styles.Home}>
      <p>Home page goes here. before you redirect anywhere else.<br />
      Another paragraph of content. Maybe a picture or two.</p>
    </div>
  );
}
