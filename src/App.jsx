import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Notifications from './components/notifications/Notifications';
import DarkMode from './components/darkMode/DarkMode';
import Forecast from './components/forecast/Forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import Search from './components/search/Search';
import CurrentWeather from './components/curernt-weather/CurrentWeather';

function App() {
  const [currentWeather, setCurrentWeather] = useState('');
  const [forecast, setForecast] = useState('');
  
  const handleOnSearchChange = (searchData) => {
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
  
  return (
    <div className="container">

      <nav className="navbar">
        <Notifications data={currentWeather}/>
        <Search onSearchChange={handleOnSearchChange}/>
        <DarkMode />
      </nav>

      <main className='main'>
        <div className='main__forecast'>
          {forecast && <Forecast data={forecast}/>}
        </div>
        <div className='main__current-weather'>
          {currentWeather && <CurrentWeather data={currentWeather}/>}
        </div>
      </main>
    </div>
  )
}

export default App;
