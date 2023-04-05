import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Notifications from './components/notifications/Notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DarkMode from './components/darkMode/DarkMode';
import Forecast from './components/forecast/Forecast';

function App() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState('');

  const apiKey = '8a072cff6e233424ff03e75712d51947';
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const getData = () => {
    axios.get(apiUrl)
    .then(response => {
      setData(response.data)
    })
  }

  return (
    <div className="container">

      {/* navbar */}
      <nav className="navbar">
        {/* notifications */}
        <Notifications data={data}/>

        {/* search */}
        <div className='navbar__form'>
          <FontAwesomeIcon className='navbar__icon' icon={faMagnifyingGlass} />
          <input 
            className='navbar__input'
            type="text"
            placeholder="search"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={getData}
          />
        </div>

        {/* dark mode */}
        <DarkMode />
      </nav>

      {/* forecast */}
      <main className='main'>
        <Forecast />
      </main>
    </div>
  )
}

export default App;
