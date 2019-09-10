import React from 'react';
import './login.scss';



class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <div className="login">
                    <div className="login-box">
                        <img src="../../assets/images/logo.png" alt="">
                       
                        <p>Username</p>
                        <input type="text" name="username" placeholder="Enter Username"/>
                        <p>Password</p>
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