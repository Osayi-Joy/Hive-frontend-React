import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Comfirm from './Pages/ConfirmEmail';
import view from './Pages/View';
import Reset from './Pages/Resetpassword';
import forgetPassword from './Pages/ForgetPassword';
import wallet from './Pages/Wallet';
import dashboard from './Pages/Dashboard';
import "./App.css";
import "./Pages/CSS/login.css"
import CreateJob from './Pages/createJob/CreateJob';
import HeaderBar from './Component/HeaderBar';
function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderBar/>
        <Routes>
          <Route path='/' Component={LandingPage}></Route>
          <Route path='/home' Component={LandingPage}></Route>
          <Route path='/register' Component={Register}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/confirm-email' Component={Comfirm}></Route>
          <Route path='/view' Component={view}></Route>
          <Route path='/reset-password' Component={Reset}></Route>
          <Route path='/forget-password' Component={forgetPassword}></Route>
          <Route path='/wallet' Component={wallet}></Route>
          <Route path='/dashboard' Component={dashboard}></Route>
          <Route path='/tasker/create-job' Component={CreateJob} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
