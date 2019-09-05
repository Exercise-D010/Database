import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login/login';
import ProfilePage from './pages/profile/profile';
import DashboardPage from './pages/dashboard/dashboard';
import HomePage from './pages/home/home';

function Aaa() {
  return (
    <div className="App">
      <LoginPage></LoginPage>
      <ProfilePage></ProfilePage>
      <DashboardPage></DashboardPage>
      <HomePage></HomePage>
    </div>
  );
}

export default Aaa;
