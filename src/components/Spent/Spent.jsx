import React from "react";
import "./Spent.scss";

const Data = [
    {
        view: 32000,
        time: 140,
        day: "Mon",
        first: Math.floor(Math.random() * 100) + 1 + '%',
        second: Math.floor(Math.random() * 100) + 1 + '%'
    },
    {
        view: 32000,
        time: 140,
        day: "Tue",
        first: Math.floor(Math.random() * 100) + 1 + '%',
        second: Math.floor(Math.random() * 100) + 1 + '%'
    },
    {
        view: 32000,
        time: 140,
        day: "Wed",
        first: Math.floor(Math.random() * 100) + 1 + '%',
        second: Math.floor(Math.random() * 100) + 1 + '%'
    },
    {
        view: 32000,
        time: 140,
        day: "Thu",
        first: Math.floor(Math.random() * 100) + 1 + '%',
        second: Math.floor(Math.random() * 100) + 1 + '%'
    },
    {
        view: 32000,
        time: 140,
        day: "Fri",
        first: Math.floor(Math.random() * 100) + 1 + '%',
        second: Math.floor(Math.random() * 100) + 1 + '%'
    },
    {
        view: 32000,
        time: 140,
        day: "Sat",
        first: Math.floor(Math.random() * 100) + 1 + '%',
        second: Math.floor(Math.random() * 100) + 1 + '%'
    },
    {
        view: 32000,
        time: 140,
        day: "Sun",
        first: Math.floor(Math.random() * 100) + 1 + '%',
        second: Math.floor(Math.random() * 100) + 1 + '%'
    },
];

function Spent() {
    return (
        <div className="Spent">
            <span>Total hours spent</span>
            <div className="SpentChart">
            {Data.map((e, index) => {
                return (
                    <div className="Item" key={`spent-${index}`}>
                        <div className="Chart">
                            <span style={{background: '#efb34a', height: e.first}}></span>
                            <span style={{background: '#645883', height: e.second}}></span>
                        </div>
                        <span>{e.day}</span>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default Spent;
