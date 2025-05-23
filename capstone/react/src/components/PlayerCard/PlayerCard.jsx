import styles from './PlayerCard.module.css';

export default function PlayerCard({ player }) {
  return (
    <div className={styles.card}>
      <h3>{player.name}</h3>
      <p><strong>Team:</strong> {player.teamName}</p>
      <p><strong>Position:</strong> {player.position}</p>
      <p><strong>Number:</strong> #{player.jerseyNumber}</p>
    </div>
  );
}
