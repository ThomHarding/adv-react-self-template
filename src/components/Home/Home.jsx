import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.Home}>
      <p>Home page goes here. before you redirect anywhere else</p>
      <p><a href='../Other/Other.jsx' /></p>
    </div>
  );
}