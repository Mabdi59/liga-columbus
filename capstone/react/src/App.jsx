import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { UserContext } from './context/UserContext';
import AuthService from './services/AuthService';

// Public Views
import HomeView from './views/HomeView/HomeView';
import LoginView from './views/LoginView/LoginView';
import LogoutView from './views/LogoutView';
import RegisterView from './views/RegisterView/RegisterView';
import UserProfileView from './views/UserProfileView/UserProfileView';
import TeamView from './views/TeamView/TeamView';
import PlayerView from './views/PlayerView/PlayerView';
import TournamentView from './views/TournamentView/TournamentView';
import MatchView from './views/MatchView/MatchView';
import ScheduleView from './views/ScheduleView/ScheduleView';
import StandingsView from './views/StandingsView/StandingsView';

// Admin Views
import AdminDashboardView from './views/AdminDashboardView/AdminDashboardView';
import AdminTeamsView from './views/AdminTeamsView/AdminTeamsView';
import AdminPlayersView from './views/AdminPlayersView/AdminPlayersView';
import AdminTournamentsView from './views/AdminTournamentsView/AdminTournamentsView';
import AdminMatchesView from './views/AdminMatchesView/AdminMatchesView';

// Shared Components
import MainNav from './components/MainNav/MainNav';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  const [user, setUser] = useState(null);

  function handleLogin(userData) {
    setUser(userData);
  }

  function handleLogout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (user && token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      AuthService.getUserProfile(user.id)
        .then((response) => handleLogin(response.data))
        .catch(() => handleLogout());
    }
  }, []);

  return (
    <BrowserRouter>
      <div id="app">
        <UserContext.Provider value={user}>
          <MainNav />
          <main id="main-content">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomeView />} />
              <Route path="/login" element={<LoginView onLogin={handleLogin} />} />
              <Route path="/logout" element={<LogoutView onLogout={handleLogout} />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="/user-profile" element={<ProtectedRoute><UserProfileView /></ProtectedRoute>} />
              <Route path="/teams" element={<TeamView />} />
              <Route path="/players" element={<PlayerView />} />
              <Route path="/tournaments" element={<TournamentView />} />
              <Route path="/matches" element={<MatchView />} />
              <Route path="/schedule" element={<ScheduleView />} />
              <Route path="/standings" element={<StandingsView />} />

              {/* Admin Routes */}
              <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboardView /></ProtectedRoute>} />
              <Route path="/admin/teams" element={<ProtectedRoute><AdminTeamsView /></ProtectedRoute>} />
              <Route path="/admin/players" element={<ProtectedRoute><AdminPlayersView /></ProtectedRoute>} />
              <Route path="/admin/tournaments" element={<ProtectedRoute><AdminTournamentsView /></ProtectedRoute>} />
              <Route path="/admin/matches" element={<ProtectedRoute><AdminMatchesView /></ProtectedRoute>} />
            </Routes>
          </main>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}
