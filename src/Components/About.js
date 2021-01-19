import React from "react";
import logo from '../images/virus3.jpg'
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#2a2a2c',
    },
  })
);

export function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container maxWidth="xl">
        
      <h1 id="about" className="heading">ABOUT CORONA</h1>
      <Grid container spacing={4}>
        <Grid className="child" item md={6} sm={12}>
            
          <h1 className="about-heading">WHAT IS CORONA VIRUS?</h1>
          <br/><br/><br/>
          <p>
            Coronaviruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory illness now called COVID-19.
          </p>
        </Grid>
        <Grid className="child" item  md={6} sm={12}>
           <img src={logo} alt="logo" width='100%' height='300px' />
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}
