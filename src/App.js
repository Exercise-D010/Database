import React from 'react';
import './App.css';
import MainRouter from './config/router';
import HeaderElement from './components/header/header';
import FooterElement from './components/footer/footer';
import HomePage from './pages/home/home';
import MenuBar from './components/menu-bar/menu-bar';
import Cookies from 'universal-cookie';
import { locale } from './config/locale';
import { ListenService } from './services/listen/listen';

class App extends React.Component {
    constructor(){
      super()
      let cookie = new Cookies()
      let lang = cookie.get('lang') === undefined ? 'vi' : cookie.get('lang')
      locale.setLanguage(lang)
    }

    componentDidMount() {
      let self = this
      ListenService.onChangeLang().subscribe(
        () => {
          self.setState({})
        }
      )
    }


  render(){
    return (
      <div className="App">
        <MenuBar></MenuBar>
        
      
        <MainRouter></MainRouter>
        <FooterElement></FooterElement>
    
        
      </div>
    );
  }
}

export default App;
