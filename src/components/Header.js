import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import useStyles from '../theme/theme';
import logo from '../assets/images/logo.png';

const Header = () => {
    const classes = useStyles();
  
    return (
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className={classes.toolbar}>
  <img src={logo} alt="Logo" className={classes.logo} />
</Toolbar>
      </AppBar>
    );
  };
  

export default Header;
