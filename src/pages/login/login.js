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
                       
                        <form className="khung">
                            <input type="text" name="username" placeholder="username" className="form-control"/>
                            <input type="password" name="password" placeholder="password" className="form-control"/>
                            <input type="checkbox" name="ghinho"/> Remember me
                            <input type="submit" name="submit" value="Login" className="btn btn-danger form-control"/>
                            <p>Don't have an account? <a href="#">Sign Up</a></p>
                            <p><a href="#">Forgot your password?</a></p>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage