import './Forecast.css';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek)
    );

    console.log(forecastDays)

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
                    <button className='forecast__button'>Air Quality</button>
                </div>
            </div>

            <div>
                <label htmlFor="">Daily</label>
                <Accordion allowZeroExpanded>
                    {data.list.splice(0, 7).map((item, index) => (
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div>
                                        <p>{item.main.temp}</p>
                                        <p>{forecastDays[index]}</p>
                                        {/* <img src={`../../assets/icons/${item.weather[0].icon}.png`} alt="logo" /> */}
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel></AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default Forecast;
