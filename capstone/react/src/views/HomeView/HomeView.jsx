import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import styles from './HomeView.module.css';

export default function HomeView() {
  const user = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1>Welcome to Liga Columbus</h1>
      <p>
        {user ? `Glad to see you again, ${user.username}!` : 'Explore local tournaments, register your team, and follow the latest matches.'}
      </p>
      {!user && (
        <div className={styles.cta}>
          <Link to="/register" className={styles.button}>Join Now</Link>
          <Link to="/login" className={styles.link}>Already a member? Log in</Link>
        </div>
      )}
    </div>
  );
}
