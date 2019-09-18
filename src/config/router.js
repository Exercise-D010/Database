import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home/home';
import LoginPage from '../pages/login/login';
import DashboardPage from '../pages/dashboard/dashboard';
import ProfilePage from '../pages/profile/profile';
import TuyendungPage from '../pages/tuyen-dung/tuyen-dung';
import KhoaDaoTaoPage from '../pages/khoa-dao-tao/khoa-dao-tao';
import BlogPage from '../pages/blog/blog';
import GioiThieuPage from '../pages/gioi-thieu/gioi-thieu';
import LienHePage from '../pages/lien-he/lien-he';
import Auth from '../services/auth/auth';

const MainRouter = () => (
             <BrowserRouter>
                 <Switch>
                    <Route exact path='/' render={
                        ()=>(
                            <Auth orRedirectTo="/login" orRender={
                                <ProfilePage></ProfilePage>
                            }></Auth>
                        )      
                    }></Route>
                    <Route path='/login' exact component={LoginPage}></Route>
                     <Route path='/dashboard' exact component={DashboardPage}></Route>
                    <Route path='/home' exact component={HomePage}></Route>
                    <Route path='/profile' exact component={ProfilePage}></Route>
                    <Route path='/tuyen-dung' exact component={ TuyendungPage }></Route>
                    <Route path='/khoa-dao-tao' exact component={ KhoaDaoTaoPage }></Route>
                    <Route path='/blog' exact component={ BlogPage }></Route>
                    <Route path='/gioi-thieu' exact component={ GioiThieuPage }></Route>
                    <Route path='/lien-he' exact component={ LienHePage }></Route>
                </Switch>
            </BrowserRouter>
 )



 /*const MainRouter = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' render={
                    ()=>{
                        <Auth orRedirectTo="/login" orRender={
                            <ProfilePage></ProfilePage>
                        }></Auth>
                    }
                }></Route>
                <Route path='/login' exact component={ LoginPage }></Route>
                <Route path='/dashboard' exact component={ DashboardPage }></Route>
                <Route path='/home' exact component={ HomePage }></Route>
                <Route path='/profile' exact component={ ProfilePage }></Route>
                <Route path='/tuyen-dung' exact component={ TuyendungPage }></Route>
                <Route path='/khoa-dao-tao' exact component={ KhoaDaoTaoPage }></Route>
                <Route path='/blog' exact component={ BlogPage }></Route>
                <Route path='/gioi-thieu' exact component={ GioiThieuPage }></Route>
                <Route path='/lien-he' exact component={ LienHePage }></Route>
            </Switch>
        </BrowserRouter>  
    )
}*/

export default MainRouter