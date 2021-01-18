import React from 'react';
import './App.css';
import {Header} from './Components/Header'
import {About} from './Components/About'
import { Symptoms } from './Components/Symptoms';
import {Prevent} from './Components/Prevent'
// import {Navbar} from './Components/Navbar';
// import Boxes from './Components/Boxes';
// import Chart from './Components/Chart';
// import {Countrydata} from './Components/Countrydata';
function App() {
  return (
    <div>
    <Header/>
    <About />
    <Symptoms/>
    <Prevent/>
      {/* <Navbar />
      <Boxes />
      <Chart />
      <Countrydata /> */}
    </div>
  );
}

export default App;
