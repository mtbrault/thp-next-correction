import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Meteo from './components/Meteo';
import './App.css';

const App = () => {
  const [key] = useState('4ca67572e10349009eeed7f075392fbc');
  const [cityName, setCityName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [dataList, setDataList] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&key=${key}`)
        .then(res => {
          setCityName(res.data.city_name);
          setCountryCode(res.data.country_code);
          const test = res.data.data.slice(0, 5);
          updateMyData(test);
          setIsLoading(false);
        });
    })
  }, [key]);

  const updateMyData = data => {
    setDataList(data);
  }

  return (
    <>
      {isLoading ? <p>Pas chargé</p> : <p>Chargé</p>}

    </>
  )
}

export default App;
