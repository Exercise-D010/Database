import React from 'react';

class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <div class="login-box">
                    <img src="img/user.png" alt="logo user" className="logo"/>
                    <h1>Login</h1>
                    
                    <p>Username</p>
                    <input type="text" name="username" placeholder="Enter Username"/>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Enter Password"/>
                    <input type="submit" name="submit" value="Login"/>
                    <a href="#">Forget Password</a>
                    
                </div>
            </div>
        )
    }
}

export default LoginPage