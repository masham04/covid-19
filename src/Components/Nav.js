import React from 'react';
import "../App.css";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from "../images/coronavirus.png";


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: '#ffff'
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  className='navbar' style={{backgroundColor: 'black', opacity: 0.6}} position="fixed">
        <Toolbar>
          <img src={logo} alt='logo' width='50px' height='50px'/>
          &nbsp;&nbsp;&nbsp;
          <Typography variant="h6" className={classes.title}>
            COVID-19 TRACKER
          </Typography>
          <Button href="#home" color="inherit">Home</Button>
          <Button href="#about" color="inherit">About</Button>
          <Button href="#symptoms" color="inherit">symbols</Button>
          <Button href="#prevent" color="inherit">prevention</Button>
          <Button href="#cases" color="inherit">CASES</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
