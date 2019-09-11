import React from 'react';
import './login.scss';
import Logo from '../../assets/images/logo.png';




class LoginPage extends React.Component{
    render(){
        return(     
            <div className="login">
                <div className="body-login">
                    <div className="circle">
                       
                    </div>
                    
                    <form className="form">
                        <div className='form-group'>
                            <input type="text" name="username" placeholder="username" className="form-control"/>
                        </div>
                        <div className='form-group'>
                                <input type="password" name="password" placeholder="password" className="form-control"/>    
                        </div>
                        <div className='form-group form-check'>
                                <input type="checkbox" name="remember"/> Remember me
                        </div>
                        <div className='form-group'>
                            <input type="submit" name="submit" value="Login" className="btn btn-danger form-control"/>  
                        </div>
                        <p>Don't have an account? <a href="#">Sign Up</a></p>
                        <p><a href="#">Forgot your password?</a></p>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default LoginPage