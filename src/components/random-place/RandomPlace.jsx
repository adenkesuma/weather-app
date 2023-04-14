import React from "react";
import "./RandomPlace.css";

export default function RandomPlace({ shanghai, tokyo }) {
    return (
      <div className="random-place">
        {shanghai && <h3 className="heading-3">Other large cities</h3>}
        <div className="random-place__layout">
          {shanghai && <Shanghai data={shanghai} />}
          {tokyo && <Tokyo data={tokyo} />}
        </div>
      </div>
    );
}


const Shanghai = ({ data }) => {
    const { name, sys, weather, main, wind } = data;

    return (
        <div className="random-place__box">
            <div className="left-side">
              <p className="left-side__paragraph">
                {name} {data && ","} {sys.country}
              </p>
              <p className="left-side__description">{weather[0].description}</p>
              <p className="left-side__description">Wind-deg: {wind.deg}°</p>
              <p className="left-side__description">Wind-speed: {wind.speed} km/h</p>
            </div>
            <div className="right-side">
              <img
                className="right-side__image"
                src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
                alt="icon"
              />
              <p className="right-side__temp">{Math.round(main.temp)}°</p>
            </div>
        </div>
    )
}

const Tokyo = ({ data }) => {
    const { name, sys, weather, main, wind } = data;

    return (
      <div className="random-place__box">
        <div className="left-side">
          <p className="left-side__paragraph">
            {name} {data && ","} {sys.country}
          </p>
          <p className="left-side__description">{weather[0].description}</p>
          <p className="left-side__description">Wind-deg: {wind.deg}°</p>
          <p className="left-side__description">Wind-speed: {wind.speed} km/h</p>
        </div>
        <div className="right-side">
          <img
            className="right-side__image"
            src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
            alt="icon"
          />
          <p className="right-side__temp">{Math.round(main.temp)}°</p>
        </div>
      </div>
    );
}