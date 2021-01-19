import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import CountUp from 'react-countup';
import './card.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffff",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#ffff",
    
  },
}));

export const Cards = ({ data: { confirmed, recovered, deaths } }) => {
    const classes = useStyles();
  if (!confirmed) {
    return "Loading...";
  }
  
  return (
    <div className={classes.root}>
      <Container className="cases" maxWidth="xl">
        <h1 id="cases" className="heading">
          CORONA CASES
        </h1>
        <Grid container spacing={5}>
          <Grid item md={4} sm={12} xs={12}>
            <Paper id="card1" className={classes.paper}>
              <h4>Infected</h4>
              <br />
              <br />
              <h1><CountUp start={0} end={confirmed.value} duration={3} separator="," /></h1>
            </Paper>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <Paper id="card1" className={classes.paper}>
              <h4>Recovered</h4>
              <br />
              <br />
              <h1><CountUp start={0} end={recovered.value} duration={3} separator="," /></h1>
              
            </Paper>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <Paper id="card1" className={classes.paper}>
              <h4>Deaths</h4>
              <br />
              <br />
              <h1><CountUp start={0} end={deaths.value} duration={3} separator="," /></h1>
              
            </Paper>
          </Grid>

          {/* <CardComponent
            className="card2"
            cardTitle="Recovered"
            value={recovered.value}
          />
          <CardComponent
            className="card3"
            cardTitle="Deaths"
            value={deaths.value}
          /> */}
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
