import React from "react";
import "../App.css";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../images/coronavirus.png";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: "#ffff",
    },
    title: {
      flexGrow: 1,
    },
  })
);

export function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        className="navbar"
        style={{ backgroundColor: "black", opacity: 0.6 }}
        position="fixed"
      >
        <Toolbar>
          <img src={logo} alt="logo" width="50px" height="50px" />
          &nbsp;&nbsp;&nbsp;
          <Typography variant="h6" className={classes.title}>
            COVID-19 TRACKER
          </Typography>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Button className="navitem" color="inherit">
              Home
            </Button>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Button className="navitem" color="inherit">About</Button>
          </Link>
          <Link
            activeClass="active"
            to="symptoms"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Button className="navitem" color="inherit">
              symbols
            </Button>
          </Link>
          <Link
            activeClass="active"
            to="prevent"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Button className="navitem" color="inherit">
              prevention
            </Button>
          </Link>
          <Link
            activeClass="active"
            to="cases"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Button className="navitem" color="inherit">
              CASES
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
