import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import logo1 from './icons/networking.png'
import logo2 from './icons/liquid-soap.png'
import logo3 from './icons/face-mask.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     backgroundColor: "#2a2a2c"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: "#636666",
      backgroundColor: "#ffff"
    },
  }));

export const Prevent = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Container className='symbols' maxWidth="xl">
        <h1 id="prevent" className="heading">HOW TO PREVENT CORONA</h1>
      <Grid container spacing={3}>
        <Grid item md={4} sm={12} xs={12}>
          <Paper className={classes.paper}>
              <img src={logo1} alt='icon' width="100px" height="100px" />
              <br/><br/>
              <h1>AVOID GATHERING</h1>
          </Paper>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Paper className={classes.paper}>
          <img src={logo2} alt='icon' width="100px" height="100px" />
          <br/><br/>
              <h1>USE SANITIZER</h1>
          </Paper>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Paper className={classes.paper}>
          <img src={logo3} alt='icon' width="100px" height="100px" />
          <br/><br/>
              <h1>USE FACE MASK</h1>
          </Paper>
        </Grid>
        
      </Grid>
      </Container>
    </div>
    )
}
