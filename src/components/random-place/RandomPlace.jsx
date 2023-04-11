import React from "react";
import "./RandomPlace.css";

export default function RandomPlace({ shanghai, tokyo }) {
    console.log(shanghai)
    console.log(tokyo)
    return (
        <div className="map">
            <p>{shanghai.name}, {shanghai.timezone}</p>
            <p>{tokyo.name}, {shanghai.timezone}</p>
            {/* <p>{data.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="icon"/> */}
        </div>
        );
}
