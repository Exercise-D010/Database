import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login/login';
import ProfilePage from './pages/profile/profile';
import DashboardPage from './pages/dashboard/dashboard';

function Aaa() {
  return (
    <div className="App">
      <LoginPage></LoginPage>
      <ProfilePage></ProfilePage>
      <DashboardPage></DashboardPage>
    </div>
  );
}

export default Aaa;
