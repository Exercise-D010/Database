import React from 'react';
import './App.css';
import MainRouter from './config/router';
import MenuBar from './components/main-menu/main-menu';

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <MainRouter></MainRouter>
    </div>
  );
}

export default App;
