import React from 'react';
import './menu-bar.scss';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import {locale} from '../../config/locale';
import { ListenService } from '../../services/listen/listen';
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class MenuBar extends React.Component{
    constructor() {
        super()
      }
      switchLanguage = (lang) => {
        let cookie = new Cookies()
        cookie.set('lang', lang)
        locale.setLanguage(lang)
        this.setState({})
        ListenService.switchLang(lang)
      }

      checkCurrentLangActive = (lang) => {
        let cookie = new Cookies()
         let lang_ = cookie.get('lang') || 'vi'
         if(lang_ === lang) {
           return <FontAwesomeIcon icon={faCheck} className='icon mr-1'/>
         }
       }

    render(){
        return(
            <React.Fragment>    
                <Navbar bg="light" expand="lg" className="main-menu">
                    <Navbar.Brand href="#home">Green Adecamy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home" className="">{ locale.home }</Nav.Link>
                            <Nav.Link href="/home" className="">{ locale.trainning }</Nav.Link>                   
                            <Nav.Link href="/blog" className="">{ locale.blog }</Nav.Link>
                            <Nav.Link href="/gioi-thieu" className="">{ locale.about }</Nav.Link>
                            <Nav.Link href="/tuyen-dung" className="">{ locale.hire }</Nav.Link>
                            <Nav.Link href="/lien-he" className="">{ locale.contact }</Nav.Link>
                            <Nav.Link href="/chi-nhanh" className="">{ locale.chinhanh }</Nav.Link>
                        </Nav>
                       
                        <Form inline className="ml-auto">
                            <FormControl type="text" placeholder={ locale.search } className="mr-sm-2" />
                            <Button variant="outline-success" className="w100">{ locale.search }</Button>
                        </Form>
                        <Nav className="mr-auto">
                            <NavDropdown title={ locale.lang }>
                            <NavDropdown.Item onSelect={ () => this.switchLanguage('vi') } >
                                { this.checkCurrentLangActive('vi') }
                                { locale.vi }
                            </NavDropdown.Item>
                            <NavDropdown.Item onSelect={ () => this.switchLanguage('en') }>
                                { this.checkCurrentLangActive('en') }
                                { locale.en }
                            </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                                          
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default MenuBar


