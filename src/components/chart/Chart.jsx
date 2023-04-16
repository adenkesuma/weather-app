import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";


export default function Chart({ data }) {
    const [forecastChart, setForecastChart] = useState(
        data.list.splice(0, 7).map((item) => {
            return (
                [ Math.round(item.main.feels_like), item.main.humidity ]
            )
        })
    );

    // const changeForecastChart = () => {
    //     setForecastChart(
    //         data.list.splice(0, 7).map((item) => {
    //             return [Math.round(item.main.feels_like), item.main.humidity];
    //         })
    //     );
    // }
    
    const dataObj = [
        {
        name: "Monday",  
        feels_like: forecastChart[0][0],
        humidity: forecastChart[0][1],
        },  
        {
        name: "Tuesday",  
        feels_like: forecastChart[1][0],
        humidity: forecastChart[1][1],
        },  
        {
        name: "Wednesday",  
        feels_like: forecastChart[2][0],
        humidity: forecastChart[2][1],
        },  
        {
        name: "Thursday",  
        feels_like: forecastChart[3][0],
        humidity: forecastChart[3][1],
        },  
        {
        name: "Friday",  
        feels_like: forecastChart[4][0],
        humidity: forecastChart[4][1],
        },  
        {
        name: "Saturday",  
        feels_like: forecastChart[5][0],
        humidity: forecastChart[5][1],
        },  
        {
        name: "Sunday",  
        feels_like: forecastChart[6][0],
        humidity: forecastChart[6][1],
        },  
    ];    
    

    return (
      <div className="chart">
        <h3 className="heading-3 right">Forecast Chart</h3>
        <ResponsiveContainer minWidth={280} max-width={1100} height={312}>
          <BarChart
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
        </ResponsiveContainer>
      </div>
    );
}
