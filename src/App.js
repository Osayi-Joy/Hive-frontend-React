import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import About from './Pages/About';
import EmailVerificationPage from './Pages/EmailVerificatonPage';
import ResendEmailVerification from './Pages/ResendEmailVerificaton';
import EmailVerificationSuccessContainer from './Pages/EmailVerificationSuccessContainer';
import view from './Pages/View';
import Reset from './Pages/Resetpassword';
import ForgetPassword from './Pages/ForgetPassword';
import wallet from './Pages/Wallet';
import dashboard from './Pages/Dashboard';
import "./App.css";
import "./Pages/CSS/login.css"
import "./Pages/CSS/password_reset.css";
import PrivateRoute from './Component/PrivateRoute'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={LandingPage}></Route>
          <Route path='/home' Component={LandingPage}></Route>
          <Route path='/register' Component={Register}></Route>
          <Route path='/emailVerificationPage' Component={EmailVerificationPage}></Route>
          <Route path='/resendEmailVerification' Component={ResendEmailVerification}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/confirmed-email' Component={EmailVerificationSuccessContainer}></Route>
          <Route path='/view' Component={view}></Route>
          <Route path='/reset-password/:token' Component={Reset}></Route>
          <Route path='/forget-password' Component={ForgetPassword}></Route>
          <Route path='/wallet' Component={wallet}></Route>
          <Route path='/dashboard' Component={dashboard}></Route>
          <Route path='/about' Component={About}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
