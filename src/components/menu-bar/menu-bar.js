import React from 'react';
import './menu-bar.scss';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

class MenuBar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Green Adecamy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Trang Chủ</Nav.Link>                   
                            <NavDropdown title="Khóa Đào Tạo" id="basic-nav-dropdown" href="/khoa-dao-tao">
                                <NavDropdown.Item href="#action/3.1">Thiết kế Web</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Thiết kế App</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Thiết kế nội thất</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Tiếng Hàn</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/gioi-thieu">Giới Thiệu</Nav.Link>
                            <Nav.Link href="/tuyen-dung">Tuyển Dụng</Nav.Link>
                            <Nav.Link href="/lien-he">Liên Hệ</Nav.Link>
                        </Nav>
                       
                        <Form inline >
                        <FormControl type="text" placeholder="Tìm Kiếm" className="mr-sm-2" />
                        <Button variant="outline-success">Tìm Kiếm</Button>
                        </Form>                        
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default MenuBar