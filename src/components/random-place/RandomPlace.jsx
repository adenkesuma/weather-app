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
    const { name, sys, weather, main } = data;

    return (
        <div className="random-place__box">
            <div className="left-side">
              <p>
                {name} {data && ","} {sys.country}
              </p>
              <p>{weather[0].description}</p>
            </div>
            <div className="right-side">
              <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
                alt="icon"
              />
              <p>{Math.round(main.temp)}°</p>
            </div>
        </div>
    )
}

const Tokyo = ({ data }) => {
    const { name, sys, weather, main } = data;

    return (
      <div className="random-place__box">
        <div className="left-side">
          <p>
            {name} {data && ","} {sys.country}
          </p>
          <p>{weather[0].description}</p>
        </div>
        <div className="right-side">
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
            alt="icon"
          />
          <p>{Math.round(main.temp)}°</p>
        </div>
      </div>
    );
}