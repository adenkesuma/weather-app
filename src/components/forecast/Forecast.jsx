import './Forecast.css';

const Forecast = () => {
    return (
        <div className="forecast">
            <ul className='forecast__unordered'>
                <li className='forecast__list'>
                    <a className='forecast__link' href="#">Today</a>
                </li>
                <li className='forecast__list'>
                    <a className='forecast__link' href="#">Tomorrow</a>
                </li>
                <li className='forecast__list'>
                    <a className='forecast__link' href="#">Next 7 days</a>
                </li>
            </ul>

            <div className='forecast__button-box'>
                <button className='forecast__button '>Forecast</button>
                <button className='forecast__button'>Air Quality</button>
            </div>
        </div>
    )
}

export default Forecast;
