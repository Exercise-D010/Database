import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import ('./main-menu.scss');

class MenuBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/home" className="chu">Home</Nav.Link>
                        <NavDropdown title="Khóa học" id="basic-nav-dropdown bg" className="chu">
                            <NavDropdown.Item href="# active3.1">Thiết kế Web</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="# active3.2">Thiết kế đồ họa</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="# active3.3">Thiết kế nội thất</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/#" className="chu">Thư Viện</Nav.Link>
                        <Nav.Link href="/#" className="chu">Dịch vụ</Nav.Link>
                        <Nav.Link href="/#" className="chu">Liên Hệ</Nav.Link>
                        <Nav.Link href="/#" className="chu">About</Nav.Link>
                        <a href="/login"><button className="btn btn-primary" name="dangnhap" id="nut01">Login</button></a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MenuBar