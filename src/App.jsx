import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Notifications from './components/notifications/Notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DarkMode from './components/darkMode/DarkMode';
import Forecast from './components/forecast/Forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import Search from './components/search/Search';
import CurrentWeather from './components/curernt-weather/CurrentWeather';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
  
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)

    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async response => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse });
      setForecast({city: searchData.label, ...forecastResponse });
    })
    .catch((err) => console.log(err))
  };

  console.log(currentWeather)
  console.log(forecast)

  return (
    <div className="container">

      <nav className="navbar">
        {/* <Notifications data={data}/> */}
        <Search onSearchChange={handleOnSearchChange}/>
        <DarkMode />
      </nav>

      {currentWeather && <CurrentWeather data={currentWeather}/>}

      {/* <main className='main'>
        <Forecast />
      </main> */}
    </div>
  )
}

export default App;
