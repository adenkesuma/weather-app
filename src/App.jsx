import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Notifications from './components/notifications/Notifications';
import DarkMode from './components/darkMode/DarkMode';
import Forecast from './components/forecast/Forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import Search from './components/search/Search';
import CurrentWeather from './components/curernt-weather/CurrentWeather';
import Chart from './components/chart/Chart';
import RandomPlace from './components/random-place/RandomPlace';

function App() {
  const [currentWeather, setCurrentWeather] = useState('');
  const [forecast, setForecast] = useState('');
  const [shanghai, setShanghai] = useState('');
  const [tokyo, setTokyo] = useState('');
  
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const shanghaiFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=31.166666666&lon=121.466666666&appid=${WEATHER_API_KEY}&units=metric`
    );
    const tokyoFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=35.689444444&lon=139.691666666&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch, shanghaiFetch, tokyoFetch])
    .then(async response => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      const shanghaiResponse = await response[2].json();
      const tokyoResponse = await response[3].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse });
      setForecast({city: searchData.label, ...forecastResponse });
      setShanghai(shanghaiResponse);
      setTokyo(tokyoResponse);
    })
    .catch((err) => console.log(err))
  };

  return (
    <div className="container">

      <nav className="navbar">
        <Notifications data={currentWeather}/>
        <Search onSearchChange={handleOnSearchChange} />
        <DarkMode />
      </nav>

      <main className='main'>
        <section className='section-1'>
          <div className='section-1__forecast'>
            {forecast && <Forecast data={forecast}/>}
          </div>
          <div className='section-1__current-weather'>
            {currentWeather && <CurrentWeather data={currentWeather}/>}
          </div>
        </section>
        <section className="section-2">
          <RandomPlace shanghai={shanghai} tokyo={tokyo}/>
          {forecast && <Chart data={forecast}/>}
        </section>
      </main>

      <footer style={{textAlign: "center", padding: "40px"}}>
        {forecast && <p style={{fontSize: "12px"}}>&copy; Copyright by aden 2023</p>}
      </footer>
    </div>
  )
}

export default App;
