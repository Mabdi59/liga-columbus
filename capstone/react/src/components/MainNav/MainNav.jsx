import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import styles from './MainNav.module.css';

export default function MainNav() {
  const user = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>Home</NavLink>
      <NavLink to="/teams" className={styles.link}>Teams</NavLink>
      <NavLink to="/schedule" className={styles.link}>Schedule</NavLink>
      <NavLink to="/standings" className={styles.link}>Standings</NavLink>

      {user ? (
        <>
          <NavLink to="/user-profile" className={styles.link}>Profile</NavLink>
          {user.authorities?.some(a => a.name === 'ROLE_ADMIN') && (
            <NavLink to="/admin/dashboard" className={styles.link}>Admin</NavLink>
          )}
          <Link to="/logout" className={styles.link}>Logout</Link>
        </>
      ) : (
        <>
          <NavLink to="/login" className={styles.link}>Login</NavLink>
          <NavLink to="/register" className={styles.link}>Register</NavLink>
        </>
      )}
    </nav>
  );
}
