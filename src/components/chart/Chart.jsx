import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";


export default function Chart({ data }) {
    const [weather, setWeather] = useState(
        data.list.splice(0, 7).map((item) => {
            return (
                [ Math.round(item.main.feels_like), item.main.humidity ]
            )
        })
    );

    console.log(weather)
    
    const dataObj = [
        {
        name: "Monday",  
        feels_like: weather[0][0],
        humidity: weather[0][1],
        },  
        {
        name: "Tuesday",  
        feels_like: weather[1][0],
        humidity: weather[1][1],
        },  
        {
        name: "Wednesday",  
        feels_like: weather[2][0],
        humidity: weather[2][1],
        },  
        {
        name: "Thursday",  
        feels_like: weather[3][0],
        humidity: weather[3][1],
        },  
        {
        name: "Friday",  
        feels_like: weather[4][0],
        humidity: weather[4][1],
        },  
        {
        name: "Saturday",  
        feels_like: weather[5][0],
        humidity: weather[5][1],
        },  
        {
        name: "Sunday",  
        feels_like: weather[6][0],
        humidity: weather[6][1],
        },  
    ];    
    

    return (
        <div className="chart">
            <h3 className="heading-3 right">Statistic Chart</h3>
            <BarChart
                width={800}
                height={290}
                data={dataObj}
                margin={{
                top: 5,
                right: 0,
                left: 20,
                bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="feels_like" fill="#0E8388" />
                <Bar dataKey="humidity" fill="var(--font-color)" /> 
            </BarChart>
        </div>
    );
}
