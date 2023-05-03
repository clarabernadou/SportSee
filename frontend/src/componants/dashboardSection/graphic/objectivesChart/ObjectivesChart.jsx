import React from 'react';
import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "./objectivesChart.css"

const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
          <p className='timeStyle'>
            {`${payload[0].value} ${payload[0].dataKey === 'sessionLength' ? 'min' : 'min'}`}
          </p>
          <div className="tooltipStyle"></div>
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
          <div className='daysContainer' style={{ display: 'flex', justifyContent: 'space-between', color: '#FFFFFF', fontSize: '12px' }}>
            {weekDays.map(day => (
              <text key={day}>{day}</text>
            ))}
          </div>
          <ResponsiveContainer>
            <LineChart data={userAverageSessions} margin={{ left: -21, right: -20 }} width="110%">
              <text 
                x="5" 
                y="15" 
                textAnchor="start"
                fontSize={15} 
                fontWeight={500}
                fill='#FFFFFF'
                opacity={0.5}
                style={{marginBottom: '20px'}}
              >
                <tspan x="5" dy="0">{`Durée moyenne des`}</tspan>
                <tspan x="5" dy="20">{`sessions`}</tspan>
              </text>
              <defs>
                <linearGradient id="gradient" x1="100%" y1="30%" x2="0%" y2="0%">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#ffffff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Line 
                stroke="url(#gradient)" 
                type="monotone" 
                dataKey="sessionLength" 
                strokeWidth={2} 
                yAxisId="right" 
                dot={false} 
                activeDot={{ r: 4, fill: '#FFFFFF', strokeOpacity: 0.5, strokeWidth: 8 }} 
                isAnimationActive={false} 
              />             
              <YAxis domain={[minSession - 5, maxSession + 10]} yAxisId="right" hide={true} />
              <Tooltip content={<CustomTooltip />} />
            </LineChart>
          </ResponsiveContainer>          
        </div>
      );  
}
    