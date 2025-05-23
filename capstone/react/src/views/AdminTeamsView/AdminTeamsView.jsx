import styles from './AdminTeamsView.module.css';

export default function AdminTeamsView() {
  return (
    <div className={styles.container}>
      <h1>Manage Teams</h1>
      <p>Here you can add, edit, or remove teams for the tournament.</p>
    </div>
  );
}
