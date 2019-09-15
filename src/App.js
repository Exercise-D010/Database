import React from 'react';
import './App.css';
import MainRouter from './config/router';
import HeaderElement from './components/header/header';
import FooterElement from './components/footer/footer';
import HomePage from './pages/home/home';
import MenuBar from './components/menu-bar/menu-bar';


function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <HeaderElement></HeaderElement>
     
      <MainRouter></MainRouter>
      <FooterElement></FooterElement>
   
      
    </div>
  );
}

export default App;
