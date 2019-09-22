import React from 'react';
import './menu-bar.scss';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

class MenuBar extends React.Component{
    constructor(){
        super()
        this.state={
            logouted: false
        }
    }

    onClick = (event) => {
        console.log(event)
        let cookie = new Cookies()
        cookie.set("isLogin", "false")
        this.setState({
            logouted: cookie.get("isLogin") === "false"
        })
    }

    renderDirectTo(){
        if (this.state.logouted){
            return <Redirect to="/login"></Redirect>
        }
    }

    render(){
        return(
            <React.Fragment>
                {this.renderDirectTo()}
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Green Adecamy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Trang Chủ</Nav.Link>                   
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
                        <Button variant="outline-success" className="mr-sm-2" >Tìm Kiếm</Button>
                        <Button variant="outline-dark" onClick={(e) => this.onClick(e)}>Đăng Xuất</Button>   
                        </Form> 
                                          
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default MenuBar


