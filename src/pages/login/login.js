import React from 'react';
import './login.scss';
import {Form, Button} from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import { thisExpression } from '@babel/types';

class LoginPage extends React.Component{
  constructor(){
    super()
    this.state={
      logined: false
    }
  }

  onClick = (event) => {
    console.log(event)
    let cookie = new Cookies()
    cookie.set("isLogin", "true")
    this.setState({
      logined: cookie.get('isLogin') === "true"
    })
  } 

  renderDirectTo(){
    if (this.state.logined){
      return <Redirect to="/home"></Redirect>
    }
  } 

  render(){
      return( 
        <React.Fragment>  
           {this.renderDirectTo()}
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
                      
                      <Button onClick={(e) => this.onClick(e)} className="btn btn-danger form-control">
                          Dang Nhap
                      </Button>
                      <p>Don't have an account? <a href="#">Sign Up</a></p>
                      <a href="#">Forgot your password?</a> 
                  </Form>
                  
              </div>
          </div>
        </React.Fragment>   
      )
  }
}

export default LoginPage