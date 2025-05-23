import { Link } from 'react-router-dom';
import styles from './AdminDashboardView.module.css';

export default function AdminDashboardView() {
  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin control center. Use the links below to manage the platform:</p>

      <ul className={styles.adminLinks}>
        <li><Link to="/admin/teams">Manage Teams</Link></li>
        <li><Link to="/admin/players">Manage Players</Link></li>
        <li><Link to="/admin/tournaments">Manage Tournaments</Link></li>
        <li><Link to="/admin/matches">Manage Matches</Link></li>
      </ul>
    </div>
  );
}
