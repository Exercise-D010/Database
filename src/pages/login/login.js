import React from 'react';
import './login.scss';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LoginPage extends React.Component{
    render(){
        return(     
            <div className="login">
                <div className="body-login">
                    <div className="circle">
                       
                    </div>
                
                    <Form className="khung-form">
                        <Form.Group controlId="formBasicEmail">
                            
                            <Form.Control type="email" placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                           
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        
                        <button className="btn btn-danger form-control">
                            Đăng Ký
                        </button>
                        <p>Don't have an account? <a href="#">Sign Up</a></p>
                        <a href="#">Forgot your password?</a>
                        <FontAwesomeIcon icon='apple' />
                       
                    </Form>
                    
                </div>
            </div>
        )
    }
}

export default LoginPage