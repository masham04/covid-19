import React from "react";
import "../App.css";
import {Nav} from './Nav'
import background from "../images/virus.jpg";


export const Header = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
        <Nav />
      <div className="overlay"></div>
       
      <div id="home" className="content">
        
        <h3>ONE ENEMY , WHOLE WORLD FIGHTING WITH</h3>
        <h1>COVID-19</h1>
        <p>
          The Coronavirus (COVID-19) was first reported in Wuhan, Hubei,<br/> China
          in December 2019, the outbreak was later recognised as a pandemic by
          the WHO.
        </p>
        <br/>
      </div>
    </div>
  );
};
