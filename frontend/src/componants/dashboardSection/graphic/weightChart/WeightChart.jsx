import React from 'react'; // Imports the React library
import "./weightChart.css" // Imports the styles

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// CustomTooltip component for showing the data when hovering over the chart
const CustomTooltip = ({ active, payload, label }) => {
  // If the cursor is hovering over a data point, render the tooltip
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <div style={{ width: 'fit-content', height: 'fit-content', backgroundColor: '#E60000', padding: '5px' }}>
          <p style={{ color: '#FFFFFF', fontSize: '14px', textAlign: 'center', margin: '15px 5px' }}>
            {`${payload[0].value} ${payload[0].dataKey === 'kilogram' ? 'kg' : 'Kcal'}`}
          </p>
          <p style={{ color: '#FFFFFF', fontSize: '14px', textAlign: 'center', margin: '15px 5px'}}>
            {`${payload[1].value} ${payload[1].dataKey === 'calories' ? 'Kcal' : 'kg'}`}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default function WeightChart({ userActivity }) {
  // Extracting the kilogram and calories data from the userActivity prop
  let kilogramArray = []; let caloriesArray = [];
  userActivity?.map(activity => {
    kilogramArray.push(activity.kilogram)
    caloriesArray.push(activity.calories)
  })

  // Calculating the maximum and minimum values for the y-axis domains
  const maxKilogram = Math.max(...kilogramArray); const minKilogram = Math.min(...kilogramArray);
  const maxCalories = Math.max(...caloriesArray); const minCalories = Math.min(...caloriesArray);

  return (
    <div className='weightChartContainer flex alignItemsCenter justifyContentCenter chartsBoxShadow'>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={userActivity} margin={0}>

          {/* Adding a title for the chart */}
          <text 
            x="5" 
            y="15" 
            textAnchor="start"
            fontSize={15} 
            fontWeight={500}
            color='#20253A'
          >
            Activité quotidienne
          </text>

          {/* Adding a grid to the chart */}
          <CartesianGrid vertical={0} strokeDasharray="3" stroke="#DEDEDE" />

          {/* Adding the x-axis with date labels */}
          <XAxis 
            dataKey="day" 
            tickFormatter={(tick) => new Date(tick).getDate()} 
            tick={{ fill: '#9B9EAC' }} 
            tickLine={{stroke: "none"}} 
          />

          {/* Adding the y-axis for kilogram data */}
          <YAxis 
            domain={[minKilogram - 1, maxKilogram + 1]} 
            orientation='right' 
            dataKey="kilogram" 
            tickFormatter={(tick) => Math.floor(tick)} interval={1}
            tick={{ fill: '#9B9EAC' }}
            tickLine={{stroke: "none"}}
          />
          
          {/* Adding the y-axis for calories data */}
          <YAxis domain={[minCalories - 50, maxCalories + 10]} yAxisId="right" hide={true} />

          {/* Adding the custom tooltip */}
          <Tooltip content={<CustomTooltip />} />

          {/* Adding a legend at the top right of the chart */}
          <Legend 
            align="right" 
            verticalAlign="top" 
            wrapperStyle={{ paddingBottom: 50, marginBottom: 30 }} 
            iconType="circle" 
            iconSize={7} 
            formatter={(value, entry, index) => <span style={{color: "#74798C", marginLeft: 10, marginRight: 30}}>{value}</span>}
            labelStyle={{ fontSize: 14, fontWeight: '500' }}
          />

          {/* Adding bars for kilograms and calories data */}
          <Bar dataKey="kilogram" name='Poids (kg)' fill="#282D30" barSize={7} radius={[4, 4, 0, 0]}  />
          <Bar dataKey="calories" name='Calories brûlées (kCal)' fill="#E60000" barSize={7} radius={[4, 4, 0, 0]} yAxisId="right" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
