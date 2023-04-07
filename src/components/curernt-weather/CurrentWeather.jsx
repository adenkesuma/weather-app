import './CurrentWeather.css';

export default function CurrentWeather({ data }) {
    return (
        <div>
            <p>{data.city}</p>
            <p>{data.weather[0].description}</p>
            <img src={`../../assets/icons/${data.weather[0].icon}.png`} alt="icon"/>
            <p>{Math.round(data.main.temp)}°</p>
            <p>Feels like: {data.main.feels_like}°</p>
            <p>Wind: {data.wind.deg} m/s</p>
            <p>Humidity: {data.main.humidity} %</p>
            <p>Pressure: {data.main.pressure} hPa</p>
        </div>
    )
}
