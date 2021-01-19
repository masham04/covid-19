import React,{useState, useEffect} from 'react';
import './App.css';
import {Header} from './Components/Header'
import {About} from './Components/About'
import { Symptoms } from './Components/Symptoms';
import {Prevent} from './Components/Prevent'
import {Cards} from './Components/cards/Cards'
import {Countrypicker} from './Components/Countrypicker'
import {Chart} from './Components/Chart'
import { fetchData } from './api/';
import { Footer } from './Components/Footer';

function App() {
  const [Data, setData] = useState({});
  const [Country, setCountry] = useState('');

  useEffect( () => {
    async function getdata(){
      const data = await fetchData();
      setData(data);
    }
    getdata()
    
  }, [])
  

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setCountry(country)
    setData(data);
  }
  return (
    <div>
    <Header/>
    <About />
    <Symptoms/>
    <Prevent/>
    <Cards data={Data} />
    <Countrypicker handleCountryChange={handleCountryChange} />
    <Chart data={Data} country={Country} /> 
     <Footer/>
    </div>
  );
}

export default App;
