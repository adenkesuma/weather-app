import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Notifications from './components/notifications/Notifications';

function App() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState();

  const apiKey = '8a072cff6e233424ff03e75712d51947';
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const getData = () => {
    axios.get(apiUrl)
    .then(response => {
      setData(response.data)
      console.log(data)
    })
  }

  return (
    <div className="App">
      <nav className="navbar">
        <Notifications />
        <input 
          className='navbar__input'
          type="text"
          placeholder="search"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={getData}
        />

        {/* dark mode */}
      </nav>
    </div>
  )
}

export default App;
