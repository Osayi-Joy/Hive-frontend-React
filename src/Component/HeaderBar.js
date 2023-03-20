import React from 'react';
import Logo from '../Assets/logo.svg';
import { BsCart2 } from "react-icons/bs";
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
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
const HeaderBar = () => {
  // for navbar responsive
  const [open, setOpenMenu] = React.useState(false)
  const menuOptions = [
      {
          name: 'Home',
          icon: <HomeIcon />,
          link: '/',
      },
      {
          name: 'About',
          icon: <InfoIcon />,
          link: '/about',
      },
      {
          name: 'Sign In',
          icon: <LoginIcon />,
          link: '/signin',
      },
      {
          name: 'Sign Up',
          icon: <LogoutIcon />,
          link: '/signup',
      },
  ];
  
return(
    <nav>
        <div className="logo">
            <img src={Logo} alt="Hive logo navebar" />
        </div>
        <div className="navbar-links-container">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/signin">Sign In</a>

            <button className="primary-button">Sign Up</button>
        </div>
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

export default HeaderBar