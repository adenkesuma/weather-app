import React from "react";
import "./RandomPlace.css";

export default function RandomPlace({ shanghai, tokyo }) {
    const {name, sys, weather} = shanghai;
    const {nameT, sysT, weatherT} = tokyo;

    return (
        <div className="random-place">
            {shanghai && <h3 className="heading-3">Other large cities</h3>}
            {shanghai && (
            <div className="random-place__box">
                <p>
                {name} {shanghai && ","} {sys.country}
                </p>
                <p>{weather[0].description}</p>
                <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
                alt="icon"
                />
            </div>
            )}
            {tokyo && (
            <div className="random-place__box">
                <p>
                {tokyo.name} {tokyo && ","} {tokyo.timezone}
                </p>
                {/* <p>{data.weather[0].description}</p>
                <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="icon"
                /> */}
            </div>
            )}
        </div>
        );
}
