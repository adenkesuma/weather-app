import './CurrentWeather.css';

export default function CurrentWeather({ data }) {
    return (
        <div className='current-weather'>
            <h2>Current Weather</h2>
            <div>
                <div>
                    <p>{data.city}</p>
                    <p>{data.weather[0].description}</p>
                </div>
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icon"/>
            </div>
            <div className='current-weather__box'>
                <span>
                    <p>Feels like: {data.main.feels_like}°</p>
                    <p>Wind: {data.wind.deg} m/s</p>
                    <p>Humidity: {data.main.humidity} %</p>
                    <p>Pressure: {data.main.pressure} hPa</p>
                </span>
                <span>
                    <p className='current-weather__temp'>{Math.round(data.main.temp)}°</p>
                </span>
            </div>
        </div>
    )
}
