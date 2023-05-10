import React from 'react'; // Imports the React library
import { useMediaQuery } from 'react-responsive';
import "./kpiChart.css"; // Imports the styles

import { PieChart, Pie, Cell, Label } from 'recharts';

export default function KpiChartComponent({ userKpi }) {
  const percentage = Math.round(userKpi * 100); // Calculate percentage from userKpi value
  const data = [{ name: 'progress', value: percentage }, { name: 'rest', value: 100 - percentage }]; // Prepare data array for the Pie chart

  const COLORS = ['#FF0000', 'transparent']; // Define colors for the chart

  const isSmallScreen = useMediaQuery({ query: '(max-width: 1024px)' });
  return (
    <div className='kpiChartContainer flex alignItemsCenter justifyContentCenter chartsBoxShadow'>
        <PieChart width={258} height={262}>
            
            {/* Add the "Score" text */}
            <text x={isSmallScreen ? 42 : 10} y={isSmallScreen ? 57 : 20} fontSize={isSmallScreen ? 13 : 18} fill="#282D30">Score</text>

            {/* Add white part to remove gap between percentage completed and not completed */}
            <Pie
                data={data}
                cx={isSmallScreen ? 120 : 128}
                cy={isSmallScreen ? 125 : 131}
                innerRadius={isSmallScreen ? 70 : 100}
                outerRadius={isSmallScreen ? 77.5 : 115}
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
                cx={isSmallScreen ? 120 : 128}
                cy={isSmallScreen ? 125 : 131}
                innerRadius={isSmallScreen ? 70 : 100}
                outerRadius={isSmallScreen ? 77.5 : 115}
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
                fontSize={isSmallScreen ? 18 : 26}
                fontWeight={500}
            />
            <Label
                value={`de votre`}
                dominantBaseline= "ideographic"
                position="center"
                dy={isSmallScreen ? 20 : 30}
                fill='#74798C'
                fontSize={isSmallScreen ? 12 : 16}
                fontWeight={500}
            />
            <Label
                value={`objectif`}
                dominantBaseline= "ideographic"
                position="center"
                dy={isSmallScreen ? 35 : 55}
                fill='#74798C'
                fontSize={isSmallScreen ? 12 : 16}
                fontWeight={500}
            />
            </Pie>
        </PieChart>
    </div>
  );
}
