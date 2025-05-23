import styles from './PlayerView.module.css';

export default function PlayerView() {
  return (
    <div className={styles.container}>
      <h1>Players</h1>
      <p>Meet the players participating this season.</p>
    </div>
  );
}
