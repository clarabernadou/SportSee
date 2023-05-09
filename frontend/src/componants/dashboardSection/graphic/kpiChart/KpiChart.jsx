import React from 'react'; // Imports the React library
import "./kpiChart.css"; // Imports the styles

import { PieChart, Pie, Cell, Label } from 'recharts';

export default function KpiChartComponent({ userKpi }) {
  const percentage = Math.round(userKpi * 100); // Calculate percentage from userKpi value
  const data = [{ name: 'progress', value: percentage }, { name: 'rest', value: 100 - percentage }]; // Prepare data array for the Pie chart

  const COLORS = ['#FF0000', 'transparent']; // Define colors for the chart
  return (
    <div className='kpiChartContainer flex alignItemsCenter justifyContentCenter chartsBoxShadow'>
        <PieChart width={258} height={262}>
            
            {/* Add the "Score" text */}
            <text x="10" y="20" fontSize="18px" fill="#282D30">Score</text>

            {/* Add white part to remove gap between percentage completed and not completed */}
            <Pie
                data={data}
                cx={128}
                cy={131}
                innerRadius={100}
                outerRadius={115}
                startAngle={90}
                endAngle={450}
                paddingAngle={0}
                dataKey="value"
                isAnimationActive={false}
                stroke="none"
                fill='#FFFFFF'
            >
            </Pie>

            {/* Add red part for percentage completed and a transparent part for percentage not completed. */}
            <Pie
                data={data}
                cx={128}
                cy={131}
                innerRadius={100}
                outerRadius={115}
                startAngle={90}
                endAngle={450}
                paddingAngle={0}
                dataKey="value"
                isAnimationActive={false}
                stroke="none"
            >
            {data.map((entry, index) => (
                <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index]} 
                    cornerRadius={index === 0 ? "50%" : 0} 
                />
            ))}

            {/* Add a percentage completed indicator to the chart */}
            <Label
                textAnchor="middle"
                dominantBaseline= "ideographic"
                position="center"
                value={`${percentage}%`}
                fill='#282D30'
                fontSize={26}
                fontWeight={500}
            />
            <Label
                value={`de votre`}
                dominantBaseline= "ideographic"
                position="center"
                dy={30}
                fill='#74798C'
                fontSize={16}
                fontWeight={500}
            />
            <Label
                value={`objectif`}
                dominantBaseline= "ideographic"
                position="center"
                dy={55}
                fill='#74798C'
                fontSize={16}
                fontWeight={500}
            />
            </Pie>
        </PieChart>
    </div>
  );
}
