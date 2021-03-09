import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import logo1 from './icons/brain.png'
import logo2 from './icons/hot.png'
import logo3 from './icons/cough.png'
import logo4 from './icons/sore-throat.png'
import logo5 from './icons/lungs.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#636666",
    backgroundColor: "#2a2a2c"
  },
}));

export function Symptoms() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container className='symbols' maxWidth="xl">
        <h1 id="symptoms" className="heading">SYMPTOMS OF CORONA</h1>
      <Grid container spacing={3}>
        <Grid item md={4} sm={12} xs={12}>
          <Paper className={classes.paper}>
              <img src={logo1} alt='icon' width="100px" height="100px" />
              <br/><br/>
              <h1>HEADACH</h1>
          </Paper>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Paper className={classes.paper}>
          <img src={logo2} alt='icon' width="100px" height="100px" />
          <br/><br/>
              <h1>FEVER</h1>
          </Paper>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Paper className={classes.paper}>
          <img src={logo3} alt='icon' width="100px" height="100px" />
          <br/><br/>
              <h1>COUGH</h1>
          </Paper>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Paper className={classes.paper}>
          <img src={logo4} alt='icon' width="100px" height="100px" />
          <br/><br/>
              <h1>SORE THROAT</h1>
          </Paper>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Paper className={classes.paper}>
          <img src={logo5} alt='icon' width="100px" height="100px" />
          <br/><br/>
              <h1>BREATHING PROBLEM</h1>
          </Paper>
        </Grid>
      </Grid>
      </Container>
      <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}