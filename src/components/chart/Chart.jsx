import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const data = [
    {
        name: "Monday",
        feels_like: 4000,
        humidity: 2400,
        amt: 2400,
    },
    {
        name: "Tuesday",
        feels_like: 3000,
        humidity: 1398,
        amt: 2210,
    },
    {
        name: "Wednesday",
        feels_like: 2000,
        humidity: 9800,
        amt: 2290,
    },
    {
        name: "Thursday",
        feels_like: 2780,
        humidity: 3908,
        amt: 2000,
    },
    {
        name: "Friday",
        feels_like: 1890,
        humidity: 4800,
        amt: 2181,
    },
    {
        name: "Saturday",
        feels_like: 2390,
        humidity: 3800,
        amt: 2500,
    },
    {
        name: "Sunday",
        feels_like: 3490,
        humidity: 4300,
        amt: 2100,
    },
];


export default function Chart() {

    return (
        <div className="chart">
          <h3 className="heading-3 right">Statistic Chart</h3>
          <BarChart
            width={800}
            height={240}
            data={data}
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
