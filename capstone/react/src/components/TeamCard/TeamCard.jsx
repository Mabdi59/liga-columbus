import styles from './TeamCard.module.css';

export default function TeamCard({ team }) {
  return (
    <div className={styles.card}>
      <h3>{team.name}</h3>
      <p><strong>Coach:</strong> {team.coach}</p>
      <p><strong>Group:</strong> {team.group}</p>
    </div>
  );
}
