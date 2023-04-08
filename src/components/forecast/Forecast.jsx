import './Forecast.css';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import image from '../../assets/icons/010d.png';
import { useState } from 'react';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek)
    );

    let currentTime = new Date();
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()

    return (
        <div className='forecast'>
            <div className="forecast-nav">
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
                </div>
            </div>

            <div>
                <Accordion className='accordion__flex' allowZeroExpanded>
                    {data.list.splice(0, 7).map((item, index) => (
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className='accordion__card'>
                                        <p className='accordion__day'>{forecastDays[index]}</p>
                                        <img className='image' src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="logo" />
                                        <p className='accordion__temp'>{Math.round(item.main.temp)}°</p>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className='panel'>
                                    <div className='panel__header'>
                                        <p className='panel__text'>{forecastDays[index]}</p>
                                        <p className='panel__text'>{`${hours}.${minutes}`}</p>
                                    </div>
                                    <div className='panel__content'>
                                            <div className='panel__layout'>
                                                <p className='panel__temp'>{Math.round(item.main.temp)}°</p>
                                                <img className='image' src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="icon weather"/>
                                            </div>
                                            <p className='panel__data'>Feels like: <strong>{item.main.feels_like}°</strong></p>
                                            <p className='panel__data'>Wind: <strong>{item.wind.deg}m/s</strong></p>
                                            <p className='panel__data'>Pressure: <strong>{item.main.pressure}hPa</strong></p>
                                            <p className='panel__data'>Humidity: <strong>{item.main.humidity}%</strong></p>
                                        </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default Forecast;
