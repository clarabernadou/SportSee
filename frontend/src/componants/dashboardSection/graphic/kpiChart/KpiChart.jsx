import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import "./kpiChart.css"

export default function KpiChartComponent({ userKpi }) {
  const percentage = Math.round(userKpi * 100);
  const data = [{ name: 'progress', value: percentage }, { name: 'rest', value: 100 - percentage }];
  const bar = [{ name: 'bar', value: 100 }]
  const COLORS = ['#FF0000', 'transparent'];
  
  return (
    <div className='kpiChartContainer'>
        <PieChart width={258} height={262}>
            <text x="10" y="20" fontSize="18px" fill="#282D30">Score</text>
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
