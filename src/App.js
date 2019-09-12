import React from 'react';
import './App.css';
import MainRouter from './config/router';
import MenuBar from './components/main-menu/main-menu';
import HeaderElement from './components/header/header';
import FooterElement from './components/footer/footer';
import HomePage from './pages/home/home';
import TuyendungPage from './components/tuyendung/tuyendung';

function App() {
  return (
    <div className="App">
      <HeaderElement></HeaderElement>
      <MainRouter></MainRouter>
   
      
    </div>
  );
}

export default App;
