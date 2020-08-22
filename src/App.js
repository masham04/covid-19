import React from 'react';
import './App.css';
import {Navbar} from './Components/Navbar';
import Boxes from './Components/Boxes';
import Chart from './Components/Chart';
import {Countrydata} from './Components/Countrydata';
function App() {
  return (
    <div>
      <Navbar />
      <Boxes />
      <Chart />
      <Countrydata />
    </div>
  );
}

export default App;
