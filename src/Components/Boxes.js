import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: '50px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    color: '#3f50b5'
  }
}));

export default function Boxes() {
  
 let [globaldata, setglobaldata] = useState({});
 
 
  useEffect(() => {
    async function getdata(){
      const response = await fetch('https://covid19.mathdro.id/api');
      let data = await response.json();
      let values = {
        confirmed: data.confirmed.value,recovered: data.recovered.value,deaths: data.deaths.value
      }
      setglobaldata(values);
  }
  getdata();
  },[])
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
          
            <Grid item xs={12} sm={4}>
            <Paper className={classes.paper} id={'box1'} elevation={3}>
             <h2>TOTAL INFECTED</h2>
             <h2>{globaldata.confirmed}</h2>
            
            </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
            <Paper className={classes.paper} id={'box2'} elevation={3}>
             <h2>TOTAL RECOVERED</h2>
             <h2>{globaldata.recovered}</h2>
            </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
            <Paper className={classes.paper} id={'box3'} elevation={3}>
             <h2>TOTAL DEATHS</h2>
             <h2>{globaldata.deaths}</h2>
            </Paper>
            </Grid>
            
          
      </Grid>
   </div>
  );
}
