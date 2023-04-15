import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from "@fortawesome/free-regular-svg-icons";
import jwt_decode from "jwt-decode";


const HeaderBar = () => {
  
  const [open, setOpenMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
 


  const menuOptions = [
    {
      name: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      name: "About",
      icon: <InfoIcon />,
      link: "/about",
    },
    {
      name: "Sign In",
      icon: <LoginIcon />,
      link: "/login",
    },
    {
      name: "Sign Up",
      icon: <LogoutIcon />,
      link: "/register",
    },
  ];
 
   useEffect(() =>{
    const currentUser = localStorage.getItem("token");
    if (currentUser) {
      const decodedToken = jwt_decode(currentUser);
       setUser(decodedToken.fullName)
       setUserEmail(decodedToken.email)
      setIsLogin(true);
    }
   },[])

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Hive logo navebar" />
      </div>
      {isLogin ? (
        <div className="userloginMenu">
          <div className="viewTask">
            <p className="viewAllTask">view all task created</p>
          </div>

          <div className="userDetails_notification">
            <div className="notificationIcon">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="userDetails">

             <div className="user-image">

             </div>
             <p>Hi, {user}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-links-container">
          
          <Link to={"/about"}>
            <button className="primary-button">About</button>
          </Link>
          <Link to={"/login"}>
            <button className="primary-button">Login</button>
          </Link>
        </div>
      )}

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={open} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default HeaderBar;
