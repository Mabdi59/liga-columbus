import styles from './MatchCard.module.css';

export default function MatchCard({ match }) {
  return (
    <div className={styles.card}>
      <h3>{match.teamA} vs {match.teamB}</h3>
      <p><strong>Date:</strong> {match.date}</p>
      <p><strong>Time:</strong> {match.time}</p>
      <p><strong>Field:</strong> {match.field}</p>
      {match.score && <p><strong>Score:</strong> {match.score}</p>}
    </div>
  );
}
