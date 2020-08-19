import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
  const classes = useStyles();
 let [globaldata, setglobaldata] = useState({});
  useEffect(() => {
    async function getdata(){
      const response = await fetch('https://api.thevirustracker.com/free-api?global=stats');
      let data = await response.json();
      delete data.results[0].source;
      setglobaldata(data.results[0])
      console.log(data.results[0]);
  }
  getdata();
  },[])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
          {Object.keys(globaldata).map((key, ind) => {
            return(<Grid item xs={12} sm={4} key={ind}>
            <Paper className={classes.paper} elevation={3}>
              <h3 className={classes.title}>{key.replace(/_/g,' ').toUpperCase()}</h3>
              <h3>{globaldata[key]}</h3>
            </Paper>
            </Grid>)
          })}
        
        
      </Grid>
    </div>
  );
}
