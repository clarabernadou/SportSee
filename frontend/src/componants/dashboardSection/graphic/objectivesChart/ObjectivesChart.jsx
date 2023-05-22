import React from 'react'; // Imports the React library
import "./objectivesChart.css" // Imports the styles

import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']; // Array containing the abbreviated names of the days of the week

// CustomTooltip component for displaying the session length
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
  // Extracting the session lengths from the userAverageSessions prop
  let sessionsArray = [];
  userAverageSessions?.map(session => {
    sessionsArray.push(session.sessionLength)
  })
  
  // Calculating the maximum and minimum values for the y-axis domains
  const maxSession = Math.max(...sessionsArray); const minSession = Math.min(...sessionsArray);
  return (
    <div className='objectivesChartContainer flex alignItemsCenter justifyContentCenter chartsBoxShadow'>
      <div className='daysContainer' style={{ display: 'flex', justifyContent: 'space-between', color: '#FFFFFF', fontSize: '12px' }}>

        {/* Adding the abbreviated names of the days of the week */}
        {weekDays.map((day, index) => (
          <span key={index}>{day}</span>
        ))}

      </div>
      <ResponsiveContainer>

        {/* Adding a line chart using the userAverageSessions data */}
        <LineChart 
          data={userAverageSessions} 
          margin={{ left: -21, right: -20 }} 
          width="110%"
        > 
          {/* Adding a title to the chart */}
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
            <tspan x="5" dy="0" className='tspanFontSize'>{`Durée moyenne des`}</tspan>
            <tspan x="5" dy="20" className='tspanFontSize'>{`sessions`}</tspan>
          </text>

          {/* Define a gradient for the line */}
          <defs>
            <linearGradient id="gradient" x1="100%" y1="30%" x2="0%" y2="0%">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0}/>
            </linearGradient>
          </defs>

          {/* Adding the line of the user's average session length */}
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

          {/* Adding the y-axis with the session length range */}
          <YAxis domain={[minSession - 5, maxSession + 10]} yAxisId="right" hide={true} />

          {/* Adding the custom tooltip */}
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>          
    </div>
  );  
}
    