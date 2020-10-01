import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Switch } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { lightTheme, darkTheme } from './Themes';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'inherit',
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(5),
  },
  logo: {
    marginLeft: theme.spacing(2),
    height: '30px',
    objectFit: 'contain',
    cursor: 'pointer',
  },
}));
const logo = require('../assets/images/dsc_logo.png');
export default function NavBar() {
  const classes = useStyles();
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    if(theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if(theme === 'dark') {
      setTheme(theme);
    }
    else {
      // default theme is light
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className={classes.root}>
        <AppBar
          position="fixed"
          color="inherit"
          style={{ backgroundColor: 'inherit' }}
          className="fill"
          id="navbar"
        >
          <Container fixed>
            <Toolbar>
              <img
                src={logo}
                className={classes.logo}
                alt="logo"
                id="logo"
                onClick={() => {
                  window.open('https://dsctiet.tech/');
                }}
              />
              <Typography
                variant="h7"
                id="dsc"
                className={classes.title}
                onClick={() => {
                  window.open('https://dsctiet.tech/');
                }}
              >
                {' '}
                &nbsp; DSC TIET
              </Typography>
              <Typography variant="h6" id="url" className={classes.title}>
                URL Shortener
                <Switch onClick={themeToggler} color="secondary" />
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
