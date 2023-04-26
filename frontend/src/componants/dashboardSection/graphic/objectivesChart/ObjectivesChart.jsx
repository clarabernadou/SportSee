import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./objectivesChart.css"

const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const CustomDot = ({ cx, cy, value, onMouseOver, onMouseOut }) => {
    const [show, setShow] = useState(true);
    return (
      <g>
        {show && <circle cx={cx} cy={cy} r={5} fill="#FFFFFF" onMouseOver={onMouseOver} onMouseOut={onMouseOut} />}
        {show && setShow(false)}
      </g>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{backgroundColor: "#FFFFFF" }}>
            <p style={{ color: '#000000', fontSize: '8px', textAlign: 'center', margin: '5px 3px'}}>
              {`${payload[0].value} ${payload[0].dataKey === 'sessionLength' ? 'min' : 'min'}`}
            </p>
        </div>
      );
    }
    return null;
};
  

export default function ObjectivesChart({ userAverageSessions }) {
    let sessionsArray = [];
  
    userAverageSessions?.map(session => {
        sessionsArray.push(session.sessionLength)
    })
  
    const maxSession = Math.max(...sessionsArray);
    const minSession = Math.min(...sessionsArray);

    console.log(userAverageSessions);
    console.log(maxSession, minSession);
    return (
        <div className='objectivesChartContainer'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={300} height={100} data={userAverageSessions}>
                <text 
                    x="5" 
                    y="15" 
                    textAnchor="start"
                    fontSize={15} 
                    fontWeight={500}
                    color='#FFFFFF'
                    opacity={0.5}
                >
                    <tspan x="5" dy="0">{`Durée moyenne des`}</tspan>
                    <tspan x="5" dy="20">{`sessions`}</tspan>
                </text>
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} yAxisId="right" dot={<CustomDot />} />
                    <XAxis tickFormatter={(day) => weekDays[day]} axisLine={false} tickLine={false} tick={{ fill: '#FFFFFF', opacity: '0.5' }} />
                    <YAxis domain={[minSession - 5, maxSession + 5]} yAxisId="right" hide={true} />
                    <Tooltip content={<CustomTooltip />} />
                </LineChart>
            </ResponsiveContainer>          
        </div>
      );  
}
    