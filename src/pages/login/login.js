import React from 'react';
import './login.scss';
import Logo from '../../assets/images/logo.png';




class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <div className="login">
                    <div className="login-box">
                        <img src={Logo} alt="hinh logo" className="logo"/>
                       
                        <i>Username</i>
                        <input type="text" name="username" placeholder="Enter Username"/>
                        <i>Password</i>
                        <input type="password" name="password" placeholder="Enter Password"/>
                        <input type="submit" name="submit" value="Login"/>
                        <a href="#">Forget Password</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage