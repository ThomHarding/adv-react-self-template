import styles from './Monster.css';

export default function Monster({ monster }) {
  return (
    <section className={styles.Monster}>
      <p>
        {monster.Name}
        <br /> HP: {monster.HP}
        <br /> AC: {monster.AC}
        <br />CR: {monster.CR}
      </p>
    </section>
  );
}
