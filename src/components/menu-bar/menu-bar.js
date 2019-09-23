import React from 'react';
import './menu-bar.scss';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import {locale} from '../../config/locale'


class MenuBar extends React.Component{
    constructor() {
        super()
        this.state ={
           lang: "vi" 
        }
        locale.setLanguage(this.state.lang)   
    }

    switchLanguage = () =>{
        this.setState({
            lang: this.state.lang == "vi" ? "en": "vi"
        })
        locale.setLanguage(this.state.lang)  
        this.setState({})
    }

    render(){
        return(
            <React.Fragment>    
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Green Adecamy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">{ locale.home }</Nav.Link>                   
                            <NavDropdown title={ locale.trainning } id="basic-nav-dropdown" href="/khoa-dao-tao">
                                <NavDropdown.Item href="#action/3.1">Thiết kế Web</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Thiết kế App</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Thiết kế nội thất</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Tiếng Hàn</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/blog">{ locale.blog }</Nav.Link>
                            <Nav.Link href="/gioi-thieu">{ locale.about }</Nav.Link>
                            <Nav.Link href="/tuyen-dung">{ locale.hire }</Nav.Link>
                            <Nav.Link href="/lien-he">{ locale.contact }</Nav.Link>
                        </Nav>
                       
                        <Form inline >
                        <FormControl type="text" placeholder={ locale.search } className="mr-sm-2" />
                        <Button variant="outline-success" className="mr-sm-2" >{ locale.search }</Button>
                        <Button variant="outline-dark" className="mr-sm-2">{ locale.login }</Button>
                        <Button variant="outline-danger" className="mr-sm-2" onClick={() => this.switchLanguage()} >{ locale.lang }</Button>
                        </Form> 
                                          
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default MenuBar


