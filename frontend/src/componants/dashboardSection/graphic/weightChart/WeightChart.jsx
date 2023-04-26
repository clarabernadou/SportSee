import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./weightChart.css"

export default function WeightChart({ userActivity }) {
  let kilogramArray = [];
  let caloriesArray = [];

  userActivity?.map(activity => {
    kilogramArray.push(activity.kilogram)
    caloriesArray.push(activity.calories)
  })

  const maxKilogram = Math.max(...kilogramArray);
  const minKilogram = Math.min(...kilogramArray);

  const maxCalories = Math.max(...caloriesArray);
  const minCalories = Math.min(...caloriesArray);

  return (
    <div className='weightChartContainer'>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={userActivity}
          margin={0}
        >
          <CartesianGrid vertical={0} strokeDasharray="3" stroke="#DEDEDE" />
          <XAxis 
            dataKey="day" 
            tickFormatter={(tick) => new Date(tick).getDate()} 
            tick={{ fill: '#9B9EAC' }} 
            tickLine={{stroke: "none"}} 
          />
          <YAxis 
            domain={[minKilogram - 1, maxKilogram + 1]} 
            orientation='right' 
            dataKey="kilogram" 
            tickFormatter={(tick) => Math.floor(tick)} interval={1}
            tick={{ fill: '#9B9EAC' }}
            tickLine={{stroke: "none"}}
          />
          <YAxis 
            domain={[minCalories - 50, maxCalories + 10]} yAxisId="right" hide={true} />
          <Tooltip />
          <Legend 
            align="right" 
            verticalAlign="top" 
            wrapperStyle={{ paddingBottom: 50 }}  
            iconType="circle" iconSize={7} 
            label={{ fill: '#74798C', fontSize: 14, fontWeight: '500', labelGap: 10 }}
          />
          <Bar dataKey="kilogram" name='Poids (kg)' fill="#282D30" barSize={7} radius={[4, 4, 0, 0]}  />
          <Bar dataKey="calories" name='Calories brûlées (kCal)' fill="#E60000" barSize={7} radius={[4, 4, 0, 0]} yAxisId="right" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
